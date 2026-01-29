"use client";

import { useState } from "react";
import { useItinerary } from "@/context/ItineraryContext";
import ItineraryDrawer from "./ItineraryDrawer";

export default function NavItineraryLink() {
  const { count } = useItinerary();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center gap-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <span>Itinerary</span>
        {count > 0 && (
          <span className="bg-gray-900 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
            {count}
          </span>
        )}
      </button>

      <ItineraryDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
