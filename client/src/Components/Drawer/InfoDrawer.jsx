import { Drawer, Box, styled, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const drawerStyle = {
  left: 20,
  top: 20,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

const Header = styled(Box)`
  display: flex;
  background: #008069;
  height: 107px;
  color: #fff;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const InfoDrawer = ({ open, setOpen }) => {
  return (
    <Drawer
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack onClick={() => setOpen(false)} />
        <Typography>Profile</Typography>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
