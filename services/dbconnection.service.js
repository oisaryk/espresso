const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

async function establishDatabaseConnection() {
  try {
    await mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true }, (err) => {});
  } catch (e) {
    console.log("Could not connect to the database. Error...", e);
    process.exit();
  } finally {
    console.log("Successfully connected to the database");
  }
}

module.exports = {
    establishDatabaseConnection
}
