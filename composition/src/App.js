import React from "react";
import { Container } from './Container';
import {Anothercomponent} from "./Anothercomponent";

export class App extends React.Component{
    render() {
        return (
            <>
              <Container title={'The title of the title of the title'}>
                 <Anothercomponent/>
              </Container>
            </>
        );
    }
}