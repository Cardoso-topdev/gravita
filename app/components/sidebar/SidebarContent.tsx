import { FC } from 'react';
import Link from 'next/link';
import { VStack } from '@chakra-ui/react';
import { RiHome2Line } from 'react-icons/ri';
import { ImStack } from 'react-icons/im';
import { AiOutlineTeam } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { IconLink } from '../IconLink';

export const SidebarContent: FC = () => (
  <VStack align="left" spacing={7}>
    <Link href="/dashboard" passHref>
      <IconLink title="Home" boxSize={5} icon={RiHome2Line} mr={2} />
    </Link>
    <Link href="/dashboard" passHref>
      <IconLink title="Projects" boxSize={5} icon={ImStack} mr={2} />
    </Link>
    <Link href="/dashboard" passHref>
      <IconLink title="Teams" boxSize={5} icon={AiOutlineTeam} mr={2} />
    </Link>
    <Link href="/dashboard" passHref>
      <IconLink title="Settings" boxSize={5} icon={FiSettings} mr={2} />
    </Link>
  </VStack>
);