"use client";
import React, { useState } from "react";
import { FaChartPie } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://minio.saksiam.co.th/public/saktech/logo/logo-sak-ai-2.png"
            className="h-12"
            alt="logo"
          ></img>
          <a className="text-xl ml-3 font-bold">SAKTECH SMS</a>
        </div>
        <div className="flex-none gap-2">
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <button className="btn btn-primary join-item">
              <IoSearch fontSize="20" />
            </button>
          </div>
        </div>
      </div>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu menu-lg p-4 w-60 min-h-full bg-blue-600 text-base-100">
            {/* Sidebar content here */}
            <li
              className={`mb-2 ${selectedMenu === 'dashboard' ? 'bg-blue-800 rounded-btn' : ''}`}
              onClick={() => setSelectedMenu('dashboard')}
            >
              <a className="flex items-center">
                <FaChartPie className="mr-2" />
                Dashboard
              </a>
            </li>
            <li
              className={`mb-2 ${selectedMenu === 'send_sms' ? 'bg-blue-800 rounded-btn' : ''}`}
              onClick={() => setSelectedMenu('send_sms')}
            >
              <a className="flex items-center">
                <FaChartPie className="mr-2" />
                Send SMS
              </a>
            </li>
            <li
              className={`mb-2 ${selectedMenu === 'reports' ? 'bg-blue-800 rounded-btn' : ''}`}
              onClick={() => setSelectedMenu('reports')}
            >
              <a className="flex items-center">
                <FaChartPie className="mr-2" />
                Reports
              </a>
            </li>
            <hr></hr>
            {/* Login button */}
            <li>
              <button className="btn btn-primary w-full mt-5">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
