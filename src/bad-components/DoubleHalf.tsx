import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

interface doubleOrHalfValues {
    setDhValue: (newValue: number) => void;
    dhValue: number;
}

// Double needs parameters to be passed through
function Doubler({ setDhValue, dhValue }: doubleOrHalfValues): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}
// Halver will also need parameters to pass through
function Halver({ setDhValue, dhValue }: doubleOrHalfValues): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

function Mult({ setDhValue, dhValue }: doubleOrHalfValues): JSX.Element {
    return <Button onClick={() => setDhValue(2 ** dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            {/* <Doubler></Doubler>
            <Halver></Halver> */}
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
