import {useState} from "react";

function useButtonCounter() {

    const defaultValue = (Math.random() * (50 - 1) - 1).toFixed(0);
    const [counter, setCounter] = useState(defaultValue);
    console.log(defaultValue)

    const incCounter = () => {
        setCounter(counter => counter * 1 + 1)
    }

    const decCounter = () => {
        setCounter(counter => counter - 1)
    }

    const rndCounter = () => {
        setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
    }

    const resetCounter = () => {
        setCounter(0)
    }

    return {counter, incCounter, decCounter, rndCounter, resetCounter}
}

export default useButtonCounter;


//
// const useCounter = () => {
//     const [value, setValue] = React.useState(null)
//     const [rnd, setRnd] = React.useState(false)
//
//     React.useEffect(() => {
//         axios.get('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
//             .then(res => setValue(res.data))
//             .catch(e => throw new Error(e.message))
//     }, [rnd])
//
//     const onAction = (action, limit) => {
//         switch(action) {
//             case "INC": {
//                 value < limit ? setValue(value => value + 1) : null
//                 break
//             }
//             case "DEC": {
//                 value > limit ? setValue(value => value - 1) : null
//                 break
//             }
//             case "RND": {
//                 setRnd(rnd => !rnd)
//                 break
//             }
//             case "RESET": {
//                 setValue(0)
//                 break
//             }
//             default: {
//                 setValue(0)
//                 throw new Error('action name is required')
//                 break
//             }
//         }
//     }
//
//     return {value, onAction}
// }
//
//
// const Counter = () => {
//     const counter = useCounter()
//     const {onAction, value} = counter
//     return (
//         <div className="component">
//             <div className="counter">{value}</div>
//             <div className="controls">
//                 <button onClick={() => onAction("INC", 50)}>INC</button>
//                 <button onClick={() => onAction("DEC", -50)}>DEC</button>
//                 <button onClick={() => onAction("RND")}>RND</button>
//                 <button onClick={() => onAction("RESET")}>RESET</button>
//             </div>
//         </div>
//     )
// }
//
// const RndCounter = () => {
//     const counter = useCounter()
//     const {onAction, value} = counter
//     return (
//         <div className="component">
//             <div className="counter">{value}</div>
//             <div className="controls">
//                 <button onClick={() => onAction("RND")}>RND</button>
//                 <button onClick={() => onAction("RESET")}>RESET</button>
//             </div>
//         </div>
//     )
// }
//
// const App = () => {
//     return (
//         <>
//             <Counter/>
//             <RndCounter/>
//         </>
//     )
// }
//
// ReactDOM.render(<App />, document.getElementById('app'));