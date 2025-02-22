import { AppBar, Box, Toolbar, styled } from "@mui/material";
import LoginDialog from "./Account/LoginDialog";
import { useContext } from "react";
import { AccountContext } from "../Context/AccountProvider";
import ChatDialog from "./Chat/ChatDialog";

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 210px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Body = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Body>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Body>
  );
};

export default Messenger;
