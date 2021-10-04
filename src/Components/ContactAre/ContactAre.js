import React from 'react';
import './ContactAre.css';
import { Card, Col } from 'react-bootstrap';
const ContactAre = (props) => {
    const {email,phone,address}=props.contacts;
    return (
        <div>
            <Col>
                <Card className="contact-card-style">
                  <Card.Body>
                    <Card.Title>Address : {address}</Card.Title>
                    <Card.Text>E-mail : {email}</Card.Text>
                    <Card.Text>Phone Number : {phone}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ContactAre;