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

const barValuePlugin = {
  id: 'barValueLabels',
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    ctx.save();
    
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      
      meta.data.forEach((bar, index) => {
        const value = dataset.data[index];
        const x = bar.x;
        const y = bar.y;
        const width = bar.width;
        
        if (value === 0) {
          ctx.fillStyle = dataset.backgroundColor[index];
          ctx.fillRect(x - width / 2, bar.base - 4, width, 4);
          ctx.fillStyle = 'rgba(0, 0, 0, 1)';
          ctx.font = '600 16px Montserrat';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(`${value} ₽`, x, bar.base - 8);
        } else {
          ctx.fillStyle = 'rgba(0, 0, 0, 1)';
          ctx.font = '600 16px Montserrat';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(`${value} ₽`, x, y - 5);
        }
      });
    });
    
    ctx.restore();
  }
};

ChartJS.register(barValuePlugin);

const Analytics = ({ period }) => {
  const expenses = [3590, 1835, 0, 1250, 600, 2306];
  const totalAmount = expenses.reduce((sum, amount) => sum + amount, 0);

  const data = {
    labels: ['Еда', 'Транспорт', 'Жилье', 'Развлечения', 'Образование', 'Другое'],
    datasets: [{
      label: 'Расходы',
      data: expenses,
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
        enabled: false,
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        grid: {
          display: false,
        },
        min: 0,
        suggestedMin: 0,
        suggestedMax: Math.max(...expenses) * 1.1,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 0,
          color: 'rgba(0, 0, 0, 1)',
          font: {
            family: 'Montserrat',
            size: 12,
            weight: 400,
            lineHeight: '100%',
          },
        },
        border: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        top: 30,
      },
    },
    animation: {
      duration: 1000,
    },
    interaction: {
      mode: null,
      intersect: false,
    },
    events: [],
    hover: {
      mode: null,
    },
  };

  return (
    <AnalyticsContainer>
      <AnalyticsHeader>
        <AnalyticsAmount>{totalAmount.toLocaleString('ru-RU')} ₽</AnalyticsAmount>
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