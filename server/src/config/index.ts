import * as dotenv from "dotenv";
dotenv.config()

export default {
  app: {
    name: process.env.APP_NAME,
    port: process.env.PORT || 5000,
    environment: process.env.APPLICATION_ENV,
    host: 'http://localhost:5000'
  },
  mongo: {
    MONGO_LOCAL: process.env.MONGO_LOCAL || 'mongodb://localhost:27017/afromeme',
    MONGO_ONLINE: process.env.MONGO_ONLINE,
    MONGO_TEST_DB: process.env.MONGO_TEST_DB || 'mongodb://localhost:27017/testAfromeme',
  },
  auth: {
    jwt_secret: process.env.JWT_SECRET || 'my-ultra-secret-jwt',
    saltRounds: 10
  },
};
