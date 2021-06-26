import React, { useState, useEffect } from 'react';

const TimerApp = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    
    const tick = () => setSecondsElapsed(secondsElapsed + 1);
    
    useEffect(() => {
        //setting the timer to tick every one second
        let interval = setInterval(() => tick(), 1000);
        //turn the timer off when u nav away from page
        return () => clearInterval(interval);
    })
    
    // React will re-render on state changes, so we don't have to explicitly tell it to re-render when our state changes
    
    return (
        <div>
            <h1 className="section-title">React Timer</h1>
            <div>Seconds Elapsed: {secondsElapsed}</div>
        </div>
    );
};

export default TimerApp;

