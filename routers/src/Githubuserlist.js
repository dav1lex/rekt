import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export function Githubuserlist() {
    const {username} = useParams()
    const [user, setuser] = useState({})

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
                setuser({
                    name: json.name,
                    img: json.avatar_url,
                    login:json.login,
                    location:json.location})
            })

    }, [username])


    return (
        <>
            <ul>
                <li>
                    <Link to='dav1lex'>Dav1lex profile</Link>
                </li>
                <li>
                    <Link to='gegirti'>Gegirti profile</Link>
                </li>
                <li>
                    <Link to='potato'>Random profile</Link>
                </li>
            </ul>
            <div className='box'>
                <img src={user.img} width={200}/>
                <h2>{`Name:${user.name} `}</h2>
                <h2>{`Nick:${user.login} `}</h2>
                <h2>{`Location:${user.location} `}</h2>
            </div>
        </>
    )
}