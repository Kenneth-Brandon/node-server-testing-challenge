const request = require('supertest');
const server = require('../api/server.js');
const DB = require('./user-model.js');

describe('user-router.js', () => {
  it('should set the testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
  describe('GET /', () => {
    it('should return 200 ok', async () => {
      const res = await request(server).get('/api/users');
      expect(res.status).toBe(200);
    });
    it('should return data', async () => {
      const res = await request(server).get('/api/users');
      expect(res.type).toBe('application/json');
    });
  });
  describe('POST /', () => {
    it('AFTER POST should return 200 ok', async () => {
      const res = await request(server)
        .post('/api/users')
        .send({ name: 'abc' });
      expect(res.status).toBe(200);
    });
    it('should return data', async () => {
      const res = await request(server)
        .post('/api/users')
        .send({ name: 'abc' });
      expect(res.type).toBe('application/json');
    });
    it('should return name', async () => {
      const res = await request(server)
        .post('/api/users')
        .send({ name: 'abc' });
      expect(res.body.name).toBe('abc');
    });
  });
  describe('Delete /', () => {
    it('AFTER delete should return 200 ok', async () => {
      const res = await request(server).delete('/api/users/1');
      expect(res.status).toBe(200);
    });
    it('should return 1', async () => {
      const res = await request(server)
        .delete('/api/users/2')
        .send({ name: 'abc' });
      expect(res.body).toBe(1);
    });
  });
});
