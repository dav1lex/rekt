import React from "react";
import {Welcome} from "./Welcome";
import {Calculate} from "./Calculate";

export class App extends React.Component {
    render() {
        return (
            <>
                <Welcome name='omer'/>
                <Calculate nums={[4,22,3]}/>
            </>
        )

    }
}
