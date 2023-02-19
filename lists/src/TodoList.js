import React from "react";

export class TodoList extends React.Component {

    state = {
        todos: ["I couldnt","make work","the buttons :/"],
        temp:''
    }
    handlechange = (event) => {
        const value = event.target.value;
        this.setState((state) => {
            return state.temp = value;

        })
    };

    componentDidUpdate() {
        console.log(this.state)
    }

    additem = () => {
        const val = document.getElementById('myinput').value;
        if (val !== '') {
            this.setState((state) => {
                return state.todos.push(val)
            })
        }

        //LISTS -04//
        this.setState({
            temp: ''
        })
        //END OF LISTS -04
    };

    //LISTS -05//
    // resetlist = () => {
    //     this.setState((state) => {
    //         return {
    //             todos: [],
    //             val: '',
    //         }
    //     })
    // }

    //END OF LISTS -05//

    render() {
        return (
            <>
                {this.state.todos.map((item, index) => (
                    <li key={index}>
                        {item}
                        {/* couldnt do it*/}
                        <button onClick={()=>{}}>{index} I dont work</button>
                    </li>
                ))}
                <input name='newval' id='myinput' value={this.state.temp} onChange={this.handlechange}/>
                <button onClick={this.additem}>Add item /But i work/</button>
            </>
        );
    }
}