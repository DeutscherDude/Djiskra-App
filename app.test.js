const request = require('supertest');
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

describe('Views Rendering', () => {
    it('Route "/" --> returns Home.jsx', () => {

    })

    it('Route "/todos" --> returns Todos.jsx', () => {
            
    })

    it('Route "/todos/:id" --> returns Todos.jsx with loaded API data', () => {

    })

    it('Route "/mindmap" --> returns MindMap.jsx', () => {

    })
})