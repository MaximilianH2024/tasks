import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1 className="MockHeader">Mock React Website Deployment Header</h1>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
                <Button
                    className="Button"
                    onClick={() => console.log("Hello World!")}
                >
                    Log Hello World
                </Button>
            </header>
            <p className="SimpleTextClass">
                Edit <code>src/App.tsx</code> and save.
            </p>
            <p className="SimpleTextClass">
                This page will automatically reload (Maximilian).
            </p>
            <Container>
                <Row className="ColumnTextClass">
                    <Col className="Rectangle">First Column</Col>
                    <Col className="Rectangle">Second Column</Col>
                </Row>
            </Container>
            <img
                className="DeerPhoto"
                src="https://image.shutterstock.com/image-photo/silhouette-large-bull-elk-stag-260nw-325904582.jpg"
                alt="Deer"
            />
            <ol className="ListTextProperties">
                <li>Deer Fact One</li>
                <li>Deer Fact Two</li>
                <li>Deer Fact Three</li>
            </ol>
        </div>
    );
}

export default App;
