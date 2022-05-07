import React from 'react'
import {Card,Row,Col} from 'react-bootstrap'
function CustomCard({mydata}) {
  return (
    <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>{mydata.name}</Card.Title>
                    <div>{mydata.username}</div>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
           
    </div>
  )
}

export default CustomCard