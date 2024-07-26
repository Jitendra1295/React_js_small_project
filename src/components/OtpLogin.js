import React, { useState, useRef, useEffect } from 'react'

const OtpLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState()
    const [showOtp, setShowOtp] = useState(false)
    const [otp, setOpt] = useState(new Array(4).fill(""))
    const inputRef = useRef([])

    function outer() {
        let name = "jeet";
        function inner() {
            console.log(name);
        }
        return inner
    }
    const closer = outer()
    console.log(closer);

    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus()
        }
    }, [])
    const handleOnChange = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleChange = (event, index) => {
        const value = event.target.value;
        console.log("handleChange:", value);
        if (isNaN(value)) return;
        const newOtp = [...otp]
        newOtp[index] = value.subString(value.length - 1)
        setOpt(newOtp)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        const regex = /[^0-9]/g
        if (regex.test(phoneNumber) || phoneNumber.length < 10) {
            alert("Invalid Phone Number")
        } else {
            setShowOtp(true)
        }

    }
    return (
        <div className='main' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {!showOtp ? (<form onSubmit={handleSubmit}>
                <input type="text" value={phoneNumber} onChange={handleOnChange}>
                </input>
                <button type="submit">Submit</button>
            </form>) : (
                <div>
                    <span>Enter opt sent to this :{phoneNumber}</span>
                    <div style={{ marginTop: 20 }}>
                        {otp.map((item, index) => {
                            return (
                                <input
                                    key={index}
                                    type="text"
                                    value={item}
                                    onChange={(e) => { handleChange(e, index) }}
                                    ref={(input) => (inputRef.current[index] = input)}
                                    style={{
                                        width: "53px",
                                        height: "53px", marginRight: 10
                                    }}
                                />
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default OtpLogin
