import {Countik} from "./Countik";
import {Counter} from './Counter'
import {Githubuserlist} from "./Githubuserlist";

export function App() {

    function onCounterChange(val) {
        console.log(`current val=> ${val}`)
    }

    return (
        <>
            <Countik thatprop={onCounterChange}/>
            <Counter/>

            <Githubuserlist/>

        </>
    )
}