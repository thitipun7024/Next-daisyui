import React from 'react'

export default function Header() {
  return (
    <div>
        <div className="navbar bg-base-100">
            <div className="flex-none">
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
            <div className="flex-1">
              <img src="https://minio.saksiam.co.th/public/saktech/logo/logo-sak-ai-2.png" className="h-12" />
              <a className="btn btn-ghost text-xl stat-value text-blue-900">SAKTECH SMS</a>
            </div>
            <div className="flex-none">
                
            </div>
        </div>
    </div>
  )
}
