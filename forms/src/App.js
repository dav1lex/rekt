import React from "react";
import {Form1} from './Form1'
import {Form2} from './Form2'
import {Form3} from "./Form3";
import {Form4} from "./Form4";
import {Form5} from "./Form5";
import {Form6} from "./Form6";


export class App extends React.Component{

    state = {
        username: '',
        password: '',
        check: false
    }
    handleChildState = (childState) => {
        this.setState({
            ...childState
        }, () => {console.log(this.state)});
    }

    render() {
        return (
            <div>
                <Form1/>
                <Form2/>
                <Form3 onlogin={this.handleChildState}/>
                <Form4/>
                <Form5 onlogin={this.handleChildState}/>
                <Form6 onlogin={this.handleChildState}/>
            </div>
        );
    }
}