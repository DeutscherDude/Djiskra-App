import React from 'react';
import ReactDOM from 'react-dom';

const request = require('supertest');
const MindMap = require('./src/Components/MindMap');
const ToDos = require('./src/Components/Todos');
const Home = require('./src/Components/Home');
const create = require('@testing-library/react').render;
const app = require('./app');

describe('Todos API', () => {
    it('GET /todos --> array todos', () => {
        return request(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        completed: expect.any(Boolean)
                    }),
                ]
                ))
            })
    })

    it('GET /todos/id --> specific todo by ID', () => {
        return request(app)
            .get('/todos/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body).toEqual(expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    completed: expect.any(Boolean)
                }))
            }
     )
    })

    it('GET /todos/id --> 404 if not found', () => {
        return request(app)
            .get('/todos/100000')
            .expect(404)
    })

    it('POST /todos --> created todo', () => {
        return request(app)
            .post('/todos')
            .send({
                name: 'test',
            })
            .expect('Content-Type', /json/)
            .expect(201)
            .then(res => {
                expect(res.body).toEqual(expect.objectContaining({
                    id: expect.any(Number),
                    name: 'test',
                    completed: false,
                }))
            })
    })

    it('GET /todos --> validates request body', () => {
        return request(app).post('todos').send({
            name: 123
        })
        .expect(422)
    })
})

// To add more in-depth component tests

describe('Views Rendering', () => {

    it('Route "/todos" --> returns Todos.jsx', () => {
        const TodosComponent = render.create(<Todos />).toJSON();
        expect(TodosComponent).toMatchSnapshot();
    })

    it('Route "/todos/:id" --> returns Todos.jsx with loaded API data', () => {
        const TodosComponent = render.create(<Todos />).toJSON();
        expect(TodosComponent).toMatchSnapshot();
    })

    it('Route "/mindmap" --> returns MindMap.jsx', () => {
        const MindMapComponent = render.create(<MindMap />).toJSON();
        expect(MindMapComponent).toMatchSnapshot();
    })
})

// To add snapshot tests for components

