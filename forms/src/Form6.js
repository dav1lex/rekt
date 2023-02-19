import React from "react";

export class Form6 extends React.Component{
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
                <h1>Form 06</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name='username' autoFocus={true} placeholder={`i am auto focused`}/>
                    <input name='password' type='password' />
                    <input name='check' type='checkbox' />
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}