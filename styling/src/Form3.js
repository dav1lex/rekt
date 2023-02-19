import React from "react";

export class Form3 extends React.Component {

    state = {
        username: '',
        password: '',
        check: false,
        disabled: true
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

    buttonhandler = (event) => {
        event.preventDefault()
    };


    render() {
        return (
            <div>
                <h1>Form 03</h1>
                <input name='username' value={this.state.username} onChange={this.handleinputs}/>
                <input name='password' value={this.state.password} type='password' onChange={this.handleinputs}/>
                <input name='check' value={this.state.checked} type='checkbox' onChange={this.handleinputs}/>
                <button id='buton' style={this.state.password.length > 8 ? {
                    backgroundColor: 'green',
                    color: 'white'
                } : {backgroundColor: 'red', color: 'white'}}
                        disabled={this.state.disabled}
                        onClick={this.buttonhandler}>Login buttonu
                </button>

                <hr/>
            </div>
        );
    }


}