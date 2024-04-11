import { useEffect} from "react"
import { useNavigate, useParams } from 'react-router-dom'
import {TextField,FormControl,Button} from "@mui/material"
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { useState } from "react";   
import axios from "axios"
// ---
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";




const Editstudent=()=>{
    let userid=useParams()
    let navigate=useNavigate()
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [gender,setGender]=useState("Male")
    let [std,setStd]=useState("")
    let [phone,setPhone]=useState("")
    let [createpassword,setCreatepassword]=useState("")
    let [confirmpassword,setConfirmpassword]=useState("")
    let [passcheck,setPasscheck]=useState(false)
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    let getname=(e)=>{
        setName(e.target.value)
    }
    let getage=(e)=>{
        setAge(e.target.value)
    }
    let getgender=(e)=>{
        setGender(e.target.value)
    }
    let getstd=(e)=>{
        setStd(e.target.value)
    }
    let getphone=(e)=>{
        if (e.target.value.length<=10) {
            setPhone(e.target.value)
        }  
    }
    let getcreatepassword=(e)=>{
        setCreatepassword(e.target.value)
    }
    let getconfirmpassword=(e)=>{
        setConfirmpassword(e.target.value)
        if (createpassword!=e.target.value) {
            setPasscheck(true)
        }
        else{
            setPasscheck(false)
        }
    }

    useEffect(()=>{
        axios.get(`http://localhost:9424/singlestudent/${userid.id}`)
        .then((x)=>{
          setName(x.data.name)
          setAge(x.data.age)
          setGender(x.data.gender)
          setStd(x.data.std)
          setPhone(x.data.phone)
          setCreatepassword(x.data.password)
          setConfirmpassword(x.data.password)
        })
        .catch(()=>{console.log("error");})
    },[])

    let update=()=>{
        let payload={studentid:name+phone,name,age,gender,std,phone,password:confirmpassword}
            console.log(payload);
            axios.post(`http://localhost:9424/updatestudent/${userid.id}`,payload)
            .then((x)=>{
                console.log(x);
                if (x.data.acknowledged==true) {
                    navigate(`/studentprofile/${userid.id}`)
                }
            })
            .catch(()=>{console.log("error");})
    }
    return(
        <section className="h-[100vh] flex justify-center items-center">
        <FormControl className="h-[95vh] w-[50vh] rounded-[10px] shadow-sm shadow-slate-600 flex flex-col justify-evenly items-center">

          <h1>Update Form</h1>
          <TextField onChange={getname} value={name} className='w-[80%]' variant="outlined" label="Name"/>
          <TextField onChange={getage} value={age} className='w-[80%]' variant="outlined" label="Age"/>
          <FormLabel className='w-[80%]' size='small' id="demo-row-radio-buttons-group-label">Gender :</FormLabel>
          <RadioGroup
            value={gender}
            onChange={getgender}
            className='w-[80%]'
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="Male"
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          <TextField onChange={getstd} value={std} className='w-[80%]' variant="outlined" label="STD"/>
          <TextField onChange={getphone} value={phone} className='w-[80%]' variant="outlined" type="number" label="Phone no"/>
          {/* <TextField onChange={getcreatepassword} value={createpassword} className='w-[80%]' variant="outlined" type="password" label="Create Password"/> */}
          <FormControl sx={{ width: '80%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Create Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  value={createpassword}
                  onChange={getcreatepassword}
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
          {/* <TextField helperText={passcheck?"does not match the above password":""} onChange={getconfirmpassword} value={confirmpassword} className='w-[80%]' variant="outlined" type="password" label="Confirm Password"/> */}
          <FormControl  color={passcheck?"error":"primary"}   sx={{ width: '80%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  value={confirmpassword}
                  onChange={getconfirmpassword}
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
          <Button onClick={update} variant="contained">update</Button>
        </FormControl>
      </section>
    )
}
export default Editstudent