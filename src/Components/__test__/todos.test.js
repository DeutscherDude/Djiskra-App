import React from 'react';
import ReactDOM from 'react-dom';
import ToDos from './../Todos';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'


describe('ToDos unit tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ToDos />, div);
        ReactDOM.unmountComponentAtNode(div);
    }
    )
})