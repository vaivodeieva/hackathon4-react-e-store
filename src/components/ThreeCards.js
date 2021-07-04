import img4 from '../images/image4.jpg';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function ThreeCards() {

    return (

        <div>
            <div class="container-home-middle"style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "7px"
        }}>

                <Card border="danger" style={{ width: '30rem', margin: "9px", backgroundColor:'lightPink' }}>
                    <Card.Img variant="top" src={img4}/>
                    <Card.Body>
                        <Card.Title style={{color: 'darkRed', fontFamily: 'impact'}}>Tiny story books</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card 
                        </Card.Text>
                        <Button variant="outline-danger" to="./categories.js">Check it out</Button>
                    </Card.Body>
                </Card>

                <Card border="primary" style={{ width: '30rem' , margin: "9px", backgroundColor:'lightBlue'}}>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                        <Card.Title style={{color: 'darkBlue', fontFamily: 'impact'}}>Tiny photo books</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card 
                        </Card.Text>
                        <Button variant="outline-primary">Check it out</Button>
                    </Card.Body>
                </Card>

                <Card border="success" style={{ width: '30rem' , margin: "9px", backgroundColor:'lightGreen' }}>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                        <Card.Title style={{color: 'green', fontFamily: 'impact'}}>Tiny notice books</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card 
                        </Card.Text>
                        <Button variant="outline-success">Check it out</Button>
                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}

export default ThreeCards;