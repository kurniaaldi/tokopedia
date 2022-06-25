import styled from "@emotion/styled";
import { Button } from "components/atoms";
import { BOOKMARK } from "assets";

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
  const dummy = {
    id: 1,
    title: {
      romaji: "Cowboy Bebop",
      english: "Cowboy Bebop",
      native: "カウボーイビバップ",
    },
    source: "ORIGINAL",
    format: "TV",
    averageScore: 86,
    type: "ANIME",
    status: "FINISHED",
    description:
      "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",
    episodes: 26,
    idMal: 1,
    season: "SPRING",
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    coverImage: {
      extraLarge:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png",
      large:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png",
      medium:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png",
      color: "#f1785d",
    },
    bannerImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5-VOcSZFepDDhm.jpg",
    studios: {
      nodes: [
        {
          name: "Sunrise",
          id: 14,
          isAnimationStudio: true,
        },
      ],
    },
  };

  return (
    <WrapperMain>
      <WrapperBox backgroundImage={`url(${dummy.bannerImage})`}>
        <img
          src={dummy.coverImage.large}
          alt="dummy.png"
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
            {dummy.title.english}
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
          <Subtitle>{dummy.title.english}</Subtitle>
          <Subtitle>{dummy.title.native}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Status:</Title>
          <Subtitle>{dummy.status}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Episode:</Title>
          <Subtitle color="#007aff">{dummy.episodes}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Jenis:</Title>
          <Subtitle color="#007aff">{dummy.format}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Season:</Title>
          <Subtitle color="#007aff">{dummy.season}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>studios:</Title>
          <Subtitle color="#007aff">{dummy.studios.nodes?.[0].name}</Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Genres:</Title>
          <Subtitle color="#007aff">
            {Array.from(dummy.genres || []).join()}
          </Subtitle>
        </BoxSpesifikasi>
        <BoxSpesifikasi>
          <Title>Description:</Title>
          {/* <Subtitle textAlign="left">{dummy.description}</Subtitle> */}
          <div
            style={{ color: "#ccc", textAlign: "left" }}
            dangerouslySetInnerHTML={{ __html: dummy.description }}
          />
        </BoxSpesifikasi>
      </WrapperBox>
    </WrapperMain>
  );
};

export default Detail;
