import { FC } from 'react';
import { Wrap, Tag } from '@chakra-ui/react';

interface Props {
  skills: string[] | null;
}

export const ProfileSkillTags: FC<Props> = ({ skills }) => {
  return (
    <Wrap>
      {skills?.map((skill) => (
        <Tag key={skill} mr={2} variant='outline' borderRadius='full'> {skill} </Tag>
      ))}
    </Wrap>
  );
};
