import { Flex } from '@chakra-ui/react';
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageInput,
  MessageList,
  Window,
  Thread,
  CustomStyles,
} from 'stream-chat-react';
import { stream } from 'lib/stream';
import { useDarkModeSwitch } from 'hooks/useDarkModeSwitch';
import '@stream-io/stream-chat-css/dist/css/index.css';
import { colors } from 'theme/colors';

stream.addExistingUser();

const customStyles: CustomStyles = {
  '--border': 'black',
};

export const ChatApp = () => {
  const { isDark } = useDarkModeSwitch();
  return (
    <Chat client={stream.client} customStyles={customStyles} darkMode={isDark}>
      <Flex justifyContent="center" bg={colors.streamGray}>
        <ChannelList />
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Flex>
    </Chat>
  );
};
