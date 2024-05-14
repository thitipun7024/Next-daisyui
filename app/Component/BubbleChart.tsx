import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BubbleChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bubble',
          data: {
            datasets: [
              {
                data: [{ x: 17, y: 3, r: 11 }],
                label: "Team A",
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                borderWidth: 2,
              },
              {
                data: [{ x: 10, y: 3, r: 20 }],
                label: "Team B",
                borderColor: "rgb(255, 205, 86)",
                backgroundColor: "rgba(255, 205, 86, 0.5)",
                borderWidth: 2,
              },
              {
                data: [{ x: 4, y: 14, r: 30 }],
                label: "Team C",
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderWidth: 2,
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: '# of wins',
                },
              },
              y: {
                title: {
                  display: true,
                  text: '# of games',
                },
              },
            },
          },
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} id="myChart"></canvas>;
};

export default BubbleChart;
