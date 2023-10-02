import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import ClusterChart from './ClusterChart';
import { BarChart } from '@mui/x-charts/BarChart';

export default function StatisticsPage() {
    return (
        <div className=' flex flex-col justify-evenly h-full'>
            <div className=' flex flex-row justify-evenly w-full'>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    width={500}
                    height={400}
                />
                <ClusterChart />

            </div>
            <div className=' flex flex-row justify-evenly w-full'>

                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4,] }, { data: [ 3] }, { data: [6] }]}
                    width={500}
                    height={300}
                />

            </div>

        </div>

    )
}
