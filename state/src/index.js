import ReactDom from 'react-dom'
import {App} from "./App";

const welcome = <App/>
const root = document.querySelector('#root')

ReactDom.render(welcome,root)