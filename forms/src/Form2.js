import React from "react";

export class Form2 extends React.Component {

    state = {
        username: '',
        password: '',
        check: false,
    };

    handleinputs = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const ischecked = event.target.checked;

        this.setState({
            [name]: type === 'checkbox' ? ischecked : value
        })
    }

    componentDidUpdate() {
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <h1>Form 02</h1>
                <input name='username' onChange={this.handleinputs}/>
                <input name='password' type='password' onChange={this.handleinputs}/>
                <input name='check' type='checkbox' checked={this.state.checked} onChange={this.handleinputs}/>
                <hr/>
            </div>
        );
    }
}