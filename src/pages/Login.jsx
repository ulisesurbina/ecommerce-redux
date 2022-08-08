import React from 'react';
import logo from '../images/logo-academlo.png';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <div className="LoginUser">
                <h1><img src={logo} alt='' />Acazon.com.mx</h1>
            </div>
            <Form className="FormLogin" style={{ background: "#3E3F3A", color: "white" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Login
                </Button>
                <hr></hr>
                <h5>Are you new to Acazon?</h5>
                <Button variant="light" type="submit">
                    Create your account
                </Button>
            </Form>
        </div>
    );
};

export default Login;