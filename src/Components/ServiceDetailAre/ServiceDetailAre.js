import React from 'react';
import { Card, Col } from 'react-bootstrap';
const ServiceDetailAre = (props) => {
    // console.log(props);
    const {image,name,description}=props.serviceAll;
    
    return (
        <div>
            <Col>
                <Card>
                    <div style={{display:"flex"}}>
                        <div>
                            <Card.Img variant="top" src={image} />
                        </div>
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceDetailAre;