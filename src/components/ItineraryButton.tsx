"use client";

import { useState } from "react";
import { useItinerary } from "@/context/ItineraryContext";
import ItineraryDrawer from "./ItineraryDrawer";

export default function ItineraryButton() {
  const { count } = useItinerary();
  const [isOpen, setIsOpen] = useState(false);

  if (count === 0) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-900 text-white px-5 py-3 rounded-full shadow-lg hover:bg-gray-800 transition flex items-center gap-2 z-40"
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <span className="font-medium">My Itinerary</span>
        <span className="bg-white text-gray-900 text-sm font-bold px-2 py-0.5 rounded-full">
          {count}
        </span>
      </button>

      <ItineraryDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
