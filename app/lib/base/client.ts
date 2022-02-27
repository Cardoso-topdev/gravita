import { createClient, PostgrestError } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPERBASE_ANON_KEY,
);

export type PgError = PostgrestError;

export const getSession = () => supabase.auth.session();
