import React from 'react'
import "./dashboard.css";
import { Carousel } from 'antd';

const Dashboard = () => {
  return (
    <div>
        <div className='count_display'>
          <div className='admin_count'>
            <span>TOTAL ADMIN:</span>
            <h3>1</h3>
          </div>
          <div className='teacher_count'>
            <span>TOTAL TEACHER:</span>
            <h3>30</h3>
          </div>
          <div className='student_count'>
            <span>TOTAL STUDENT:</span>
            <h3>100</h3>
          </div>
        </div>
        <Carousel autoplay className='img_container_for_school'>
          <div className='pick1'></div>
          <div className='pick2'></div>
          <div className='pick3'></div>
          <div className='pick4'></div>
        </Carousel>
      
    </div>
  )
}

export default Dashboard
