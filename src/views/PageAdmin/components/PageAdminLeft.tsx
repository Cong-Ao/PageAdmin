import styled from "@emotion/styled";

import TitleH3 from "../../../components/TitleH3";

function PageAdminLeft(props) {
  return (
    <PageAdminLeftStyled>
      <div className="content__admin"><TitleH3>Hi, Welcome Back</TitleH3>
      <img src="./images/illustration-login.png" alt="illustration-login" /></div>
    </PageAdminLeftStyled>
  );
}

const PageAdminLeftStyled = styled("div")({
  background: "rgb(255, 255, 255)",
  boxShadow:
    "rgb(145 158 171 / 20%) 0px 3px 1px -2px, rgb(145 158 171 / 14%) 0px 2px 2px 0px, rgb(145 158 171 / 12%) 0px 1px 5px 0px",
  position: "relative",
  margin: "16px 0px 16px 16px",
  borderRadius: "16px",
  display:"flex",
  maxWidth:"464px",
  width: "100%",
  alignItems:"center",
  ".content__admin":{
    width: "100%",
  }
});
export default PageAdminLeft;
