// src/modules/use cases/updateData.ts
import { DataEntity } from '@/modules/entities/DataEntity';

export const updateData = async (id: number, newData: DataEntity): Promise<void> => {
    try {
        const response = await fetch(`https://testcasefe2023.ignorelist.com/api/v1/data/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'nim': '20210040120', // Ganti dengan NIM Anda yang sebenarnya
            },
            body: JSON.stringify(newData),
        });

        if (!response.ok) {
            throw new Error('Failed to update data');
        }

        // Handle successful response if needed
    } catch (error) {
        console.error('Error updating data:', (error as Error).message);
        throw error;
    }

};
