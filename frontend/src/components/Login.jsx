import {TextField,FormControl,Button} from "@mui/material"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import React from "react";
import { Input } from 'antd';
import { showErrorAlert } from "../globalConstant";
import Instance from "../Axiosconfig";

const Login=()=>{
    let navigate=useNavigate()
    let [admin,setAdmin]=useState(true)
    let [teacher,setTeacher]=useState(false)
    let [student,setStudent]=useState(false)
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");

    let adminswitch=()=>{
        setEmail("")
        setPassword("")
        setAdmin(true)
        setTeacher(false)
        setStudent(false)
    }
    let teacherswitch=()=>{
        setEmail("")
        setPassword("")
        setAdmin(false)
        setTeacher(true)
        setStudent(false)
    }
    let studentswitch=()=>{
        setEmail("")
        setPassword("")
        setAdmin(false)
        setTeacher(false)
        setStudent(true)
    }

    let handleSubmit = async()=>{
        try {
            if (!email || email.trim() === "") {
                showErrorAlert("Please Enter Email");
                return;
            }
            if (!password || password.trim() === "") {
                showErrorAlert("Please Enter Password");
                return;
            }
            let payload = {email,password};
            const response = await Instance.post("/auth/login",payload);
            if (response.status === 200) {
                console.log(response?.data);
                const {responseData} = response?.data;
                if(responseData){
                    localStorage.setItem("loginUserData",JSON.stringify(responseData));
                    localStorage.setItem("token",responseData?.token);
                    localStorage.setItem("homeDashboard",true);
                    if (responseData?.userRole === 'STUDENT') {
                        navigate(`/studentprofile/${responseData?.userId}`)
                    }else{
                        navigate("/dashboard");
                    }
                }
            }
        } catch (error) {
            console.error(error);
            showErrorAlert(error?.response?.data?.message || "An error occurred. Please try again later.");  
        }
    }

    return(
        <section className="h-[100vh] w-[100%] flex flex-col justify-center items-center">
            <div className="h-[40px] w-[300px] rounded-[20px] overflow-hidden mb-[10px] shadow-sm shadow-slate-800">
                <button onClick={adminswitch} className="h-[40px] w-[100px]" style={{backgroundColor:admin?"rgb(25,118,210)":""}}>Admin</button>
                <button onClick={teacherswitch} className="h-[40px] w-[100px]" style={{backgroundColor:teacher?"rgb(25,118,210)":""}}>Teacher</button>
                <button onClick={studentswitch} className="h-[40px] w-[100px]" style={{backgroundColor:student?"rgb(25,118,210)":""}}>Student</button>
            </div>
            <FormControl className="h-[50vh] w-[40vh] rounded-[10px] p-3 shadow-sm shadow-black flex flex-col justify-evenly items-center">
                <h1>{admin?"Admin":teacher?"Teacher":"Student"} Login</h1>
                <Input 
                  placeholder="Enter Email"  
                  size="large" 
                  style={{width:"90%"}} 
                  onChange={(e)=>{
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <Input.Password 
                  placeholder="Enter password"  
                  size="large" 
                  style={{width:"90%"}}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                  value={password}
                />

                <Button onClick={handleSubmit} variant="contained">submit</Button>
            </FormControl>

        </section>
    )
}
export default Login