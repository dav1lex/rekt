import React from "react";

export class Lifecycle extends React.Component {

    state = {
        count: 0  //
    }

    componentDidMount() {

        setInterval(() => {
            this.setState((state) => {
                return {count: state.count + 1}
            })
        }, 1000)

        console.log("yes")

    }

    // constructor(props) {
    //     super(props);
    //
    //
    // }

    render() {
        return (
            <h1>
                I am lifecycle 1 (lifecycle 01) ==> {this.state.count}
            </h1>
        );
    }
}