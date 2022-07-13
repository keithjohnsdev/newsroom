import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchArticles(searchTerm.trim());
  };

  const toggleTopHeadlines = () => {
    props.changeNewspaper("top-headlines");
  };

  const toggleEverything = () => {
    props.changeNewspaper("everything");
  };

  return (
    <div className={classes.Toolbar}>
      <Navbar className="shadow-sm" fixed="top" bg="light" expand="md">
        <Container>
          <Navbar.Brand className={classes.brand} href="#home">
            NEWSROOM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={classes.toolbarNav}>
              <Nav.Link onClick={toggleTopHeadlines}>Top Headlines</Nav.Link>
            </Nav>
            <Nav className={classes.toolbarNav}>
              <Nav.Link onClick={toggleEverything}>Everything</Nav.Link>
            </Nav>
            <Nav className={classes.toolbarNav}>
              <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  placeholder="Search Articles..."
                  className="me-2"
                  aria-label="Search"
                  onChange={handleChange}
                  value={searchTerm}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Toolbar;
