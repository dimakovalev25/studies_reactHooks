import {useState} from "react";
import useButtonCounter from "./CounterHook";

const RndCounter = (props) => {

    const mainCounter = useButtonCounter()
    // console.log(mainCounter.counter);

    return (
        <div className="component">
            <div className="counter">{mainCounter.counter}</div>
            <div className="controls">
                <button onClick={mainCounter.rndCounter}>RND</button>
                <button onClick={mainCounter.resetCounter}>RESET</button>
            </div>
        </div>
    )
}

export default RndCounter;