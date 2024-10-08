import { NavLink, Outlet } from "react-router-dom";
import './layout.css'
import Logo from '../Assets/AladdinLogo.png'
import Insta from '../Assets/insta.jpg'
import Facebook from '../Assets/facebook.png'
import Linkedin from '../Assets/linkedin.webp'
import Youtube from '../Assets/youtube-logo.svg'
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
import Apply from "../Components/Apply";

function Layout() {

    const [title, setTitle] = useState('Pages');

    return (
        <>
            <div className="Header flex flex-row justify-between px-24 py-7 top-0 shadow-sm fixed bg-white w-full max-[1200px]:px-5 z-30">
                <div className="Header-left flex flex-row items-center font-semibold w-px300">
                    <img src={Logo} width={50} height={50} />
                    <h1 className="text-3xl text-logoBlue max-[520px]:hidden">Academy X</h1>
                </div>
                <div className="Header-right flex flex-row justify-center items-center">
                    <div className="max-[930px]:hidden">
                        <NavLink to='/layout/atricle' className="hover:text-Blue cursor-pointer mx-7 text-3x1">Məqalələr</NavLink>
                        <NavLink to='/layout/contact' className="hover:text-Blue cursor-pointer mx-7">Əlaqə</NavLink>
                        <NavLink to='/layout/about' className="hover:text-Blue cursor-pointer mx-7">Haqqımızda</NavLink>
                    </div>
                    {/* <div className="max-lg:block hidden">
                        <DropdownButton id="dropdown-basic-button" title={title}>
                            <Dropdown.Item><NavLink to='/layout/atricle' className="hover:text-Blue cursor-pointer mx-7 text-3x1">Məqalələr</NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to='/layout/contact' className="hover:text-Blue cursor-pointer mx-7">Əlaqə</NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to='/layout/about' className="hover:text-Blue cursor-pointer mx-7">Haqqımızda</NavLink></Dropdown.Item>
                        </DropdownButton>
                    </div> */}
                    <button className="text-white bg-logoBlue py-2 px-6 border-0 rounded-md ml-20 text-2x1 cursor-pointer w-px150">Təlimə qoşul</button>
                </div>
            </div>
            <Outlet />
            <Apply />
            <div className="Layout-Footer flex flex-col justify-center w-full px-28 max-[1200px]:px-5">
                <div className="Logos flex flex-row justify-between w-full">
                    <div className="Header-left flex flex-row items-center font-semibold">
                        <img src={Logo} width={50} height={50}/>
                        <h1 className="text-3xl text-blue-600 max-w-md:hidden">Academy X</h1>
                    </div>
                    <div className="Footer-right flex flex-row items-center justify-evenly w-44">
                        <img src={Insta} width={30} height={30} className="hover:cursor-pointer" />
                        <img src={Linkedin} width={30} height={30} className="hover:cursor-pointer" />
                        <img src={Youtube} width={30} height={30} className="hover:cursor-pointer" />
                        <img src={Facebook} width={30} height={30} className="hover:cursor-pointer" />
                    </div>
                </div>
                <div className="List grid grid-cols-4 justify-between w-full mt-28 mb-20 max-md:grid-cols-2 max-[400px]:grid-cols-1">
                    <div className="pl-2">
                        <p className="text-xl font-medium mb-4">Şirkət</p>
                        <ul>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">Tədbirlər</li>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">Xəbərlər & Bloqlar</li>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">Suallar</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xl font-medium mb-4">Kursumuz</p>
                        <ul>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">Kurslar</li>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">Müəllimlər</li>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">Karyera</li>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">Müəllim ol</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xl font-medium mb-4">Haqqımızda</p>
                        <ul>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">Yeniliklər</li>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">Partnyorlar</li>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">Ətraflı</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xl font-medium mb-4">Əlaqə</p>
                        <ul>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">+(994) 00 000 00 00</li>
                            <li className="text-gray700 leading-10 hover:underline hover:text-Blue cursor-pointer">xacademy@gmail.com</li>
                            <li className="text-gray700  hover:underline hover:text-Blue cursor-pointer">Fuad İbrahimbəyov 20, Team Plaza 3-cü mərtəbə</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-black w-full h-px"></div>
                <div className="px-0 py-8">
                    <p className="text-sm text-gray500">© 2024 X Academy, Bütün hüquqları qorunur.</p>
                </div>
            </div>
        </>
    );
}

export default Layout;