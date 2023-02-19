import ReactDom from 'react-dom'
import {App} from "./App";
import './index.css'

const app = <App/>
const root = document.querySelector('#root');

ReactDom.render(app,root)