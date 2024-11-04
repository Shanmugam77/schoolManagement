import React, { useEffect, useState } from 'react'
import { Button, Table, Input } from 'antd'
import "./admin.css"
import {
    SearchOutlined,
    FilterOutlined,
    EditOutlined,
    DeleteOutlined
  } from "@ant-design/icons";
import Instance from '../../Axiosconfig';

const AdminList = () => {
    const [adminData,setAdminData] = useState([]);

    const fetchAdminData = async ()=>{
      try {
        const response = await Instance.get("/user",{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        if (response.status == 200) {
            const users = response?.data?.users || [];
            const admins = users?.filter(x => x?.role === "ADMIN");
            setAdminData(admins);
        }    
      } catch (error) {
          console.log(error?.response?.data);
      }
    }
    useEffect(()=>{
      fetchAdminData()   
    },[])


    const columns = [
        {
          title: "First Name",
          render: (text, item) => (
            <div>
              {item?.firstName || 'N/A'}
            </div>
          ),
          sorter: (a, b) => a?.firstName.localeCompare(b?.firstName),
        },
        {
          title: "Last Name",
          render: (text, item) => (
            <div>
              {item?.lastName || 'N/A'}
            </div>
          ),
          sorter: (a, b) => a?.lastName.localeCompare(b?.lastName),
        },
        {
            title: "Email",
            render: (text, item) => (
              <div>
                {item?.email || 'N/A'}
              </div>
            ),
            sorter: (a, b) => a?.email.localeCompare(b?.email),
          },
        {
          title: "Date",
          dataIndex: "createdAt",
          sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
          render: (text, item) => {
            return new Date(item?.createdAt).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" });
          },
        },
        {
          title: "Edit",
          dataIndex: "edit",
          render: (_, record) => (
            <EditOutlined
              key={`edit-${record?._id}`}
              className="edit-button-table"
            //   onClick={() => navigate(`/edit-post/${record._id}`)}
            />
          ),
        },
        {
          title: "Delete",
          dataIndex: "delete",
          render: (_, record) => (
            <DeleteOutlined
              key={`delete-${record._id}`}
              className="delete-button-table"
            //   onClick={() => {
            //     Swal.fire({
            //       title: "Are you sure",
            //       text: "You want to Delete?",
            //       showCancelButton: true,
            //       confirmButtonColor: "#555",
            //       cancelButtonColor: "#ce1b28",
            //       confirmButtonText: "Yes, Delete!"
            //     }).then((result) => {
            //       if (result.isConfirmed) {
            //         handleDelete(record._id)
            //       }
            //     })
            //   }}
            />
          ),
        },
      ];
  return (
    <div>
      <div className='main-title-all'>
        <span>Admin List</span>
        <button>Add Admin</button>
      </div>
      <div className='admin-list-section'>
           <div className="search-table-container">
            <Input
              placeholder="Search..."
            //   value={fileterParameters?.searchText}
            //   onChange={(e) => {
            //     let newData = { ...fileterParameters };
            //     newData['searchText'] = e.target.value;
            //     setFilterParameters(newData);
            //   }}
              className="search-input-table"
              prefix={<SearchOutlined />}
            />
            </div>
      </div>
      <div className="table-list">
          <Table
            columns={columns}
            dataSource={adminData}
            rowKey={(data) => data._id}
            // rowSelection={{
            //   type: 'checkbox',
            //   onChange: (selectedRowKeys, selectedRows) => {
            //     setFilterParameters(prevData => ({
            //       ...prevData,
            //       ['selectedRows']: selectedRowKeys
            //     }));
            //   },
            // }}
          />
        </div>
    </div>
  )
}

export default AdminList
