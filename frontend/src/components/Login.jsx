import {TextField,FormControl,Button} from "@mui/material"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
// ----
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";

const Login=()=>{
    let navigate=useNavigate()
    let [admin,setAdmin]=useState(true)
    let [teacher,setTeacher]=useState(false)
    let [student,setStudent]=useState(false)
    let [phone,setPhone]=useState("")
    let [password,setPassword]=useState("")
    let [studentid,setStudentid]=useState("")
    let phoneregex=/[0-9]{10}$/
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    let adminswitch=()=>{
        setPhone("")
        setPassword("")
        setAdmin(true)
        setTeacher(false)
        setStudent(false)
    }
    let teacherswitch=()=>{
        setPhone("")
        setPassword("")
        setAdmin(false)
        setTeacher(true)
        setStudent(false)
    }
    let studentswitch=()=>{
        setStudentid("")
        setPassword("")
        setAdmin(false)
        setTeacher(false)
        setStudent(true)
    }

    let getphone=(e)=>{
        if (e.target.value.length<=10) {
            setPhone(e.target.value)
        }
        
    }
    let getstudentid=(e)=>{
        setStudentid(e.target.value)
    }
    let getpassword=(e)=>{
        setPassword(e.target.value)
    }
    let adminsubmit=()=>{
        if (phone.length==10 && phone.match(phoneregex)) {
            let payload={phone,password}
            axios.post("https://schoolmanagement-api-39gd.onrender.com/loginadmin",payload)
            .then((x)=>{
                // console.log(x);
                if (x.data=="usernotfound") {
                    alert("Invalid user number")
                }
                else{
                    if (x.data.password!=password){
                        alert("wrong password")
                    }
                }
                if (x.data.password==password) {
                    navigate("/home")
                }
               
            })
            .catch((err)=>{console.log(err);})  
        }
        else{
            alert("invalid user number")
        }
       
    }
    let teachersubmit=()=>{
        if (phone.length==10 && phone.match(phoneregex)) {
            let payload={phone,password}
            axios.post("https://schoolmanagement-api-39gd.onrender.com/loginteacher",payload)
            .then((x)=>{
                // console.log(x);
                if (x.data=="usernotfound") {
                    alert("Invalid user number")
                }
                else{
                    if (x.data.password!=password){
                        alert("wrong password")
                    }
                }
                if (x.data.password==password) {
                    navigate(`/teacherprofile/${x.data._id}`)
                }
               
            })
            .catch((err)=>{console.log(err);})
        }
        else{
            alert("invalid user number")
        }  

    }
    let studentsubmit=()=>{
        let spayload={studentid,password}
        console.log(spayload);
        axios.post("https://schoolmanagement-api-39gd.onrender.com/loginstudent",spayload)
        .then((x)=>{
            // console.log(x);
            if (x.data=="usernotfound") {
                alert("Invalid studentid")
            }
            else{
                if (x.data.password!=password) {
                    alert("wrong password")
                }
            }
            if (x.data.password==password) {
                navigate(`/studentprofile/${x.data._id}`)
            }
            
        })
    }

    return(
        <section className="h-[100vh] w-[100%] flex flex-col justify-center items-center">
            <div className="h-[40px] w-[300px] rounded-[20px] overflow-hidden mb-[10px] shadow-sm shadow-slate-800">
                <button onClick={adminswitch} className="h-[40px] w-[100px]" style={{backgroundColor:admin?"rgb(25,118,210)":""}}>Admin</button>
                <button onClick={teacherswitch} className="h-[40px] w-[100px]" style={{backgroundColor:teacher?"rgb(25,118,210)":""}}>Teacher</button>
                <button onClick={studentswitch} className="h-[40px] w-[100px]" style={{backgroundColor:student?"rgb(25,118,210)":""}}>Student</button>
            </div>
            <FormControl className="h-[50vh] w-[40vh] rounded-[10px] shadow-sm shadow-black flex flex-col justify-evenly items-center">
                <h1>{admin?"Admin":teacher?"Teacher":"Student"} Login</h1>
                <TextField onChange={student?getstudentid:getphone} value={student?studentid:phone} variant="outlined" type="tel" label={student?"Student-ID":"Phone no"}/>
                {/* <TextField onChange={getpassword} value={password} variant="outlined" type="password"  label="password"/> */}
                <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  value={password}
                  onChange={getpassword}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                </FormControl>
                <Button onClick={admin?adminsubmit:teacher?teachersubmit:studentsubmit} variant="contained">submit</Button>
            </FormControl>

        </section>
    )
}
export default Login