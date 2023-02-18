import React from "react";
import {CounterDisplay} from "./CounterDisplay";

export class State3 extends React.Component {

    state = {
        count: this.props.startval
    }



    constructor(props) {
        super(props);

        setInterval(()=>{
            this.setState((state)=>{
                return {count: state.count + this.props.increment}
            })
        },this.props.timeout)
    }

    render() {
        return (
            <CounterDisplay thecount={this.state.count}/>
        );
    }
}