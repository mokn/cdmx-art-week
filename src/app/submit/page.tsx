'use client'

import { useState } from 'react'

const categories = [
  { value: 'gallery', label: 'Gallery Opening' },
  { value: 'exhibition', label: 'Exhibition' },
  { value: 'party', label: 'Party / Nightlife' },
  { value: 'performance', label: 'Performance' },
  { value: 'talk', label: 'Talk / Panel' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'fair', label: 'Art Fair' },
  { value: 'other', label: 'Other' },
]

const neighborhoods = [
  'Roma Norte',
  'Roma Sur',
  'Condesa',
  'Juárez',
  'Centro Histórico',
  'Polanco',
  'San Rafael',
  'Santa María la Ribera',
  'Coyoacán',
  'San Ángel',
  'Other',
]

export default function SubmitPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      submitterEmail: formData.get('submitterEmail'),
      submitterName: formData.get('submitterName'),
      name: formData.get('name'),
      description: formData.get('description'),
      host: formData.get('host'),
      date: formData.get('date'),
      venue: formData.get('venue'),
      address: formData.get('address'),
      neighborhood: formData.get('neighborhood'),
      price: formData.get('price'),
      ticketUrl: formData.get('ticketUrl'),
      category: formData.get('category'),
      imageUrl: formData.get('imageUrl'),
    }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit')
      }

      setStatus('success')
      setMessage('Thanks for submitting! We\'ll review your event and add it shortly.')
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  if (status === 'success') {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Event Submitted!</h1>
          <p className="text-gray-600 mb-8">{message}</p>
          <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Events
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Your Event</h1>
      <p className="text-gray-600 mb-8">
        Get your event featured in our Art Week guide. Free basic listings, or contact us for featured placement.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Your Info */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Your Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email *
              </label>
              <input
                type="email"
                name="submitterEmail"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="submitterName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Event Info */}
        <div className="space-y-4">
          <h2 className="font-semibold text-gray-900">Event Details</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Host / Organizer *
            </label>
            <input
              type="text"
              name="host"
              required
              placeholder="Gallery name, collective, or organizer"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              name="description"
              required
              rows={4}
              placeholder="Tell people about your event..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                name="category"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select...</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date & Time *
              </label>
              <input
                type="datetime-local"
                name="date"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Venue Name *
            </label>
            <input
              type="text"
              name="venue"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address *
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="Street address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Neighborhood
              </label>
              <select
                name="neighborhood"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select...</option>
                {neighborhoods.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Free, $25, $25-50, etc."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ticket URL
              </label>
              <input
                type="url"
                name="ticketUrl"
                placeholder="https://..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              placeholder="https://..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Direct link to an image (optional)</p>
          </div>
        </div>

        {status === 'error' && (
          <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg">
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Event'}
        </button>

        <p className="text-sm text-gray-500 text-center">
          Want featured placement? Email us at <a href="mailto:hello@cdmxartweek.com" className="text-blue-600">hello@cdmxartweek.com</a>
        </p>
      </form>
    </main>
  )
}
