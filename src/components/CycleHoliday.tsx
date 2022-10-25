import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const Holiday: string[] = ["🎁", "🐲", "🐇", "🎃", "🦃"];

    const [holiday, changeHoliday] = useState<string>(Holiday[0]);

    function holidayByChrono(holiday: string): string {
        if (holiday === "🐲") {
            return "🐇";
        } else if (holiday === "🐇") {
            return "🎃";
        } else if (holiday === "🎃") {
            return "🦃";
        } else if (holiday === "🦃") {
            return "🎁";
        } else {
            return "🐲";
        }
    }

    function holidayByAlphabet(holiday: string): string {
        if (holiday === "🐲") {
            return "🎁";
        } else if (holiday === "🎁") {
            return "🐇";
        } else if (holiday === "🐇") {
            return "🎃";
        } else if (holiday === "🎃") {
            return "🦃";
        } else {
            return "🐲";
        }
    }

    return (
        <div>
            <Button
                onClick={() => {
                    changeHoliday(holidayByAlphabet(holiday));
                }}
            >
                Advance Holiday By Alphabet Order
            </Button>
            <div>{"Holiday: " + holiday}</div>
            <Button
                onClick={() => {
                    changeHoliday(holidayByChrono(holiday));
                }}
            >
                Advance Holiday By Year Order
            </Button>
        </div>
    );
}
