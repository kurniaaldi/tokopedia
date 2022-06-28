import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCollection } from "store/collection";

const Container = styled.div({
  textAlign: "center",
  maxWidth: 1060,
  minHeight: "100vh",
  margin: "0 auto",
  background: "#16161c",
  paddingTop: "5rem",
});

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

const Layout = (props: any) => {
  const { children } = props;
  const {
    state: { collections },
    addCollection,
  }: any = useCollection();

  useEffect(() => {
    const storageCollection = JSON.parse(
      window?.localStorage?.getItem("collection") || "[]"
    );

    if (storageCollection.length) {
      addCollection(storageCollection);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (collections?.length) {
      window?.localStorage.setItem("collection", JSON.stringify(collections));
    }
  }, [collections]);

  return (
    <Container>
      <head
        style={{
          display: "flex",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 99,
          alignItems: "center",
          flexDirection: "row",
          gap: "1rem",
          padding: "0 1rem",
          maxHeight: "5rem",
          height: "100%",
          background: "#16161c",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/">
          <h4 style={{ color: "#007aff" }}>Animepedia</h4>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/collections">
          <h4 style={{ color: "#007aff" }}>Collections</h4>
        </Link>
      </head>
      <WrapperMain>{children}</WrapperMain>
    </Container>
  );
};

export default Layout;
