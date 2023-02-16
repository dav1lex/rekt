import React from "react";
import {Welcome} from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <Welcome name={<strong>omer</strong>} age={33}/> //if we don't pass prop, it will show nothing. To set default do like this: {prop || "default}
        );
    }
}
