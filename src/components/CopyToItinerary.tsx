"use client";

import { useState } from "react";
import { useItinerary } from "@/context/ItineraryContext";

interface CopyToItineraryProps {
  eventIds: string[];
}

export default function CopyToItinerary({ eventIds }: CopyToItineraryProps) {
  const { addEvent, eventIds: myEventIds } = useItinerary();
  const [copied, setCopied] = useState(false);

  // Check how many events are already in user's itinerary
  const existingCount = eventIds.filter((id) => myEventIds.includes(id)).length;
  const allCopied = existingCount === eventIds.length;

  const handleCopy = () => {
    eventIds.forEach((id) => addEvent(id));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (allCopied) {
    return (
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Already in your itinerary
      </div>
    );
  }

  return (
    <button
      onClick={handleCopy}
      disabled={copied}
      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition disabled:opacity-75"
    >
      {copied ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Added to your itinerary!
        </>
      ) : (
        <>
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
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Copy to my itinerary
          {existingCount > 0 && (
            <span className="text-sm text-gray-500">
              ({eventIds.length - existingCount} new)
            </span>
          )}
        </>
      )}
    </button>
  );
}
