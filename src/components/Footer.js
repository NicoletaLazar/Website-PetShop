import React from "react";
import {
  Col,
  Container,
  Row,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Row>
        <Container fluid className="footer dark fixed">
          <Col className="col-5">
            <div className="py-3 my-4">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-muted">
                    Cookies
                  </a>
                </li>
              </ul>
              <p className="text-center text-muted">
                Ollie's Shop • © {new Date().getFullYear()}
              </p>
            </div>
          </Col>
          <Col className="col-5">
            <Form className="justify-content-center py-3 my-4 text-muted">
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex">
                <FloatingLabel controlId="input_type" label="Email address">
                  <Form.Control
                    id="input_type"
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <Button
                  className="btn1"
                  variant="dark"
                  // sm={1}
                  size="sm"
                  type="submit"
                  id="subscribe_btn"
                >
                  Subscribe
                </Button>
              </div>
            </Form>
          </Col>
        </Container>
      </Row>
    </>
  );
}

export default Footer;
