import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <Card className="text-center bg-dark text-white">
            <Card.Body style={{ background: "#3E3F3A", color: "white" }}>
                <Card.Title>E-commerce App made in Academlo</Card.Title>
                <Card.Text className="Footer">
                    <hr />
                    <div>
                        <h4>Contact</h4>
                        <span><i className="fa-brands fa-linkedin"></i> </span>
                        <span><i className="fa-brands fa-github"></i> </span>
                        <span><i className="fa-brands fa-square-whatsapp"></i> </span>
                        <span><i className="fa-solid fa-envelope"></i></span>
                        <h6>© 2022 Ulises Urbina, Academlo.com, All Rights Reserved.</h6>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Footer;