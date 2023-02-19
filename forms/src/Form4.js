import React from "react";

export class Form4 extends React.Component {

    state = {
        username: '',
        password: '',
        check: false,
        disabled: true,
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

        this.state.username === '' ||
        this.state.password === '' ?
            this.state.disabled = true :
            this.state.disabled = false;
    }

    buttonhandler = () => {
        console.log(this.state)
    }


    clearthehouse = () => {
        this.setState({
            username: '',
            password: '',
            check: false
        })

    };


    render() {
        return (
            <div>
                <h1>Form 04</h1>
                <input name='username' value={this.state.username} onChange={this.handleinputs}/>
                <input name='password' value={this.state.password} type='password' onChange={this.handleinputs}/>
                <input name='check' checked={this.state.check} type='checkbox' onChange={this.handleinputs}/>
                <button id='buton' disabled={this.state.disabled} onClick={this.buttonhandler}>Login buttonu</button>
                <button onClick={this.clearthehouse}>Reset Button</button>
                <hr/>
            </div>
        );
    }


}