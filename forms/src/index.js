import ReactDom from 'react-dom';
import {App} from './App'

const root = document.querySelector('#root')
const app = <App/>

ReactDom.render(app,root);