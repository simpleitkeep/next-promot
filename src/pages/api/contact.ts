// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // process form
    res.status(200).json({ message: 'Received' })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
