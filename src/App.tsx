import "./App.css";
import Home from "pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "pages/detail";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "libs/apolloClient";
import "rc-collapse/assets/index.css";
import Collections from "pages/collection";
import { CollectionsProvider } from "store/collection";
import CollectionDetail from "pages/collection-detail";
import Layout from "components/layout";

const App = () => {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <CollectionsProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/anime/:id" element={<Detail />} />
            </Routes>
            <Routes>
              <Route path="/collections" element={<Collections />} />
            </Routes>
            <Routes>
              <Route path="/collection/:id" element={<CollectionDetail />} />
            </Routes>
          </Layout>
        </Router>
      </CollectionsProvider>
    </ApolloProvider>
  );
};

export default App;
