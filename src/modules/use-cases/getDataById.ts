// getDataById.ts
import { DataEntity } from '@/modules/entities/DataEntity';

export const getDataById = async (id: number): Promise<DataEntity> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data by id');
    }

    const result = await response.json();
    return result as DataEntity;
  } catch (error) {
    console.error('Error fetching data by id:', (error as Error).message);
    throw error;
  }
};
