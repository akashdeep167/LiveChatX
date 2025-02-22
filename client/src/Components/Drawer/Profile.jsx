import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../Context/AccountProvider";
const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
const Image = styled(`img`)({
  height: 150,
  width: 150,
  padding: "25px 0",
  borderRadius: "50%",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  & :first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  & :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;
const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="dp" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <BoxWrapper style={{ marginTop: "30px" }}>
        <Typography>About</Typography>
        <Typography>Sleeping</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
