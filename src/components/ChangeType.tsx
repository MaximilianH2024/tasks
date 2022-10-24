import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    // Define a list of available question types, with the imported type of "QuestionType"
    const qs: QuestionType[] = [
        "short_answer_question",
        "multiple_choice_question"
    ];

    // type questionType = "short_answer_question" | "short_answer_question"/

    // eslint-disable-next-line prettier/prettier
    // Set our initial type below to short_answer_question
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    return (
        <div>
            {/*
            When our button is clicked, change its type to
            multiple_choice_question if it is already short_answer_question,
            otherwise change back to short_answer_question
            */}
            <Button
                onClick={() => {
                    setQuestionType(
                        questionType === "short_answer_question"
                            ? "multiple_choice_question"
                            : "short_answer_question"
                    );
                }}
            >
                Change Type
            </Button>
            {/*
            When the question type is short_answer_question, 
            reveal the text, Short Answer, 
            otherwise reveal the text Multiple Choice
            */}
            <div>
                {questionType === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </div>
        </div>
    );
}
