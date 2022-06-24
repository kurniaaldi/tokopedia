import { CardAnime, SlideCollection } from "components/molecules";
import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { Input, Pagination } from "components/atoms";

const Container = styled.div({
  textAlign: "center",
  maxWidth: 1060,
  background: "rgb(113, 128, 133)",
  minHeight: "100vh",
  margin: "0 auto",
});

const WrapperMain = styled.main({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",
  padding: "1rem",
  "@media only screen and (min-width: 420px)": {
    padding: "2rem",
  },
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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const App = () => {
  const [storeCollection, setStoreCollection] = useState<any[]>([]);

  const handleAddCollection = (value: any) => {
    setStoreCollection((prev: any) => [...prev, value]);
  };

  const handleRemoveCollection = (value: any) => {
    setStoreCollection((prev: any) => [
      ...prev.filter((item: any) => item !== value),
    ]);
  };

  return (
    <Container>
      <WrapperMain>
        <Input />
        <WrapperCard>
          {Array.from(arr || []).map((item: any) => {
            return (
              <CardAnime
                addCollection={() => handleAddCollection(item)}
                key={item}
              />
            );
          })}
        </WrapperCard>
        <Pagination />
      </WrapperMain>
      {storeCollection.length && (
        <SlideCollection
          data={storeCollection}
          remove={(id: any) => handleRemoveCollection(id)}
        />
      )}
    </Container>
  );
};

export default App;
