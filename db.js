const mongoose = require("mongoose");
const { DB_NAME, DB_USER, DB_PORT, DB_HOST } = process.env;

mongoose.Promise = global.Promise;

const connectionUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose
  .connect(connectionUrl, { useNewUrlParser: true })
  .catch(error => console.error(error));

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongoose connection open on ${DB_PORT}`);
});

db.on("error", error => console.log(error));

db.on("disconnected", () => {
  console.log("Mongoose connection closed");
});

process.on("SIGINT", () => {
  const closeDBConnection = () => {
    console.error(`Mongoose connection closed due to app error`);
    process.exit(0);
  };

  db.close(closeDBConnection);
});
