import React from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import SingleNavLinkButton from './SingleNavLinkButton';


export default function SideNav({logoSrc,navImageSrc,appName,menuName}) {
    return (
        <nav className='px-5 py-3'>
            <div className='w-full flex mb-5 justify-between items-center  text-xl  font-medium text-white'>
                <img className='w-12' src={logoSrc} alt="" /> {appName}
            </div>
            <h2 className='text-white text-lg font-semibold mb-5'>{menuName}</h2>
            <ul>
                <li className='mb-5 relative'>
                    <SingleNavLinkButton to={'/'} Icon={AiOutlineAppstore} title='Dashboard' btnNo={'1'} />
                </li>
                <li className='mb-5 relative'>
                    <SingleNavLinkButton to={`/classes`} Icon={SiGoogleclassroom} title='Classes' btnNo={'5'} />
                </li>
                <li className='mb-5 relative'>
                    <SingleNavLinkButton to={`/students`} Icon={FaGraduationCap} title='Students' btnNo={'3'} />
                </li>
                <li className='mb-5 relative'>
                    <SingleNavLinkButton to={`/teachers`} Icon={FaChalkboardTeacher} title='Teachers' btnNo={'2'} />
                </li>
                <li className='mb-5 relative'>
                    <SingleNavLinkButton to={`/calendar`} Icon={BiCalendar} title='Calendar' btnNo={'4'} />
                </li>
                
            </ul>
            <div className='bottom-0  flex justify-center flex-col relative items-center  w-full '>
                <img className='w-4/5 h-auto ' src={navImageSrc} alt="" />
                <h1 className='text-xs text-white font-mono'>
                    A School Management System
                </h1>
            </div>
        </nav>
    )
}