import { styled } from "@mui/material";
import React from "react";

function TextA({ children, href }) {
  return <TextAStyled href={href}>{children}</TextAStyled>;
}

const TextAStyled = styled("a")({
  color: "rgb(32, 101, 209)",
  fontWeight: "600",
  fontSize: "1.4rem",
  textDecoration: "revert",
});

export default TextA;
