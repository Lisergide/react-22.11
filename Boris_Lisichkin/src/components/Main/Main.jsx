import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MediaObj from '../Media';
import Slider from '../Slider';
import SimpleSnackbar from '../Snackbar';

const news = [
    'Ullamco ullamco pariatur laboris sit enim incididunt.',
    'Consequat cillum consectetur dolor exercitation pariatur eu ex excepteur.',
    'Minim sint et enim pariatur incididunt exercitation excepteur dolore mollit tempor nisi ea.',

    'Labore culpa ea in in sint commodo exercitation elit incididunt reprehenderit commodo.',
    'Quis duis non non veniam est nisi duis voluptate pariatur eiusmod veniam ad et.',
    'Consectetur do aliquip voluptate eu eu. Do consequat esse nostrud qui magna id magna irure quis.',
]

export default class Main extends PureComponent {
    render() {
        return (
            <main>
                <Container>
                    <Row>
                        <Col><Slider /></Col>
                        <Col><MediaObj /></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col><MediaObj /></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col><MediaObj /></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <br />
                            {news}
                        </Col>
                        <Col>
                            <br />
                            {news}
                        </Col>
                        <Col>
                            <br />
                            {news}
                        </Col>
                        <Col>
                            <br />
                            {news}
                        </Col>
                    </Row>
                    <br />
                </Container>
                <SimpleSnackbar />
            </main>
        )
    }
}