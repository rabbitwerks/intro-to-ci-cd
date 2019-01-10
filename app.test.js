const request = require('supertest');

const app = require('./app');

describe('Home route works', () => {
  it('Should return sum for integers', async () => {
    const response = await request(app).get('/?a=3&b=5');
    expect(response.body).toEqual({ sum: 8 });
  });

  it('Should return null for non integers', async () => {
    const response = await request(app).get('/?a=a&b=u');
    expect(response.body).toEqual({ sum: null });
  });
});
