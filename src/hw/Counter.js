import CounterHook from "./HWhook";


const Counter = () => {

    const res = CounterHook();
    console.log(res);

    return (
        <div>
            <hr/>
            <button onClick={res.incr}>+</button>
            <button onClick={res.dec}>-</button>
            <button onClick={res.random}>random</button>
            <button onClick={res.reset}>reset</button>
            <h3>result: {res.number} </h3>
        </div>

    )
}

export default Counter;
