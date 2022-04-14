import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './../Navbar';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'


describe('Navbar unit tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Navbar />, div);
        ReactDOM.unmountComponentAtNode(div);
    }
    )
})