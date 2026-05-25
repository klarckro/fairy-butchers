import { defineConfig } from 'tinacms'

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

// ──────────────────────────────────────────────
// Shared field definitions (used by both EN + DE)
// ──────────────────────────────────────────────

const siteFields: any[] = [
  { type: 'string', name: 'sideLabel', label: 'Side label' },
  {
    type: 'object',
    name: 'hero',
    label: 'Hero',
    fields: [
      { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
      { type: 'string', name: 'titleLine1', label: 'Title line 1' },
      { type: 'string', name: 'titleLine2', label: 'Title line 2 (pink)' },
      { type: 'string', name: 'tagHtml', label: 'Tagline (HTML allowed)', ui: { component: 'textarea' } },
      { type: 'string', name: 'primaryCta', label: 'Primary CTA label' },
      { type: 'string', name: 'ghostCta', label: 'Ghost CTA label' },
      { type: 'string', name: 'ribbonTag', label: 'Ribbon tag' },
      { type: 'string', name: 'ribbonItems', label: 'Ribbon items', list: true }
    ]
  },
  { type: 'string', name: 'marquee', label: 'Marquee strip lines', list: true },
  {
    type: 'object',
    name: 'about',
    label: 'About',
    fields: [
      { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
      { type: 'string', name: 'title', label: 'Title (use \\n for line break)' },
      { type: 'string', name: 'sub', label: 'Subtitle', ui: { component: 'textarea' } },
      { type: 'string', name: 'paragraphs', label: 'Paragraphs', list: true, ui: { component: 'textarea' } },
      {
        type: 'object',
        name: 'stats',
        label: 'Stats',
        list: true,
        ui: { itemProps: (item: any) => ({ label: item?.label || 'Stat' }) },
        fields: [
          { type: 'string', name: 'num', label: 'Number' },
          { type: 'string', name: 'label', label: 'Label' }
        ]
      }
    ]
  },
  {
    type: 'object',
    name: 'contact',
    label: 'Contact',
    fields: [
      { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
      { type: 'string', name: 'title', label: 'Title (use \\n for line break)' },
      { type: 'string', name: 'sub', label: 'Subtitle', ui: { component: 'textarea' } },
      { type: 'string', name: 'infoTitle', label: 'Info heading' },
      { type: 'string', name: 'infoBlurb', label: 'Info blurb', ui: { component: 'textarea' } },
      {
        type: 'object',
        name: 'channels',
        label: 'Email channels',
        list: true,
        ui: { itemProps: (item: any) => ({ label: item?.label || 'Channel' }) },
        fields: [
          { type: 'string', name: 'label', label: 'Label' },
          { type: 'string', name: 'value', label: 'Email' }
        ]
      },
      { type: 'string', name: 'subjects', label: 'Form subject options', list: true },
      {
        type: 'object',
        name: 'socials',
        label: 'Social links',
        list: true,
        ui: { itemProps: (item: any) => ({ label: item?.title || item?.label || 'Social' }) },
        fields: [
          { type: 'string', name: 'label', label: 'Short label (2 letters, e.g. IG)' },
          { type: 'string', name: 'href', label: 'URL' },
          { type: 'string', name: 'title', label: 'Title attr' }
        ]
      },
      { type: 'string', name: 'footerNote', label: 'Footer note' }
    ]
  }
]

const eventsFields: any[] = [
  { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
  { type: 'string', name: 'title', label: 'Title (use \\n for line break)' },
  { type: 'string', name: 'sub', label: 'Subtitle', ui: { component: 'textarea' } },
  { type: 'string', name: 'archiveLabel', label: 'Archive separator label' },
  {
    type: 'object',
    name: 'items',
    label: 'Gigs',
    list: true,
    ui: { itemProps: (item: any) => ({ label: `${item?.day || '?'} – ${item?.venue || ''}` }) },
    fields: [
      { type: 'string', name: 'monthLabel', label: 'Month + day-of-week (e.g. MAY · SAT)' },
      { type: 'string', name: 'day', label: 'Day number' },
      { type: 'string', name: 'venue', label: 'Venue' },
      { type: 'string', name: 'city', label: 'City (uppercase, e.g. ZÜRICH · CH)' },
      { type: 'string', name: 'meta', label: 'Meta (e.g. DOORS 20:00)' },
      { type: 'string', name: 'price', label: 'Price' },
      { type: 'string', name: 'tag', label: 'Tag (optional, e.g. FEW LEFT)' },
      {
        type: 'string',
        name: 'tagKind',
        label: 'Tag style',
        options: [
          { value: 'featured', label: 'Featured (pink)' },
          { value: 'soldout', label: 'Sold out (outline)' }
        ]
      },
      { type: 'boolean', name: 'soldOut', label: 'Sold out (dims the row)' },
      { type: 'string', name: 'href', label: 'Link URL' }
    ]
  }
]

const musicFields: any[] = [
  { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
  { type: 'string', name: 'title', label: 'Title' },
  { type: 'string', name: 'sub', label: 'Subtitle', ui: { component: 'textarea' } },
  {
    type: 'object',
    name: 'items',
    label: 'Videos / tracks',
    list: true,
    ui: { itemProps: (item: any) => ({ label: item?.title || 'Track' }) },
    fields: [
      { type: 'string', name: 'title', label: 'Title' },
      { type: 'string', name: 'kind', label: 'Kind (OFFICIAL VIDEO / LIVE / DEMO …)' },
      { type: 'string', name: 'length', label: 'Length (mm:ss)' },
      { type: 'string', name: 'year', label: 'Year' },
      { type: 'boolean', name: 'featured', label: 'Featured (large card)' },
      { type: 'string', name: 'badge', label: 'Badge (e.g. ★ NEW SINGLE)' },
      { type: 'image', name: 'thumb', label: 'Thumbnail image' },
      { type: 'string', name: 'thumbPosition', label: 'Thumb CSS position (e.g. "center 20%")' },
      { type: 'string', name: 'href', label: 'Link URL' }
    ]
  }
]

const membersFields: any[] = [
  { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
  { type: 'string', name: 'title', label: 'Title (use \\n for line break)' },
  { type: 'string', name: 'sub', label: 'Subtitle', ui: { component: 'textarea' } },
  {
    type: 'object',
    name: 'items',
    label: 'Band lineup',
    list: true,
    ui: { itemProps: (item: any) => ({ label: item?.stageName || 'Member' }) },
    fields: [
      { type: 'string', name: 'number', label: 'Number (e.g. 01)' },
      { type: 'string', name: 'stageName', label: 'Stage name' },
      { type: 'string', name: 'aka', label: 'A.K.A. line' },
      { type: 'string', name: 'role', label: 'Role' },
      { type: 'image', name: 'photo', label: 'Photo' }
    ]
  }
]

const sponsorsFields: any[] = [
  { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
  { type: 'string', name: 'title', label: 'Title (use \\n for line break)' },
  { type: 'string', name: 'sub', label: 'Subtitle', ui: { component: 'textarea' } },
  {
    type: 'object',
    name: 'cards',
    label: 'Cards',
    list: true,
    ui: { itemProps: (item: any) => ({ label: item?.heading || 'Card' }) },
    fields: [
      { type: 'string', name: 'iconStamp', label: 'Icon (e.g. ✚ or ★)' },
      { type: 'string', name: 'kicker', label: 'Kicker (e.g. / FOR FANS)' },
      { type: 'string', name: 'heading', label: 'Heading' },
      { type: 'string', name: 'blurb', label: 'Blurb', ui: { component: 'textarea' } },
      { type: 'string', name: 'bullets', label: 'Bullet points', list: true },
      { type: 'string', name: 'ctaLabel', label: 'CTA label' },
      { type: 'string', name: 'ctaHref', label: 'CTA href' },
      {
        type: 'string',
        name: 'ctaStyle',
        label: 'CTA style',
        options: [
          { value: 'primary', label: 'Primary (pink)' },
          { value: 'ghost', label: 'Ghost (outline)' }
        ]
      }
    ]
  }
]

// ──────────────────────────────────────────────
// Per-locale collections
// ──────────────────────────────────────────────

function localeCollections(localeCode: 'en' | 'de', localeName: string) {
  const path = `content/${localeCode}`
  const lockSingleton = { allowedActions: { create: false, delete: false } }
  return [
    { name: `site_${localeCode}`, label: `${localeName} · Site`, path, format: 'json' as const, match: { include: 'site' }, ui: lockSingleton, fields: siteFields },
    { name: `events_${localeCode}`, label: `${localeName} · Events`, path, format: 'json' as const, match: { include: 'events' }, ui: lockSingleton, fields: eventsFields },
    { name: `music_${localeCode}`, label: `${localeName} · Music`, path, format: 'json' as const, match: { include: 'music' }, ui: lockSingleton, fields: musicFields },
    { name: `members_${localeCode}`, label: `${localeName} · Members`, path, format: 'json' as const, match: { include: 'members' }, ui: lockSingleton, fields: membersFields },
    { name: `sponsors_${localeCode}`, label: `${localeName} · Support`, path, format: 'json' as const, match: { include: 'sponsors' }, ui: lockSingleton, fields: sponsorsFields }
  ]
}

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },

  media: {
    tina: {
      mediaRoot: 'assets',
      publicFolder: 'public'
    }
  },

  schema: {
    collections: [
      ...localeCollections('en', '🇬🇧 English'),
      ...localeCollections('de', '🇩🇪 Deutsch')
    ]
  }
})
