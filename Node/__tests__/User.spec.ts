import request from 'supertest';
import { app } from '../src/app';
import createConnection from '../src/database';



describe('Users tests', () => {

  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = await createConnection();
    await connection.close();
    await connection.undoLastMigration();
    await connection.dropDatabase();
  });


  describe('Create User', () => {
    it('should be able to create a new user and return status 201', async () => {
      const response = await request(app)
        .post('/users')
        .send({
          email: 'valid_mail@mail.com',
          name: 'any_name'
        });

      expect(response.status).toBe(201);
    });
  });
});