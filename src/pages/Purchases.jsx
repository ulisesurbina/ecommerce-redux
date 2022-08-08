import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import PurchasesCard from '../components/PurchasesCard';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch();

    const purchases = useSelector(state => state.purchases)

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])

    // console.log(purchases)

    const products = purchases.map((products) => (
        products.cart.products
    ))

    console.log(products)

    return (
        <div>
            <br />
            <h1>Here you can find your purchases made:</h1>
            <br />
            <div>
                {
                    purchases.map((purchase) => (
                        <PurchasesCard purchase={purchase} />
                    ))
                }
            </div>
        </div>
    );
};

export default Purchases;