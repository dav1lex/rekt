import {useCallback, useState} from "react";

export const useCounter = (defVal = 0, increment = 0, decrement = 0) => {
    const [counter, setcounter] = useState(defVal)


    const handleincrement = useCallback(() => {
        setcounter(count => count + increment)
    }, [increment])

    const handleDecrement = useCallback(() => {
        setcounter(count => count - decrement)
    }, [decrement])

    const handleReset = useCallback(() => {
        setcounter(defVal)
    })

    return {
        counter: counter,
        increment: handleincrement,
        decrement: handleDecrement,
        reset: handleReset
    }
}

