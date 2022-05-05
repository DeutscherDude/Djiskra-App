import React from 'react';
import ReactDOM from 'react-dom';
import Home from './../Home';
import { Helmet } from 'react-helmet';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('Home unit tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
        ReactDOM.unmountComponentAtNode(div);
    }
    )
    it('renders the title', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
        const helmet = Helmet.peek()
        expect(helmet.title).toEqual('Home');
        ReactDOM.unmountComponentAtNode(div);
    }
    )
})