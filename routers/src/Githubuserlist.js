import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export function Githubuserlist() {
    const {username} = useParams()
    const [user, setuser] = useState({})

    console.log(username)
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setuser({name:json.name,img:json.avatar_url})
            })

    }, [username])


    return (
        <>
            <div className='box'>
                <img src={user.img} width={200}/>
                <h2>{`Name:${user.name} `}</h2>
            </div>
        </>
    )
}