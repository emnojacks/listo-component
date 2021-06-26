import React from 'react';
import { useState, useEffect } from 'react';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString('en-us', { timeZone:'EST'});
    return date;
}

const ClockApp = () => {

    const [time, setTime] = useState(getTimeString());
    
    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div>
        <h1 className="section-title">React Clock</h1>
        <hr className="explanation" />
            <p>Local Time: {time}
                <br />
            Location:  Chicago</p>
        </div>
        
    );
};

export default ClockApp;

