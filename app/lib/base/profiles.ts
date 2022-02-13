import { supabase } from './client';
import { definitions } from './types';

export type Profile = definitions['profiles'];

export const getAllProfiles = async () => {
  const { data, error } = await supabase
    .from<definitions['profiles']>('profiles')
    .select('*');

  return { data, error };
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
