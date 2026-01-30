"use client";

import { useState } from "react";
import Link from "next/link";
import AddToItinerary from "./AddToItinerary";

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

const CATEGORY_CONFIG: Record<string, { label: string; color: string; activeColor: string }> = {
  all: { label: "All", color: "bg-gray-100 text-gray-700", activeColor: "bg-gray-900 text-white" },
  party: { label: "Parties", color: "bg-purple-100 text-purple-700", activeColor: "bg-purple-600 text-white" },
  exhibition: { label: "Exhibitions", color: "bg-blue-100 text-blue-700", activeColor: "bg-blue-600 text-white" },
  opening: { label: "Openings", color: "bg-emerald-100 text-emerald-700", activeColor: "bg-emerald-600 text-white" },
  fair: { label: "Fairs", color: "bg-indigo-100 text-indigo-700", activeColor: "bg-indigo-600 text-white" },
  experience: { label: "Experiences", color: "bg-orange-100 text-orange-700", activeColor: "bg-orange-500 text-white" },
  gallery: { label: "Gallery", color: "bg-gray-100 text-gray-700", activeColor: "bg-gray-700 text-white" },
  performance: { label: "Performance", color: "bg-red-100 text-red-700", activeColor: "bg-red-600 text-white" },
  talk: { label: "Talks", color: "bg-green-100 text-green-700", activeColor: "bg-green-600 text-white" },
};

export default function ScheduleFilter({ events }: ScheduleFilterProps) {
  const [filter, setFilter] = useState<string>("all");

  // Get counts for each category
  const categoryCounts = events.reduce((acc, event) => {
    acc[event.category] = (acc[event.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Filter to categories that have events, sorted by count
  const activeCategories = Object.keys(categoryCounts)
    .filter(cat => CATEGORY_CONFIG[cat])
    .sort((a, b) => categoryCounts[b] - categoryCounts[a]);

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    return event.category === filter;
  });

  // Group events by date
  const groupEventsByDate = (evts: Event[]) => {
    const grouped: Record<string, Event[]> = {};
    for (const event of evts) {
      const dateKey = new Date(event.date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        timeZone: "America/Mexico_City",
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
      timeZone: "America/Mexico_City",
    });
  };

  const getCategoryColor = (category: string) => {
    return CATEGORY_CONFIG[category]?.color || "bg-gray-100 text-gray-700";
  };

  return (
    <>
      {/* Filter Pills */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {/* All filter */}
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full font-medium text-sm transition ${
              filter === "all"
                ? CATEGORY_CONFIG.all.activeColor
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All ({events.length})
          </button>

          {/* Category filters */}
          {activeCategories.map((cat) => {
            const config = CATEGORY_CONFIG[cat];
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                  isActive ? config.activeColor : `${config.color} hover:opacity-80`
                }`}
              >
                {config.label} ({categoryCounts[cat]})
              </button>
            );
          })}
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

                      {/* Price & Add Button */}
                      <div className="flex items-center gap-3 sm:w-32 flex-shrink-0 justify-end">
                        <span className="font-medium text-gray-900">{event.price || "Free"}</span>
                        <AddToItinerary eventId={event.id} size="sm" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
