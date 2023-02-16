// Write a function that receives two parameters,
// a and b and returns the sum of them within an h2 tag
function calc(a,b){
    return <h2> {a+b} </h2>
}

export default function JSX02() {
    return (
        calc(5,6)

    );

}

