import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    // Include newMember paremeter of type string:
    function chooseMember(newMember: string) {
        if (!team.includes(newMember)) {
            // Utilize setTeam to "push" a newMember to one index above the top of the array
            setTeam([...team, newMember]);
            // Options remaining that one may add to your team depend on who has not already been added
            // i.e. no dupllicates
            setAllOptions(
                allOptions.filter(
                    (member: string): boolean => member === member
                )
            );
        }
    }

    function clearTeam() {
        // Current team is cleared entirely
        setTeam([]);
        setAllOptions(PEOPLE);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div
                            key={option}
                            style={{
                                marginBottom: "4px",
                                color: "black",
                                fontWeight: "bold"
                            }}
                        >
                            Add{" "}
                            <Button onClick={() => chooseMember(option)}>
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
