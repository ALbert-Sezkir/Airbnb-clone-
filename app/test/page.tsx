'use client'

import React, { useEffect, useState } from 'react';

interface DataItem {
    _id: string;
    name: string;
}

const TestPage: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data from API...');
                const res = await fetch('/api/test');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await res.json();
                console.log('Data fetched from API:', result);
                setData(result);
            } catch (error) {
                console.error('Error fetching data from API:', error);
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Test Data</h1>
            <ul>
                {data.map((item) => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TestPage;