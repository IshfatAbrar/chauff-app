import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let catched = mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (catched.conn) return catched.conn;

  if (!MONGODB_URI)
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );

  catched.promise =
    catched.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "chauff",
      bufferCommands: false,
    });

  catched.conn = await catched.promise;
  return catched.conn;
};
