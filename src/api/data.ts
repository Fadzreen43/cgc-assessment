// src/api/data.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Implement logic to retrive data
    res.status(200).json([{ id: 1, title: 'Example', body: 'Lorem ipsum', userId: 100, }]);
  } else if (req.method === 'POST') {
    // Implement logic to create data
    res.status(200).json({ message: 'Create Data API' });
  } else if (req.method === 'PUT') {
    // Implement logic to update data
    res.status(200).json({ message: 'Update Data API' });
  } else if (req.method === 'DELETE') {
    // Implement logic to remove data
    res.status(200).json({ message: 'Delete Data API' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
