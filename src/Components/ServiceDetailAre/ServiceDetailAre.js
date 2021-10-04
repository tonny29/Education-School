import React from 'react';
import './ServiceDetailAre.css';
import { Card, Col } from 'react-bootstrap';
const ServiceDetailAre = (props) => {
    // console.log(props);
    const {image,name,description}=props.serviceAll;
    
    return (
        <div>
            <Col>
                <Card className="service-detail-are">
                    <div className="service-detail">
                        <div>
                            <Card.Img variant="top" src={image} />
                        </div>
                        <div>
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        </Card.Body>
                        </div>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceDetailAre;