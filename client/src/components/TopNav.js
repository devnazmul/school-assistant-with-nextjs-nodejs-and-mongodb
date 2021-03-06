import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export default function TopNav() {
    return (
        <div className='w-full flex justify-center items-center px-2 md:px-5 shadow-md h-16'>
            <div className='w-8/12 sm:w-9/12 md:w-6/12 pr-3 md:pr-10'>
                <input className='focus:outline-none border-2 w-full rounded-full h-full px-2 py-1 flex justify-center items-center border-purple-200 active:border-purple-500 focus:border-purple-500' placeholder='search' type="text" />
            </div>
            <div className='w-4/12 sm:w-3/12 md:w-6/12 flex items-center h-full justify-end'>
                <NavLink
                className='block md:mr-2 mr-5'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#8c4af2" : "#ccc",
                        };
                    }}
                    to={`/notification`}
                >
                    <IoNotifications className='text-xl' />
                </NavLink>
                <NavLink
                    style={({ isActive }) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            borderRadius: '50%',
                            border: isActive ? "3px solid #8c4af2" : "3px solid #ccc",
                        };
                    }}
                    to={`/user_profile`}
                >
                    <img className='object-cover w-10 rounded-full overflow-hidden h-10' src="https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg" alt="" />
                </NavLink>
            </div>

        </div>
    )
}
