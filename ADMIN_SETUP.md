# Estatein Admin Panel — Supabase Setup

## Connected project

| | |
|---|---|
| **Project** | EstateIN |
| **Region** | ap-south-1 |
| **URL** | https://kdebzgytxddhmvqtgyzr.supabase.co |

Database migration applied. **9 properties** seeded. `.env.local` is configured.

## 1. Create a Supabase project

Already done via Cursor Supabase integration. If setting up elsewhere:

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. Copy your **Project URL** and **anon key** from **Settings → API**.

## 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `anon` public key |
| `SUPABASE_SERVICE_ROLE_KEY` | `service_role` key (seed script only) |
| `ESTATEIN_TEAM_EMAIL` | Team inbox for forwarded messages |

## 3. Run the database migration

In the Supabase SQL Editor, run the contents of:

```
supabase/migrations/001_admin_platform.sql
```

Or use the Supabase CLI:

```bash
supabase db push
```

## 4. Create an admin user

1. In Supabase Dashboard → **Authentication → Users**, click **Add user**.
2. Enter email and password for your admin account.
3. Copy the user's **UUID**.
4. In **SQL Editor**, run:

```sql
insert into public.admin_profiles (id, email, full_name)
values ('YOUR-USER-UUID', 'admin@estatein.com', 'Admin User');
```

## 5. Seed existing properties (optional)

```bash
npm run db:seed
```

This uploads the 9 static properties into Supabase. After seeding, the live site reads from the database.

## 6. Start the app

```bash
npm run dev
```

Check the terminal for the port (use `3001` if `3000` is already in use).

- **Admin login:** `http://localhost:3001/admin/login`
- **Dashboard:** `http://localhost:3001/admin`

Your admin account (`sadeepal319@gmail.com`) is now linked in `admin_profiles`.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Login then immediate logout | User must exist in `admin_profiles` table |
| Stale site / admin not loading | Use the port from terminal, not an old `:3000` tab |
| Contact form errors | Restart `npm run dev` after editing `.env.local` |

## Admin features

| Section | Description |
|---------|-------------|
| **Dashboard** | Stats, charts, recent messages |
| **Messages** | Contact & inquiry forms; forward to Estatein team |
| **Properties** | Add, edit, publish — updates website immediately |

## Contact forms

All three form variants (`full`, `simple`, `inquiry`) submit to `/api/messages` and store in Supabase when configured.

Without Supabase env vars, the public site uses static property data and forms show a configuration error on submit.
