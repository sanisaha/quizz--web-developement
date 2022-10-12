import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const statistics = useLoaderData();
    console.log(statistics.data);
    return (
        <div>
            <div className='mb-10'>
                <h2 className='text-center text-3xl font-semibold'>Total questions from each category</h2>
            </div>
            <div className='w-auto h-96'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={800}
                        height={500}
                        data={statistics.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistics;