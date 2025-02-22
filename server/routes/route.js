import express from "express";
import { addUser, getUsers } from "../controler/user-controler.js";
import {
  newConversation,
  getConversation,
} from "../controler/conversation-controller.js";
import { newMessage, getMessages } from "../controler/message-controller.js";
import { uploadFile, getFile } from "../controler/file-controler.js";
import upload from "../utils/upload.js";
const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);
route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getFile);

export default route;
