import { CardList } from "components/molecules";
import styled from "@emotion/styled";
import { useCollection } from "store/collection";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, Input, Modal } from "components/atoms";
import { useEffect, useState } from "react";
import Collapse from "rc-collapse";

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

const Icon = styled.div({
  borderRadius: "50%",
  padding: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  float: "right",
  zIndex: 10,
  gap: "0.5rem",
});

const Collections = () => {
  const {
    state: { collections },
    removeCollection,
    addCollection,
    editCollection,
  }: any = useCollection();

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [valueCollection, setValueCollection] = useState<string>();
  const [valueEditCollection, setValueEditCollection] = useState<string>();

  const [errorCollection, setErrorCollection] = useState<string>();

  const [itemCollection, setItemCollection] = useState<any>({});

  const [dialogEditCollection, setDialogEditCollection] = useState(false);
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

  const handleDeleteCollection = (value: any) => {
    const filterCollection = collections.filter(
      (item: any) => item.name !== value.name
    );

    window.localStorage.setItem("collection", JSON.stringify(filterCollection));
  };

  const handleNewCollection = () => {
    const titleCollection = collections.map((item: any) => item.name);

    if (!titleCollection.includes(valueCollection) && valueCollection) {
      let newCollection = [
        ...collections,
        {
          id: collections.length + 1,
          name: valueCollection,
          collection: [],
        },
      ];
      addCollection(newCollection);
      window.localStorage.setItem("collection", JSON.stringify(newCollection));

      setValueCollection("");
    } else {
      setErrorCollection("Collection name must be unique!");
    }
  };

  const handleEditCollection = () => {
    const titleCollection = collections.map((item: any) => item.name);

    if (!titleCollection.includes(valueEditCollection) && valueEditCollection) {
      let newCollection = collections.map((item: any) => {
        if (item.name === itemCollection.name) {
          return {
            ...item,
            name: valueEditCollection,
          };
        } else {
          return item;
        }
      });

      editCollection({ item: itemCollection, value: valueEditCollection });
      window.localStorage.setItem("collection", JSON.stringify(newCollection));
      setDialogEditCollection(false);
      setValueEditCollection("");
    } else {
      setErrorCollection("Collection name must be unique!");
    }
  };

  return (
    <WrapperMain>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={() => setOpenModal(true)}>New Collection</Button>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {Array.from(collections || []).map((item: any) => {
          return (
            <div
              key={item.id}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: 10,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  onClick={() => navigate(`/collection/${item.id}`)}
                  style={{
                    margin: 0,
                    color: "#007aff",
                    width: "100%",
                    textAlign: "left",
                    marginRight: 15,
                  }}
                >
                  {item.name}
                </h3>
                <Icon
                  onClick={() => {
                    setItemCollection(item);
                    setDialogEditCollection(true);
                    setValueEditCollection(item.name);
                  }}
                >
                  <h5
                    style={{
                      margin: 0,
                      color: "#007aff",
                      width: "100%",
                      textAlign: "left",
                      marginRight: 15,
                    }}
                  >
                    Edit
                  </h5>
                </Icon>
                <Icon
                  onClick={() => {
                    setDialog({
                      open: true,
                      onCancel: () =>
                        setDialog((prev: any) => ({ ...prev, open: false })),
                      onOke: () => {
                        removeCollection(item);
                        handleDeleteCollection(item);
                        setDialog((prev: any) => ({ ...prev, open: false }));
                      },
                    });
                  }}
                >
                  <h5
                    style={{
                      margin: 0,
                      color: "#cf3636",
                      width: "100%",
                      textAlign: "left",
                      marginRight: 15,
                    }}
                  >
                    Delete
                  </h5>
                </Icon>
              </div>
              {item.collection.map((child: any) => {
                return (
                  <CardList
                    key={child.id}
                    item={child}
                    onClick={() => navigate(`/anime/${child.id}`)}
                    withIcon={false}
                  />
                );
              })}
            </div>
          );
        })}
      </div>

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
            {collections.map((item: any) => {
              const collection = item.collection;
              return (
                <Collapse.Panel collapsible="header" header={item.name}>
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
          <Button
            onClick={() => {
              handleEditCollection();
            }}
          >
            Edit
          </Button>
          <Button onClick={() => setDialogEditCollection(false)}>cancel</Button>
        </div>
      </Dialog>

      <Dialog
        title={<h4>Are You Sure, want delete collection permanent?</h4>}
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
    </WrapperMain>
  );
};

export default Collections;
