// src/api/data.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Implementasi logika untuk mengambil data
    res.status(200).json([{ id: 1, title: 'Example', description: 'Lorem ipsum', price: 100, author: 'John Doe' }]);
  } else if (req.method === 'POST') {
    // Implementasi logika untuk membuat data
    res.status(200).json({ message: 'Create Data API' });
  } else if (req.method === 'PUT') {
    // Implementasi logika untuk mengupdate data
    res.status(200).json({ message: 'Update Data API' });
  } else if (req.method === 'DELETE') {
    // Implementasi logika untuk menghapus data
    res.status(200).json({ message: 'Delete Data API' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
