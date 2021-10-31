import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';


const Tours = () => {
    const history = useHistory();
    const [tours, setTours] = useState([]);
    // load all data from data source
    useEffect(() => {
        fetch("https://traveller-dotcom-server.herokuapp.com/tours")
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    // handle booking function
    const handleBooking = id => {
        history.push(`/booking/${id}`)
    }
    // all tour or services section
    return (
        <div className="my-5 container">
            <h5 className="text-info"><i>Around the world</i></h5>
            <h1>BEST TRAVEL PACKAGES AVAILABLE</h1>
            <h3>CHOOSE YOUR DESTINATION</h3>
            {tours.length ?
                <Row xs={1} md={3} className="g-5 mt-3 text-start">
                    {
                        tours.map(tour => <Zoom>
                            <Col>
                                <Card className="text-uppercase border-0 shadow-lg">
                                    <Card.Img variant="top" src={tour?.img} className="p-1" height="200px" />
                                    <Card.Body>
                                        <h6 className="text-secondary">{tour.country}</h6>
                                        <Card.Title>{tour?.title}</Card.Title>
                                        <Card.Text>
                                            <p className="text-secondary">{tour?.description}</p>
                                        </Card.Text>
                                        <Card.Text className="d-flex justify-content-between">
                                            <h6>{tour?.duration}</h6>
                                            <h6 className="text-info">${tour?.price}</h6>
                                        </Card.Text>
                                        <Button onClick={() => handleBooking(tour._id)} variant="info" className="w-100 text-uppercase text-white fw-bold"> Book Now </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Zoom>)
                    }
                </Row>
                :
                <div className="fs-5 my-5">
                    <Spinner animation="border" variant="info" />
                </div>
            }

        </div>
    );
};

export default Tours;