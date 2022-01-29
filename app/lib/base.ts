import { createClient } from '@supabase/supabase-js';
import { definitions } from './types';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPERBASE_ANON_KEY
);

export type VotePercentages = {
  vote_type: definitions['card_votes']['vote_type']; 
  percentage: number;
}


export const getVotePercentages = async () => {
  const { data, error } = await supabase
    .from<VotePercentages>('card_votes_percentages')
    .select('*');

  return { data, error };
};

export const insertVote = async (voteType: definitions['card_votes']['vote_type'], userId: string) => {
  const { data, error } = await supabase
    .from<definitions['card_votes']>('card_votes')
    .insert([{ vote_type: voteType, user_id: userId }]);

  return { data, error };
};
