// Write a function that receives a name argument and returns
// a h1 tag with the name variable appended to the "Hello, " string.
function SayMyName(name){
    return <h1>Hello, {name} </h1>
}

export default function JSX02() {
    return (
        SayMyName('omer')

    );

}

