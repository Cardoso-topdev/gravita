import { FC } from 'react';
import Link from 'next/link';
import { VStack, StackProps } from '@chakra-ui/react';
import { RiHome2Line } from 'react-icons/ri';
import { ImStack } from 'react-icons/im';
import { AiOutlineTeam } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { IconLink } from '../IconLink';

interface Props extends StackProps {}

export const SidebarContent: FC<Props> = (props) => (
  <VStack {...props}>
    <Link href="/dashboard" passHref>
      <IconLink title="Home" icon={RiHome2Line} />
    </Link>
    <Link href="/dashboard" passHref>
      <IconLink title="Projects" icon={ImStack}  />
    </Link>
    <Link href="/dashboard" passHref>
      <IconLink title="Teams" icon={AiOutlineTeam}  />
    </Link>
    <Link href="/settings" passHref>
       <IconLink title="Settings" icon={FiSettings}/>
    </Link>
  </VStack>
);
