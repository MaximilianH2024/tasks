import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    // Will require 2 pieces of state for this particular component
    const [attempValue, setAttempt] = useState<number>(4);
    const [quizStatus, setQuizStatus] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(true);

    function flipVisibility(): void {
        // set visible to be the logical operator of its previous value:
        setVisible(!visible);
    }

    return (
        <div>
            {/*
            Upon clicking start quiz, the start quiz button itself will be disabled
            It will also invisible once we have run out of attempts
            */}
            <Button
                onClick={() => {
                    setQuizStatus(true);
                    setAttempt(attempValue - 1);
                }}
                disabled={quizStatus || attempValue < 1}
            >
                Start Quiz
            </Button>
            {/*
            Upon clicking stop quiz, the stop quiz button will not be enabled anymore 
            */}
            <Button
                onClick={() => {
                    setQuizStatus(false);
                }}
                disabled={!quizStatus}
            >
                Stop Quiz
            </Button>
            {/*
            
            */}
            <Button
                onClick={() => {
                    setAttempt((prevAttempts) => prevAttempts + 1);
                }}
                disabled={quizStatus}
            >
                Mulligan
            </Button>
            <div>Remaining Quiz Attempts: {attempValue}</div>
        </div>
    );
}
