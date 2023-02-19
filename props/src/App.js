import React from "react";
import {Welcome} from "./Welcome";

export class App extends React.Component {
    name = <strong>John</strong>
    render() {
        return (
            <>
            <Welcome name={this.name} age={14}/>
            </>
        );
    }
}
