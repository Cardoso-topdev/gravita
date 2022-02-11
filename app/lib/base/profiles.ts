import { supabase } from './client';
import { definitions } from './types';

type ProfileParams = {
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

export const updateProfile = async ({ email, ...rest }: ProfileParams) => {
  const { data, error } = await supabase
    .from<definitions['profiles']>('profiles')
    .update({ ...rest })
    .match({ email });

  return { data, error };
};
