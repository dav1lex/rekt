import React from "react";
import {Clickcounter} from "./Clickcounter";
import {ClickTracker} from "./ClickTracker";

export class App extends React.Component {
    render() {
        return (
            <>
                <Clickcounter/>
                <h1>____________________</h1>

                <ClickTracker/>
            </>
        );
    }
}