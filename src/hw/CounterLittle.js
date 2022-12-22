import CounterHook from "./HWhook";

function CounterLittle() {
    const res = CounterHook();


    return (
        <div>
            <hr/>
            <button onClick={res.incr}>+</button>
            <button onClick={res.dec}>-</button>

            <h3>result: {res.number} </h3>
        </div>
    )
}

export default CounterLittle;
