import { createClient } from '@supabase/supabase-js';
import { definitions } from '../types';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
);

export default supabase;

export const getVotesCount = async (title: string) => {
  const { error, count } = await supabase
    .from<definitions['card_votes']>('card_votes')
    .select('*', { count: 'exact', head: true })
    .eq('title', title);

  return { error, count };
};
