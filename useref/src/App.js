import {useRef, useState} from "react";

function App({initialData}) {
    const formRef = useRef();
    const [cars, setcars] = useState([])

    function onsubmitlistener(event) {
        event.preventDefault();
        let model = formRef.current.model.value
        let year = formRef.current.year.value
        let color = formRef.current.color.value

        formRef.current.reset();

        setcars([...cars, {model: model, year: year, color: color}])


    };
    console.log(cars)

    return (
        <>
            <form ref={formRef} onSubmit={onsubmitlistener}>
                <label>Model:</label>
                <input name="model" defaultValue={initialData.model}/>
                <label>Year:</label>
                <input name="year" defaultValue={initialData.year}/>
                <label>Color:</label>
                <input name="color" defaultValue={initialData.color}/>
                <button type="submit">submit</button>
            </form>
            <ul>
                {cars.map((car) => {
                    return (
                        <li> {`${car.model} ${car.year} ${car.color}`}</li>
                    )
                })}
            </ul>
        </>
    );

}

export default App;
