import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control
                    type="number"
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
            </div>
        </div>
    );
}
