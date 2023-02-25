import {useState} from "react";

export const useController =(username1='',password1='')=>{
    const [username,setusername] = useState(username1)
    const [password,setpass] = useState(password1)

    function handleInputs(e){
        const name = e.target.name
        const val = e.target.value;
        name === 'user'? setusername(val) : setpass(val)
    }

    return{
        username:username,
        password:password,
        handleInputs:handleInputs
    }
}