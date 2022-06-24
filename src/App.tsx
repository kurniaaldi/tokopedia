import { CardAnime } from "components/molecules";
import React from "react";
import "./App.css";
import styled from "@emotion/styled";

const WrapperMain = styled.main({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",
});

const WrapperCard = styled.section({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "0.5rem",
  width: "100%",
  "@media only screen and (min-width: 420px)": {
    gridTemplateColumns: "repeat(5, 1fr)",
  },
});

const Container = styled.div({
  textAlign: "center",
  maxWidth: 1060,
  background: "rgb(113, 128, 133)",
  minHeight: "100vh",
  margin: "0 auto",
  padding: "1rem",
  "@media only screen and (min-width: 420px)": {
    padding: "2rem",
  },
});

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Container>
      <WrapperMain>
        <div
          className="input-wrapper"
          style={{ width: "100%", height: "100%", display: "flex" }}
        >
          <input
            placeholder="Search.."
            name="search"
            style={{ width: "100%" }}
          />
          <button type="submit">search</button>
        </div>
        <WrapperCard>
          {Array.from(arr || []).map((item: any) => {
            return <CardAnime key={item} />;
          })}
        </WrapperCard>
      </WrapperMain>
    </Container>
  );
}

export default App;
