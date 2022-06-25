import { CardAnime, SlideCollection } from "components/molecules";
import { useState } from "react";
import styled from "@emotion/styled";
import { Input, Pagination } from "components/atoms";
import useAnime from "hooks/useAnime";

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

const Home = () => {
  const [storeCollection, setStoreCollection] = useState<any[]>([]);
  const { getAnimeList } = useAnime({
    getData: {
      variables: {
        page: 1,
        perPage: 10,
      },
    },
  });

  const { data } = getAnimeList;

  const handleAddCollection = (value: any) => {
    setStoreCollection((prev: any) => [...prev, value]);
  };

  const handleRemoveCollection = (value: any) => {
    setStoreCollection((prev: any) => [
      ...prev.filter((item: any) => item !== value),
    ]);
  };

  return (
    <>
      <WrapperMain>
        <Input />
        <WrapperCard>
          {Array.from(data?.Page?.media || []).map((item: any) => {
            return (
              <CardAnime
                data={item}
                addCollection={() => handleAddCollection(item)}
                key={item?.id}
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
    </>
  );
};

export default Home;
