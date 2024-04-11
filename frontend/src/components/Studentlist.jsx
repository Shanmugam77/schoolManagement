import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import profileimg from "./assets/defaultprofile.jpg"
import {Button} from "@mui/material"
import  axios  from "axios"



const Studentlist=()=>{
    let navigate=useNavigate()
    let [data,setData]=useState([])


    useEffect(()=>{
        axios.get("http://localhost:9424/getstudentlist")
        .then((x)=>{
            // console.log(x.data);
            setData(x.data)
        })
    },[])

    let gotoreg=()=>{
        navigate("/regstudent")
    }
    return(
        <section className="flex flex-col justify-center items-center">
        <Button onClick={gotoreg} variant="contained" sx={{marginTop:"20px"}}>+ Add Student</Button>
        <div className='w-[100%] flex flex-wrap justify-evenly'>
            {data.map((x)=>{
              return(
                  <div className='h-[50vh] w-[17%] bg-black text-white shadow-md shadow-gray-800 rounded-[20px] mt-[40px] flex flex-col justify-evenly items-center'>
                      <img src={profileimg} alt="" className='h-[150px] w-[150px] rounded-[100%] shadow-md shadow-gray-300'/>
                      <h1 className='font-[700]'>Name : {x.name}</h1>
                      <h1 className='font-[700]'>STD : {x.std}</h1>
                      <Button onClick={()=>{navigate(`/studentprofile/${x._id}`)}} className='hover:scale-[1.1]' color='inherit' variant='outlined'>More info</Button>
                  </div>
            
              )
            })}
        </div>
        </section>
    )
}
export default Studentlist