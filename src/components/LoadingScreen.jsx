import React from 'react';
import '../styles/loadingScreen.css';
import { Spinner } from 'react-bootstrap';

const LoadingScreen = () => {
    return (
        <div className="Overlay">
           <Spinner animation="grow" variant="dark" />
           <Spinner animation="grow" variant="dark" />
           <Spinner animation="grow" variant="dark" />
           <Spinner animation="grow" variant="dark" />
           <Spinner animation="grow" variant="dark" />
           <Spinner animation="grow" variant="dark" />
        </div>
    );
};

export default LoadingScreen;