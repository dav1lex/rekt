import React from "react";

export class Age extends React.Component {
    render() {
        return (
            this.props.age > 18 ?
                <p> You are {this.props.age} years old</p> :
                <p>you are very young</p>
        );
    }
}