import React from 'react'
import Sidebar from '../../Layout/Header/sidebar'
import Header from '../../Layout/Header/Header'

const DashboardPage = () => {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <div className="main-wrapper">
        <h1>hi</h1>
        <div className='h-[100vh] bg-amber-300'>

        </div>
      </div>
    </div>
  )
}

export default DashboardPage
