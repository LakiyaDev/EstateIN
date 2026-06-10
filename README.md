# Estatein — Real Estate Website

Modern real estate marketing site for Estatein — property listings, contact forms, newsletter signup, and a Supabase-powered admin dashboard. Built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Marketing site** — Home, About, Properties, Services, Contact, FAQs, and Testimonials
- **Property catalog** — Dynamic listings from Supabase with static fallback
- **Lead capture** — Contact, inquiry, and newsletter forms stored in Supabase
- **Admin panel** — Dashboard, message management, and property CRUD at `/admin`
- **Secure auth** — Admin allowlist, email verification, login rate limiting, and RLS

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) — Auth, Postgres, Row Level Security
- [Lucide React](https://lucide.dev/) icons

## Getting Started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (often `http://localhost:3000` or `3001`).

### Supabase setup (admin & live data)

1. Copy env vars: `cp .env.example .env.local`
2. Run migrations in `supabase/migrations/`
3. Create an admin user and add them to `admin_profiles`
4. Optionally seed properties: `npm run db:seed`

See [ADMIN_SETUP.md](./ADMIN_SETUP.md) for full instructions.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, featured properties, testimonials, FAQ |
| `/about` | About — journey, values, team, clients |
| `/properties` | Property listings with search filters and inquiry form |
| `/properties/[slug]` | Property detail — gallery, pricing, inquiry |
| `/services` | Services — valuation, management, investments |
| `/contact` | Contact — form, offices, gallery |
| `/admin` | Admin dashboard (requires Supabase + admin account) |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run db:seed` | Seed properties into Supabase |
| `npm run images:properties` | Download property images |

## Build

```bash
npm run build
npm start
```
