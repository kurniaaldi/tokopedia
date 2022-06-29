import { CardAnime } from "components/molecules";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button, Dialog, EmptyCollection, Input } from "components/atoms";
import { useCollection } from "store/collection";
import { useNavigate, useParams } from "react-router-dom";
import { EDIT, TRASH } from "assets";

const WrapperCard = styled.section({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "0.5rem",
  width: "100%",
  "@media only screen and (min-width: 420px)": {
    gridTemplateColumns: "repeat(5, 1fr)",
  },
});

const Title = styled.p(
  {
    margin: 0,
    color: "#007aff",
    borderRadius: "25%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    cursor: "pointer",
  },
  (props: any) => ({ ...props })
);

const H1 = styled.h1({
  margin: 0,
  color: "#007aff",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  borderBottom: "1px solid",
  borderTop: "1px solid",
  borderColor: "#007aff",
  padding: "15px 10px",
  borderRadius: "25%",
  cursor: "pointer",
});

const CollectionDetail = () => {
  const {
    state: { collections },
    removeAnime,
    editCollection,
  }: any = useCollection();
  const { id } = useParams();
  const navigate = useNavigate();

  const [dialogEditCollection, setDialogEditCollection] = useState(false);
  const [valueEditCollection, setValueEditCollection] = useState<string>();
  const [nameAnime, setNameAnime] = useState<string>();

  const [listAnime, setListAnime] = useState<any>({});

  const [errorCollection, setErrorCollection] = useState<string>();

  const [dialog, setDialog] = useState({
    open: false,
    onCancel: () => {},
    onOke: () => {},
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setErrorCollection("");
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [errorCollection]);

  useEffect(() => {
    if (id && collections.length) {
      let findCollection = collections
        .map((loop: any, idx: number) => ({ ...loop, index: idx }))
        .filter((item: any) => item.id === parseInt(id))[0];
      setListAnime(findCollection);
    }
  }, [collections, id]);

  const handleEditCollection = () => {
    const titleCollection = collections.map((item: any) => item.name);

    if (!titleCollection.includes(valueEditCollection) && valueEditCollection) {
      let newCollection = collections.map((item: any) => {
        if (item.name === listAnime.name) {
          return {
            ...item,
            name: valueEditCollection,
          };
        } else {
          return item;
        }
      });

      editCollection({ item: listAnime, value: valueEditCollection });
      window.localStorage.setItem("collection", JSON.stringify(newCollection));
      setDialogEditCollection(false);
      setValueEditCollection("");
    } else {
      setErrorCollection("Collection name must be unique!");
    }
  };

  if (!collections.length) {
    return <EmptyCollection title="You No have collection" />;
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          maxHeight: "5rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem 0",
        }}
      >
        <div
          style={{
            minWidth: "20%",
          }}
        >
          {listAnime?.index > 0 && (
            <Title
              style={{
                justifyContent: "flex-start",
                borderBottom: "1px solid",
                borderLeft: "1px solid",
                borderTop: "1px solid",
                borderColor: "#007aff",
                padding: 10,
              }}
              onClick={() =>
                navigate(
                  `/collection/${collections?.[listAnime.index - 1]?.id}`
                )
              }
            >
              {listAnime.index > 0
                ? collections?.[listAnime.index - 1]?.name
                : ""}
            </Title>
          )}
        </div>
        <H1
          onClick={() => {
            setValueEditCollection(listAnime?.name);

            setDialogEditCollection(true);
          }}
        >
          {listAnime?.name} <EDIT style={{ width: 15, height: 15 }} />
        </H1>

        <div
          style={{
            minWidth: "20%",
          }}
        >
          {collections.length > listAnime?.index + 1 && (
            <Title
              style={{
                borderBottom: "1px solid",
                borderRight: "1px solid",
                borderTop: "1px solid",
                borderColor: "#007aff",
              }}
              onClick={() =>
                navigate(
                  `/collection/${collections?.[listAnime.index + 1]?.id}`
                )
              }
            >
              {collections.length > listAnime?.index + 1 &&
                collections?.[listAnime?.index + 1]?.name}
            </Title>
          )}
        </div>
      </div>

      {listAnime?.collection?.length ? (
        <WrapperCard>
          {Array.from(listAnime.collection || []).map((item: any) => {
            return (
              <CardAnime
                customIcon={
                  <div
                    style={{
                      padding: 2,
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TRASH />
                  </div>
                }
                data={item}
                clickIcon={() => {
                  setNameAnime(item?.title?.english || item?.title?.romaji);
                  setDialog({
                    open: true,
                    onCancel: () =>
                      setDialog((prev: any) => ({ ...prev, open: false })),
                    onOke: () => {
                      removeAnime(item.id);
                      setDialog((prev: any) => ({ ...prev, open: false }));
                    },
                  });
                }}
                key={item?.id}
                isAdded={true}
              />
            );
          })}
        </WrapperCard>
      ) : (
        <EmptyCollection title="No Anime Collection" />
      )}

      <Dialog
        title={
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <h4>{`Are You Sure, want change collection "${valueEditCollection}" permanent?`}</h4>

            <Input
              name="collection"
              placeholder="collection"
              value={valueEditCollection}
              onChange={(e) =>
                setValueEditCollection(
                  e.currentTarget.value.replace(/[^\w\s]/gi, "")
                )
              }
              titleButton="Edit"
              errorMsg={errorCollection}
            />
          </div>
        }
        open={dialogEditCollection}
        handleClose={() => setDialogEditCollection(false)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "0.5rem",
          }}
        >
          <Button onClick={() => handleEditCollection()}>Edit</Button>
          <Button onClick={() => setDialogEditCollection(false)}>cancel</Button>
        </div>
      </Dialog>

      <Dialog
        title={
          <h4>{`Are You Sure, want delete ANIME "${nameAnime}" from collection?`}</h4>
        }
        open={dialog.open}
        handleClose={() => dialog.onCancel()}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "0.5rem",
          }}
        >
          <Button
            onClick={() => {
              dialog.onOke();
            }}
          >
            Ok
          </Button>
          <Button onClick={() => dialog.onCancel()}>cancel</Button>
        </div>
      </Dialog>
    </>
  );
};

export default CollectionDetail;
