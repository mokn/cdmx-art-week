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

  const sizeClasses = size === "sm"
    ? "w-7 h-7 text-sm"
    : "w-9 h-9 text-lg";

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses} rounded-full border-2 flex items-center justify-center transition-all ${
        isAdded
          ? "bg-green-500 border-green-500 text-white"
          : "border-gray-300 text-gray-400 hover:border-gray-900 hover:text-gray-900"
      }`}
      title={isAdded ? "Remove from itinerary" : "Add to itinerary"}
    >
      {isAdded ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={size === "sm" ? "h-4 w-4" : "h-5 w-5"}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <span>+</span>
      )}
    </button>
  );
}
