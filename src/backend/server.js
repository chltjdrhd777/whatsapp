import { RedoTwoTone } from "@material-ui/icons";
import axios from "axios";
import express from "express";
import { get } from "http";
import mongoose from "mongoose";
import SchemaStructure from "./dbSchema.js";
import Pusher from "pusher";
import cors from "cors";

//1. run express
const app = express();
//2. set the port number = if you set the specific port, follow it or if not, go to "9000" port
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(cors());

//3. "get" action definition = if you go to '/', I will send "hello world" with "200" <-- success
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
  SchemaStructure.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//4. "post" action definition
app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  SchemaStructure.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created : /n ${data}`);
    }
  });
});

app.listen(port, () => console.log(`Listening on localhost ${port}`));

const pusher = new Pusher({
  appId: "1111475",
  key: "5bd74e8e8a0bd4d2129e",
  secret: "e2ed52351d09eb40280f",
  cluster: "eu",
  useTLS: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB is conected");

  const msCollection = db.collection("messagecontents");
  const changeObserver = msCollection.watch();

  changeObserver.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
      });
    } else {
      console.log("error trigger");
    }
  });
});

//DB
const connection_url =
  "mongodb+srv://admin:132poi@cluster0.c6tvu.mongodb.net/<whatsappDB>?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
