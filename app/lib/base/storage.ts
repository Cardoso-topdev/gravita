import { supabase } from './client';
import { updateProfileImage } from './profiles';
import { getSession } from './client';

export const saveUserImage = async (path: string, file: File) => {
  const { error: saveImageError } = await supabase.storage
    .from('profile-images')
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (saveImageError) {
    return saveImageError;
  }
  const { publicURL, error: createUrlError } = await supabase.storage
    .from('profile-images')
    .getPublicUrl(path);

  if (createUrlError) {
    return createUrlError;
  }
  const { error: saveProfileError } = await updateProfileImage(publicURL, getSession().user.id);

  return saveProfileError;
};
