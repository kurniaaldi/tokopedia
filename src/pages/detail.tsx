import styled from "@emotion/styled";
import { Button } from "components/atoms";
import { BOOKMARK } from "assets";
import { useParams } from "react-router-dom";
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
    margin: 0,
    color: "#ccc",
    textShadow:
      "-1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 0 3px 2px #000",
  },
  (props: any) => ({ ...props, textAlign: props.textAlign || "center" })
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
  const { id } = useParams();
  console.log(id);

  const { getDetailAnimeList } = useAnime({
    detail: {
      skip: !id,
      variables: {
        id: id,
      },
    },
  });

  console.log(getDetailAnimeList);

  const { data } = getDetailAnimeList;

  return (
    <WrapperMain>
      <WrapperBox backgroundImage={`url(${data?.Media?.bannerImage})`}>
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
          }}
        >
          <H4
            style={{
              margin: 0,
              color: "#fff",
              textShadow:
                "-1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 0 3px 2px #000",
            }}
          >
            {data?.Media?.title.english || data?.Media?.title.romaji}
          </H4>
          <H4
            style={{
              margin: 0,
              color: "#fff",
              textShadow:
                "-1px -1px 5px #000, 1px -1px 5px #000, -1px 1px 5px #000, 0 3px 2px #000",
            }}
          >
            82
          </H4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
          >
            <Button prefix={<BOOKMARK />}>Tambahkan Favorit</Button>
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
    </WrapperMain>
  );
};

export default Detail;
