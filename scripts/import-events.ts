/**
 * Bulk import events from a JSON file
 *
 * Usage:
 *   1. Create events.json with your events
 *   2. Run: npx tsx scripts/import-events.ts
 *
 * Or set API_URL to import directly to production:
 *   API_URL=https://cdmxartweek.com npx tsx scripts/import-events.ts
 */

import { readFileSync, existsSync } from "fs";

const API_URL = process.env.API_URL || "http://localhost:3000";

interface EventInput {
  name: string;
  description: string;
  host: string;
  date: string; // ISO string or "2026-02-05 19:00"
  endDate?: string;
  venue: string;
  address: string;
  neighborhood?: string;
  price?: string;
  ticketUrl?: string;
  category: string; // gallery, exhibition, party, performance, talk, workshop, fair
  imageUrl?: string;
  featured?: boolean;
}

async function importEvent(event: EventInput): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/api/admin/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...event,
        approved: true,
      }),
    });

    if (res.ok) {
      console.log(`✓ Added: ${event.name}`);
      return true;
    } else {
      const error = await res.json();
      console.log(`✗ Failed: ${event.name} - ${error.error}`);
      return false;
    }
  } catch (error) {
    console.log(`✗ Error: ${event.name} - ${error}`);
    return false;
  }
}

async function main() {
  const eventsFile = "scripts/events.json";

  if (!existsSync(eventsFile)) {
    console.log(`Create ${eventsFile} with your events. Example:\n`);
    console.log(JSON.stringify([
      {
        name: "Gallery Opening: New Works",
        description: "Join us for the opening of our latest exhibition featuring emerging Mexican artists.",
        host: "Galería Example",
        date: "2026-02-05T19:00:00",
        venue: "Galería Example",
        address: "Calle Ejemplo 123, Roma Norte",
        neighborhood: "Roma Norte",
        price: "Free",
        category: "gallery",
        featured: false
      }
    ], null, 2));
    return;
  }

  const events: EventInput[] = JSON.parse(readFileSync(eventsFile, "utf-8"));

  console.log(`Importing ${events.length} events to ${API_URL}...\n`);

  let success = 0;
  let failed = 0;

  for (const event of events) {
    const ok = await importEvent(event);
    if (ok) success++;
    else failed++;

    // Small delay to avoid overwhelming the API
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`\nDone! ${success} imported, ${failed} failed.`);
}

main().catch(console.error);
