import { supabase } from './client';
import { definitions } from './types';
import { textToCapitalizeWord } from 'utils/common';
import * as R from 'ramda';

export type ProfileTable = definitions['profiles'];
export type SkillTagTable = definitions['skill_tags'];
export type SkillTable = definitions['profile_skills'];
export type Skill = Pick<SkillTable, 'profile_id' | 'skill_tag_id'>;

export type OrderFilter = {
  ascending: boolean;
};

export type ProfileParams = {
  orderBy?: OrderFilter;
  name?: string;
  limit?: number;
};

export type TProfile = {
  first_name: string;
  last_name: string;
  bio: string | null;
  skills: string[] | null;
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
    .from<ProfileTable>('profiles')
    .select('*')
    .eq('id', id);

  return { data, error };
};

export const updateProfile = async (profile: ProfileTable) => {
  const { data, error } = await supabase
    .from<definitions['profiles']>('profiles')
    .upsert(profile);

  return { data, error };
};

export const getAllTags = async (limit?: number) => {
  let query = supabase.from<SkillTagTable>('skill_tags').select('*');

  if (limit) {
    query = query.limit(limit);
  }
  const { data, error } = await query;

  return { data, error };
};

export const createSkill = async (skill: Skill) => {
  const { error } = await supabase
    .from<SkillTable>('profile_skills')
    .insert([skill]);

  return { error };
};

export const deleteSkill = async (id: number, profileId: string) => {
  const { error } = await supabase
    .from<SkillTable>('profile_skills')
    .delete()
    .eq('skill_tag_id', id)
    .eq('profile_id', profileId);

  return { error };
};

export const findSkillKeys = async (profileId: string) => {
  const { data, error } = await supabase
    .from<SkillTable>('profile_skills')
    .select('*')
    .eq('profile_id', profileId);

  const existingKeys = data.map((skill) => skill.skill_tag_id);

  return { existingKeys, error };
};

export const getProfileAndSkills = async (profileId: string) => {
  const { data, error } = await supabase
    .from<SkillTable>('profile_skills')
    .select(
      `id, profile: profile_id (first_name, last_name, bio), skills: skill_tag_id(name)`,
    )
    .eq('profile_id', profileId);

  const profile: TProfile = R.reduce(
    (result: TProfile, item: any) => {
      if (R.isEmpty(result)) {
        return { ...item.profile, skills: R.append(item.skills.name, []) };
      }
      return {
        ...R.over(R.lensProp('skills'), R.append(item.skills.name), result),
      };
    },
    {},
    data,
  );

  return { profile, error };
};
