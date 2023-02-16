import React from "react";
import {Age} from './Age';

/*//if we don't pass prop, it will show nothing. To set default ,do like this: {prop || "default}*/

export class Welcome extends React.Component {

    render() {
        return (
            <>
                <p> Hello <strong>{this.props.name}</strong></p>
                {
                    this.props.age > 18 && this.props.age <65 ?
                        <Age age={this.props.age}/> :
                        this.props.age ?
                        <Age age={this.props.age}/> :
                        this.props.name === 'John' ?
                        <Age age={this.props.age}/> :
                        <div>son</div>


                }
            </>
        );

    }

}