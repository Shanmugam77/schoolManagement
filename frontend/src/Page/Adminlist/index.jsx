import React from 'react'
import Sidebar from '../../Layout/Header/sidebar'
import Header from '../../Layout/Header/Header'
import AdminList from '../../components/admin/AdminList'

const AdminListPage = () => {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <div className='main-wrapper'>
          <AdminList/>
      </div>
    </div>
  )
}

export default AdminListPage
