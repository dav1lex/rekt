import React from "react";
import {Age} from './Age';

export class Welcome extends React.Component {
    render() {
        return (
            <>
                {/*//if we don't pass prop, it will show nothing. To set default ,do like this: {prop || "default}*/}
                <p> Hello {this.props.name}</p>
                <Age age={this.props.age}/>
            </>
        );
    }
}