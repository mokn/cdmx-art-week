/**
 * Fetch images for events from their websites
 * Run with: npx tsx scripts/fetch-images.ts
 */

const API_URL = process.env.API_URL || "https://cdmxartweek.com";

interface Event {
  id: string;
  name: string;
  imageUrl: string | null;
  ticketUrl: string | null;
}

// Known image URLs for major events/venues
const IMAGE_MAP: Record<string, string> = {
  "Zona Maco": "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800&q=80", // Art fair image
  "Material Art Fair": "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&q=80", // Gallery image
  "Salón ACME": "https://images.unsplash.com/photo-1605429523419-d828acb941d9?w=800&q=80", // Art exhibition
  "Kurimanzutto": "https://images.unsplash.com/photo-1577720643272-265f09367456?w=800&q=80", // Modern gallery
  "OMR": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80", // Art gallery
  "Museo Tamayo": "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80", // Museum
  "Museo Jumex": "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80", // Contemporary museum
  "Labor": "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80", // Art space
  "Proyectos Monclova": "https://images.unsplash.com/photo-1545989253-02cc26577f88?w=800&q=80", // Gallery interior
  "Casa Luis Barragán": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", // Architecture
  "Contramar": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", // Restaurant
  "Roma Norte": "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80", // Street scene
  "Opening Party": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", // Party
  "Artist Talk": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80", // Talk/panel
  "Performance": "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80", // Performance art
};

async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; CDMXArtWeek/1.0)",
      },
    });

    if (!res.ok) return null;

    const html = await res.text();

    // Look for og:image
    const ogMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
    if (ogMatch) return ogMatch[1];

    // Look for twitter:image
    const twitterMatch = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i);
    if (twitterMatch) return twitterMatch[1];

    return null;
  } catch {
    return null;
  }
}

function findImageForEvent(event: Event): string | null {
  // Check if event name contains any of our known venues/events
  for (const [key, imageUrl] of Object.entries(IMAGE_MAP)) {
    if (event.name.toLowerCase().includes(key.toLowerCase())) {
      return imageUrl;
    }
  }

  // Check for category-based images based on name
  const name = event.name.toLowerCase();
  if (name.includes("party") || name.includes("fiesta")) {
    return IMAGE_MAP["Opening Party"];
  }
  if (name.includes("talk") || name.includes("panel") || name.includes("discussion")) {
    return IMAGE_MAP["Artist Talk"];
  }
  if (name.includes("performance")) {
    return IMAGE_MAP["Performance"];
  }

  return null;
}

async function updateEventImage(id: string, imageUrl: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/api/admin/events`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, imageUrl }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function main() {
  // Fetch all events
  const res = await fetch(`${API_URL}/api/admin/events`);
  const events: Event[] = await res.json();

  console.log(`Found ${events.length} events\n`);

  let updated = 0;

  for (const event of events) {
    if (event.imageUrl) {
      console.log(`⏭ Skip (has image): ${event.name}`);
      continue;
    }

    // Try to find an image
    let imageUrl: string | null = null;

    // First, try our known images
    imageUrl = findImageForEvent(event);

    // If we have a ticket URL, try to fetch OG image
    if (!imageUrl && event.ticketUrl) {
      console.log(`  Fetching OG image from ${event.ticketUrl}...`);
      imageUrl = await fetchOgImage(event.ticketUrl);
    }

    if (imageUrl) {
      const ok = await updateEventImage(event.id, imageUrl);
      if (ok) {
        console.log(`✓ Updated: ${event.name}`);
        updated++;
      } else {
        console.log(`✗ Failed to update: ${event.name}`);
      }
    } else {
      console.log(`⚠ No image found: ${event.name}`);
    }
  }

  console.log(`\nDone! Updated ${updated} events with images.`);
}

main().catch(console.error);
