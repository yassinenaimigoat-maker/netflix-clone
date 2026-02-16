// Mock MongoDB with in-memory storage for development
const { MongoMemoryServer } = require('mongodb-memory-server');

async function startMockDB() {
  const mongod = await MongoMemoryServer.create({
    instance: {
      port: 27017,
    },
  });
  console.log('MongoDB Memory Server running on:', mongod.getUri());
  console.log('Press Ctrl+C to stop');
}

startMockDB().catch(console.error);
