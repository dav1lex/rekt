import {useCounter} from './Counter'

function App() {
    const {counter, increment, decrement, reset} = useCounter(0,1,1)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default App;
