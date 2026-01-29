"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ItineraryContextType {
  eventIds: string[];
  addEvent: (eventId: string) => void;
  removeEvent: (eventId: string) => void;
  hasEvent: (eventId: string) => boolean;
  clearItinerary: () => void;
  count: number;
}

const ItineraryContext = createContext<ItineraryContextType | undefined>(undefined);

const STORAGE_KEY = "cdmx-art-week-itinerary";

export function ItineraryProvider({ children }: { children: ReactNode }) {
  const [eventIds, setEventIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setEventIds(parsed);
        }
      } catch {
        // Invalid JSON, ignore
      }
    }
    setLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(eventIds));
    }
  }, [eventIds, loaded]);

  const addEvent = (eventId: string) => {
    setEventIds((prev) => {
      if (prev.includes(eventId)) return prev;
      return [...prev, eventId];
    });
  };

  const removeEvent = (eventId: string) => {
    setEventIds((prev) => prev.filter((id) => id !== eventId));
  };

  const hasEvent = (eventId: string) => eventIds.includes(eventId);

  const clearItinerary = () => setEventIds([]);

  return (
    <ItineraryContext.Provider
      value={{
        eventIds,
        addEvent,
        removeEvent,
        hasEvent,
        clearItinerary,
        count: eventIds.length,
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
}

export function useItinerary() {
  const context = useContext(ItineraryContext);
  if (context === undefined) {
    throw new Error("useItinerary must be used within an ItineraryProvider");
  }
  return context;
}
