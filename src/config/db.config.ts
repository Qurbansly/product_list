import dotenv from "dotenv";
dotenv.config();

export default {
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://gurbans:157829ab_@mflix.l0eg7y4.mongodb.net/test?authMechanism=SCRAM-SHA-1",
  PORT: process.env.PORT || 3000,
  SECRET_KEY: process.env.SECRET_KEY,
};
