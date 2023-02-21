import React from "react";
import { Welcome } from './Welcome';
import {Form3} from "./Form3";

export class App extends React.Component{
    render() {
        return (
            <>
              <Welcome/>
              <Form3/>
            </>
        );
    }
}