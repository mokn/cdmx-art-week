"use client";

import { useState } from "react";
import Link from "next/link";

interface Event {
  id: string;
  name: string;
  slug: string;
  host: string;
  date: Date;
  venue: string;
  neighborhood: string | null;
  category: string;
  price: string | null;
  featured: boolean;
}

interface ScheduleFilterProps {
  events: Event[];
}

type FilterType = "all" | "art" | "parties";

const ART_CATEGORIES = ["gallery", "exhibition", "fair", "talk", "workshop", "performance"];
const PARTY_CATEGORIES = ["party"];

export default function ScheduleFilter({ events }: ScheduleFilterProps) {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    if (filter === "art") return ART_CATEGORIES.includes(event.category);
    if (filter === "parties") return PARTY_CATEGORIES.includes(event.category);
    return true;
  });

  // Group events by date
  const groupEventsByDate = (evts: Event[]) => {
    const grouped: Record<string, Event[]> = {};
    for (const event of evts) {
      const dateKey = new Date(event.date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      if (!grouped[dateKey]) grouped[dateKey] = [];
      grouped[dateKey].push(event);
    }
    return grouped;
  };

  const groupedEvents = groupEventsByDate(filteredEvents);
  const dates = Object.keys(groupedEvents);

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "party":
        return "bg-purple-100 text-purple-700";
      case "exhibition":
        return "bg-blue-100 text-blue-700";
      case "gallery":
        return "bg-gray-100 text-gray-700";
      case "performance":
        return "bg-red-100 text-red-700";
      case "talk":
        return "bg-green-100 text-green-700";
      case "workshop":
        return "bg-yellow-100 text-yellow-700";
      case "fair":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const artCount = events.filter((e) => ART_CATEGORIES.includes(e.category)).length;
  const partyCount = events.filter((e) => PARTY_CATEGORIES.includes(e.category)).length;

  return (
    <>
      {/* Filter Tabs */}
      <div className="mb-8">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-lg w-fit">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md font-medium transition ${
              filter === "all"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All Events ({events.length})
          </button>
          <button
            onClick={() => setFilter("art")}
            className={`px-4 py-2 rounded-md font-medium transition ${
              filter === "art"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Art ({artCount})
          </button>
          <button
            onClick={() => setFilter("parties")}
            className={`px-4 py-2 rounded-md font-medium transition ${
              filter === "parties"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-purple-600 hover:text-purple-700"
            }`}
          >
            Parties ({partyCount})
          </button>
        </div>
      </div>

      {/* Quick nav for dates */}
      {dates.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {dates.map((date) => (
            <a
              key={date}
              href={`#${date.replace(/\s/g, "-").toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition"
            >
              {date.split(",")[0]}
            </a>
          ))}
        </div>
      )}

      {filteredEvents.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl">
          <p className="text-gray-600 text-lg mb-4">No events found for this filter.</p>
          <button
            onClick={() => setFilter("all")}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Show All Events
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {dates.map((date) => (
            <section key={date} id={date.replace(/\s/g, "-").toLowerCase()}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 sticky top-16 bg-white py-2 border-b border-gray-200 z-10">
                {date}
                <span className="text-base font-normal text-gray-500 ml-2">
                  ({groupedEvents[date].length} {groupedEvents[date].length === 1 ? "event" : "events"})
                </span>
              </h2>
              <div className="space-y-3">
                {groupedEvents[date].map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.slug}`}
                    className={`block p-4 rounded-lg border hover:shadow-md transition ${
                      event.featured
                        ? "border-yellow-400 bg-yellow-50"
                        : event.category === "party"
                        ? "border-purple-200 bg-purple-50/30"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      {/* Time */}
                      <div className="sm:w-24 flex-shrink-0">
                        <span className="text-lg font-semibold text-gray-900">
                          {formatTime(event.date)}
                        </span>
                      </div>

                      {/* Event details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {event.featured && (
                            <span className="text-xs font-bold text-yellow-700 bg-yellow-200 px-2 py-0.5 rounded">
                              FEATURED
                            </span>
                          )}
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded ${getCategoryColor(
                              event.category
                            )}`}
                          >
                            {event.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 truncate">{event.name}</h3>
                        <p className="text-sm text-gray-600">
                          {event.host} • {event.venue}
                          {event.neighborhood && `, ${event.neighborhood}`}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="sm:w-24 flex-shrink-0 text-right">
                        <span className="font-medium text-gray-900">{event.price || "Free"}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Legend */}
      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-3">Event Types</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { cat: "fair", label: "Art Fair" },
            { cat: "gallery", label: "Gallery" },
            { cat: "exhibition", label: "Exhibition" },
            { cat: "party", label: "Party" },
            { cat: "performance", label: "Performance" },
            { cat: "talk", label: "Talk" },
            { cat: "workshop", label: "Workshop" },
          ].map(({ cat, label }) => (
            <span
              key={cat}
              className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(cat)}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
