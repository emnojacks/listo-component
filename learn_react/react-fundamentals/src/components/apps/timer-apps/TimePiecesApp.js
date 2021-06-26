import React from 'react';
import TimerApp from './TimerApp';
import ClockApp from './ClockApp';
import ClockChallenge from './ClockChallenge';
import StopWatchApp from './StopWatchApp';


const TimePiecesApp = () => {

    return (

        <div className='main'>
            <div className="mainDiv">
                
                <TimerApp />
                <hr />
                <ClockApp />
                <hr />
                <ClockChallenge />
                <hr />
                <StopWatchApp />
                
            </div>
        </div>
    )
};


export default TimePiecesApp;

