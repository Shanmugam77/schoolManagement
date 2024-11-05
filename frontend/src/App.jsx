import Login from "./components/Login"
import "./index.css"
import {Route,BrowserRouter,Routes} from "react-router-dom"
import DashboardPage from "./Page/Dashboard"
import TeacherlistPage from "./Page/Teacherlist"
import AdminListPage from "./Page/Adminlist"
import StudentListPage from "./Page/Studentlist"
import SettingPage from "./Page/Setting"
import HelpSupportPage from "./Page/Help&Support"
import Protect from "./Protect"


const App=()=>{
    return(
        <div >
         <BrowserRouter>
         <Routes>
            <Route element={<Login/>} path="/"/>
            <Route element={<Protect Component={DashboardPage}/>} path="/dashboard"/>
            <Route element={<Protect Component={AdminListPage}/>} path="/adminlist"/>
            <Route element={<Protect Component={TeacherlistPage}/>} path="/teacherlist"/>
            <Route element={<Protect Component={StudentListPage}/>} path="/studentlist"/>
            <Route element={<Protect Component={SettingPage}/>} path="/setting"/>
            <Route element={<Protect Component={HelpSupportPage}/>} path="/help"/>
         </Routes>
         </BrowserRouter>
        </div>
    )
}
export default App