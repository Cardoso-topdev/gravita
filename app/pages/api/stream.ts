import { NextApiRequest, NextApiResponse } from 'next';
import { StreamChat } from 'stream-chat';
import * as R from 'ramda';

const client = new StreamChat(
  process.env.STREAM_API_KEY,
  process.env.STREAM_SECRET_KEY
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, role } = req.body;

  if (req.method !== 'POST' || !id || !role) {
    res.status(400).json({ message: 'Bad request' });

    return;
  }

  try {
    const userData = await client.upsertUser({ id, role });

    const userId = R.pipe(R.prop('users'), R.keys, R.head)(userData) as string;

    const token = await client.createToken(userId)

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
