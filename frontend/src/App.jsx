import Login from "./components/Login"
import "./index.css"
import {Route,BrowserRouter,Routes} from "react-router-dom"
import DashboardPage from "./Page/Dashboard"
import TeacherlistPage from "./Page/Teacherlist"
import AdminListPage from "./Page/Adminlist"
import StudentListPage from "./Page/Studentlist"
import SettingPage from "./Page/Setting"
import HelpSupportPage from "./Page/Help&Support"


const App=()=>{
    return(
        <div >
         <BrowserRouter>
         <Routes>
            <Route element={<Login/>} path="/"/>
            <Route element={<DashboardPage/>} path="/dashboard"/>
            <Route element={<AdminListPage/>} path="/adminlist"/>
            <Route element={<TeacherlistPage/>} path="/teacherlist"/>
            <Route element={<StudentListPage/>} path="/studentlist"/>
            <Route element={<SettingPage/>} path="/setting"/>
            <Route element={<HelpSupportPage/>} path="/help"/>
         </Routes>
         </BrowserRouter>
        </div>
    )
}
export default App