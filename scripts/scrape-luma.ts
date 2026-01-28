/**
 * Scrape events from Luma for CDMX Art Week
 *
 * Run with: npx tsx scripts/scrape-luma.ts
 */

const LUMA_API = "https://api.lu.ma/public/v2/event/search";

interface LumaEvent {
  event: {
    api_id: string;
    name: string;
    description: string;
    start_at: string;
    end_at: string;
    timezone: string;
    url: string;
    cover_url: string;
    geo_address_json?: {
      city?: string;
      place_id?: string;
      address?: string;
      description?: string;
    };
  };
}

interface ScrapedEvent {
  name: string;
  description: string;
  host: string;
  date: string;
  endDate: string | null;
  venue: string;
  address: string;
  neighborhood: string;
  price: string;
  ticketUrl: string;
  category: string;
  imageUrl: string;
}

async function searchLuma(query: string, location: string): Promise<LumaEvent[]> {
  const params = new URLSearchParams({
    query,
    location,
    pagination_limit: "50",
  });

  try {
    const res = await fetch(`${LUMA_API}?${params}`, {
      headers: {
        "Accept": "application/json",
      },
    });

    if (!res.ok) {
      console.error(`Luma API error: ${res.status}`);
      return [];
    }

    const data = await res.json();
    return data.entries || [];
  } catch (error) {
    console.error("Failed to fetch from Luma:", error);
    return [];
  }
}

function categorizeEvent(name: string, description: string): string {
  const text = `${name} ${description}`.toLowerCase();

  if (text.includes("party") || text.includes("fiesta") || text.includes("dj") || text.includes("afterparty")) {
    return "party";
  }
  if (text.includes("performance") || text.includes("live")) {
    return "performance";
  }
  if (text.includes("talk") || text.includes("panel") || text.includes("conversation") || text.includes("discussion")) {
    return "talk";
  }
  if (text.includes("workshop") || text.includes("taller")) {
    return "workshop";
  }
  if (text.includes("fair") || text.includes("feria") || text.includes("zona maco") || text.includes("material")) {
    return "fair";
  }
  if (text.includes("opening") || text.includes("inauguración") || text.includes("gallery") || text.includes("galería")) {
    return "gallery";
  }
  if (text.includes("exhibition") || text.includes("exposición") || text.includes("exhibit") || text.includes("muestra")) {
    return "exhibition";
  }

  return "exhibition";
}

function extractNeighborhood(address: string): string {
  const neighborhoods = [
    "Roma Norte", "Roma Sur", "Roma", "Condesa", "Hipódromo", "Juárez",
    "Cuauhtémoc", "Centro", "Centro Histórico", "San Rafael", "Santa María la Ribera",
    "Polanco", "San Miguel Chapultepec", "Anzures", "Coyoacán", "Del Valle",
    "Nápoles", "San Ángel", "Tlalpan", "Santa Fe", "Xochimilco"
  ];

  for (const hood of neighborhoods) {
    if (address.toLowerCase().includes(hood.toLowerCase())) {
      return hood;
    }
  }

  return "";
}

async function scrapeEvents(): Promise<ScrapedEvent[]> {
  const events: ScrapedEvent[] = [];

  // Search queries to find art events
  const queries = [
    "art week mexico city",
    "zona maco",
    "material art fair",
    "gallery opening cdmx",
    "art exhibition mexico city",
    "arte cdmx",
    "galería mexico",
    "salon acme",
  ];

  console.log("Searching Luma for CDMX art events...\n");

  for (const query of queries) {
    console.log(`Searching: "${query}"`);
    const results = await searchLuma(query, "Mexico City");

    for (const item of results) {
      const e = item.event;

      // Skip if no location info
      if (!e.geo_address_json?.address) continue;

      // Filter to February 2026 (art week timeframe)
      const eventDate = new Date(e.start_at);
      if (eventDate.getMonth() !== 1 || eventDate.getFullYear() !== 2026) {
        // For testing, also include 2025 events
        if (eventDate.getFullYear() < 2025) continue;
      }

      const event: ScrapedEvent = {
        name: e.name,
        description: e.description || "",
        host: "Via Luma", // Could extract from description or URL
        date: e.start_at,
        endDate: e.end_at || null,
        venue: e.geo_address_json.description || e.geo_address_json.address || "",
        address: e.geo_address_json.address || "",
        neighborhood: extractNeighborhood(e.geo_address_json.address || ""),
        price: "", // Luma doesn't expose pricing in search
        ticketUrl: e.url,
        category: categorizeEvent(e.name, e.description || ""),
        imageUrl: e.cover_url || "",
      };

      // Avoid duplicates
      if (!events.find(ev => ev.name === event.name && ev.date === event.date)) {
        events.push(event);
        console.log(`  Found: ${event.name}`);
      }
    }

    // Rate limit
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  return events;
}

async function main() {
  const events = await scrapeEvents();

  console.log(`\n\nFound ${events.length} events total.\n`);

  if (events.length === 0) {
    console.log("No events found. This could mean:");
    console.log("- Luma API requires authentication");
    console.log("- No matching events in the search results");
    console.log("- Art week events haven't been posted yet");
    console.log("\nTry adding events manually or check these sources:");
    console.log("- https://www.zonamaco.com/en/program");
    console.log("- https://material-fair.com");
    console.log("- https://salonacme.com");
    return;
  }

  // Output as JSON for import
  console.log("Events JSON (copy this to import):\n");
  console.log(JSON.stringify(events, null, 2));

  // Also create a curl command to add each event
  console.log("\n\n--- API Commands to add events ---\n");

  for (const event of events.slice(0, 10)) { // First 10
    console.log(`# ${event.name}`);
    console.log(`curl -X POST https://cdmxartweek.com/api/admin/events \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(event)}'`);
    console.log("");
  }
}

main().catch(console.error);
