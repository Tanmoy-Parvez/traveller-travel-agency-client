import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


const News = () => {
    const [newses, setNews] = useState([]);
    useEffect(() => {
        fetch("https://traveller-dotcom-server.herokuapp.com/news")
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className="my-5 container">
            <h5 className="text-info"><i>Check Out Our</i></h5>
            <h1>LATEST NEWS</h1>
            {
                newses.length ? <Row xs={1} md={3} className="g-5 mt-1 text-start">
                    {
                        newses.map(news => <Fade bottom big>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={news?.img} height="200px" />
                                    <Card.Body>
                                        <Card.Title className="text-uppercase">{news?.title}</Card.Title>
                                        <Card.Text className="text-secondary" style={{ textAlign: "justify" }}>
                                            {news?.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-uppercase text-muted d-flex justify-content-between">
                                            <span>{news?.subtitle}</span>
                                            <span>{news?.user}</span>
                                            <span>{news?.date}</span>
                                        </small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Fade>)
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

export default News;