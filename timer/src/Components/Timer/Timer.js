import React from "react"
import "./Timer.css";

function Timer() {
    // create a state variable to hold a string representing the current time, default value '--:--:--' 
    const [time, setTime] = React.useState("--:--:--")

    // create a useEffect function to set the current time string once every second
    React.useEffect(() => {
      const id = setInterval(() => currentTime(), 1000)
      return () => 
          clearInterval(id)
      
  }, [])

    // create a function to create a string to represent the current time in the format hh:mm:ss and set the state variable
    const  currentTime=()=>{
    let curDate = new Date();
    let  displayTime=curDate.toLocaleTimeString()
    setTime(displayTime)
    return displayTime
}

    // render timer
    return (
        <div>
            {/* show current time in the centre of the screen with a large font size suitable for all screen sizes */}
            <h1 className="timerStyle">Current Time</h1>
            <div data-testid="timer" className="timerStyle">{time}</div>
        </div>
    )
  }

export default Timer;
