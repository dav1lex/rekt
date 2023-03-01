import {useMemo} from "react";

export function FilteredList({objectlist}) {
    const filteredlist = useMemo(() =>
            objectlist.members.filter((e) => e.age > 18),
        [objectlist.members.length])
    //Not sure if it's correct but if it works, probably that's it
    console.log(filteredlist)
    return (
        <>
            <ul>
                {objectlist.members.map((evt) => {
                    return <li> {evt.age > 18 ? `${evt.name} ${evt.age} ${evt.id}` : 'none'}</li>
                })}
            </ul>


        </>
    )
}