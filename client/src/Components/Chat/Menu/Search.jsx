import { Search as SearchIcon } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  align-items: center;
`;
const Wapper = styled(Box)`
  width: 100%;
  position: relative;
  background-color: #f0f2f5;
  border-radius: 19px;
  margin: 0 13px;
`;

const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 6px 8px;
  color: #919191;
`;

const InputFeild = styled(InputBase)`
  width: 100%;
  padding: 16px;
  padding-left: 65px;
  height: 15px;
  font-size: 14px;
`;

const Search = ({ setText }) => {
  return (
    <Container>
      <Wapper>
        <Icon>
          <SearchIcon fontSize="small" />
        </Icon>
        <InputFeild
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Search or Start new chat"
        />
      </Wapper>
    </Container>
  );
};

export default Search;
