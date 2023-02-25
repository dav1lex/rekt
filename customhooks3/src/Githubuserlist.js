import {useGithubUser} from './useGithubUser'
export function Githubuserlist() {
    const {userlist,myhandler,submit,valtopass} = useGithubUser('dav1lex')

    return (
        <>
            <input id='input1' value={valtopass} onChange={myhandler}/>
            <button type='submit' onClick={submit}>Search</button>
            <div className='widebox'>
                {userlist.map((e) => {
                    return (
                        <div className='box'>
                            <img src={e.avatar_url} width={200}/>
                            <h2>{`Name: ${e.name}`}</h2>
                            <h3>{`Username: ${e.login}`}</h3>
                        </div>
                    )
                })}
            </div>
        </>
    )
}