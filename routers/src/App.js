import {Welcome} from "./Welcome";
import {Link, Route, Routes} from "react-router-dom";
import {Counter} from "./Counter";
import {Githubuserlist} from "./Githubuserlist";

export function Notfound() {
    return 'Link not found'
}

function App() {
    return (
        <>
            <div>
                <Link to={'/'}>Go to Home</Link>
            </div>
            <div>
                <Link to={'/counter'}>Go to Counter</Link>
            </div>
            <div>
                <Link to={'/users/dav1lex'}>Go to github finder</Link>
            </div>
            <Routes>
                <Route path={'/'} element={<Welcome name={'dav1lex'}/>}/>
                <Route path={'/counter'} element={<Counter/>}/>
                <Route path={'/users/:username'} element={<Githubuserlist/>}/>
                <Route path={'*'} element={<Notfound/>}/>
            </Routes>

        </>
    );
}

export default App;
