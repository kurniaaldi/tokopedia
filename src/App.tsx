import "./App.css";
import styled from "@emotion/styled";
import Home from "pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "pages/detail";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "libs/apolloClient";
import "rc-collapse/assets/index.css";
import Collections from "pages/collection";

const Container = styled.div({
  textAlign: "center",
  maxWidth: 1060,
  background: "#111",
  minHeight: "100vh",
  margin: "0 auto",
});

const App = () => {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/anime/:id" element={<Detail />} />
          </Routes>
          <Routes>
            <Route path="collections" element={<Collections />} />
          </Routes>
        </Container>
      </Router>
    </ApolloProvider>
  );
};

export default App;
