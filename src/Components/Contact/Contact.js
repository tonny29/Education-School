import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ContactAre from '../ContactAre/ContactAre';
import './Contact.css'
const Contact = () => {
    const [contact,setContact]=useState([]);
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setContact(data))
    },[])
    return (
        <div>
            <div className="speech-style">
                <img src="https://videohive.img.customer.envatousercontent.com/files/bb1ac20c-de86-49bf-9b56-6ccd5d41fe82/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=93e14ae0dae2d0dc34f838226ee7b399" alt="" />
                <h3>PRINCIPLE SPEECH ABOUT SCHOOL</h3>
                <p>A good school visibly and substantively improves the community it is embedded within.
                A good school adapts quickly to social change.A good school uses every resource, advantage, gift, and opportunity it has to grow students and tends to see more resources, advantages, gifts, and opportunities than lower-performing schools.A good school has students who get along with and support one another towards a common goal–and they know what that goal is.A good school produces students that read and write because they want to.A good school admits its failures and limitations while working together with a ‘global community’ to grow.A good school has diverse and compelling measures of success–measures that families and communities understand and value.A good school is full of students who know what’s worth understanding.A good school speaks the language of the children, families, and community it serves.A good school improves other schools and cultural organizations it’s connected with.A good school understands the relationship between curiosity, inquiry, and lasting human change.
                A good school makes certain that every single student and family feels welcome and understood on equal terms.A good school is full of students that not only ask great questions but do so with great frequency and ferocity.A good school changes students; students change great schools.A good school understands the difference between a bad idea and the bad implementation of a good idea. A good school teaches thought, not content.A good school decenters itself–makes technology, curriculum, policies, and its other ‘pieces’ less visible than students and hope and growth.A good school is disruptive of bad cultural practices. These include intolerance based on race, income, faith, and sexual preference, aliteracy, and apathy toward the environment.That alla qualities we have in ou school.</p>
            </div>
            <br />
            <div className="contact-text">
                <h2>!!IF YOU NEED ANY HELP YOU CAN CONATCT WITH US!!</h2>
            </div>
            <div className="contact-area">
                <Row xs={1} md={2} className="g-4">
                    {
                        contact.map(contacts=><ContactAre contacts={contacts}></ContactAre>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Contact;