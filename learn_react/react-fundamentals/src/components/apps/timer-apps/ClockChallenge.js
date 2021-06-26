import React from 'react';
import { useState, useEffect } from 'react';

const getTimeString = () => {
    let date = new Date(Date.now()).toLocaleTimeString('en-US', { timeZone: 'PST' });
     return date;
}

// const getLocation = () => {
//     if (navigator.geolocation)
//     {
//     const location = navigator.geolocation.getCurrentPosition();
//     return location;
//     }
//     else {
//         window.alert("Cannot retrieve your location.")
//     }
// }

const ClockChallenge = () => {

    const [time, setTime] = useState(getTimeString());
   // const [location, setLocation] = useState(getLocation());
    
    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div>
        <h1 className="section-title">Clock Challenge</h1>
        <hr className="explanation" />
            <p>Local Time: {time}
                <br />
                Location:  Portland </p>
            {/*} <p>{location}</p>*/}
        </div>
        
    );
};

export default ClockChallenge;

