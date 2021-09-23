import mongoConnection from './config/dbConfig';
import config from './config/index';
import app from './index';

// application dbconnection
mongoConnection(config.mongo.MONGO_LOCAL);

const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Server has started! on port ${PORT}`);
})