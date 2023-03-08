import {useGithubUser} from "./useGithubuser";

function App() {
    const {data, error, loading, refetch} = useGithubUser('dav1lex')

    return (
        <>
            <button onClick={refetch}>Fetch again</button>
            <h1>{loading && 'LOADing'}</h1>
            <h1>{error && 'error'}</h1>

            <div className='box'>
                {data && (
                    <>
                        <img src={data.avatar_url} width={200}/>
                    <h2>{`Name: ${data.name}`}</h2>
                    <h3>{`Username: ${data.login}`}</h3>
                    </>
                )}

            </div>
        </>
    )
}

export default App;
