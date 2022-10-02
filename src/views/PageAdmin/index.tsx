import { styled } from "@mui/material";
import PageAdminLeft from "./components/PageAdminLeft";
import PageAdminRight from "./components/PageAdminRight";

function PageAdmin() {
  return (
    <PageAdminStyled>
      <PageAdminLeft />
      <PageAdminRight />
    </PageAdminStyled>
  );
}
const PageAdminStyled = styled("div")({
  fontSize: "10px",
  display: "flex",
  justifyContent: "space-between",
  height: "100vh"
});
export default PageAdmin;
