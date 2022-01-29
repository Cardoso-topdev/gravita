import { StreamChat } from 'stream-chat';
import { request } from 'utils/response';
import { supabase } from './base';

export type Channel = {
  type: string;
  name: string;
  members: string[];
};

export enum StreamRole {
  user = 'user',
  admin = 'admin',
}

type Token = {
  token: string;
};

class Stream {
  private _client: StreamChat;

  constructor() {
    this._client = StreamChat.getInstance(
      process.env.NEXT_PUBLIC_REACT_APP_STREAM_KEY,
    );
  }

  get client() {
    return this._client;
  }

  public async addExistingUser(): Promise<void> {
    const session = supabase.auth.session();

    try {
      const data = await this.getStreamToken(session.user.id);

      this._client.connectUser(
        {
          id: session.user.id,
          name: session.user.email.charAt(0).toLocaleUpperCase(),
        },
        data.token,
      );
    } catch (error) {
      console.error(error);
    }
  }

  public createChannel(data: Channel) {
    const { type, name, members } = data;

    return this._client.channel(type, name, {
      members,
    });
  }

  private async getStreamToken(id: string): Promise<Token> {
    try {
      return await request<Token>('/api/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          role: StreamRole.user,
        }),
      });
    } catch (error) {
      throw error;
    }
  }
}

export const stream = new Stream();
