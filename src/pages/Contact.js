import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers';
import { Form, Button } from 'react-bootstrap';


export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;


    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value })
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
    };

    const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }


    return (
        <section className="contact-page">
            <h1>Contact me</h1>
           
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleInputChange} type="text" placeholder="Enter name" defaultValue={name} onBlur={handleChange} name="name" />
                    <Form.Text className="text-muted">
            
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control onChange={handleInputChange} type="email" defaultValue={email} onBlur={handleChange} name="email" />
                    <Form.Text className="text-muted">
               
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Meassage</Form.Label>
                    <Form.Control onChange={handleInputChange} as='textarea' name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    <Form.Text className="text-muted">
               
                    </Form.Text>

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted error-message">
                { errorMessage}
                    </Form.Text>
            </Form>
        </section>
    )

}
