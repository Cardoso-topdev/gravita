import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CTF_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CTF_ACCESS_TOKEN,
  host: 'cdn.contentful.com',
});

export default client;
