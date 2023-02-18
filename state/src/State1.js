import React from "react";

export class State1 extends React.Component {

    state = {
        count: 0  //
    }



    constructor(props) {
        super(props);

        setInterval(()=>{
            this.setState((state)=>{
                return {count: state.count +1}
            })
        },1000)
    }

    render() {
        return (
            <h1>
                I am excercise 1 (State 01) ==> {this.state.count}
            </h1>
        );
    }
}