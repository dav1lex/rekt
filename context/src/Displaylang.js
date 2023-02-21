import React from "react";
import {Langcontext} from "./Langcontext";

const languages = {
    en: 'language is english',
    pol: 'Język ustawiony na polish'
}

export class Displaylang extends React.Component {
    render() {
        return (
            <>
                <Langcontext.Consumer>
                    {lang => {
                        return <div>{languages[lang]}</div>
                    }}

                </Langcontext.Consumer>
            </>
        );
    }
}