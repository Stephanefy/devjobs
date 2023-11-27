import { FC } from 'react'
import { faker } from '@faker-js/faker';
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface Props {}


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Job offers by specilization',
      },
    },
  };

const labels = ['Frontend', 'Backend', 'Web designer', 'Tech lead'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: faker.color.rgb(),
        backgroundColor: faker.color.rgb(),
      },
    ],
  };

const StatsJobsFields: FC<Props> = (props): JSX.Element => {
    return (
        <div className='bg-gray-100 opacity-70 p-6 w-12/12 lg:w-6/12 rounded-lg'>
            <Bar options={options} data={data} className='w-full' />
        </div>
    )
}

export default StatsJobsFields
