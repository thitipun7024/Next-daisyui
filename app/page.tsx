"use client";
import React, { useEffect } from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

const data = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];

export default function page() {
  return (
    <div className="container sm:container md:container lg:container flex-wrap">
  <div className="flex flex-col lg:flex-row gap-2 items-center">
    <div className="container flex-wrap">
      <div className="flex flex-col lg:flex-row gap-3 items-center">
        <div className="flex flex-col w-full lg:w-2/4 gap-3">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full lg:w-2/4 bg-base-100 shadow-xl">
          <div className="card-body flex flex-col items-center justify-center">
            <h2 className="card-title">Card title!</h2>
            <div className="stat flex justify-center items-center">
              <div className="relative">
                <PieChart
                  series={[
                    {
                      paddingAngle: 2,
                      innerRadius: 80,
                      outerRadius: 120,
                      data,
                    },
                  ]}
                  margin={{ left: 100 }}
                  width={600}
                  height={300}
                  legend={{ hidden: true }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold">SMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full mt-3">
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body flex flex-col items-center justify-center">
        <h2 className="card-title">PieChart Full Width</h2>
        <div className="stat flex justify-center items-center">
        <LineChart
          xAxis={[
            { data: [1, 2, 3, 5, 8, 10] }
          ]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
            {
              data: [3, 5, 4, 8, 7, 1],
            },
            {
              data: [10, 15, 9, 7, 3, 4],
            },
          ]}
          height={300}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
        </div>
      </div>
    </div>
  </div>
</div>


  );
}
