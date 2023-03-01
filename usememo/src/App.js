import {FilteredList} from "./FilteredList";

let members = [
    {name:'omer',age:14,id:1},
    {name:'omer123',age:42,id:2},
    {name:'omer987',age:32,id:3},
    {name:'sad',age:19,id:4}
]

function App() {
  return (

      <FilteredList objectlist={{members}}/>
  );
}
export default App;
