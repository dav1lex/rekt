import ReactDom from 'react-dom'
import {App} from "./App";

const app = <App/>
const root = document.querySelector('#root');

ReactDom.render(app,root)