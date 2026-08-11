import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from 'react-icons/fa'
import { FaFilm } from "react-icons/fa"

export default function Header() {
    const [menu, setmenu] = useState(false)
    return (
        <div className="relative z-50 flex justify-between p-4 bg-[#161B22] text-white font-bold">
            <div className="flex ">
                <h1 className="text-3xl flex gap-2">Movie App<FaFilm
                    className="text-purple-400  "
                    size={40}
                /></h1>
            </div>

            <button className="md:hidden 
                        text-2xl "
                onClick={() => {
                    console.log("button clicked")
                    setmenu(!menu)
                }}
            >{menu ? <FaTimes /> : <FaBars />}</button>
            <ul className=" hidden md:flex  absolute left-1/2 -translate-x-1/2 gap-20 text-xl mt-2 ">
                <li >
                    <NavLink
                        className={({ isActive }) =>
                            `border-b-4  rounded-b transition-transform duration-300 hover:scale-110 ${isActive ? "border-purple-500 text-purple-500" : 'text-white border-transparent'} pb-2   w-24  `
                        }
                        to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `border-b-4  rounded-b transition-transform duration-300 hover:scale-110 ${isActive ? "border-purple-500 text-purple-500" : 'text-white border-transparent'} pb-2   w-24  `
                        }
                        to='popular'>
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `border-b-4  rounded-b transition-transform duration-300 hover:scale-110 ${isActive ? "border-purple-500 text-purple-500" : 'text-white border-transparent'} pb-2   w-24  `
                        }
                        to='watchlist'>
                        WatchList
                    </NavLink>
                </li>
            </ul>
            {/* <div className="mt-2">
                search
            </div> */}
            {
                menu && (
                    <ul className=" absolute  top-full  right-0 md:hidden flex flex-col justify-center items-center gap-6 p-6  bg-[#0d1117] shadow-lg">
                        <li >
                            <NavLink

                                className={({ isActive }) =>
                                    `border-b-4  rounded-b transition-transform duration-300 hover:scale-110 ${isActive ? "border-purple-500 text-purple-500" : 'text-white border-transparent'} pb-2   w-24  `
                                }
                                to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    `border-b-4  rounded-b transition-transform duration-300 hover:scale-110 ${isActive ? "border-purple-500 text-purple-500" : 'text-white border-transparent'} pb-2   w-24  `
                                }
                                to='popular'>
                                Popular
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    `border-b-4  rounded-b transition-transform duration-300 hover:scale-110 ${isActive ? "border-purple-500 text-purple-500" : 'text-white border-transparent'} pb-2   w-24  `
                                }
                                to='watchlist'>
                                WatchList
                            </NavLink>
                        </li>
                    </ul>
                )
            }

        </div>
    )
}