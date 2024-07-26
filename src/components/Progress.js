import React, { useEffect, useState } from 'react'

const Progress = () => {
    const [value, setValue] = useState(0)
    const [percentage, setPercentage] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setValue(prev => prev + 1)
        }, [1000])
    }, [])

    useEffect(() => {
        setPercentage(Math.min(100, Math.max(value, 0)))
    }, [value])
    return (
        <div className='main' style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <span>Progress Bar</span>
            <div className='progress' style={{ position: "relative", height: "25px", width: "70%", backgroundColor: "rgb(233, 236, 239)", border: "1px solid #c5c5c5", margin: "20px", borderRadius: "9px", overflow: "hidden" }} >
                <span
                    style={{ position: "absolute", display: "flex", width: "100%", zIndex: 99, justifyContent: "center", alignItems: "center" }}
                >{percentage.toFixed()}%</span>
                <div style={{
                    backgroundColor: "#00c251",
                    borderRadius: "9px",
                    color: "#fff",
                    height: "100%",
                    textAlign: "center",
                    transform: `scaleX(${percentage / 100})`,
                    transformOrigin: "left"
                }} />
            </div>
        </div>
    )
}

export default Progress
