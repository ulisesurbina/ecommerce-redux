import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

const ShoppingCart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
                <Button className="ButtonShoppingCart" bg="dark" pd="2rem" variant="dark" onClick={handleShow}>
                <i className="fa-solid fa-cart-shopping"></i> Shopping Cart
                </Button>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        
                    </Offcanvas.Body>
                </Offcanvas>
        </div>
    );
};

export default ShoppingCart;