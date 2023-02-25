import {useEffect, useState} from "react";

export const useGithubUser = (theuser = 'dav1lex') => {
    const [userlist, setuserlist] = useState([])
    const [username, setusername] = useState(theuser)
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

    return {
        userlist: userlist,
        submit: submitUser,
        myhandler: myHandler,
        valtopass: passthis
    }
}