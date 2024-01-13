// src/modules/use-cases/createData.ts
import { DataEntity } from '@/modules/entities/DataEntity';

export const createData = async (data: DataEntity): Promise<void> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to create data');
        }

        // Handle successful response if needed
    } catch (error) {
        console.error('Error updating data:', (error as Error).message);
        throw error;
    }

};
