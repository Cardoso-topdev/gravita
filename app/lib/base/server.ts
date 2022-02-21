import { createClient } from '@supabase/supabase-js';
import { definitions } from './types';

//DO NOT CALL ON FRONTEND, ONLY ON BACKEND!! 
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
);

//DO NOT CALL ON FRONTEND, ONLY ON BACKEND!! 
export const getVotesCount = async (title: string) => {
  const { error, count } = await supabase
    .from<definitions['card_votes']>('card_votes')
    .select('*', { count: 'exact', head: true })
    .eq('title', title);

  return { error, count };
};
