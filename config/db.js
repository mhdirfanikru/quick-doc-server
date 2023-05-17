import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    res.json(error)
  }
};

export default connectDb;
