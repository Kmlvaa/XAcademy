import { Route, Routes } from "react-router-dom";
import Layout from '../Layout/Layout'
import Welcome from "../WelcomePage/welcome";
import Home from '../HomePage/Index'
import Courses from '../Courses/course'
import Frontend from '../CourseInfo/Frontend/front'
import Backend from '../CourseInfo/Backend/index'
import Graphics from '../CourseInfo/Graphics/index'
import IELTS from '../CourseInfo/IELTS/index'
import QA from '../CourseInfo/QA/index'
import UX from '../CourseInfo/UX_UI/index'
import Marketing from '../CourseInfo/Marketing/index'
import Sales from '../CourseInfo/Sales/index'
import Digital from '../CourseInfo/DigitalMarketing/index'
import Teachers from '../Teachers/index'
import About from '../About/Index'
import Contact from '../Contact/Index'
import Teaher1 from '../TeacherInfo/Index'

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

                <Route path='/layout/teacher1' element={<Teaher1 />} />

                <Route path="/layout/frontend" element={<Frontend />} />
                <Route path="/layout/backend" element={<Backend />} />
                <Route path="/layout/graphic" element={<Graphics />} />
                <Route path="/layout/ielts" element={<IELTS />} />
                <Route path="/layout/QA" element={<QA />} />
                <Route path="/layout/Ux_UI" element={<UX />} />
                <Route path="/layout/marketing" element={<Marketing />} />
                <Route path="/layout/sales" element={<Sales />} />
                <Route path="/layout/digitalMarketing" element={<Digital />} />
            </Route>
        </Routes>
    );
}

export default index;