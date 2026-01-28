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
  <title>CDMX Art Week - ${daysUntil} Days Away!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <!-- Preview text -->
  <div style="display: none; max-height: 0; overflow: hidden;">
    ${previewText || `Art Week starts in ${daysUntil} days! ${totalEvents} events across Mexico City.`}
  </div>

  <!-- Main container -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%); padding: 50px 30px; text-align: center; border-radius: 12px 12px 0 0;">
              <p style="color: #e9d5ff; margin: 0 0 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 3px;">
                February 4-9, 2026
              </p>
              <h1 style="color: white; margin: 0; font-size: 36px; font-weight: bold;">CDMX Art Week</h1>
              <div style="margin-top: 25px; display: inline-block; background: rgba(255,255,255,0.15); padding: 20px 40px; border-radius: 12px;">
                <span style="font-size: 64px; font-weight: bold; color: white; line-height: 1;">${daysUntil}</span>
                <span style="display: block; font-size: 14px; color: #e9d5ff; text-transform: uppercase; letter-spacing: 2px; margin-top: 5px;">Days to go</span>
              </div>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background-color: white; padding: 40px 30px;">

              <p style="color: #374151; font-size: 18px; line-height: 1.6; margin: 0 0 25px; text-align: center;">
                Mexico City's biggest week for contemporary art is almost here.
              </p>

              <!-- Stats -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #f9fafb; padding: 25px; border-radius: 12px; text-align: center;" width="48%">
                    <span style="font-size: 48px; font-weight: bold; color: #1f2937;">${totalEvents}</span>
                    <span style="display: block; font-size: 14px; color: #6b7280; text-transform: uppercase; margin-top: 5px;">Events</span>
                  </td>
                  <td width="4%"></td>
                  <td style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); padding: 25px; border-radius: 12px; text-align: center;" width="48%">
                    <span style="font-size: 48px; font-weight: bold; color: white;">${totalParties}</span>
                    <span style="display: block; font-size: 14px; color: #e9d5ff; text-transform: uppercase; margin-top: 5px;">Parties</span>
                  </td>
                </tr>
              </table>

              <!-- What to Expect -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 30px 0 20px; text-align: center;">
                What to Expect
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 15px; border-left: 4px solid #3b82f6; background-color: #eff6ff; border-radius: 0 8px 8px 0; margin-bottom: 10px;">
                    <p style="margin: 0; font-weight: bold; color: #1f2937;">Zona Maco</p>
                    <p style="margin: 5px 0 0; font-size: 14px; color: #6b7280;">Latin America's largest art fair with 200+ galleries</p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 10px;">
                <tr>
                  <td style="padding: 15px; border-left: 4px solid #10b981; background-color: #ecfdf5; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0; font-weight: bold; color: #1f2937;">Gallery Openings</p>
                    <p style="margin: 5px 0 0; font-size: 14px; color: #6b7280;">Roma, Condesa & San Miguel Chapultepec galleries</p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 10px;">
                <tr>
                  <td style="padding: 15px; border-left: 4px solid #7c3aed; background-color: #f5f3ff; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0; font-weight: bold; color: #1f2937;">Legendary Parties</p>
                    <p style="margin: 5px 0 0; font-size: 14px; color: #6b7280;">Mayan Warrior, Giegling, and more at CDMX's best venues</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 35px;">
                <tr>
                  <td align="center">
                    <a href="https://cdmxartweek.com/schedule" style="display: inline-block; background: linear-gradient(135deg, #1f2937 0%, #111827 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Explore the Full Schedule
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 15px;">
                    <a href="https://cdmxartweek.com/parties" style="color: #7c3aed; text-decoration: none; font-weight: 500;">
                      View All Parties →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 25px 30px; text-align: center; border-radius: 0 0 12px 12px;">
              <p style="margin: 0; font-size: 13px; color: #6b7280;">
                Starting Tuesday, you'll receive daily guides with that day's events.
              </p>
              <p style="margin: 15px 0 0; font-size: 12px; color: #9ca3af;">
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
