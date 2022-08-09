import React from 'react';
import logo from '../images/logo-academlo.png';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();


    const submit = data => {
        console.log(data);
        axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users/login`, data)
            .then(res => {
                navigate("/")
                localStorage.setItem("token", res.data.data.token)
            })
            .catch(error => {
                if (error.response.status === 404) {
                    alert("Credentials are not valid")
                }
                console.log(error.response)
            })
        reset({
            email: "",
            password: "",
        })
    }

    return (
        <div>
            <div className="LoginUser">
                <h1><img src={logo} alt='' />Acazon.com.mx</h1>
            </div>
            <Form onSubmit={handleSubmit(submit)} className="FormLogin" style={{ background: "#3E3F3A", color: "white" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password")} />
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