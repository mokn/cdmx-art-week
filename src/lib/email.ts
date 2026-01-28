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
    return new Date(d).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
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
    from: 'CDMX Art Week <hello@cdmxartweek.com>',
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

export async function sendBatchEmails(emails: string[], subject: string, html: string) {
  // Resend batch API - send to multiple recipients efficiently
  const batchSize = 100;
  const results = [];

  for (let i = 0; i < emails.length; i += batchSize) {
    const batch = emails.slice(i, i + batchSize);
    const { data, error } = await resend.batch.send(
      batch.map(email => ({
        from: 'CDMX Art Week <hello@cdmxartweek.com>',
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
