import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Course = (props) => {
    const data = props.data;
    const { title, author, img, price } = data;
    const buttonHandler = props.buttonHandler;
    return (
        <div>
            <Card className="m-2" style={{ width: '352px' }}>
                <Card.Img style={{ width: '350px' }} src={img}></Card.Img>
                <Card.Body>
                    <Card.Title className="m-1">{title}</Card.Title>
                    <p className="m-1"><small>{author}</small></p>
                    <h5 className="m-1">${price}</h5>
                    <Button onClick={() => buttonHandler(data)} className="m-1 btn-secondary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Course;