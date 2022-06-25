import "./App.css";
import styled from "@emotion/styled";
import Home from "pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "pages/detail";

const Container = styled.div({
  textAlign: "center",
  maxWidth: 1060,
  background: "#111",
  minHeight: "100vh",
  margin: "0 auto",
});

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/anime/:id" element={<Detail />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
