import ReactDom from 'react-dom'
import {App} from './App'

const root = document.querySelector('#root')
const elem = <App/>

ReactDom.render(elem, root)