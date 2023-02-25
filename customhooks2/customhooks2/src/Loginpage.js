import {useController} from "./useLogincontroller";

export function Loginpage() {
    const {handleInputs,password,username}  = useController('asd','asd')
    return (
        <>
            <h1>usernfme:{username}</h1>
            <h1>password:{password}</h1>
            <input name='user' value={username} onChange={handleInputs}/>
            <input name='pass' value={password} onChange={handleInputs}/>
        </>
    )
}