import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPERBASE_ANON_KEY
);

export const getVotePercentages = async () => {
  const { data, error } = await supabase
    .from('card_votes_percentages')
    .select('*');

  return { data, error };
};

export const insertVote = async (voteType: string, userId: string) => {
  const { data, error } = await supabase
    .from('card_votes')
    .insert([{ vote_type: voteType, user_id: userId }]);

  return { data, error };
};
