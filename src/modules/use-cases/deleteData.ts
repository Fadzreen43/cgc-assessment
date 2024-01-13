
export const deleteData = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
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
