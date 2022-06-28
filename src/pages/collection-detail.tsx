import { CardAnime } from "components/molecules";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button, Dialog, Input } from "components/atoms";
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

const Title = styled.p({
  margin: 0,
  color: "#007aff",
});

const H3 = styled.h3({
  margin: 0,
  color: "#007aff",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
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
        <div style={{ minWidth: "20%" }}>
          {listAnime?.index > 0 && (
            <Title
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
        <H3
          onClick={() => {
            setValueEditCollection(listAnime?.name);

            setDialogEditCollection(true);
          }}
        >
          {listAnime?.name} <EDIT style={{ width: 15, height: 15 }} />
        </H3>
        <div style={{ minWidth: "20%" }}>
          {collections.length > listAnime?.index + 1 && (
            <Title
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

      <Dialog
        title={
          <Input
            name="collection"
            placeholder="collection"
            value={valueEditCollection}
            onChange={(e) => setValueEditCollection(e.currentTarget.value)}
            titleButton="Edit"
            errorMsg={errorCollection}
          />
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
        title={<h4>Are You Sure, want delete ANIME permanent?</h4>}
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
