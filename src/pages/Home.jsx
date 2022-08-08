import React, { useEffect, useState } from 'react';
import { filterTitleThunk, getProductsThunk, filterCategoryThunk } from '../store/slices/products.slice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchProduct, setSearchProduct] = useState("");
    const [categories, setCategories] = useState();

    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProductsThunk());
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/")
            .then(res => setCategories(res.data.data.categories))
    }, [])

    // console.log(searchProduct)
    console.log(categories)

    return (
        <div>
            <br />
            
            <Row className="m-0">
                <div>
                    <h1>Welcome to Acazon.com.mx</h1>
                    <h4>Our most popular products.</h4>
                </div>
                <InputGroup className="p-3" list="frameworks">
                    <Form.Control
                        placeholder="Product's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={e => setSearchProduct(e.target.value)}
                        value={searchProduct}
                    />
                    <Button variant="danger" onClick={() => dispatch(filterTitleThunk(searchProduct))}>
                        Search
                    </Button>
                </InputGroup>
                <Col lg={3} style={{ marginTop: "1.5rem" }}>
                    <ListGroup className="m-3">
                        <ListGroup.Item style={{ background: "#3E3F3A", color: "white" }}>Categories</ListGroup.Item>
                        {categories?.map((category) => (
                            <ListGroup.Item style={{ background: "#9dddb0", cursor: "pointer" }} key={category.id}
                                onClick={() => dispatch(filterCategoryThunk(category.id))}>{category.name}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col>
                    <Row xs={1} md={2} lg={3} className="g-4 m-3 ContainerProducts">
                        {
                            products.map(product => (
                                <div key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                                    <Col>
                                        <Card className="ContainerCard">
                                            <Card.Img className="ContainerImg" variant="top" src={product.productImgs} />
                                            <Card.Body className="ContainerInfo">
                                                <Card.Title><b>{product.title}</b></Card.Title>
                                                <Card.Text><b>$ {product.price}</b></Card.Text>
                                            </Card.Body>
                                            <Button style={{ color: "black" }} variant="success">Add to car</Button>
                                            <Button style={{ color: "black" }} variant="danger">Buy now</Button>
                                        </Card>
                                    </Col>
                                </div>
                            ))
                        }
                    </Row> 
                </Col>
            </Row>
        </div>
    );
};

export default Home;
