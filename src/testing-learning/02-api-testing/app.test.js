const request = require('supertest');
const app = require('./app');

describe('GET /users', () => {
    test('GET /users',async()=>{
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ id:1, name: 'Vivin' });
    });
    const request = require('supertest');
const app = require('./app');

describe('GET /users', () => {
    test('GET /users', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ id: 1, name: 'Vivin' });
    });
        test('POST /users', async () => {

            const response =
                await request(app)
                    .post('/users');

            expect(response.statusCode)
                .toBe(201);

        });
});
});