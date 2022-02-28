import { ChangeEvent, FC, useEffect, useState } from 'react';
import cuid from 'cuid';
import { Avatar, Box, BoxProps, Input, Icon, useToast } from '@chakra-ui/react';
import { AiOutlineEdit } from 'react-icons/ai';
import { saveUserImage } from 'lib/base/storage';
import { useAuthContext } from 'context/AuthContext';

interface Props extends BoxProps {}

export type Image = {
  dataUrl: string;
  file: File | null;
};

export const AvatarUploader: FC<Props> = (props) => {
  const { profile, loadProfile } = useAuthContext();

  const toast = useToast();

  const [currentImg, setCurrentImg] = useState<Image>({
    dataUrl: profile?.image_url,
    file: null,
  });

  useEffect(() => {
    return () => {
      loadProfile()
      URL.revokeObjectURL(currentImg.dataUrl);
    };
  }, [currentImg.dataUrl, loadProfile]);

  const handleFilePicker = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    const limit = 3 * 1024 * 1024; //3MB

    if (file && file.size > limit) {
      return toast({
        title: 'File size is too large. Please choose a smaller file',
        isClosable: true,
        status: 'error',
      });
    }
    const imageObject = {
      file: e.target.files[0],

      dataUrl: URL.createObjectURL(e.target.files[0]),
    };

    setCurrentImg((oldImage) => ({ ...oldImage, ...imageObject }));

    const ext = file.name.slice(file.name.indexOf('.'));

    const path = `users/${profile.id}/${cuid()}${ext}`;

    const error = await saveUserImage(path, file);

    if (error) {
      toast({
        title: 'Oops something went wrong',
        isClosable: true,
        status: 'error',
      });
    } 
  };

  return (
    <Box position='relative' {...props}>
      <label id='file_uploader'>
        <Avatar name={profile?.first_name} src={currentImg.dataUrl} size='lg' />
        <Box
          bg='white'
          borderRadius={25}
          w={25}
          h={25}
          position='absolute'
          bottom={0}
          right={0}
        >
          <Icon as={AiOutlineEdit} color='teal' m={1} />
        </Box>
        <Input
          id='file_uploader'
          type='file'
          name='upload'
          onChange={handleFilePicker}
          accept='image/*'
          position='absolute'
          opacity={0}
          h={0}
          w={0}
          right={0}
          bottom={0}
        />
      </label>
    </Box>
  );
};
