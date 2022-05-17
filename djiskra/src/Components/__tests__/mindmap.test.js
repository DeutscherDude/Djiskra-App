import React from 'react';
import ReactDOM from 'react-dom';
import MindMap from './../MindMap';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Helmet } from 'react-helmet';

describe('MindMap unit tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MindMap />, div);
        ReactDOM.unmountComponentAtNode(div);
    }
    )
    it('renders the title', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MindMap />, div);
        const helmet = Helmet.peek();
        expect(helmet.title).toEqual('Mind Map');
        ReactDOM.unmountComponentAtNode(div);
    }
    )
})