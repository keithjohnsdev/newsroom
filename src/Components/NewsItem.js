import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  const url = props.url;

  const handleClick = () => {
    window.open(url);
  };

  return (
    <div className={classes.NewsItem}>
      <Card
        className={`container ${classes.card}`}
        style={{ width: "80%", margin: "0 10%" }}
        onClick={handleClick}
      >
        <Card.Body>
          <hr />
          <Card.Title className={classes.title}>
            {props.title.toUpperCase()}
          </Card.Title>
          <hr />
          <Row>
            <Col xs={12} md={7}>
              <Card.Img variant="top" src={props.image} />
            </Col>
            <Col xs={12} md={5}>
              <Card.Text>{props.description}</Card.Text>
            </Col>
            <p></p>
            <hr />
          </Row>
        </Card.Body>
      </Card>
    </div>

    // <Card  onClick={handleClick}>
    //   <div className={classes.newsItem}>
    //     <img src={props.image} alt=""></img>
    //     <h3>{props.title}</h3>
    //     <p>{props.description}</p>
    //   </div>
    // </Card>
  );
};

export default NewsItem;
