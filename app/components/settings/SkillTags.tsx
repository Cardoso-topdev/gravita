import { FC, useState } from 'react';
import {
  Box,
  BoxProps,
  Input,
  Tag,
  TagLeftIcon,
  TagLabel,
} from '@chakra-ui/react';
import { getAllTags } from 'lib/base/profiles';
import { useData } from 'hooks/useData';
import { useAuthContext } from 'context/AuthContext';
import { Loader } from '../Loader';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

interface Props extends BoxProps {}

export const SkillTags: FC<Props> = (props) => {
  const [tags, loading] = useData(getAllTags);

  const [tagMap, setTagMap] = useState<Map<number, number>>(new Map());

  const { profile } = useAuthContext();

  const handleTagClick = (id: number): void => {
    setTagMap((prev) => {
      if (prev.get(id) === id) {
        tagMap.delete(id);
        return new Map(prev);
      }
      tagMap.set(id, id);
      return new Map(prev);
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
            borderWidth={tagMap.get(id) === id ? 0.5 : 0}
            borderColor='teal'
            color={tagMap.get(id) === id ? 'teal' : ''}
          >
            <TagLeftIcon
              color={tagMap.get(id) === id ? 'teal' : ''}
              as={tagMap.get(id) === id ? AiFillStar : AiOutlineStar}
            />
            <TagLabel>{name}</TagLabel>
          </Tag>
        ))}
        <Input borderWidth={0} _focus={{ borderColor: 'none' }} />
      </>
    </Box>
  );
};
