import { prisma } from '@/lib/db'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const events = await prisma.event.findMany({
    where: { approved: true },
    select: { slug: true, updatedAt: true },
  })

  const eventUrls = events.map((event) => ({
    url: `https://cdmxartweek.com/events/${event.slug}`,
    lastModified: event.updatedAt,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // Daily schedule pages for SEO
  const dailyScheduleUrls = [
    'february-2',
    'february-3',
    'february-4',
    'february-5',
    'february-6',
    'february-7',
    'february-8',
    'february-9',
  ].map((date) => ({
    url: `https://cdmxartweek.com/schedule/${date}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://cdmxartweek.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://cdmxartweek.com/schedule',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://cdmxartweek.com/parties',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: 'https://cdmxartweek.com/guide/art-week-2026',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...dailyScheduleUrls,
    {
      url: 'https://cdmxartweek.com/submit',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://cdmxartweek.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...eventUrls,
  ]
}
