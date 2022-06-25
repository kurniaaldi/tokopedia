import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

export const GET_ANIME_LIST = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
          medium
        }
      }
    }
  }
`;

export const GET_DETAIL_ANIME = gql`
  query ($id: Int) {
    Media(id: $id) {
      id
      title {
        romaji
        english
        native
      }
      source
      format
      averageScore
      type
      status
      description
      episodes
      idMal
      genres
      season
      duration
      volumes
      isLicensed
      studios(isMain: true) {
        nodes {
          name
          id
          isAnimationStudio
        }
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
    }
  }
`;

const useAnime = (option?: any) => {
  const getAnimeList = useQuery(GET_ANIME_LIST, { ...option.getData });
  const getDetailAnimeList = useQuery(GET_DETAIL_ANIME, {
    skip: true,
    ...option.detail,
  });

  return {
    getAnimeList,
    getDetailAnimeList,
  };
};

export default useAnime;
