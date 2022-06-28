import { CardAnime, SlideCollection } from "components/molecules";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Input, Modal, Pagination } from "components/atoms";
import useAnime, { GET_ANIME_LIST } from "hooks/useAnime";
import { useLazyQuery } from "@apollo/client";
import Collapse from "rc-collapse";
import { Link } from "react-router-dom";
import { useCollection } from "store/collection";

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
  const {
    state: { collections },
    addCollection,
  }: any = useCollection();

  const [valueSearch, setValueSearch] = useState<string>();
  const [valueCollection, setValueCollection] = useState<string>();

  const [listAnime, setListAnime] = useState<any[]>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openSlide, setOpenSlide] = useState({
    open: false,
    collection: {} as any,
  });

  const [errorCollection, setErrorCollection] = useState<string>();

  const [storeCollection, setStoreCollection] = useState<any[]>([]);
  const [listCollection, setListCollection] = useState<any[]>([]);

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

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setErrorCollection("");
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [errorCollection]);

  useEffect(() => {
    setListCollection(collections);
  }, [collections]);

  const handleAddCollections = (value: any) => {
    const isAdded = storeCollection.map((item: any) => item.id);

    if (!isAdded.includes(value.id)) {
      setStoreCollection((prev: any) => [...prev, value]);
    }
  };

  const handleRemoveCollection = (value: any) => {
    setStoreCollection((prev: any) => [
      ...prev.filter((item: any) => item !== value),
    ]);
  };

  const handleNextPage = (value: number) => {
    loadAnimeList({
      fetchPolicy: "network-only",
      variables: {
        page: value + 1,
        perPage: 10,
        search: valueSearch,
      },
    });
  };

  const handlePreviousPage = (value: number) => {
    loadAnimeList({
      fetchPolicy: "network-only",
      variables: {
        page: value - 1,
        perPage: 10,
        search: valueSearch,
      },
    });
  };

  const handleSearchAnime = () => {
    loadAnimeList({
      fetchPolicy: "network-only",
      variables: {
        page: 1,
        perPage: 10,
        search: valueSearch,
      },
    });
  };

  const handleNewCollection = () => {
    const titleCollection = listCollection.map((item: any) => item.name);

    if (!titleCollection.includes(valueCollection) && valueCollection) {
      setListCollection((prev: any) => [
        ...prev,
        {
          id: prev.length + 1,
          name: valueCollection,
          collection: [],
        },
      ]);
      setValueCollection("");
    } else {
      setErrorCollection("Collection name must be unique!");
    }
  };

  const handleStoreCollection = () => {
    const filterCollection = listCollection.map((item: any) => {
      if (item.name === openSlide?.collection?.name) {
        return {
          ...item,
          collection: [...item.collection, ...storeCollection],
        };
      } else {
        return { ...item };
      }
    });
    addCollection(filterCollection);
    window.localStorage.setItem("collection", JSON.stringify(filterCollection));
    setListCollection(filterCollection);
    setOpenSlide({ open: false, collection: {} });
  };

  const checkItemAnime = (id: number, array: any) => {
    if (!id) {
      return false;
    }

    const searchID = array.filter((item: any) => {
      const ids = item.collection.map((child: any) => child.id);
      return ids.includes(id);
    });

    if (searchID.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Input
        name="search"
        placeholder="Search..."
        value={valueSearch}
        onChange={(e) => setValueSearch(e.currentTarget.value)}
        titleButton="Search"
        onClickButton={() => handleSearchAnime()}
      />

      <WrapperCard>
        {listAnime.map((item: any) => {
          return (
            <CardAnime
              data={item}
              clickIcon={() => {
                if (openSlide.open) {
                  handleAddCollections(item);
                } else {
                  setOpenSlide({ ...openSlide, collection: item });
                  setOpenModal(true);
                }
              }}
              key={item?.id}
              isAdded={checkItemAnime(item.id, collections)}
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
      <Modal
        title="Add Collection"
        open={openModal}
        handleClose={() => setOpenModal(false)}
      >
        <div
          style={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}
        >
          <Input
            name="collection"
            placeholder="collection"
            value={valueCollection}
            onChange={(e) => setValueCollection(e.currentTarget.value)}
            titleButton="Add"
            onClickButton={() => handleNewCollection()}
            errorMsg={errorCollection}
          />
          <Collapse accordion={true}>
            {listCollection.map((item: any) => {
              const collection = item.collection;
              const name = item.name;
              return (
                <Collapse.Panel
                  collapsible="header"
                  header={item.name}
                  extra={
                    <p
                      onClick={() => {
                        setOpenSlide({
                          open: true,
                          collection: {
                            id: listCollection.length,
                            name: name,
                            ...openSlide.collection,
                          },
                        });
                        setStoreCollection([
                          {
                            ...openSlide.collection,
                          },
                        ]);
                        setOpenModal(false);
                      }}
                    >
                      Choose
                    </p>
                  }
                >
                  <ul style={{ textAlign: "left" }}>
                    {collection.map((child: any) => {
                      return <li>{child.title.romaji}</li>;
                    })}
                  </ul>
                </Collapse.Panel>
              );
            })}
          </Collapse>
        </div>
      </Modal>
      {openSlide.open && (
        <SlideCollection
          onAdd={() => handleStoreCollection()}
          cancel={() => setOpenSlide({ open: false, collection: {} })}
          open={openSlide.open}
          data={storeCollection}
          remove={(id: any) => handleRemoveCollection(id)}
        />
      )}
    </>
  );
};

export default Home;
