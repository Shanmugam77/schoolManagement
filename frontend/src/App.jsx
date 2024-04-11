
import Editstudent from "./components/Editstudent"
import Editteacher from "./components/Editteacher"
import Home from "./components/Home"
import Login from "./components/Login"
import RegStudent from "./components/RegStudent"
import RegTeacher from "./components/RegTeacher"
import Studentlist from "./components/Studentlist"
import Studentprofile from "./components/Studentprofile"
import Teacherlist from "./components/Teacherlist"
import Teacherprofile from "./components/Teacherprofile"
import "./index.css"
import {Route,BrowserRouter,Routes} from "react-router-dom"


const App=()=>{
    return(
        <div >
         <BrowserRouter>
         <Routes>
            <Route element={<Login/>} path="/"/>
            <Route element={<Home/>} path="/home"/>
            <Route element={<Teacherlist/>} path="/teacher"/>
            <Route element={<Studentlist/>} path="/student"/>
            <Route element={<RegTeacher/>} path="/regteacher"/>
            <Route element={<RegStudent/>} path="/regstudent"/>
            <Route element={<Teacherprofile/>} path="/teacherprofile/:id"/>
            <Route element={<Studentprofile/>} path="/studentprofile/:id"/>
            <Route element={<Editteacher/>} path="/editteacher/:id"/>
            <Route element={<Editstudent/>} path="/editstudent/:id"/>
         </Routes>
         </BrowserRouter>
        </div>
    )
}
export default App