import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDieVal, rollLeftDie] = useState<number>(3);
    const [rightDieVal, rollRightDie] = useState<number>(1);

    return (
        <div>
            <Button
                onClick={() => {
                    rollLeftDie(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    rollRightDie(d6());
                }}
            >
                Roll Right
            </Button>
            {/*
            If the values of both die turn out to be one after a roll, 
            a message of "lose" will be displayed, 
            otherwise if they are the same value the player has won
            */}
            {leftDieVal === 1 && rightDieVal === 1 ? (
                <div>lose</div>
            ) : leftDieVal === rightDieVal ? (
                <div>win</div>
            ) : (
                <div>Try Again</div>
            )}

            <div>
                <span data-testid="left-die">{leftDieVal}</span>
                <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </span>
                <span data-testid="right-die">{rightDieVal}</span>
            </div>
        </div>
    );
}
