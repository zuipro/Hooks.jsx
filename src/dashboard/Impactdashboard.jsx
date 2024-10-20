import React from 'react'
import Dashboard from './Dashboard'
import DashboardHeader from './DashboardHeader'

function Impactdashboard() {
  return (
    <div className='w-screen p-4 bg-[#D5F2D0]'>
        <DashboardHeader />
        <Dashboard/>
    </div>
  )
}

export default Impactdashboard