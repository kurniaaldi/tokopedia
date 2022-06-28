import styled from "@emotion/styled";
import { Button, Dialog, Modal } from "components/atoms";
import { BOOKMARK, STAR } from "assets";
import { useParams } from "react-router-dom";
import useAnime from "hooks/useAnime";
import { useCollection } from "store/collection";
import { checkItemAnime } from "utils/checkAlreadyAdded";
import Collapse from "rc-collapse";
import { useState } from "react";

const WrapperBox = styled.div(
  {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "25rem",
    height: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  (props: any) => ({ backgroundImage: props.backgroundImage })
);

const Title = styled.p({
  textAlign: "left",
  margin: 0,
  color: "#ccc",
  textShadow:
    "-1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 0 3px 2px #000",
  fontWeight: "bold",
});

const H4 = styled.h4({
  margin: 0,
  color: "#ccc",
  textShadow:
    "-1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 0 3px 2px #000",
});

const Subtitle = styled.p(
  {
    textAlign: "left",
    margin: 0,
    color: "#ccc",
    textShadow:
      "-1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 0 3px 2px #000",
  },
  (props: any) => ({ ...props })
);

const BoxSpesifikasi = styled.div({
  width: "100%",
  display: "flex",
  padding: "10px 20px",
  borderBottom: "1px solid",
  borderLeft: "1px solid",
  borderColor: "#333",
  borderRadius: "0 0 0 8px",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "0.5rem",
  marginTop: 10,
});

const Detail = () => {
  const {
    state: { collections },
    addAnime,
    removeAnime,
  }: any = useCollection();
  const { id } = useParams();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dialog, setDialog] = useState({
    open: false,
    onCancel: () => {},
    onOke: () => {},
  });

  const { getDetailAnimeList } = useAnime({
    detail: {
      skip: !id,
      variables: {
        id: id,
      },
    },
  });

  const { data, loading } = getDetailAnimeList;

  const isAdded = checkItemAnime(parseInt(id as string), collections) || false;

  const simpleDataAnime = {
    __typename: "Media",
    id: data?.Media?.id,
    title: data?.Media?.title,
    coverImage: data?.Media?.coverImage,
  };

  if (loading) return <p>loading...</p>;
  return (
    <div>
      <WrapperBox>
        <img
          src={data?.Media?.coverImage.large}
          alt={data?.Media?.title.english}
          style={{
            width: "10rem",
            height: "15rem",
            objectFit: "cover",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            marginBottom: 100,
            zIndex: 3,
          }}
        />
        <div
          style={{
            backgroundImage: `url(${data?.Media?.bannerImage})`,
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            filter: "blur(2px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            background: "linear-gradient(to bottom,#00000000,#111)",
            minHeight: "20rem",
            flexDirection: "column",
            gap: "1rem",
            zIndex: 2,
          }}
        >
          <H4>{data?.Media?.title.english || data?.Media?.title.romaji}</H4>
          <H4
            style={{
              margin: 0,
              color: "#fff",
              textShadow: "none",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <STAR color="#FFC833" /> 82
          </H4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
          >
            <Button
              onClick={() =>
                !isAdded
                  ? setOpenModal(true)
                  : setDialog({
                      open: true,
                      onCancel: () =>
                        setDialog((prev: any) => ({ ...prev, open: false })),
                      onOke: () => {
                        removeAnime(parseInt(id as string));
                        setDialog((prev: any) => ({ ...prev, open: false }));
                      },
                    })
              }
              prefix={<BOOKMARK color={isAdded && "#FF7D75"} />}
            >
              Tambahkan Favorit
            </Button>
          </div>
        </div>
      </WrapperBox>
      <WrapperBox>
        <BoxSpesifikasi>
          <Title>Alternatif Judul:</Title>
          <Subtitle>{data?.Media?.title.english}</Subtitle>
          <Subtitle>{data?.Media?.title.native}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Status:</Title>
          <Subtitle>{data?.Media?.status}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Episode:</Title>
          <Subtitle color="#007aff">{data?.Media?.episodes}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Jenis:</Title>
          <Subtitle color="#007aff">{data?.Media?.format}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Season:</Title>
          <Subtitle color="#007aff">{data?.Media?.season}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>studios:</Title>
          <Subtitle color="#007aff">
            {data?.Media?.studios.nodes?.[0].name}
          </Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Genres:</Title>
          <Subtitle color="#007aff">
            {Array.from(data?.Media?.genres || []).join()}
          </Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Description:</Title>
          {/* <Subtitle textAlign="left">{data?.Media?.description}</Subtitle> */}
          <div
            style={{ color: "#ccc", textAlign: "left" }}
            dangerouslySetInnerHTML={{ __html: data?.Media?.description }}
          />
        </BoxSpesifikasi>
      </WrapperBox>
      <Modal
        title="Add Collection"
        open={openModal}
        handleClose={() => setOpenModal(false)}
      >
        <div
          style={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}
        >
          <Collapse accordion={true}>
            {collections.map((item: any) => {
              const collection = item.collection;
              return (
                <Collapse.Panel
                  collapsible="header"
                  header={item.name}
                  extra={
                    <p
                      onClick={() => {
                        addAnime({ name: item.name, item: simpleDataAnime });
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
      <Dialog
        title={<h4>Are You Sure, want remove ANIME from collection?</h4>}
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
    </div>
  );
};

export default Detail;
