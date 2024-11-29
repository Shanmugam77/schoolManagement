import React from 'react'
import Sidebar from '../../Layout/Header/sidebar'
import Header from '../../Layout/Header/Header'
import Dashboard from '../../components/dashboard/Dashboard'

const DashboardPage = () => {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <div className="main-wrapper">
        <Dashboard/>
      </div>
    </div>
  )
}

export default DashboardPage
