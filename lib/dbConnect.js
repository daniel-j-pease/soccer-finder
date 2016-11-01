const MongoClient = require('mongodb');

//thanks to Rafael Pacas!
const connectionURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/soccerFinder';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB,
};
