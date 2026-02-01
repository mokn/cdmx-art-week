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
  date: string; // ISO string in Mexico City local time, e.g. "2026-02-05T19:00:00"
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

/**
 * Convert a local Mexico City time to UTC
 * Mexico City is UTC-6 (standard time, which applies during Art Week in February)
 */
function convertMexicoCityToUTC(dateStr: string): string {
  // If already has Z or timezone offset, return as-is
  if (dateStr.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(dateStr)) {
    return dateStr;
  }

  // Parse the date string and add 6 hours to convert from Mexico City to UTC
  const date = new Date(dateStr);
  const utcDate = new Date(date.getTime() + 6 * 60 * 60 * 1000);
  return utcDate.toISOString();
}

async function importEvent(event: EventInput): Promise<boolean> {
  try {
    // Convert dates from Mexico City local time to UTC
    const eventWithUTC = {
      ...event,
      date: convertMexicoCityToUTC(event.date),
      endDate: event.endDate ? convertMexicoCityToUTC(event.endDate) : undefined,
      approved: true,
    };

    const res = await fetch(`${API_URL}/api/admin/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventWithUTC),
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
