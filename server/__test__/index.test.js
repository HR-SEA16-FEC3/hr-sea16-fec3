const supertest = require('supertest');
const app = require('../app.js');

const request = supertest(app);
// Link to your server file

it('Jest initialization test', () => {
  expect(1).toBe(1);
});

it('GET init root test', async (done) => {
  const response = await request.get('/');
  expect(response.status).toBe(200);
  done();
});

/*
Added jest scripts in package.json
Installed/added supertest to package.json
*/
