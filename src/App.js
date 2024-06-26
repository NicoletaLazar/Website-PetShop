import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Topbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="top-row">
          <Col style={{ "padding-left": 0, "padding-right": 0 }}>
            <Topbar />
          </Col>
        </Row>
      </Container>
      <div className="App-pages">
        <Routes>
          <Route exact path="/" reloadDocument element={<ProductPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/userpage" element={<UserPage />} />
        </Routes>
      </div>
      <Footer style={{ fixed: "bottom" }} />
    </div>
  );
}

export default App;
