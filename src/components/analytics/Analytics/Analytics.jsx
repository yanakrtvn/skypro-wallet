import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  AnalyticsContainer,
  AnalyticsHeader,
  AnalyticsAmount,
  AnalyticsPeriod,
  ChartContainer
} from './Analytics.styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = ({ period }) => {
  const data = {
    labels: ['Еда', 'Транспорт', 'Жилье', 'Развлечения', 'Образование', 'Другое'],
    datasets: [{
      label: 'Расходы',
      data: [3590, 1835, 50, 1250, 600, 2306],
      backgroundColor: [
        'rgb(217, 182, 255)',
        'rgb(255, 181, 61)',
        'rgb(110, 228, 254)',
        'rgb(176, 174, 255)',
        'rgb(188, 236, 48)',
        'rgb(255, 185, 184)',
      ],
      borderColor: [
        'rgb(217, 182, 255)',
        'rgb(255, 181, 61)',
        'rgb(110, 228, 254)',
        'rgb(176, 174, 255)',
        'rgb(188, 236, 48)',
        'rgb(255, 185, 184)',
      ],
      borderWidth: 1,
      borderRadius: 12,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        display: false 
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} ₽`,
        },
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 0,
        },
      },
    },
    layout: {
      padding: 0,
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <AnalyticsContainer>
      <AnalyticsHeader>
        <AnalyticsAmount>9 581 ₽</AnalyticsAmount>
        <AnalyticsPeriod>
          {period ? `Расходы за ${period}` : 'Выберите период в календаре'}
        </AnalyticsPeriod>
      </AnalyticsHeader>

      <ChartContainer>
        <Bar 
          data={data} 
          options={options}
        />
      </ChartContainer>
    </AnalyticsContainer>
  );
};

export default Analytics;