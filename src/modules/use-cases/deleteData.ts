
export const deleteData = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`https://testcasefe2023.ignorelist.com/api/v1/data/${id}`, {
            method: 'DELETE',
            headers: {
                'nim': '20210040120', // Ganti dengan NIM Anda yang sebenarnya
            },
        });

        if (!response.ok) {
            throw new Error('Failed to delete data');
        }

        // Handle successful response if needed
    } catch (error) {
        console.error('Error updating data:', (error as Error).message);
        throw error;
    }

};
