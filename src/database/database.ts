import mongoose, { ConnectOptions } from "mongoose";

const connectToMongo = async (mongo_url: string): Promise<void> => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log("connected to database");
  } catch (error) {
    console.error(error);
  }
};

export default connectToMongo;
