import { styled } from "@mui/material";
import React from "react";

function TextP({ children }) {
  return <TextPStyled>{children}</TextPStyled>;
}
const TextPStyled = styled("p")({
  fontSize: "1.4rem",
  fontWeight: "400",
  color: "rgb(33, 43, 54)",
});
export default TextP;
