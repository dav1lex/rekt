import React from "react";
import {Displaylang} from "./Displaylang";
import {Langcontext} from "./Langcontext";

export class Seleksiyon extends React.Component {


    state = {
        lang: 'en'
    }
    handlelangchange = (event) => {
        this.setState({
            lang: event.target.value,
        })
    }


    render() {
        return (
            <>
                <select id="language-select" value={this.state.lang} onChange={this.handlelangchange}>
                    <option value="pol">Polish</option>
                    <option value="en">English</option>
                </select>
                <Langcontext.Provider value={this.state.lang}>
                    <Displaylang/>
                </Langcontext.Provider>
            </>
        );
    }
}