# AthleteX - Where Champions Are Found

A two-sided sports talent discovery and community platform linking grassroots athletes with scouts worldwide.

## Features
- **Profiles:** Custom profiles for athletes, scouts, and organisers with skill charts and badges.
- **Feed:** Real-time achievement feed with points and difficulty multipliers.
- **Discover:** Deep filtering capability for scouts to find talent by stats, streaks, and location.
- **Leaderboards:** Global and regional rankings based on points earned via posts and competitions.
- **Competitions:** Hub for finding and registering for tournaments with live bracket views.

## Tech Stack
- Frontend: Next.js 14, React, TailwindCSS, shadcn/ui, Framer Motion
- Backend: Supabase (Auth, Postgres, Realtime, Storage)

## Setup Instructions
Since this project relies heavily on Supabase for Auth, DB, and Realtime:

1. Copy `.env.example` to `.env` and fill in your Supabase details.
2. Run the SQL schema from `supabase/schema.sql` in your Supabase dashboard.
3. (Optional) Create dummy users in Supabase Auth, then run the queries in `supabase/seed.ts` to populate test data.
4. Run `npm install` to install dependencies.
5. Run `npm run dev` to start the application.

## Vercel Deployment
Simply connect your GitHub repository to Vercel. Ensure you add all the `.env` variables to your Vercel project settings before deploying.
