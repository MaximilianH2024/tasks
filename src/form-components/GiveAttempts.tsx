import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setAttemptsRemaining] = useState<number>(3);
    const [requestedAttempts, setAttemptsRequested] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Control
                type="number"
                value={requestedAttempts}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const input = parseInt(event.target.value);
                    if (!isNaN(input)) setAttemptsRequested(input);
                }}
            />
            <p style={{ fontWeight: "bold" }}>
                Remaining Attempts: {remainingAttempts}
            </p>
            <div>
                <Button
                    name="use"
                    // Use button will become disabled once remaining attempts hits 0
                    disabled={remainingAttempts === 0}
                    // Decreases number of remaining attempts by 1
                    onClick={() => {
                        {
                            setAttemptsRemaining(remainingAttempts - 1);
                        }
                    }}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        // Number that is currently in the input box is added to the total remaining attempts presented below
                        setAttemptsRemaining(
                            remainingAttempts + requestedAttempts
                        )
                    }
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
