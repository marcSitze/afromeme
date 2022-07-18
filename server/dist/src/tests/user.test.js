"use strict";
var app = require('../index');
var mongoose = require('mongoose');
var supertest = require('supertest');
var mongo = require('../config/index').mongo;
var UserService = require('../services/user.service');
// jest.setTimeout(30000)
// beforeEach((done) => {
//   mongoose.connect(
//     mongo.MONGO_TEST_DB,
//     { useNewUrlParser: true },
//     () => done()
//   )
// })
// afterEach((done) => {
//   mongoose.connection.db.dropDatabase(() => {
//     mongoose.connection.close(() => done())
//   })
// })
// describe("POST /api/users", () => {
//   it('create user with json', async () => {
//     const user = {
//       name: "test",
//       email: "test@gmail.com",
//       phone: "699877455",
//       country: "cameroon",
//       gender: "male",
//       birthday: "02/02/2000",
//       password: "123456"
//     };
//     // expect that user is created successfully
//     await supertest(app)
//       .post('/api/users')
//       .send(user)
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(201)
//     .then((response) => {
//       expect(response.body.success).toBe(true);
//       expect(response.body.data.msg).toBeDefined();
//       console.log("1");
//     })
//     // check if we can get the newly created user
//     await supertest(app).get('/api/users?email=test@gmail.com')
//       .expect(200)
//       .then((response) => {
//         console.log("2");
//         expect(response.body.success).toBe(true);
//         expect(response.body.data).toBeDefined()
//         expect(response.body.data.user.name).toBe(user.name);
//       });
//     // check if we can create thesame user
//     await supertest(app)
//       .post('/api/users')
//       .send(user)
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(400)
//       .then((response) => {
//         console.log("3");
//         expect(response.body.success).toBe(false);
//         expect(response.body.message).toBe("this user already exists");
//       })
//   })
// })
// describe("GET /api/users", () => {
//   it('responds to the request', async () => {
//     await supertest(app).get('/api/users?email=test@gmail.com')
//       .expect(200)
//       .then((response) => {
//         console.log("4");
//         expect(response.body.success).toBe(true);
//         expect(response.body.data).toBeDefined()
//         // expect(response.body.data.user.name).toBe(user.name);
//       });
//   })
// });
// app.listen(8000, () => console.log('Tests listening on port 8000'))
