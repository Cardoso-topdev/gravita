import { supabase } from './client';
import { definitions } from './types';
import { textToCapitalizeWord } from 'utils/common';

export type Profile = definitions['profiles'];

export type OrderFilter = {
  ascending: boolean;
};

export const getAllProfiles = async (
  orderBy: OrderFilter = { ascending: true },
  firstName?: string,
) => {
  let query = supabase
    .from<definitions['profiles']>('profiles')
    .select('*', { count: 'exact' })
    .order('first_name', orderBy);

  if (firstName) {
    query = query.eq('first_name', textToCapitalizeWord(firstName));
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
