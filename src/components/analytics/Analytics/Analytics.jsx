import React, { useEffect, useState } from 'react';
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
import { useTransactions } from '../../../hooks/useTransactions';
import {
  AnalyticsContainer,
  AnalyticsHeader,
  AnalyticsAmount,
  AnalyticsPeriod,
  ChartContainer,
  LoadingMessage
} from './Analytics.styled';
import { getCategoryName } from '../../../utils/categoryUtils';
import { getYear } from 'date-fns';

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
        
        if (value === 0) {
          ctx.fillStyle = dataset.backgroundColor[index];
          ctx.fillRect(x - bar.width / 2, bar.base - 4, bar.width, 4);
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
  const { transactions } = useTransactions();
  const [chartData, setChartData] = useState(null);
  const [periodTitle, setPeriodTitle] = useState('');

  const currentYear = getYear(new Date());
  const categories = ['food', 'transport', 'housing', 'entertainment', 'joy', 'education', 'others'];

  const formatDateDisplay = (dateString) => {
    if (!dateString) return '';
    
    try {
      if (dateString.match(/^\d{1,2}-\d{1,2}-\d{4}$/)) {
        const [month, day, year] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      }
      
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      }
      
      return dateString;
    } catch {
      return dateString;
    }
  };

  const getPeriodTitle = () => {
    if (!period || !period.start) {
      return `Общие расходы ${currentYear}`;
    }

    const startDate = formatDateDisplay(period.start);
    
    if (!period.end || period.start === period.end) {
      return `Расходы за ${startDate}`;
    } else {
      const endDate = formatDateDisplay(period.end);
      return `Расходы за ${startDate} - ${endDate}`;
    }
  };

  useEffect(() => {
    setPeriodTitle(getPeriodTitle());
  }, [period]);

  useEffect(() => {
    if (transactions.length > 0) {
      const expensesByCategory = categories.map(category => {
        return transactions
          .filter(transaction => transaction.category === category)
          .reduce((sum, transaction) => sum + transaction.sum, 0);
      });

      const totalAmount = expensesByCategory.reduce((sum, amount) => sum + amount, 0);

      const data = {
        labels: categories.map(cat => getCategoryName(cat)),
        datasets: [{
          label: 'Расходы',
          data: expensesByCategory,
          backgroundColor: [
            'rgb(217, 182, 255)',
            'rgb(255, 181, 61)',
            'rgb(110, 228, 254)',
            'rgb(176, 174, 255)',
            'rgb(255, 185, 184)',
            'rgb(188, 236, 48)',
            'rgb(180, 180, 180)',
          ],
          borderColor: [
            'rgb(217, 182, 255)',
            'rgb(255, 181, 61)',
            'rgb(110, 228, 254)',
            'rgb(176, 174, 255)',
            'rgb(255, 185, 184)',
            'rgb(188, 236, 48)',
            'rgb(180, 180, 180)',
          ],
          borderWidth: 1,
          borderRadius: 12,
        }],
      };

      setChartData({ data, totalAmount });
    } else {
      const emptyData = {
        labels: categories.map(cat => getCategoryName(cat)),
        datasets: [{
          label: 'Расходы',
          data: categories.map(() => 0),
          backgroundColor: [
            'rgb(217, 182, 255)',
            'rgb(255, 181, 61)',
            'rgb(110, 228, 254)',
            'rgb(176, 174, 255)',
            'rgb(255, 185, 184)',
            'rgb(188, 236, 48)',
            'rgb(180, 180, 180)',
          ],
          borderColor: [
            'rgb(217, 182, 255)',
            'rgb(255, 181, 61)',
            'rgb(110, 228, 254)',
            'rgb(176, 174, 255)',
            'rgb(255, 185, 184)',
            'rgb(188, 236, 48)',
            'rgb(180, 180, 180)',
          ],
          borderWidth: 1,
          borderRadius: 12,
        }],
      };
      setChartData({ data: emptyData, totalAmount: 0 });
    }
  }, [transactions]);

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

  if (!chartData) {
    return (
      <AnalyticsContainer>
        <LoadingMessage>Загрузка аналитики...</LoadingMessage>
      </AnalyticsContainer>
    );
  }

  return (
    <AnalyticsContainer>
      <AnalyticsHeader>
        <AnalyticsAmount>{chartData.totalAmount.toLocaleString('ru-RU')} ₽</AnalyticsAmount>
        <AnalyticsPeriod>
          {periodTitle}
        </AnalyticsPeriod>
      </AnalyticsHeader>

      <ChartContainer>
        <Bar 
          data={chartData.data} 
          options={options}
        />
      </ChartContainer>
    </AnalyticsContainer>
  );
};

export default Analytics;