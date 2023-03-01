import mongoose from "mongoose";

const user = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;
const cluster = process.env.MONGO_DB_CLUSTER;
const database = process.env.MONGO_DB_DATABASE;

mongoose.connect(
  `mongodb+srv://${user}:${password}@${cluster}.ptp9i1x.mongodb.net/${database}`
);

let db = mongoose.connection;

export default db;
