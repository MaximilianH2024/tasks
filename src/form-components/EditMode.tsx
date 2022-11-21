import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

export function EditMode(): JSX.Element {
    // By default, we will not be in edit mode to begin with:
    const [editMode, setEditMode] = useState<boolean>(false);
    // Users name is the string "Your Name"
    const [name, setName] = useState<string>("Your Name");
    // By default, the user will also be a student:
    const [isAStudent, setStudent] = useState<boolean>(true);
    return (
        <div>
            <h3 style={{ fontWeight: "bold" }}>Edit Mode</h3>
            <Form.Group controlId="formResponse">
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setName(event.target.value)
                    }
                    hidden={!editMode}
                />
                {/* 
                A switch that controls when one is in edit mode (initially false)
                */}
                <Form.Check
                    type="switch"
                    id="is-in-editmode-switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditMode(event.target.checked)
                    }
                />
                {/* 
                Whether or not the user is a student should be controlled by a regular checkbox, not a switch or button 
                */}
                <Form.Check
                    hidden={!editMode}
                    type="checkbox"
                    id="student-checkbox"
                    name="student"
                    label="Student"
                    checked={isAStudent}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setStudent(event.target.checked)
                    }
                />
            </Form.Group>
            {/* 
                By default, will display "Your name is a student" or "Your name is not a student"
            */}
            <div>
                {name} {isAStudent ? "is a student" : "is not a student"}
            </div>
        </div>
    );
}
