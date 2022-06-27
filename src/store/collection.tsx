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
const REMOVE_COLLECTION = "REMOVE_COLLECTION";

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
      type: ADD_COLLECTION,
      payload: data,
    });
  };

  const removeCollection = (data: any) => {
    dispatch({
      type: REMOVE_COLLECTION,
      payload: data,
    });
  };

  return { state, addCollection, editCollection, removeCollection };
};

export const CollectionsProvider = ({ children }: any) => {
  const { state, addCollection, editCollection, removeCollection } = actions();

  return (
    <CollectionContext.Provider
      value={{ state, addCollection, editCollection, removeCollection }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollection = () => useContext(CollectionContext);
