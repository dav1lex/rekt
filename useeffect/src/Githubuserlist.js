import {useEffect, useState} from "react";
import {Showuser} from "./Showuser";

export function Githubuserlist() {
    const [userlist, setuserlist] = useState([])
    const [username, setusername] = useState('dav1lex')
    const [passthis, setpassthis] = useState('')

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    document.getElementById('input1').value = 'not found'
                }
            })
            .then(json => {
                setuserlist([...userlist, {avatar_url: json.avatar_url, login: json.login, name: json.name}])
            })
    }, [username])

    function submitUser() {
        setusername(passthis)
        setpassthis('')
    }

    function myHandler(event) {
        event.preventDefault()
        const name = event.target.value;
        setpassthis(name)
    }

    console.log(userlist)
    return (
        <>
            <input id='input1' value={passthis} onChange={myHandler}/>
            <button type='submit' onClick={submitUser}>Sear</button>
            <Showuser users={userlist}/>
        </>
    )
}