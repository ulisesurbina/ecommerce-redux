import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buyCartThunk, getShoppingCartThunk } from '../store/slices/shoppingCart.slice';

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
        dispatch(getShoppingCartThunk())
    }, [])

    const getTotal = () => {
        let total = 0;
        shoppingCart.forEach((product) => {
            total += Number(product.price * product.productsInCart.quantity)
        })
        return total
    }

    const buyCart = () => {
        dispatch(buyCartThunk())
        navigate("/purchases")
    }

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
                                    <h5>{product.productsInCart.quantity} Pza(s)</h5>
                                    <h6>Subtotal $ {product.price * product.productsInCart.quantity}</h6>
                                    <Button>Delete</Button>
                                </div>
                            ))
                        }
                        <h5>Total: ${getTotal()}</h5>
                        <Button onClick={buyCart}>Buy</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default ShoppingCart;