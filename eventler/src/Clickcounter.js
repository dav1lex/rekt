import React from "react";

export class Clickcounter extends React.Component {

    state = {num: 0}

    increase = () => {
        return this.setState((state) => {
            return {
                num: state.num + 1
            }
        })
    }

    decrease = () => {
        return this.setState((state) => {
            return {
                num: state.num - 1
            }
        })
    }

    reset = ()=>{
        return this.setState(()=>{
            return{
                num: 0
            }
        })
    }

    render() {
        return (
            <>
                <h1>Events 01 ==>{this.state.num}</h1>
                <button onClick={this.increase} name='increaseButton'>increase</button>
                <button onClick={this.decrease} name='decreaseButton'>decrease</button>
                <button onClick={this.reset} name='resetButton'>reset</button>
            </>
        );
    }
}