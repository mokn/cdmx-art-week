"use client";

interface Event {
  name: string;
  date: Date | string;
  endDate?: Date | string | null;
  venue: string;
  address: string;
  description?: string;
}

interface AddToCalendarProps {
  events: Event[];
  itineraryName?: string;
}

function formatICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function escapeICS(text: string): string {
  return text.replace(/[\\;,\n]/g, (match) => {
    if (match === "\n") return "\\n";
    return "\\" + match;
  });
}

export default function AddToCalendar({ events, itineraryName }: AddToCalendarProps) {
  const handleDownload = () => {
    const icsEvents = events.map((event) => {
      const startDate = new Date(event.date);
      const endDate = event.endDate ? new Date(event.endDate) : new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // Default 2 hours

      const description = [
        event.description || "",
        "",
        `Venue: ${event.venue}`,
        `Address: ${event.address}`,
        "",
        "Added from CDMX Art Week - cdmxartweek.com",
      ].join("\\n");

      return [
        "BEGIN:VEVENT",
        `DTSTART:${formatICSDate(startDate)}`,
        `DTEND:${formatICSDate(endDate)}`,
        `SUMMARY:${escapeICS(event.name)} (CDMX Art Week)`,
        `LOCATION:${escapeICS(event.venue + ", " + event.address)}`,
        `DESCRIPTION:${escapeICS(description)}`,
        `UID:${Date.now()}-${Math.random().toString(36).substr(2, 9)}@cdmxartweek.com`,
        "END:VEVENT",
      ].join("\r\n");
    });

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//CDMX Art Week//cdmxartweek.com//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      `X-WR-CALNAME:${itineraryName || "CDMX Art Week 2026"}`,
      ...icsEvents,
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${(itineraryName || "cdmx-art-week").replace(/[^a-z0-9]/gi, "-").toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition border border-white/20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      Add to Calendar
    </button>
  );
}
