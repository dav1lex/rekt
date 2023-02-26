import React, {useContext} from "react";
import {Langcontext} from "./Langcontext";

const languages = {
    en: 'language is english',
    pol: 'Język ustawiony na polish'
}

export function Displaylang() {
    const language = useContext(Langcontext)
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