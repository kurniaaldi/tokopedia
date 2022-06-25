import { CardAnime, SlideCollection } from "components/molecules";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Input, Pagination } from "components/atoms";
import useAnime, { GET_ANIME_LIST } from "hooks/useAnime";
import { useLazyQuery } from "@apollo/client";

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

interface PageInfo {
  currentPage: number;
  hasNextPage: boolean;
  lastPage: number;
  perPage: number;
  total: number;
}

const Home = () => {
  const [valueSearch, setValueSearch] = useState<string>();
  const [storeCollection, setStoreCollection] = useState<any[]>([]);
  const [listAnime, setListAnime] = useState<any[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    currentPage: 1,
    hasNextPage: true,
    lastPage: 0,
    perPage: 0,
    total: 0,
  });

  const { getAnimeList } = useAnime({
    getData: {
      variables: {
        page: 1,
        perPage: 10,
      },
    },
  });

  const [loadAnimeList] = useLazyQuery(GET_ANIME_LIST, {
    onCompleted: async (response: any) => {
      const { media, pageInfo } = response?.Page;
      if (media?.length || pageInfo) {
        setListAnime(media);
        setPageInfo(pageInfo);
      }
    },
  });

  const { data } = getAnimeList;

  useEffect(() => {
    if (data?.Page?.media?.length || data?.Page?.pageInfo) {
      setListAnime(data.Page.media);
      setPageInfo(data.Page.pageInfo);
    }
  }, [data]);

  const handleAddCollection = (value: any) => {
    setStoreCollection((prev: any) => [...prev, value]);
  };

  const handleRemoveCollection = (value: any) => {
    setStoreCollection((prev: any) => [
      ...prev.filter((item: any) => item !== value),
    ]);
  };

  // console.log(storeCollection.map((item: any) => item.id));

  const handleNextPage = (value: number) => {
    loadAnimeList({
      variables: {
        page: value + 1,
        perPage: 10,
      },
    });
  };

  const handlePreviousPage = (value: number) => {
    loadAnimeList({
      variables: {
        page: value - 1,
        perPage: 10,
      },
    });
  };

  const isAdded = storeCollection.map((item: any) => item.id);

  return (
    <>
      <WrapperMain>
        <Input
          name="search"
          placeholder="Search..."
          value={valueSearch}
          onChange={(e) => setValueSearch(e.currentTarget.value)}
        />
        <WrapperCard>
          {listAnime.map((item: any) => {
            return (
              <CardAnime
                data={item}
                addCollection={() => handleAddCollection(item)}
                key={item?.id}
                isAdded={isAdded.includes(item.id)}
              />
            );
          })}
        </WrapperCard>
        <Pagination
          currentPage={pageInfo?.currentPage}
          hasNextPage={pageInfo?.hasNextPage}
          next={(page) => handleNextPage(page)}
          previous={(page) => handlePreviousPage(page)}
          total={pageInfo?.total}
        />
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
