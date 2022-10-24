import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);

    function flipVisibility(): void {
        // set visible to be the logical operator of its previous value:
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {!visible && <div>42</div>}
        </div>
    );
}
