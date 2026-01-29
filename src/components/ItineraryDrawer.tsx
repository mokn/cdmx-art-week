"use client";

import { useEffect, useState } from "react";
import { useItinerary } from "@/context/ItineraryContext";
import Link from "next/link";

interface Event {
  id: string;
  name: string;
  date: string;
  venue: string;
  category: string;
  slug: string;
}

interface ItineraryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMOJI_OPTIONS = ["🎨", "🎉", "✨", "🔥", "💃", "🌮", "🦋", "🌺", "🎭", "🍸", "🌙", "💎"];

export default function ItineraryDrawer({ isOpen, onClose }: ItineraryDrawerProps) {
  const { eventIds, removeEvent, clearItinerary } = useItinerary();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [error, setError] = useState("");
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  // Fetch events when drawer opens
  useEffect(() => {
    if (isOpen && eventIds.length > 0) {
      setLoading(true);
      fetch("/api/itinerary/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventIds }),
      })
        .then((res) => res.json())
        .then((data) => {
          setEvents(data.events || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [isOpen, eventIds]);

  const handleSave = async () => {
    setError("");

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!emoji) {
      setError("Please pick an emoji");
      return;
    }
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/itinerary/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventIds, email, name: name.trim(), emoji }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else if (data.slug) {
        setShareUrl(`${window.location.origin}/itinerary/${data.slug}`);
        setShowEmailForm(false);
      }
    } catch (err) {
      console.error("Failed to save:", err);
      setError("Something went wrong. Please try again.");
    }
    setSaving(false);
  };

  const handleCopy = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatTime = (dateStr: string) => {
    return new Date(dateStr).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Mexico_City",
    });
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "America/Mexico_City",
    });
  };

  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    const dateKey = formatDate(event.date);
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">My Itinerary</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {loading ? (
            <div className="text-center py-8 text-gray-600">Loading...</div>
          ) : events.length === 0 ? (
            <div className="text-center py-8 text-gray-600">
              No events in your itinerary yet.
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedEvents).map(([date, dayEvents]) => (
                <div key={date}>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                    {date}
                  </h3>
                  <div className="space-y-2">
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg group"
                      >
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/events/${event.slug}`}
                            className="font-medium text-gray-900 hover:text-blue-600 block truncate"
                            onClick={onClose}
                          >
                            {event.name}
                          </Link>
                          <p className="text-sm text-gray-600">
                            {formatTime(event.date)} at {event.venue}
                          </p>
                        </div>
                        <button
                          onClick={() => removeEvent(event.id)}
                          className="p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
                          title="Remove from itinerary"
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {events.length > 0 && (
          <div className="p-4 border-t space-y-3">
            {shareUrl ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Your itinerary is ready to share:</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={shareUrl}
                    readOnly
                    className="flex-1 px-3 py-2 text-sm border rounded-lg bg-gray-50"
                  />
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            ) : showEmailForm ? (
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-900">Save your itinerary</p>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
                )}

                {/* Name input */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3 py-2 text-sm border rounded-lg"
                />

                {/* Emoji picker */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">Pick an emoji:</p>
                  <div className="flex flex-wrap gap-2">
                    {EMOJI_OPTIONS.map((e) => (
                      <button
                        key={e}
                        type="button"
                        onClick={() => setEmoji(e)}
                        className={`w-10 h-10 text-xl rounded-lg border-2 transition ${
                          emoji === e
                            ? "border-gray-900 bg-gray-100"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 text-sm border rounded-lg"
                />

                <p className="text-xs text-gray-500">
                  We'll email you a link to your itinerary and subscribe you to Art Week updates.
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex-1 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
                  >
                    {saving ? "Saving..." : "Save & Get Link"}
                  </button>
                  <button
                    onClick={() => {
                      setShowEmailForm(false);
                      setError("");
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => setShowEmailForm(true)}
                  className="flex-1 px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
                >
                  Save & Share
                </button>
                <button
                  onClick={clearItinerary}
                  className="px-4 py-3 border border-gray-300 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
