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
        className={`px-2 py-1 rounded text-xs font-medium transition-all ${
          isAdded
            ? "bg-green-500 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        {isAdded ? "Added" : "+ Add"}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
        isAdded
          ? "bg-green-500 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
          Added
        </>
      ) : (
        <>
          <span className="text-base leading-none">+</span>
          Add
        </>
      )}
    </button>
  );
}
