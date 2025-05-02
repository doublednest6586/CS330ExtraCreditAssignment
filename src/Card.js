import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import MyModal from './Modal';

const Cards = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cardInfo = [
    {
      title: "Soccer",
      text: "This card is about Soccer the greatest sport in the world!",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg"
    },
    {
      title: "GTA V",
      text: "In this game you can be whoever you want to be. The only limit is your imagination!",
      img: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-272x380.jpg"
    },
    {
      title: "Star Wars",
      text: "One of the greatest movie series of all time and my personal favorite!",
      img: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
    }
  ];

  return (
    <>
      <Row className="m-4">
        {cardInfo.map((card, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center">
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '10px' }}>
              <Card.Img variant="top" src={card.img} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Launch Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <MyModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Cards;