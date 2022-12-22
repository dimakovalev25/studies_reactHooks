import {useState} from "react";

function CounterHook() {
    const randomNumber = Math.round(Math.random() * (50 - 1) + 1)

    const [number, setNumber] = useState(randomNumber);

    const incr = () =>  {
        setNumber(number + 1)
    }

    const dec = () => {
        setNumber(number - 1)
    }

    const reset = () => {
        setNumber(number * 0)
    }

    const random = () => {
        setNumber(randomNumber)
    }

    return {number, incr, reset, dec, random};

}

export default CounterHook;