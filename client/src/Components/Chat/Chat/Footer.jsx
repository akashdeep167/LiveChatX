import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import { EmojiEmotionsOutlined, Mic, AttachFile } from "@mui/icons-material";
import { useEffect } from "react";
import { uploadFile } from "../../../server/api";

const Container = styled(Box)`
  display: flex;
  background: #ededed;
  height: 55px;
  width: 100%;
  align-items: center;
  padding: 5px 10px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background: #ffffff;
  border-radius: 18px;
  width: calc(94% - 100px);
`;

const InputFeild = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
`;

const Footer = ({ setValue, sendText, value, setFile, file, setImage }) => {
  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let res = await uploadFile(data);
        setImage(res.data);
      }
    };
    getFile();
  }, [file]);
  const handleChange = (e) => {
    setValue(e.target.files[0].name);
    setFile(e.target.files[0]);
  };
  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        onChange={(e) => handleChange(e)}
      />
      <Search>
        <InputFeild
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
