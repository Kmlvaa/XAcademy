import { Route, Routes } from "react-router-dom";
import Layout from '../Pages/Layout/Layout'
import Welcome from "../Pages/WelcomePage/welcome";
import Home from '../Pages/HomePage/Index'
import Courses from '../Pages/Courses/course'
import CourseInfo from '../Pages/CourseInfo/Index'
import Teachers from '../Pages/Teachers/index'
import About from '../Pages/About/Index'
import Contact from '../Pages/Contact/Index'
import Teaher1 from '../Pages/TeacherInfo/Index'
import Login from '../Pages/Account/Login/Login'

function index() {
    return (
        <Routes>
            <Route path="/" index element={<Welcome />} />
            <Route path="/layout" element={<Layout />}>
                <Route path="/layout/home" element={<Home />} />
                <Route path="/layout/course" element={<Courses />}/>
                <Route path="/layout/teachers" element={<Teachers />}/>
                <Route path="/layout/about" element={<About />}/>
                <Route path="/layout/contact" element={< Contact/>}/>

                <Route path='/layout/teacher/:id' element={<Teaher1 />} />
                <Route path="/layout/course/:id" element={<CourseInfo />}/>

                <Route path="/layout/account/login" element={<Login />}/>
            </Route>
        </Routes>
    );
}

export default index;