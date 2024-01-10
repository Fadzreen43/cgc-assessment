// getDataById.ts
import { DataEntity } from '@/modules/entities/DataEntity';

export const getDataById = async (id: number): Promise<DataEntity> => {
  try {
    const response = await fetch(`https://testcasefe2023.ignorelist.com/api/v1/data/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'nim': '20210040120', 
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data by id');
    }

    const result = await response.json();
    return result.data as DataEntity;
  } catch (error) {
    console.error('Error fetching data by id:', (error as Error).message);
    throw error;
  }
};
