import styled from "@emotion/styled";
import React from "react";

function TitleH3({ children }) {
  console.log("children", children);
  return <TitleH3Styled>{children}</TitleH3Styled>;
}
const TitleH3Styled = styled("h3")({
  fontSize: "3rem",
  fontWeight: "700",
  lineHeight: "1.5",
  padding: "3rem",
});
export default TitleH3;
