"use client";
import React, { useState } from "react";
import { FaChartPie } from "react-icons/fa";
import { FaCommentSms } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";

const SideHeader: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu menu-lg p-4 w-60 min-h-full bg-blue-600 text-base-100">
        {/* Sidebar content here */}
        <li
          className={`mb-2 ${
            selectedMenu === "dashboard"
              ? "bg-blue-800 rounded-btn text-base-100"
              : ""
          }`}
          onClick={() => setSelectedMenu("dashboard")}
        >
          <a className="flex items-center" href="/">
            <FaChartPie className="mr-1" style={{ fontSize: '1.5rem' }} />
            Dashboard
          </a>
        </li>
        <li
          className={`mb-2 ${
            selectedMenu === "send_sms"
              ? "bg-blue-800 rounded-btn text-base-100"
              : ""
          }`}
          onClick={() => setSelectedMenu("send_sms")}
        >
          <a className="flex items-center" href="#">
            <FaCommentSms className="mr-1" style={{ fontSize: '1.5rem' }} />
            Send SMS
          </a>
        </li>
        <li
          className={`mb-2 ${
            selectedMenu === "reports"
              ? "bg-blue-800 rounded-btn text-base-100"
              : ""
          }`}
          onClick={() => setSelectedMenu("reports")}
        >
          <a className="flex items-center" href="#">
            <TbReportAnalytics className="mr-1" style={{ fontSize: '1.5rem' }} />
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
  );
};

export default SideHeader;
