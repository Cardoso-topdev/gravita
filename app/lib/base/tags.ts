import { supabase } from './client';
import { definitions } from './types';

export type SkillTag = definitions['skill_tags'];

export const getAllTags = async (limit?: number) => {
  let query = supabase.from<SkillTag>('skill_tags').select('*');

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  return { data, error };
};
