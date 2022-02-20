import { supabase } from './client';
import { definitions } from './types';
import { textToCapitalizeWord } from 'utils/common';

export type Profile = definitions['profiles'];
export type SkillTag = definitions['skill_tags'];
export type Skill = definitions['profile_skills'];

export type OrderFilter = {
  ascending: boolean;
};

export const getAllProfiles = async (
  orderBy: OrderFilter = { ascending: true },
  name?: string,
) => {
  let query = supabase
    .from<definitions['profiles']>('profiles')
    .select('*', { count: 'exact' })
    .order('first_name', orderBy);

  if (name) {
    const capName = textToCapitalizeWord(name);
    query = query.or(`first_name.eq.${capName},last_name.eq.${capName}`);
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

export const getAllTags = async (limit?: number) => {
  let query = supabase.from<SkillTag>('skill_tags').select('*');

  if (limit) {
    query = query.limit(limit);
  }
  const { data, error } = await query;

  return { data, error };
};

export const createSkills = async (skills: Skill[]) => {
  const { error } = await supabase.from<Skill>('profile_skills').upsert(skills);

  return { error };
};

export const deleteSkill = async (id: number) => {
  const { error } = await supabase
    .from<Skill>('profile_skills')
    .delete()
    .match({ id });

  return { error };
};

export const findSkillKeys = async (profileId: string) => {
  const { data, error } = await supabase
    .from<Skill>('profile_skills')
    .select('*')
    .eq('profile_id', profileId);

  const existingKeys = data.map((skill) => skill.id);

  return { existingKeys, error };
};
