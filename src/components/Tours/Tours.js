import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Tours = () => {
    const history = useHistory();
    const [tours, setTours] = useState([]);
    const { isLoading } = useAuth()

    useEffect(() => {
        fetch("http://localhost:5000/tours")
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    const handleBooking = id => {
        history.push(`/booking/${id}`)
    }
    if (isLoading) {
        return <div className="text-center my-5">
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <div className="my-5 container">
            <h5 className="text-info"><i>Around the world</i></h5>
            <h1>BEST TRAVEL PACKAGES AVAILABLE</h1>
            <h3>CHOOSE YOUR DESTINATION</h3>
            <Row xs={1} md={3} className="g-5 mt-3 text-start">
                {
                    tours.map(tour => <Col>
                        <Card className="text-uppercase">
                            <Card.Img variant="top" src={tour.img} height="200px" />
                            <Card.Body>
                                <h6 className="text-secondary">{tour.country}</h6>
                                <Card.Title>{tour.title}</Card.Title>
                                <Card.Text className="d-flex justify-content-between">
                                    <h6>{tour.duration}</h6>
                                    <h6 className="text-info">${tour.price}</h6>
                                </Card.Text>
                                <Button onClick={() => handleBooking(tour._id)} variant="info" className="w-100 text-uppercase text-white fw-bold"> Book Now </Button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>

        </div>
    );
};

export default Tours;