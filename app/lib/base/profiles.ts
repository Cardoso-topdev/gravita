import { supabase } from './client';
import { definitions } from './types';

type ProfileParams = {
  id: string;
  first_name?: string;
  last_name?: string;
  email: string;
};

export const getUserProfile = async (id: string) => {
  const { data, error } = await supabase
    .from<definitions['profiles']>('profiles')
    .select('*')
    .eq('id', id);

  return { data, error };
};

export const updateProfile = async (profile: ProfileParams) => {
  const { data, error } = await supabase
    .from<definitions['profiles']>('profiles')
    .upsert(profile); 

  return { data, error };
};
