import React from 'react';
import './ServiceAre.css';
import { Card, Col } from 'react-bootstrap';
const ServicesAre = (props) => {
    const {name,image,description,result,totalCost}=props.servicesIs;
    return (
        <div>
            <Col>
                <Card className="serviceAre">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Result : {result}</Card.Text>
                    <Card.Text>Total-Cost : ${totalCost}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServicesAre;