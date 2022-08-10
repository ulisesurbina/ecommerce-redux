import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getShoppingCartThunk } from '../store/slices/shoppingCart.slice';

const ShoppingCart = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const shoppingCart = useSelector(state => state.shoppingCart);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (token) {
            setShow(true)
        } else {
            navigate("/login")
        }
    }

    useEffect(() => {
        dispatch(getShoppingCartThunk());
    }, [])

    // console.log(shoppingCart)

    return (
        <div>
            <Button className="ButtonShoppingCart" bg="dark" pd="2rem" variant="dark" onClick={handleShow}>
                <i className="fa-solid fa-cart-shopping"></i> Shopping Cart
            </Button>
            <Offcanvas show={show} onHide={handleClose} scroll={true} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        {
                            shoppingCart.map(product => (
                                <div className="container m-2 p-2 ShoppingCart" key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                                    <h5>{product.title}</h5>
                                    <h6>$ {product.price}</h6>
                                    <button>Delete</button>
                                    <button>Buy</button>
                                </div>
                            ))
                        }
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default ShoppingCart;