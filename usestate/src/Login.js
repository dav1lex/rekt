import React, {useState} from "react";

export function Login() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [check, setcheck] = useState(false)

    function handleinputs(event) {
        const name = event.target.name;
        const val = event.target.value;
        const ischecked = event.target.checked;

        name === 'username' ? setusername(val) :
            name === 'password' ? setpassword(val) :
                name === 'check' ? setcheck(ischecked) :
                    console.log('d')
    }

    console.log(username, password, check)

    return (
        <div>
            <hr/>
            <h1>Form 03</h1>
            <input name='username' value={username} onChange={handleinputs}/>
            <input name='password' value={password} type='password' onChange={handleinputs}/>
            <input name='check' value={check} type='checkbox' onChange={handleinputs}/>
        </div>
    );


}