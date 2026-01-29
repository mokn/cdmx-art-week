"use client";

import { useItinerary } from "@/context/ItineraryContext";

interface AddToItineraryProps {
  eventId: string;
  size?: "sm" | "md";
}

export default function AddToItinerary({ eventId, size = "md" }: AddToItineraryProps) {
  const { addEvent, removeEvent, hasEvent } = useItinerary();
  const isAdded = hasEvent(eventId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAdded) {
      removeEvent(eventId);
    } else {
      addEvent(eventId);
    }
  };

  if (size === "sm") {
    return (
      <button
        onClick={handleClick}
        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
          isAdded
            ? "bg-emerald-500 text-white"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {isAdded ? "Added ✓" : "+ Itinerary"}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
        isAdded
          ? "bg-emerald-500 text-white hover:bg-emerald-600"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
    >
      {isAdded ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Added to Itinerary
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add to Itinerary
        </>
      )}
    </button>
  );
}
