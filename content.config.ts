import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const siteSchema = z.object({
  sideLabel: z.string(),
  hero: z.object({
    eyebrow: z.string(),
    titleLine1: z.string(),
    titleLine2: z.string(),
    tagHtml: z.string(),
    primaryCta: z.string(),
    ghostCta: z.string(),
    ribbonTag: z.string(),
    ribbonItems: z.array(z.string())
  }),
  marquee: z.array(z.string()),
  about: z.object({
    eyebrow: z.string(),
    title: z.string(),
    sub: z.string(),
    paragraphs: z.array(z.string()),
    stats: z.array(z.object({
      num: z.string(),
      label: z.string()
    }))
  }),
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    sub: z.string(),
    infoTitle: z.string(),
    infoBlurb: z.string(),
    channels: z.array(z.object({
      label: z.string(),
      value: z.string()
    })),
    subjects: z.array(z.string()),
    socials: z.array(z.object({
      label: z.string(),
      href: z.string(),
      title: z.string()
    })),
    footerNote: z.string()
  })
})

const eventsSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  sub: z.string(),
  archiveLabel: z.string(),
  items: z.array(z.object({
    monthLabel: z.string(),
    day: z.string(),
    venue: z.string(),
    city: z.string(),
    meta: z.string(),
    price: z.string(),
    tag: z.string().optional(),
    tagKind: z.enum(['featured', 'soldout']).optional(),
    soldOut: z.boolean().optional(),
    href: z.string().optional()
  }))
})

const musicSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  sub: z.string(),
  items: z.array(z.object({
    title: z.string(),
    kind: z.string(),
    length: z.string(),
    year: z.string().optional(),
    featured: z.boolean().optional(),
    badge: z.string().optional(),
    thumb: z.string().optional(),
    thumbPosition: z.string().optional(),
    href: z.string().optional()
  }))
})

const membersSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  sub: z.string(),
  items: z.array(z.object({
    number: z.string(),
    stageName: z.string(),
    aka: z.string(),
    role: z.string(),
    photo: z.string().optional()
  }))
})

const sponsorsSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  sub: z.string(),
  cards: z.array(z.object({
    iconStamp: z.string(),
    kicker: z.string(),
    heading: z.string(),
    blurb: z.string(),
    bullets: z.array(z.string()),
    ctaLabel: z.string(),
    ctaHref: z.string(),
    ctaStyle: z.enum(['primary', 'ghost'])
  }))
})

export default defineContentConfig({
  collections: {
    // English (default)
    site_en: defineCollection({ type: 'data', source: 'en/site.json', schema: siteSchema }),
    events_en: defineCollection({ type: 'data', source: 'en/events.json', schema: eventsSchema }),
    music_en: defineCollection({ type: 'data', source: 'en/music.json', schema: musicSchema }),
    members_en: defineCollection({ type: 'data', source: 'en/members.json', schema: membersSchema }),
    sponsors_en: defineCollection({ type: 'data', source: 'en/sponsors.json', schema: sponsorsSchema }),
    // German
    site_de: defineCollection({ type: 'data', source: 'de/site.json', schema: siteSchema }),
    events_de: defineCollection({ type: 'data', source: 'de/events.json', schema: eventsSchema }),
    music_de: defineCollection({ type: 'data', source: 'de/music.json', schema: musicSchema }),
    members_de: defineCollection({ type: 'data', source: 'de/members.json', schema: membersSchema }),
    sponsors_de: defineCollection({ type: 'data', source: 'de/sponsors.json', schema: sponsorsSchema }),
    // Portuguese
    site_pt: defineCollection({ type: 'data', source: 'pt/site.json', schema: siteSchema }),
    events_pt: defineCollection({ type: 'data', source: 'pt/events.json', schema: eventsSchema }),
    music_pt: defineCollection({ type: 'data', source: 'pt/music.json', schema: musicSchema }),
    members_pt: defineCollection({ type: 'data', source: 'pt/members.json', schema: membersSchema }),
    sponsors_pt: defineCollection({ type: 'data', source: 'pt/sponsors.json', schema: sponsorsSchema })
  }
})
