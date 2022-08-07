import React, { useState } from 'react';
import { Table, Row } from 'react-bootstrap';

const PurchasesCard = (purchase) => {


    console.log(purchase.purchase.cart.products)

    return (
        <div className="ListPurchases">
                <ul style={{ padding: "0" }}>
                    {
                        purchase.purchase.cart.products.map((product) => (
                            <Table striped bordered hover variant="dark" className="container TablePurchases" key={product.id}>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{product.title}</td>
                                        <td>{product.brand}</td>
                                        <td>${product.price}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        ))
                    }
                </ul>
        </div>
    );
};

export default PurchasesCard;