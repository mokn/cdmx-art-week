import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface Event {
  name: string;
  host: string;
  venue: string;
  neighborhood: string | null;
  date: Date;
  price: string | null;
  category: string;
  slug: string;
  featured: boolean;
}

interface DailyEmailProps {
  date: string; // "February 4"
  dayOfWeek: string; // "Tuesday"
  events: Event[];
  previewText?: string;
}

export function generateDailyEmailHtml({ date, dayOfWeek, events, previewText }: DailyEmailProps): string {
  const artEvents = events.filter(e => e.category !== 'party');
  const parties = events.filter(e => e.category === 'party');

  const featuredEvents = events.filter(e => e.featured).slice(0, 3);

  const formatTime = (d: Date) => {
    return new Date(d).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Mexico_City' });
  };

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CDMX Art Week - ${dayOfWeek}, ${date}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <!-- Preview text -->
  <div style="display: none; max-height: 0; overflow: hidden;">
    ${previewText || `${events.length} events happening today during CDMX Art Week`}
  </div>

  <!-- Main container -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">CDMX Art Week</h1>
              <p style="color: #9ca3af; margin: 10px 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">
                ${dayOfWeek}, ${date}
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background-color: white; padding: 30px;">

              <!-- Intro -->
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                Good morning! Here's what's happening today across Mexico City's art scene.
              </p>

              <!-- Stats bar -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #f9fafb; padding: 15px; border-radius: 8px; text-align: center;">
                    <span style="font-size: 24px; font-weight: bold; color: #1f2937;">${events.length}</span>
                    <span style="display: block; font-size: 12px; color: #6b7280; text-transform: uppercase;">Events</span>
                  </td>
                  <td width="10"></td>
                  <td style="background-color: #f9fafb; padding: 15px; border-radius: 8px; text-align: center;">
                    <span style="font-size: 24px; font-weight: bold; color: #1f2937;">${artEvents.length}</span>
                    <span style="display: block; font-size: 12px; color: #6b7280; text-transform: uppercase;">Art</span>
                  </td>
                  <td width="10"></td>
                  <td style="background-color: #7c3aed; padding: 15px; border-radius: 8px; text-align: center;">
                    <span style="font-size: 24px; font-weight: bold; color: white;">${parties.length}</span>
                    <span style="display: block; font-size: 12px; color: #e9d5ff; text-transform: uppercase;">Parties</span>
                  </td>
                </tr>
              </table>

              ${featuredEvents.length > 0 ? `
              <!-- Featured Events -->
              <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 15px; padding-bottom: 10px; border-bottom: 2px solid #fbbf24;">
                ⭐ Don't Miss Today
              </h2>
              ${featuredEvents.map(event => `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td style="background-color: #fffbeb; border-left: 4px solid #fbbf24; padding: 15px; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0 0 5px; font-weight: bold; color: #1f2937;">${event.name}</p>
                    <p style="margin: 0; font-size: 14px; color: #6b7280;">
                      ${formatTime(event.date)} · ${event.venue}${event.neighborhood ? `, ${event.neighborhood}` : ''}
                    </p>
                  </td>
                </tr>
              </table>
              `).join('')}
              ` : ''}

              ${parties.length > 0 ? `
              <!-- Tonight's Parties -->
              <h2 style="color: #1f2937; font-size: 18px; margin: 30px 0 15px; padding-bottom: 10px; border-bottom: 2px solid #7c3aed;">
                🎉 Tonight's Parties
              </h2>
              ${parties.map(party => `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td style="background-color: #f5f3ff; border-left: 4px solid #7c3aed; padding: 15px; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0 0 5px; font-weight: bold; color: #1f2937;">${party.name}</p>
                    <p style="margin: 0; font-size: 14px; color: #6b7280;">
                      ${formatTime(party.date)} · ${party.venue}${party.neighborhood ? `, ${party.neighborhood}` : ''} · ${party.price || 'TBA'}
                    </p>
                  </td>
                </tr>
              </table>
              `).join('')}
              ` : ''}

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="https://cdmxartweek.com/schedule" style="display: inline-block; background-color: #1f2937; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600;">
                      View Full Schedule →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-radius: 0 0 12px 12px;">
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                You're receiving this because you signed up for CDMX Art Week updates.
              </p>
              <p style="margin: 10px 0 0; font-size: 12px; color: #9ca3af;">
                <a href="https://cdmxartweek.com" style="color: #6b7280;">cdmxartweek.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function sendDailyEmail(to: string[], subject: string, html: string) {
  const { data, error } = await resend.emails.send({
    from: 'CDMX Art Week <michael@cdmxartweek.com>',
    to,
    subject,
    html,
  });

  if (error) {
    console.error('Failed to send email:', error);
    throw error;
  }

  return data;
}

interface CountdownEmailProps {
  daysUntil: number;
  totalEvents: number;
  totalParties: number;
  previewText?: string;
}

export function generateCountdownEmailHtml({ daysUntil, totalEvents, totalParties, previewText }: CountdownEmailProps): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Art Week is Almost Here</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: Georgia, 'Times New Roman', serif;">
  <!-- Preview text -->
  <div style="display: none; max-height: 0; overflow: hidden;">
    ${previewText || `${daysUntil} days. ${totalEvents} events. Here's the honest guide.`}
  </div>

  <!-- Main container -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: #1a1a1a; padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: normal; letter-spacing: 1px;">CDMX Art Week</h1>
              <p style="color: #888; margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 3px;">
                February 4–9, 2026
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background-color: white; padding: 45px 35px;">

              <!-- Opening -->
              <p style="color: #1a1a1a; font-size: 32px; line-height: 1.2; margin: 0 0 25px; font-weight: normal;">
                ${daysUntil} days.
              </p>

              <p style="color: #444; font-size: 17px; line-height: 1.7; margin: 0 0 20px;">
                We've tracked <strong>${totalEvents} events</strong> so far—including <strong>${totalParties} parties</strong>. This email is the honest version: what's actually worth your time, what's overhyped, and where to eat when you need a break from the chaos.
              </p>

              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">

              <!-- The Fairs -->
              <h2 style="color: #1a1a1a; font-size: 18px; margin: 0 0 15px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                The fairs (an honest take)
              </h2>

              <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 12px;">
                <strong style="color: #1a1a1a;">Zona Maco</strong> — The main event. 200+ galleries, serious collectors, blue-chip everything. Here's the thing: it's massive, exhausting, and—one critic put it well—"there's little to distinguish it from any other art fair." Also inexplicably located between a military base and a horse track. Go opening day if you're buying. Otherwise, don't kill yourself.
              </p>

              <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 12px;">
                <strong style="color: #1a1a1a;">Material Art Fair</strong> — This is where the interesting stuff happens. Smaller, weirder, the work actually surprises you. If you only do one fair and aren't dropping six figures, this is it.
              </p>

              <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
                <strong style="color: #1a1a1a;">Salón ACME</strong> — Beautiful hacienda-like space in Juárez, independent artist selections. Gets crowded fast. Arrive early.
              </p>

              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">

              <!-- The Parties -->
              <h2 style="color: #1a1a1a; font-size: 18px; margin: 0 0 15px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                The parties
              </h2>

              <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 15px;">
                Let's be real: for a lot of people, this is the point.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td style="padding: 12px 15px; background-color: #f5f3ff; border-left: 3px solid #7c3aed; border-radius: 0 6px 6px 0;">
                    <p style="margin: 0; font-weight: bold; color: #1a1a1a; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">Mayan Warrior — Friday, Feb 7</p>
                    <p style="margin: 4px 0 0; font-size: 13px; color: #666;">The Burning Man sound camp. Their art car burned down—this is the fundraiser for the new one. Parque Bicentenario.</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td style="padding: 12px 15px; background-color: #f5f3ff; border-left: 3px solid #7c3aed; border-radius: 0 6px 6px 0;">
                    <p style="margin: 0; font-weight: bold; color: #1a1a1a; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">Giegling — Saturday, Feb 8</p>
                    <p style="margin: 4px 0 0; font-size: 13px; color: #666;">The legendary German collective. If you know, you know.</p>
                  </td>
                </tr>
              </table>

              <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
                <strong>Looloo</strong> has the sound system. <strong>Fünk</strong> is queer-friendly and underground. <strong>Departamento</strong> has the rooftop. Parties don't peak until Thursday–Saturday. Tuesday everyone's jet-lagged.
              </p>

              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">

              <!-- Where to Eat -->
              <h2 style="color: #1a1a1a; font-size: 18px; margin: 0 0 15px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                Where to eat
              </h2>

              <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 12px;">
                <strong style="color: #1a1a1a;">Roma Norte:</strong> Contramar (seafood, get the tuna tostadas), Expendio de Maíz (Michelin-starred, no menu, cash only), ISMO (fondue + hidden speakeasy with DJs)
              </p>

              <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 12px;">
                <strong style="color: #1a1a1a;">Juárez:</strong> Makan (Singaporean, incredible), Taller de Ostiones (oysters, absurdly fresh), Kaito del Valle (Japanese speakeasy—entrance through a vending machine)
              </p>

              <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
                <strong style="color: #1a1a1a;">Condesa:</strong> Fugu Sushi (8 seats, best omakase in the city—book ahead)
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="https://cdmxartweek.com/guide/art-week-2026" style="display: inline-block; background: #1a1a1a; color: white; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 500; font-size: 15px;">
                      Read the Full Guide
                    </a>
                  </td>
                </tr>
              </table>

              <!-- What's Next -->
              <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0; text-align: center;">
                Starting Tuesday, Feb 4th, we'll send daily guides with that day's events. Curated picks, not a calendar dump.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #fafafa; padding: 25px 35px; border-radius: 0 0 12px 12px;">
              <p style="margin: 0; font-size: 13px; color: #888; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; text-align: center;">
                See you in Mexico City.
              </p>
              <p style="margin: 15px 0 0; font-size: 12px; color: #aaa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; text-align: center;">
                <a href="https://cdmxartweek.com" style="color: #888; text-decoration: none;">cdmxartweek.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function sendBatchEmails(emails: string[], subject: string, html: string) {
  // Resend batch API - send to multiple recipients efficiently
  const batchSize = 100;
  const results = [];

  for (let i = 0; i < emails.length; i += batchSize) {
    const batch = emails.slice(i, i + batchSize);
    const { data, error } = await resend.batch.send(
      batch.map(email => ({
        from: 'CDMX Art Week <michael@cdmxartweek.com>',
        to: email,
        subject,
        html,
      }))
    );

    if (error) {
      console.error('Batch send error:', error);
    } else {
      results.push(data);
    }
  }

  return results;
}
