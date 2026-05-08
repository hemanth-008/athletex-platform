-- Profiles (extends auth.users)
create table profiles (
  id uuid references auth.users primary key,
  username text unique not null,
  full_name text,
  avatar_url text,
  cover_url text,
  bio text,
  sport text,
  position text,
  city text,
  country text,
  user_type text check (user_type in ('athlete','scout','organiser','fan')),
  streak_count integer default 0,
  longest_streak integer default 0,
  last_post_date date,
  total_points integer default 0,
  global_rank integer,
  country_rank integer,
  speed_stat integer default 50,
  endurance_stat integer default 50,
  skill_stat integer default 50,
  consistency_stat integer default 50,
  is_verified boolean default false,
  created_at timestamptz default now()
);

create table posts (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references profiles(id) on delete cascade,
  title text not null,
  description text,
  sport text,
  difficulty text check (difficulty in ('easy','medium','hard','elite')),
  media_url text,
  media_type text check (media_type in ('image','video')),
  location text,
  points_earned integer,
  likes_count integer default 0,
  comments_count integer default 0,
  views_count integer default 0,
  created_at timestamptz default now()
);

create table post_likes (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references posts(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  created_at timestamptz default now(),
  unique(post_id, user_id)
);

create table comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references posts(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  content text not null,
  created_at timestamptz default now()
);

create table badges (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  icon text,
  color text,
  criteria_type text,
  criteria_value integer
);

create table athlete_badges (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references profiles(id) on delete cascade,
  badge_id uuid references badges(id),
  earned_at timestamptz default now()
);

create table teams (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sport text,
  city text,
  country text,
  logo_url text,
  bio text,
  captain_id uuid references profiles(id),
  total_points integer default 0,
  wins integer default 0,
  losses integer default 0,
  created_at timestamptz default now()
);

create table team_members (
  id uuid primary key default gen_random_uuid(),
  team_id uuid references teams(id) on delete cascade,
  athlete_id uuid references profiles(id) on delete cascade,
  role text default 'member',
  joined_at timestamptz default now(),
  unique(team_id, athlete_id)
);

create table competitions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  sport text,
  format text check (format in ('individual','team')),
  organiser_id uuid references profiles(id),
  description text,
  prize text,
  reward_details text,
  region text,
  banner_url text,
  registration_deadline timestamptz,
  start_date timestamptz,
  end_date timestamptz,
  status text check (status in ('upcoming','active','live','completed')) default 'upcoming',
  max_participants integer,
  participant_count integer default 0,
  created_at timestamptz default now()
);

create table competition_registrations (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid references competitions(id) on delete cascade,
  athlete_id uuid references profiles(id),
  team_id uuid references teams(id),
  registered_at timestamptz default now()
);

create table saved_profiles (
  id uuid primary key default gen_random_uuid(),
  scout_id uuid references profiles(id) on delete cascade,
  athlete_id uuid references profiles(id) on delete cascade,
  notes text,
  created_at timestamptz default now(),
  unique(scout_id, athlete_id)
);

create table scout_views (
  id uuid primary key default gen_random_uuid(),
  scout_id uuid references profiles(id) on delete cascade,
  athlete_id uuid references profiles(id) on delete cascade,
  viewed_at timestamptz default now()
);

create table notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  type text,
  title text,
  body text,
  link text,
  is_read boolean default false,
  metadata jsonb,
  created_at timestamptz default now()
);

create table follows (
  id uuid primary key default gen_random_uuid(),
  follower_id uuid references profiles(id) on delete cascade,
  following_id uuid references profiles(id) on delete cascade,
  created_at timestamptz default now(),
  unique(follower_id, following_id)
);

-- Row Level Security (RLS)
alter table profiles enable row level security;
alter table posts enable row level security;
alter table badges enable row level security;
alter table teams enable row level security;
alter table competitions enable row level security;
alter table scout_views enable row level security;

-- Profiles: Anyone can read, users can only update their own profile
create policy "Public profiles are viewable by everyone." on profiles for select using (true);
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on profiles for update using (auth.uid() = id);

-- Posts: Anyone can read, athletes can insert/update/delete their own posts
create policy "Posts are viewable by everyone." on posts for select using (true);
create policy "Athletes can insert their own posts." on posts for insert with check (auth.uid() = athlete_id);
create policy "Athletes can update their own posts." on posts for update using (auth.uid() = athlete_id);
create policy "Athletes can delete their own posts." on posts for delete using (auth.uid() = athlete_id);

-- Badges: Anyone can read
create policy "Badges are viewable by everyone." on badges for select using (true);

-- Teams: Anyone can read
create policy "Teams are viewable by everyone." on teams for select using (true);

-- Competitions: Anyone can read
create policy "Competitions are viewable by everyone." on competitions for select using (true);

-- Scout views: Scouts can insert, athletes can read views on their own profile
create policy "Athletes can read views on their profile." on scout_views for select using (auth.uid() = athlete_id);
create policy "Scouts can insert views." on scout_views for insert with check (auth.uid() = scout_id);
