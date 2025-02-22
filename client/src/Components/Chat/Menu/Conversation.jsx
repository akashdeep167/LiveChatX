import { Box, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../Context/AccountProvider";
import { setConversation, getConversation } from "../../../server/api";
import { formatDate } from "../../../utils/common-utils";
const Component = styled("Box")`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
});

const NameBox = styled(Box)`
  // padding: 10px;
  display: flex;
`;

const Timestamp = styled(Box)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  margin-right: 20px;
`;

const Text = styled(Box)`
  font-size: 14px;
  // margin-left: auto;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 20px;
`;

const Conversation = ({ user }) => {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [newMessageFlag]);
  const handleClick = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };
  return (
    <Component onClick={handleClick}>
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>
      <Box style={{ width: "100%" }}>
        <NameBox>
          <Typography>{user.name}</Typography>
          {message?.text && (
            <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
          )}
        </NameBox>
        <Box>
          <Text>
            {message?.text?.includes("localhost") ? "Media" : message.text}
          </Text>
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;
