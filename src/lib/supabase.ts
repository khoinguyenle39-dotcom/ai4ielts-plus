import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lnsjzbovjoxcrjkzgwdg.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_utSIOOlHXJVY0QQM3sBqDA_vPMyLh5t';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
