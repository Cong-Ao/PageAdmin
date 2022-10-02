import { styled } from "@mui/material";
import React from "react";

function TitleH4({ children }) {
  return <TitleH4Styled>{children}</TitleH4Styled>;
}
const TitleH4Styled = styled("h4")({
  fontWeight: "700",
  fontSize: "2.4rem",
});
export default TitleH4;
