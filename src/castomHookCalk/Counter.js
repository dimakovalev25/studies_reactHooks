import {useState} from "react";
import useButtonCounter from "./CounterHook";

const Counter = (props) => {

    const mainCounter = useButtonCounter()

    return (
        <div className="component">
            <div className="counter">{mainCounter.counter}</div>
            <div className="controls">
                <button onClick={mainCounter.incCounter}>INC</button>
                <button onClick={mainCounter.decCounter}>DEC</button>
                <button onClick={mainCounter.rndCounter}>RND</button>
                <button onClick={mainCounter.resetCounter}>RESET</button>
            </div>
        </div>
    )
}

export default Counter;