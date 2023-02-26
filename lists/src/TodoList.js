import React from "react";

export class TodoList extends React.Component {

    state = {
        todos: [
            {id: 0, doable: 'shopping'},
            {id: 1, doable: 'breathe'}
        ],
        temp: ''
    }

    handlechange = (event) => {
        const value = event.target.value;
        this.setState((state) => {
            return state.temp = value;
        })
    };


    additem = () => {
        const val = document.getElementById('myinput').value;
        this.setState((prevst) => ({
                todos: [...prevst.todos, {id: prevst.todos.length, doable: val}]
            })
        )

        this.setState({
            temp: ''
        })

    };

    elementremove(id) {
        this.setState((prev) => ({
            todos: prev.todos.filter(td => td.id !== id)
        }))

    }

    render() {
        return (
            <>
                {this.state.todos.map((item, index) => (
                    <li key={index}>
                        {item.doable}
                        <button onClick={() => {
                            this.elementremove(item.id)
                        }}>remove {index}</button>
                    </li>
                ))}
                <input name='newval' id='myinput' value={this.state.temp} onChange={this.handlechange}/>
                <button onClick={this.additem}>Add item /But i work/</button>
            </>
        );
    }


}