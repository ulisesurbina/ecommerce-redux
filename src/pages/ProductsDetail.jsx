import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductsDetail = () => {

    const allProducts = useSelector(state => state.products);
    const [productDet, setProductDet] = useState({});
    const [suggestedProducts, setSuggestedProducts] = useState([]);

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const productsFind = allProducts.find((productItem) => Number(productItem.id) === Number(id))
        setProductDet(productsFind)
        // console.log(products)
        const filteredProducts = allProducts.filter(productItem =>
            productItem.category.id === productsFind.category.id)
        setSuggestedProducts(filteredProducts);
        console.log(filteredProducts)
    }, [allProducts, id])

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    return (
        <div>
            <h1>Products Details</h1>
            <h3>{productDet?.title}</h3>
            <h3>Category: {productDet?.category?.name}</h3>
            <img src={productDet?.productImgs} alt="imageProduct" />
            <h5>$ {productDet?.price}</h5>
            <p>{productDet?.description}</p>
            <ul>
                {
                    suggestedProducts.map((suggested) => (
                        <div key={suggested.id}>
                            <li onClick={() => navigate(`/products/${suggested.id}`)}>
                                {suggested.title}
                            </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductsDetail;