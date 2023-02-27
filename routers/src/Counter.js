import React, {useState} from "react";

export function Counter() {

    const [count, setcount] = useState(0)

    function increase() {
        setcount(c=>c+1)
    }

    function decrease() {
        setcount(c=>c-1)
    }

    function reset() {
        setcount(0)
    }
console.log(count)
    return (
        <>
            <h1>=={count}==</h1>
            <button onClick={increase} name='increaseButton'>increase</button>
            <button onClick={decrease} name='decreaseButton'>decrease</button>
            <button onClick={reset} name='resetButton'>reset</button>
        </>
    );
}