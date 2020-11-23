import mongoose from "mongoose";

const messageAppSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

export default mongoose.model("messageContents", messageAppSchema);
