import React, { useState, useEffect } from 'react';

export default function CurrentDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedDate = currentDate.toLocaleDateString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const formattedTime = currentDate.toLocaleTimeString('en-EN', { hour: '2-digit', minute: '2-digit' });

    return (
        <div className='w-3/12 m-auto'>
            <div className="date">{formattedDate}</div>
            <div className="time">{formattedTime}</div>
        </div>
    );
}
