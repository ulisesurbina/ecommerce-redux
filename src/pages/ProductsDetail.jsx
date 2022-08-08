import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
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

    console.log(suggestedProducts)

    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            {/* <Row xs={1} md={2} lg={2}> */}
                <div className="DetailContainer">
                    <div className="ImgDetail">
                        <img src={productDet?.productImgs} alt="imageProduct" />
                    </div>
                    <div className="InfoDetail">
                        <h1>{productDet?.title}</h1>
                        <h4>Category: {productDet?.category?.name}</h4>
                        <hr />
                        <h3><b>Price: $ {productDet?.price}</b></h3>
                        <div className="Counter">
                            <h3><b>Quality:</b> {counter} Pza(s)</h3>
                            <button onClick={increment}><i className="fa-solid fa-angle-up"></i></button>
                            <button onClick={decrement}><i className="fa-solid fa-angle-down"></i></button>
                        </div>
                        <hr />
                        <h6>{productDet?.description}</h6>
                    </div>
                </div>
            {/* </Row> */}
            <div className="SuggestedProducts">
                <h3>Suggested Products</h3>
                <Carousel variant="dark">
                    {
                        suggestedProducts.map((suggested) => (
                            <Carousel.Item>
                                <div className="ImgSuggested" key={suggested.id}>
                                    <img className="d-block w-100" alt="First slide" onClick={() => navigate(`/products/${suggested.id}`)} src={suggested.productImgs} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h4 onClick={() => navigate(`/products/${suggested.id}`)}>
                                        {suggested.title}
                                    </h4>
                                </div>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default ProductsDetail;