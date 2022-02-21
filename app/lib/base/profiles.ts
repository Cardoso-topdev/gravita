import { supabase } from './client';
import { definitions } from './types';
import { textToCapitalizeWord } from 'utils/common';

export type Profile = definitions['profiles'];

export type OrderFilter = {
  ascending: boolean;
};

export type ProfileParams = {
  orderBy?: OrderFilter;
  name?: string;
  limit?: number;
};

export const getAllProfiles = async (
  { orderBy, name, limit }: ProfileParams = { orderBy: { ascending: true } },
) => {
  let query = supabase
    .from<definitions['profiles']>('profiles')
    .select('*', { count: 'exact' })
    .order('first_name', orderBy);

  if (name) {
    const capName = textToCapitalizeWord(name);

    query = query.or(`first_name.eq.${capName},last_name.eq.${capName}`);
  }
  if (limit) {
    query = query.limit(limit);
  }

  const { data, error, count } = await query;

  return { data, error, count };
};

export const getUserProfile = async (id: string) => {
  const { data, error } = await supabase
    .from<definitions['profiles']>('profiles')
    .select('*')
    .eq('id', id);

  return { data, error };
};

export const updateProfile = async (profile: Profile) => {
  const { data, error } = await supabase
    .from<definitions['profiles']>('profiles')
    .upsert(profile);

  return { data, error };
};

export const getProfileUserSkills = async () => {
  const { data, error } = await supabase.from('profile_skills').select(`id`);
};
