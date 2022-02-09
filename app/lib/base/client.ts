import { createClient } from '@supabase/supabase-js';
import { definitions } from '../types';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPERBASE_ANON_KEY,
);

export type VotePercentages = {
  vote_type: definitions['card_votes']['vote_type'];
  percentage: number;
};


export const getVotePercentages = async (title: string) => {
  const { data, error } = await supabase.rpc('get_votes_by_title', {
    vote_title: title,
  });

  return { data, error };
};

type Vote = definitions['card_votes']['vote_type'];

export const insertVote = async (
  voteType: definitions['card_votes']['vote_type'],
  userId: string,
  title: string,
) => {
  const { data, error } = await supabase
    .from<definitions['card_votes']>('card_votes')
    .insert([{ vote_type: voteType, user_id: userId, title: title }]);

  return { data, error };
};
