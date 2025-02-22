import { Dialog, Box, styled } from "@mui/material";
import Menu from "./Menu/Menu";
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";

import ChatBox from "./Chat/ChatBox";
import EmptyChat from "./Chat/EmptyChat";
const dialogStyle = {
  height: "98%",
  width: "100%",
  margin: "20px 10px 0 20px",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: 0,
};

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  min-width: 450px;
`;
const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = () => {
  const { person } = useContext(AccountContext);
  return (
    <>
      <Dialog open={true} hideBackdrop={true} PaperProps={{ sx: dialogStyle }}>
        <Component>
          <LeftComponent>
            <Menu />
          </LeftComponent>
          <RightComponent>
            {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
          </RightComponent>
        </Component>
      </Dialog>
    </>
  );
};

export default ChatDialog;
