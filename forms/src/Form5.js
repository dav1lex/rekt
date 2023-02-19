import React from "react";

export class Form5 extends React.Component{
    handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const check = event.target.elements.check.checked
        this.props.onlogin({
            'username': username,
            'password': password,
            'check': check
        });
    }

    render() {
        return (
            <div>
                <h1>Form 05</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name='username' />
                    <input name='password' type='password' />
                    <input name='check' type='checkbox' />
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}