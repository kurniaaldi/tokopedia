import { CardList } from "components/molecules";
import styled from "@emotion/styled";

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

const dummyData = [
  {
    id: 1,
    name: "test",
    collection: [
      {
        __typename: "Media",
        id: 6,
        title: {
          __typename: "MediaTitle",
          romaji: "TRIGUN",
          english: "Trigun",
        },
        coverImage: {
          __typename: "MediaCoverImage",
          large:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6-Zzun7PHNNgPt.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx6-Zzun7PHNNgPt.jpg",
        },
      },
      {
        __typename: "Media",
        id: 5,
        title: {
          __typename: "MediaTitle",
          romaji: "Cowboy Bebop: Tengoku no Tobira",
          english: "Cowboy Bebop: The Movie - Knockin' on Heaven's Door",
        },
        coverImage: {
          __typename: "MediaCoverImage",
          large:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b5-Zs2cbrglTu67.png",
        },
      },
      {
        __typename: "Media",
        id: 6,
        title: {
          __typename: "MediaTitle",
          romaji: "TRIGUN",
          english: "Trigun",
        },
        coverImage: {
          __typename: "MediaCoverImage",
          large:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6-Zzun7PHNNgPt.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx6-Zzun7PHNNgPt.jpg",
        },
      },
      {
        __typename: "Media",
        id: 7,
        title: {
          __typename: "MediaTitle",
          romaji: "Witch Hunter ROBIN",
          english: "Witch Hunter ROBIN",
        },
        coverImage: {
          __typename: "MediaCoverImage",
          large:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7-6uh1fPvbgS9t.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx7-6uh1fPvbgS9t.png",
        },
      },
    ],
  },
  {
    id: 2,
    name: "new",
    collection: [
      {
        __typename: "Media",
        id: 15,
        title: {
          __typename: "MediaTitle",
          romaji: "Eyeshield 21",
          english: "Eyeshield 21",
        },
        coverImage: {
          __typename: "MediaCoverImage",
          large:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx15-A4F2t0TgWoi4.png",
        },
      },
      {
        __typename: "Media",
        id: 16,
        title: {
          __typename: "MediaTitle",
          romaji: "Hachimitsu to Clover",
          english: "Honey and Clover",
        },
        coverImage: {
          __typename: "MediaCoverImage",
          large:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16-5fJZ2Sy2ThRA.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16-5fJZ2Sy2ThRA.jpg",
        },
      },
    ],
  },
];

const Collections = () => {
  return (
    <WrapperMain>
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
        {dummyData.map((item: any) => {
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
              }}
            >
              <h4
                style={{
                  margin: 0,
                  color: "#007aff",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {item.name}
              </h4>
              {item.collection.map((child: any) => {
                return (
                  <CardList
                    key={child.id}
                    item={child}
                    onClick={() => console.log("asd")}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </WrapperMain>
  );
};

export default Collections;
