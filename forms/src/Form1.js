import React from "react";
import {Welcome} from "./Welcome";


export class Form1 extends React.Component {
    state = {
        input: ''
    }

    eventhandler = (event) => {
        const val = event.target.value
        this.setState({
            input: val,
        })
    }

    render() {
        return (
            <>
                <input name='myinput' value={this.state.input} onChange={this.eventhandler}/>
                <Welcome name={this.state.input}/>
                <hr/>
            </>
        );
    }
}