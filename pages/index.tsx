
import styled from "@emotion/styled";

import PageAdmin from "../src/views/PageAdmin";
import styles from "../styles/Home.module.css";

export default function Home() {
  const HomeStyled = styled("div")({
    backgroundColor: "rgb(249, 250, 251)",
    height: "100%",
    width: "100%",
  });
  return (
    <HomeStyled>
      <div className={styles.container}>
        <PageAdmin />
      </div>
    </HomeStyled>
  );
}
