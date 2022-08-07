import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <Card className="text-center bg-dark text-white">
                <Card.Body style={{ background: "#3E3F3A", color: "white" }}>
                    <Card.Title>E-commerce App made in Academlo</Card.Title>
                    <Card.Text className="Footer">
                        <hr />
                        <h4>Contact</h4>
                        <span><i class="fa-brands fa-linkedin"></i> </span>
                        <span><i class="fa-brands fa-github"></i> </span>
                        <span><i class="fa-brands fa-square-whatsapp"></i> </span>
                        <span><i class="fa-solid fa-envelope"></i></span>
                        <p>© 2022 Ulises Urbina, Academlo.com, All Rights Reserved.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
    );
};

export default Footer;