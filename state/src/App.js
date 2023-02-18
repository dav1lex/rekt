import React from "react";
import {State1} from './State1'
import {State3} from './State3'

export class App extends React.Component {
    render() {
        return (
            <>
                <State1/>
                <State3 timeout={1000} startval={2} increment={1}/>
            </>
        );
    }
}
