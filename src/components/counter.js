import { useState } from "react";
import "./counter.css"



export function Counter() {

    const [value, setValue] = useState(0)
    const setZero = () => {
        setValue(value == "0")
    }

    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        setValue(value - 1)
        if (value <= 0) {
            document.getElementById("mainValue").innerHTML = "NOW STOP"
        }
    }
    return (
        <div className="container">
            <div className="counterallCont">
            <div className="liveCountNumber">Number :
                <div id="mainValue"> {value}
                </div>
            </div>

            <div className="allButtonSec">
            <button  id="btngreen" onClick={increment}>Increment</button>

            <button id="btnred" onClick={decrement}>
                {value >= 0 ? value === 0 : alert = "now stop"}
                Decrement</button>
            {value > 10 && (
                <button onClick={setZero}>GO BACK TO 0</button>
            )}
            </div>
            </div>
        </div>
    )
}
export default Counter;


