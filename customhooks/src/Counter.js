import {useState} from "react";

export  const useCounter = (defVal = 0, increment = 0, decrement = 0) => {
    const [counter, setcounter] = useState(defVal)

    function handleincrement() {
        setcounter(counter+increment)
    }

    function handleDecrement() {
        setcounter(counter-decrement)
    }

    function handleReset() {
        setcounter(defVal)
    }

    return{
        counter:counter,
        increment:handleincrement,
        decrement:handleDecrement,
        reset:handleReset
    }
}

