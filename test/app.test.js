const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  test('GET / retorna mensaje hola mundo', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hola Mundo desde DevOps CI/CD!');
    expect(res.body.status).toBe('ok');
  });

  test('GET /health retorna status healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});