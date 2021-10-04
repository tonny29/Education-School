import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './About.css';
const About = (props) => {
    const {year,result}=props.aboutAll;
    return (
        <div className="about">
                <Col>
                <Card className="card-style">
                  <Card.Body>
                    <Card.Title>Year : {year}</Card.Title>
                    <Card.Text>Result : {result}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
        
    );
};

export default About;