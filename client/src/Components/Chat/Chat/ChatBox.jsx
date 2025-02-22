import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../Context/AccountProvider";
import { getConversation } from "../../../server/api";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
const ChatBox = () => {
  const { account, person } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      // console.log(data._id);
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);
  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;
