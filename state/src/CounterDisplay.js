import React from "react";

export class CounterDisplay extends React.Component{


    render() {
        return (
            <div>
                <h1>
                    I am excercise 3 and 4 (State 03, 04) ==>{(this.props.thecount)}
                </h1>
            </div>
        );
    }
}