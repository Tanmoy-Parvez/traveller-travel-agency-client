import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../images/news-images/friends.jpg'

const News = () => {
    return (
        <div className="my-5 container">
            <h5 className="text-info"><i>Check Out Our</i></h5>
            <h1>LATEST NEWS</h1>
            <Row xs={1} md={3} className="g-5 mt-1 text-start">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>FUN WITH FRIENDS</Card.Title>
                            <Card.Text>
                                It won't be a bigger problem to find one video game lover in your neighbor.Since the introduction with us they all enjoy the outer world.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted d-flex justify-content-between">
                                <span>BLOG</span>
                                <span>SUPERUSER</span>
                                <span>15 AUGUST</span>
                            </small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>FUN WITH FRIENDS</Card.Title>
                            <Card.Text>
                                It won't be a bigger problem to find one video game lover in your neighbor.Since the introduction with us they all enjoy the outer world.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted d-flex justify-content-between">
                                <span>BLOG</span>
                                <span>SUPERUSER</span>
                                <span>15 AUGUST</span>
                            </small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>FUN WITH FRIENDS</Card.Title>
                            <Card.Text>
                                It won't be a bigger problem to find one video game lover in your neighbor.Since the introduction with us they all enjoy the outer world.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted d-flex justify-content-between">
                                <span>BLOG</span>
                                <span>SUPERUSER</span>
                                <span>15 AUGUST</span>
                            </small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default News;