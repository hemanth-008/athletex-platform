import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Need service role key to bypass RLS for seeding

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log('Seeding database...');

  // Note: For a real seed script against Supabase Auth, you'd need to create auth users first.
  // For simplicity, assuming these users exist in auth.users or using service role to bypass auth fk constraint if possible, 
  // but typically you must create auth users using supabase.auth.admin.createUser.

  // 1. Badges
  const badgesData = [
    { name: 'Iron Streak', description: '7-day streak', icon: '🔥', color: 'orange', criteria_type: 'streak', criteria_value: 7 },
    { name: 'Bronze Streak', description: '30-day streak', icon: '🥉', color: 'bronze', criteria_type: 'streak', criteria_value: 30 },
    { name: 'Silver Streak', description: '60-day streak', icon: '🥈', color: 'silver', criteria_type: 'streak', criteria_value: 60 },
    { name: 'Gold Streak', description: '100-day streak', icon: '🥇', color: 'gold', criteria_type: 'streak', criteria_value: 100 },
    { name: 'Elite Performer', description: '500+ points', icon: '⚡', color: 'purple', criteria_type: 'points', criteria_value: 500 },
    { name: 'Champion', description: 'Competition winner', icon: '🏆', color: 'yellow', criteria_type: 'win', criteria_value: 1 },
  ];

  const { data: badges, error: badgesError } = await supabase.from('badges').insert(badgesData).select();
  if (badgesError) console.error('Error seeding badges:', badgesError);
  else console.log('Badges seeded.');

  // The rest of the seed logic would involve creating users, then profiles, posts, etc.
  // We recommend using the Supabase Dashboard SQL Editor for complex initial seeding 
  // or a dedicated backend script once the Next.js API is up.
  console.log('Seed script basic setup complete.');
}

seed();
