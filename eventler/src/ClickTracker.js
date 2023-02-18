import React from "react";

export class ClickTracker extends React.Component {
    state = {
        message: "",
    };

    eventHandler = (param) => {

        this.setState(() => {
            return (
                param.target.name === 'first' ? {message: "first button"} :
                    param.target.name === 'second' ? {message: 'second button'} :
                        param.target.name === 'third' ? {message: 'third button'} :
                            console.log('bruh'))
        });
    };


    render() {
        return (
            <div>
                <h1>Events 03==>{this.state.message}</h1>
                <button onClick={this.eventHandler} name="first">first</button>
                <button onClick={this.eventHandler} name="second">sekond</button>
                <button onClick={this.eventHandler} name="third">third</button>
            </div>
        );
    }
}