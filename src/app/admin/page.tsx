"use client";

import { useState, useEffect } from "react";

interface Event {
  id: string;
  name: string;
  host: string;
  date: string;
  venue: string;
  category: string;
  approved: boolean;
  featured: boolean;
}

interface Submission {
  id: string;
  name: string;
  submitterEmail: string;
  host: string;
  date: string;
  venue: string;
  category: string;
  status: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"add" | "events" | "submissions">("add");
  const [events, setEvents] = useState<Event[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    description: "",
    host: "",
    date: "",
    time: "19:00",
    endDate: "",
    endTime: "",
    venue: "",
    address: "",
    neighborhood: "",
    price: "",
    ticketUrl: "",
    category: "gallery",
    imageUrl: "",
    featured: false,
  });

  const checkAuth = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === "artweek2026") {
      setAuthenticated(true);
      loadData();
    } else {
      setMessage("Invalid password");
    }
  };

  const loadData = async () => {
    try {
      const [eventsRes, submissionsRes] = await Promise.all([
        fetch("/api/admin/events"),
        fetch("/api/admin/submissions"),
      ]);
      if (eventsRes.ok) setEvents(await eventsRes.json());
      if (submissionsRes.ok) setSubmissions(await submissionsRes.json());
    } catch (e) {
      console.error("Failed to load data", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const dateTime = new Date(`${form.date}T${form.time}`);
    const endDateTime = form.endDate && form.endTime
      ? new Date(`${form.endDate}T${form.endTime}`)
      : null;

    try {
      const res = await fetch("/api/admin/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          date: dateTime.toISOString(),
          endDate: endDateTime?.toISOString() || null,
          approved: true,
        }),
      });

      if (res.ok) {
        setMessage("Event added successfully!");
        setForm({
          name: "",
          description: "",
          host: "",
          date: "",
          time: "19:00",
          endDate: "",
          endTime: "",
          venue: "",
          address: "",
          neighborhood: "",
          price: "",
          ticketUrl: "",
          category: "gallery",
          imageUrl: "",
          featured: false,
        });
        loadData();
      } else {
        const data = await res.json();
        setMessage(data.error || "Failed to add event");
      }
    } catch {
      setMessage("Failed to add event");
    }
    setLoading(false);
  };

  const toggleFeatured = async (id: string, featured: boolean) => {
    await fetch("/api/admin/events", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, featured: !featured }),
    });
    loadData();
  };

  const deleteEvent = async (id: string) => {
    if (!confirm("Delete this event?")) return;
    await fetch("/api/admin/events", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadData();
  };

  const approveSubmission = async (submission: Submission) => {
    await fetch("/api/admin/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: submission.id, action: "approve" }),
    });
    loadData();
  };

  const rejectSubmission = async (id: string) => {
    await fetch("/api/admin/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action: "reject" }),
    });
    loadData();
  };

  if (!authenticated) {
    return (
      <main className="max-w-md mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold mb-6">Admin Access</h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && checkAuth()}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        />
        <button
          onClick={checkAuth}
          className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg"
        >
          Enter
        </button>
        {message && <p className="mt-4 text-red-600">{message}</p>}
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(["add", "events", "submissions"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === tab
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab === "add" ? "Add Event" : tab === "events" ? `Events (${events.length})` : `Submissions (${submissions.filter(s => s.status === "pending").length})`}
          </button>
        ))}
      </div>

      {message && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
          {message}
        </div>
      )}

      {/* Add Event Form */}
      {activeTab === "add" && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Event Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Host/Organizer *</label>
              <input
                type="text"
                required
                value={form.host}
                onChange={(e) => setForm({ ...form, host: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <textarea
              required
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Time *</label>
              <input
                type="time"
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                value={form.endDate}
                onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
              <input
                type="time"
                value={form.endTime}
                onChange={(e) => setForm({ ...form, endTime: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Venue *</label>
              <input
                type="text"
                required
                value={form.venue}
                onChange={(e) => setForm({ ...form, venue: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
              <input
                type="text"
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Neighborhood</label>
              <input
                type="text"
                value={form.neighborhood}
                onChange={(e) => setForm({ ...form, neighborhood: e.target.value })}
                placeholder="Roma, Condesa..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="gallery">Gallery</option>
                <option value="exhibition">Exhibition</option>
                <option value="party">Party</option>
                <option value="performance">Performance</option>
                <option value="talk">Talk</option>
                <option value="workshop">Workshop</option>
                <option value="fair">Art Fair</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <input
                type="text"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="Free, $25, etc."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ticket URL</label>
              <input
                type="url"
                value={form.ticketUrl}
                onChange={(e) => setForm({ ...form, ticketUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="url"
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              className="w-4 h-4"
            />
            <label htmlFor="featured" className="text-sm font-medium text-gray-700">
              Featured Event (highlighted on homepage)
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Event"}
          </button>
        </form>
      )}

      {/* Events List */}
      {activeTab === "events" && (
        <div className="space-y-3">
          {events.length === 0 ? (
            <p className="text-gray-600">No events yet.</p>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className={`p-4 border rounded-lg flex justify-between items-center ${
                  event.featured ? "border-yellow-400 bg-yellow-50" : "border-gray-200"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{event.name}</span>
                    {event.featured && (
                      <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded">
                        FEATURED
                      </span>
                    )}
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {event.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {event.host} • {event.venue} • {new Date(event.date).toLocaleDateString("en-US", { timeZone: "America/Mexico_City" })}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleFeatured(event.id, event.featured)}
                    className={`px-3 py-1 text-sm rounded ${
                      event.featured
                        ? "bg-gray-200 text-gray-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {event.featured ? "Unfeature" : "Feature"}
                  </button>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Submissions */}
      {activeTab === "submissions" && (
        <div className="space-y-3">
          {submissions.filter(s => s.status === "pending").length === 0 ? (
            <p className="text-gray-600">No pending submissions.</p>
          ) : (
            submissions
              .filter((s) => s.status === "pending")
              .map((submission) => (
                <div
                  key={submission.id}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{submission.name}</p>
                      <p className="text-sm text-gray-600">
                        {submission.host} • {submission.venue} •{" "}
                        {new Date(submission.date).toLocaleDateString("en-US", { timeZone: "America/Mexico_City" })}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Submitted by: {submission.submitterEmail}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => approveSubmission(submission)}
                        className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => rejectSubmission(submission.id)}
                        className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      )}
    </main>
  );
}
