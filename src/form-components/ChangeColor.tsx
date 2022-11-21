import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    const colors = [
        "Red",
        "Olive",
        "Yellow",
        "Maroon",
        "Blue",
        "Aquamarine",
        "Beige",
        "Violet",
        "Black"
    ];

    return (
        <div>
            <h3 style={{ fontWeight: "bold" }}>Change Color</h3>
            {colors.map((colorCode: string) => (
                <Form.Check
                    key={colorCode}
                    label={colorCode}
                    value={colorCode}
                    type="radio"
                    name="color"
                    checked={colorCode === color}
                    style={{ backgroundColor: colorCode }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setColor(event.target.value)
                    }
                />
            ))}
            <h4 style={{ color: "Black" }}>
                You have chosen{" "}
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {" "}
                    {color}{" "}
                </div>
            </h4>
        </div>
    );
}
