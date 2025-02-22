import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    let response = await axios.post(`${url}/add`, data);
    return response.data;
  } catch (err) {
    console.log("Error while calling addUser function", err.message);
  }
};

export const getUser = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    // console.log(response);
    return response.data;
  } catch (err) {
    console.log("error while calling getUser api ", err.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (err) {
    console.log("error while calling setConversation api ", err.message);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (err) {
    console.log("error while calling getConversation api ", err.message);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (err) {
    console.log("error while calling newMessage api ", err.message);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (err) {
    console.log("error while calling getMessage api ", err.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling uploadFile API ", error);
  }
};