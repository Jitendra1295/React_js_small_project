
import React, { useRef, useState } from 'react';

function Timer() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null)

    const handleStartTime = () => {
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 10); // Increment by 10 milliseconds
        }, 10);

    }

    const handleStopTime = () => {
        clearInterval(intervalRef.current)
    }

    const handleResetTime = () => {
        clearInterval(intervalRef.current)
        setTime(0)

    }
    const formatTime = (timeInMilliseconds) => {
        const milliseconds = Math.floor((timeInMilliseconds % 1000) / 10);
        const seconds = Math.floor((timeInMilliseconds / 1000));
        const minutes = Math.floor((timeInMilliseconds / (1000 * 60)) % 60);
        const hours = Math.floor((timeInMilliseconds / (1000 * 60 * 60)) % 24);
        console.log(hours, minutes, seconds);
        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    }

    return (
        <div className="App">

            <div className='timer' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h1>Countdown Timer</h1>
                <div style={{ flexDirection: "row" }}>
                    <span>Hours </span>
                    <span>Minutes </span>
                    <span>Seconds </span>
                </div>
                <div style={{ flexDirection: "row", padding: 20 }}>
                    {formatTime(time)}
                </div>
                <div style={{ flexDirection: "row", padding: 20 }}>
                    <button onClick={() => { handleStartTime() }} style={{ margin: '0 10px' }}>Start</button>
                    <button onClick={() => { handleStopTime() }} style={{ margin: '0 10px' }}>Stop</button>
                    <button onClick={() => { handleResetTime() }} style={{ margin: '0 10px' }}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
