import { useState } from "react"
import { Link } from "react-router-dom"
import Studentlist from "./Studentlist"
import Teacherlist from "./Teacherlist"



const Home=()=>{
    let [teacher,setTeacher]=useState(true)
    let [student,setStudent]=useState(false)

    let gototeacher=()=>{
        setTeacher(true)
        setStudent(false)
    }
    let gotostudent=()=>{
        setStudent(true)
        setTeacher(false)
    }
    return(
        <section>
         <h1 className="text-center text-[30px] text-[rgb(25,118,210)]">WELCOME TO ADMIN PAGE</h1>
         <div className="h-[7vh] w-[100%] shadow-sm shadow-slate-600 flex justify-evenly items-center">
            <Link  onClick={gototeacher} className="h-[100%] w-[50%] flex justify-center items-center" style={{backgroundColor:teacher?"rgb(25,118,210)":"white"}}>Teacher-List</Link>
            <Link  onClick={gotostudent} className="h-[100%] w-[50%] flex justify-center items-center" style={{backgroundColor:student?"rgb(25,118,210)":"white"}}>Student-List</Link>
         </div>
         {student?<Studentlist/>:<Teacherlist/>}
        </section>
    )
}
export default Home