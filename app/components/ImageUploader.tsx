import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Avatar, Box, BoxProps, Input, Icon } from '@chakra-ui/react';
import { AiOutlineEdit } from 'react-icons/ai';

interface Props extends BoxProps {}

export type Image = {
  dataUrl: string;
  file: File | null;
};

export const ImageUploader: FC<Props> = (props) => {
  const [currentImg, setCurrentImg] = useState<Image>({
    dataUrl: 'https://bit.ly/dan-abramov',
    file: null,
  });

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(currentImg.dataUrl);
    };
  }, [currentImg.dataUrl]);

  const handleFilePicker = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length > 0) {
      const imageObject = {
        file: e.target.files[0],
        dataUrl: URL.createObjectURL(e.target.files[0]),
      };
      setCurrentImg((oldImage) => ({ ...oldImage, ...imageObject }));
    }
  };

  return (
    <Box position='relative' {...props}>
      <label id='file_uploader'>
        <Avatar src={currentImg.dataUrl} size='lg' />
        <Box bg='white' borderRadius={25} w={25} h={25} position='absolute' bottom={0} right={0}>
          <Icon as={AiOutlineEdit} color='teal' m={1} />
        </Box>
        <Input
          type='file'
          name='upload'
          onChange={handleFilePicker}
          accept='image/*'
          id='file_uploader'
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
