
export function FilteredList({objectlist}) {

    return (
        <>
            <ul>
            {objectlist.members.map((evt)=>{
                return <li> {evt.age >18 ? `${evt.name} ${evt.age} ${evt.id}` : 'none'}</li>
            })}
            </ul>


        </>
    )
}