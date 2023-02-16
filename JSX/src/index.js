import React from 'react';
import ReactDOM from 'react-dom/client';
import JSX01 from './JSX-01';
import JSX02 from './JSX-02';
import JSX05 from './JSX-05';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <JSX01/>
        <JSX02 name='f'/>
        <JSX05/>
    </>
);
