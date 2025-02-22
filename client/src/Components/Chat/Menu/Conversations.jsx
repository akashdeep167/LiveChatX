import { useEffect, useState, useContext } from "react";
import { getUser } from "../../../server/api";
import Conversation from "./Conversation";
import { Box, styled, Divider } from "@mui/material";
import { AccountContext } from "../../../Context/AccountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({ text }) => {
  const { account, socket, setActiveUsers } = useContext(AccountContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await getUser();
      const filteredData = res.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Component>
      {users.map((user) => {
        return (
          user.sub !== account.sub && (
            <>
              <Conversation user={user} />
              <StyledDivider />
            </>
          )
        );
      })}
    </Component>
  );
};

export default Conversations;
