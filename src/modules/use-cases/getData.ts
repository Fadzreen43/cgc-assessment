// src/modules/use cases/getData.ts
import { DataEntity } from '@/modules/entities/DataEntity';


interface GetDataResult {
    data: DataEntity[];
  }


export const getData = async (): Promise<GetDataResult> => {
    try {
        const response = await fetch('https://testcasefe2023.ignorelist.com/api/v1/data/', {
            method: 'GET',
            headers: {
                'nim': '20210040120',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating data:', (error as Error).message);
        throw error;
    }

};
