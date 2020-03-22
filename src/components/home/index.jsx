import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export class HomeComponent extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <h2>Home Component</h2>
                </Row>

                <Button variant="primary">Primary</Button>
            </Container>
        )
    }
}

export default HomeComponent;