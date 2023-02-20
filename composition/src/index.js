import ReactDom from 'react-dom'
import {App} from "./App";
import './style.css'

const app = <App/>
const root = document.querySelector('#root');

ReactDom.render(app,root)