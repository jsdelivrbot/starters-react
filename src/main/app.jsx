import React from 'react';
import ReactDom from 'react-dom';

console.log('HERE: ', process.cwd());

ReactDom.render(
    <h1>Hello World!</h1>,
    document.getElementById('container')
);