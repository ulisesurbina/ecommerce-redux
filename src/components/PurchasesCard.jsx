import React, { useState } from 'react';
import { Table, Row } from 'react-bootstrap';

const PurchasesCard = (purchase) => {


    console.log(purchase.purchase.cart.products)

    return (
        <div className="ListPurchases">
            {/* <ul style={{ padding: "0" }}> */}
            <h4>{purchase.purchase.createdAt.slice(0,10)}</h4>
            <Table striped bordered hover variant="dark" className="container TablePurchases" >
                <thead>
                    <tr>
                        <th>Quality</th>
                        <th>Product</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        purchase.purchase.cart.products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.productsInCart.quantity} Pza(s)</td>
                                <td>{product.title}</td>
                                <td>{product.brand}</td>
                                <td>${product.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            {/* </ul> */}
        </div>
    );
};

export default PurchasesCard;