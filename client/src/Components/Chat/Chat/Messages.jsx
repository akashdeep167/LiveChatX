import { Box, styled } from "@mui/material";
import React, { useState, useContext, useEffect, useRef } from "react";
import Footer from "./Footer";
import { AccountContext } from "../../../Context/AccountProvider";
import { getMessages, newMessage } from "../../../server/api";

import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
`;

const Component = styled(Box)`
  height: 74vh;
  overflow-y: scroll;
  padding: 0 0 20px 0;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const [incommingMessage, setIncomingMessage] = useState(null);
  const scrollRef = useRef();
  const { account, socket, setNewMessageFlag, newMessageFlag } =
    useContext(AccountContext);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    const getmessagesDetails = async () => {
      let data = await getMessages(conversation?._id);
      setMessages(data);
    };
    conversation?._id && getmessagesDetails();
  }, [person._id, conversation?._id, newMessageFlag]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  useEffect(() => {
    incommingMessage &&
      conversation?.members?.includes(incommingMessage.senderId) &&
      setMessages((prev) => [...prev, incommingMessage]);
  }, [incommingMessage, conversation]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }
      socket.current.emit("sendMessage", message);
      await newMessage(message);
      setNewMessageFlag((prev) => !prev);
      setValue("");
      setFile("");
      setImage("");
    }
  };

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => {
            return (
              <Container ref={scrollRef}>
                <Message message={message} />
              </Container>
            );
          })}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        setFile={setFile}
        file={file}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
