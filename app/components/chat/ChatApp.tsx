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
import { useEffect, useState } from 'react';
import { stream } from 'lib/stream';
import { useAuthContext } from 'context/AuthContext';
import { useDarkModeSwitch } from 'hooks/useDarkModeSwitch';
import { Loader } from 'components/Loader';
import '@stream-io/stream-chat-css/dist/css/index.css';

const customStyles: CustomStyles = {
  '--border': 'black',
};

export const ChatApp = () => {
  const { isDark } = useDarkModeSwitch();

  const { session } = useAuthContext();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!session) {
      setLoading(false);
      return;
    }
    stream
      .addCurentUser(session)
      .then(() => setLoading(false))
      .finally(() => setLoading(false));

    return () => {
      stream.client.disconnectUser();
    };
  }, [session]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Chat client={stream.client} customStyles={customStyles} darkMode={isDark}>
      <ChannelList />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};
