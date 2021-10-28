import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div className="my-5 container">
            <h5 className="text-info"><i>Around the world</i></h5>
            <h1>BEST TRAVEL PACKAGES AVAILABLE</h1>
            <h3>CHOOSE YOUR DESTINATION</h3>
            <Row xs={1} md={3} className="g-5 mt-3 text-start">
                {
                    tours.map(tour => <Col>
                        <Card>
                            <Card.Img variant="top" src={tour.img} />
                            <Card.Body>
                                <Card.Text>
                                    {tour.country}
                                </Card.Text>
                                <Card.Title>{tour.title}</Card.Title>
                                <Card.Text>
                                    {tour.duration} ${tour.price}
                                </Card.Text>
                                <Button variant="dark" className="w-100"> Book Now </Button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>

        </div>
    );
};

export default Tours;