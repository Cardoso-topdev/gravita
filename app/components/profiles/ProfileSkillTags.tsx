import { FC } from 'react';
import { Wrap, Tag } from '@chakra-ui/react';

interface Props {
  skills: string[] | null;
}

export const ProfileSkillTags: FC<Props> = ({ skills }) => (
  <Wrap>
    {skills?.map((skill) => (
      <Tag borderRadius='full' key={skill} mr={2} variant='outline'>
        {skill}
      </Tag>
    ))}
  </Wrap>
);
