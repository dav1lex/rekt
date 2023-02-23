export function Showuser({users}) {
    return (
        <div className='widebox'>
            {users.map((e) => {
                return (
                    <div className='box'>
                        <img src={e.avatar_url} width={200}/>
                        <h2>{`Name: ${e.name}`}</h2>
                        <h3>{`Username: ${e.login}`}</h3>
                    </div>
                )
            })}
        </div>
    )
}