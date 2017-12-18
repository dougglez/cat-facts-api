const massive = require("massive");

const { dbConnectionString } = require('./default.config');

let db;

massive(dbConnectionString)
  .then(dbInstance => db = dbInstance)
  .catch(err => console.log(err));


function getDbInstance() {
  if (db) {
    throw error('DB has not connected');
  }
  return db;
}

module.exports = {
  getDbInstance
};