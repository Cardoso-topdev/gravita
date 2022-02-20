import { FC } from 'react';
import {
  Box,
  BoxProps,
  Input,
  Tag,
  TagLeftIcon,
  TagLabel,
} from '@chakra-ui/react';
import * as R from 'ramda';
import { getAllTags } from 'lib/base/profiles';
import { useData } from 'hooks/useData';
import { useAuthContext } from 'context/AuthContext';
import { createSkills, deleteSkill, Skill } from 'lib/base/profiles';
import { Loader } from '../Loader';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useSkillTags } from 'hooks/useSkillTags';

interface Props extends BoxProps {}

export const SkillTags: FC<Props> = (props): JSX.Element => {
  const [tags, loading] = useData(getAllTags);

  const { keys, setKeys } = useSkillTags();

  const { profile } = useAuthContext();

  const handleTagClick = (key: number): void => {
    setKeys((prevKeys) => {
      if (prevKeys.includes(key)) {
        deleteSkill(key);

        return R.reject(R.equals(R.__, key), prevKeys);
      }
      const skill: Skill[] = [
        { id: key, skill_tag_id: key, profile_id: profile.id },
      ];
      
      createSkills(skill);

      return R.append(key, prevKeys);
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box p={2} w={450} bg='secondaryDark' {...props}>
      <>
        {tags?.data.map(({ id, name }) => (
          <Tag
            m={1}
            key={id}
            onClick={handleTagClick.bind(null, id)} 
            variant='outline'
            borderRadius='full'
            borderWidth={keys.includes(id) ? 0.5 : 0}
            borderColor={keys.includes(id) ? 'teal' : null}
            color={keys.includes(id) ? 'teal' : null}
          >
            <TagLeftIcon
              color={keys.includes(id) ? 'teal' : null}
              as={keys.includes(id) ? AiFillStar : AiOutlineStar}
            />
            <TagLabel>{name}</TagLabel>
          </Tag>
        ))}
        <Input borderWidth={0} _focus={{ borderColor: 'none' }} />
      </>
    </Box>
  );
};
