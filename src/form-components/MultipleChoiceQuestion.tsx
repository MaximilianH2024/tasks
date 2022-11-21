import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3 style={{ fontWeight: "bold" }}>Multiple Choice Question</h3>
            <h4>{userChoice === expectedAnswer ? "✔️" : "❌"}</h4>
            <Form.Group controlId="userChoices">
                <Form.Label style={{ fontWeight: "bold" }}>
                    Your Answer:{" "}
                </Form.Label>
                <Form.Select
                    value={userChoice}
                    onChange={(event) => setUserChoice(event.target.value)}
                >
                    {options.map((option: string) => {
                        return <option key={option}>{option}</option>;
                    })}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
