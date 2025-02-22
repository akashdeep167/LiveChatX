import React from "react";
import { useContext } from "react";
import { AccountContext } from "../../../Context/AccountProvider";
import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

const Header = styled(Box)`
  display: flex;
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
  objectFit: "cover",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const OnlineStatus = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    fonst-size: 22px;
    color: #000;
  }
`;

const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);
  console.log(activeUsers);
  return (
    <Header>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <OnlineStatus>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? "Online"
            : "Offline"}
        </OnlineStatus>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
