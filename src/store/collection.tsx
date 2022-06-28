import { createContext, useContext, useReducer } from "react";

type ItemCollection = {
  id: number;
  name: string;
  collection: ItemAnime[];
};

type ItemAnime = {
  __typename: string;
  id: number;
  title: Title;
  coverImage: CoverImage;
};

type Title = {
  __typename: string;
  romaji: string;
  english: string;
};

type CoverImage = {
  __typename: string;
  large: string;
  medium: string;
};

const CollectionContext = createContext({});

const ADD_COLLECTION = "ADD_COLLECTION";
const EDIT_COLLECTION = "EDIT_COLLECTION";
const REMOVE_COLLECTION = "REMOVE_COLLECTION";
const REMOVE_ANIME = "REMOVE_ANIME";
const ADD_ANIME = "ADD_ANIME";

const INITIAL_STATE = { collections: [] as ItemCollection[] };

type Types = {
  collections: any;
};

const reducer = (state: Types, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_COLLECTION:
      return { collections: [...payload] };

    case REMOVE_COLLECTION:
      return {
        collections: state.collections.filter(
          (item: any) => item.name !== payload.name
        ),
      };

    case EDIT_COLLECTION:
      return {
        collections: state.collections.map((item: any) => {
          if (item.name === payload.item.name) {
            return {
              ...item,
              name: payload.value,
            };
          } else {
            return item;
          }
        }),
      };

    case REMOVE_ANIME:
      return {
        collections: state.collections.map((item: any) => {
          return {
            ...item,
            collection: item.collection.filter(
              (fill: any) => fill.id !== payload
            ),
          };
        }),
      };

    case ADD_ANIME:
      return {
        collections: state.collections.map((item: any) => {
          if (item.name === payload.name) {
            return { ...item, collection: [...item.collection, payload.item] };
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};

const actions = (initialState: any = INITIAL_STATE) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch]: any = useReducer(reducer, initialState);

  const addCollection = (data: any) => {
    dispatch({
      type: ADD_COLLECTION,
      payload: data,
    });
  };

  const editCollection = (data: any) => {
    dispatch({
      type: EDIT_COLLECTION,
      payload: data,
    });
  };

  const removeCollection = (data: any) => {
    dispatch({
      type: REMOVE_COLLECTION,
      payload: data,
    });
  };
  const removeAnime = (data: any) => {
    dispatch({
      type: REMOVE_ANIME,
      payload: data,
    });
  };

  const addAnime = (data: any) => {
    dispatch({
      type: ADD_ANIME,
      payload: data,
    });
  };

  return {
    state,
    addCollection,
    editCollection,
    removeCollection,
    removeAnime,
    addAnime,
  };
};

export const CollectionsProvider = ({ children }: any) => {
  const {
    state,
    addCollection,
    editCollection,
    removeCollection,
    removeAnime,
    addAnime,
  } = actions();

  return (
    <CollectionContext.Provider
      value={{
        state,
        addCollection,
        editCollection,
        removeCollection,
        removeAnime,
        addAnime,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollection = () => useContext(CollectionContext);
