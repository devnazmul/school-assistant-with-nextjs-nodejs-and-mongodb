import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/sass/styles.scss';

export default function EventCalendar() {
    const calanderRef = useRef(null)
    useEffect(() => {
        
    }, [])
    
    const [value, onChange] = useState(new Date());
    const localizer = momentLocalizer(moment)
    const myEventsList = [
        {
            title: "Pahela baishakh",
            start: '2022-04-15T23:53:50.351Z',
            end: '2022-04-15T00:53:50.352Z',
            allDay: false
        },
        {
            title: "Holi",
            start: '2022-04-15T23:53:50.351Z',
            end: '2022-04-15T00:53:50.352Z',
            allDay: false
        },
        {
            title: "test2",
            start: '2022-04-21T23:53:50.351Z',
            end: '2022-04-21T00:53:50.352Z',
            allDay: false
        },
        {
            title: "test3",
            start: '2022-04-12T23:53:50.351Z',
            end: '2022-04-12T00:53:50.352Z',
            allDay: false
        }
    ]
    return (
        <div className='w-full md:w-6/12 h-96 mt-3 rounded-md shadow-md'>

            <Calendar
                // tooltipAccessor={false}
                view='month'
                ref={calanderRef}
                className='bg-white p-5 rounded-md shadow-md'
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    )
}
