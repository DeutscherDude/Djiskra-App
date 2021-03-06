import { Request } from 'supertest';
const app = require('../../index')

/**
 * @jest-enviroment node
 */


describe('Projects API', () => {
    let request: Request;

    it('GET /projects -> json of projects', () => {
        return request(app)
            .get('/projects')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        category: expect.any(String),
                        description: expect.any(String),
                        link: expect.any(String),
                        image: expect.any(String),
                        user: expect.any(String),
                    }),
                ]
                ))
            })
        }
    )

    it('POST /projects -> creates a project', () => {
        return request(app)
            .post('/projects')
            .send({
                name: 'test',
                category: 'test',
                description: 'test',
                link: 'test',
                image: 'test',
                user: 'test',
            })
            .expect('Content-Type', /json/)
            .expect(201)
            .then(res => {
                expect(res.body).toEqual(expect.objectContaining({
                    id: expect.any(Number),
                    name: 'test',
                    category: 'test',
                    description: 'test',
                    link: 'test',
                    image: 'test',
                    user: 'test',
                }))
            })
    })

    it('PUT /projects/:id -> updates a project', () => {
        return request(app)
            .put('/projects/:id')
            .send({
                name: 'test',
                category: 'test',
                description: 'Updated test',
                link: 'test',
                image: 'test',
                user: 'test',
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body).toEqual(expect.objectContaining({
                    id: expect.any(Number),
                    name: 'test',
                    category: 'test',
                    description: 'Updated test',
                    link: 'test',
                    image: 'test',
                    user: 'test',
                }))
            })
        })

    it('DELETE /projects/:id -> deletes a project',() => {
        return request(app)
            .delete('/projects/:id')
            .send({
                id: 1,
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body).toEqual(expect.objectContaining({
                    id: expect.any(Number),
                    name: 'test',
                    category: 'test',
                    description: 'Updated test',
                    link: 'test',
                    image: 'test',
                    user: 'test',
                }))
            })
    })

})