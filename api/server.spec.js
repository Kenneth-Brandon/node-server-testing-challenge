const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  it('should set the testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
  describe('GET /', () => {
    it('should return api is running', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ api: 'api is running' });
    });
  });
  it('Is it return 200?', () => {
    return request(server)
      .get('/')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it('Is it return 200 when using async/await?', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});
