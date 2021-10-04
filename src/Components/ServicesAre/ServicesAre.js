import React from 'react';
import { Card, Col } from 'react-bootstrap';
const ServicesAre = (props) => {
    const {name,image,description}=props.servicesIs;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServicesAre;