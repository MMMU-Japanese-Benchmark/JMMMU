import React, { useState } from "react";
import { Container, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, Switch } from "@mui/material";

import "./index.css";

interface ImageWithTextProps {
  value: string;
  index: string;
  questionId: string;
  questionText: string;
  image: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  explanation: string;
}

const CORRECT_COLOR = "rgba(2, 135, 96, 0.25)";
const INCORRECT_COLOR = "rgba(186, 38, 54, 0.25)";

const Question = ({
  value,
  index,
  questionId, // eslint-disable-line
  questionText,
  image,
  option1,
  option2,
  option3,
  option4,
  answer,
  explanation,
}: ImageWithTextProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleAnswerSubmit = () => {
    setIsAnswered(!isAnswered);
  };

  if (value !== index) {
    if (selectedOption) setSelectedOption("");
    if (isAnswered) setIsAnswered(false);
    return null;
  }

  return (
    <Container className="question" sx={{ flexDirection: { xs: "column", md: "row", padding: "0rem" } }}>
      <Container
        className="question-image"
        sx={{
          width: { xs: "none", md: "30%" },
          minHeight: { xs: "none", md: "360px" },
          padding: { xs: "1rem 0rem", md: "0rem 1rem 0rem 0rem" },
        }}
      >
        {/* <b className="question-id">{questionId}</b> */}
        <img src={image} className="question-image-figure" alt="Question Figure" />
      </Container>
      <Container
        className="question-text"
        sx={{
          width: { xs: "none", md: "45%" },
          minHeight: { xs: "none", md: "360px" },
          padding: { xs: "0rem", md: "1rem" },
        }}
      >
        <span>
          <b>Question:</b> {questionText}
        </span>
        <div className="question-options">
          <FormControl component="fieldset" style={{ width: "100%" }}>
            <RadioGroup aria-label="quiz" name="quiz" value={selectedOption} onChange={handleOptionChange}>
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label={`A: ${option1}`}
                style={{
                  backgroundColor:
                    isAnswered && (selectedOption === "A" || answer === "A")
                      ? answer === "A"
                        ? CORRECT_COLOR
                        : INCORRECT_COLOR
                      : "transparent",
                  borderRadius: "0.5rem",
                }}
              />
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label={`B: ${option2}`}
                style={{
                  backgroundColor:
                    isAnswered && (selectedOption === "B" || answer === "B")
                      ? answer === "B"
                        ? CORRECT_COLOR
                        : INCORRECT_COLOR
                      : "transparent",
                  borderRadius: "0.5rem",
                }}
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label={`C: ${option3}`}
                style={{
                  backgroundColor:
                    isAnswered && (selectedOption === "C" || answer === "C")
                      ? answer === "C"
                        ? CORRECT_COLOR
                        : INCORRECT_COLOR
                      : "transparent",
                  borderRadius: "0.5rem",
                }}
              />
              <FormControlLabel
                value={"D"}
                control={<Radio />}
                label={`D: ${option4}`}
                style={{
                  backgroundColor:
                    isAnswered && (selectedOption === "D" || answer === "D")
                      ? answer === "D"
                        ? CORRECT_COLOR
                        : INCORRECT_COLOR
                      : "transparent",
                  borderRadius: "0.5rem",
                }}
              />
            </RadioGroup>
          </FormControl>
        </div>
        {/* <button className="question-submit" onClick={handleAnswerSubmit}>{isAnswered ? "Hide" : "Show"} Answer</button> */}
      </Container>
      <Container
        className="question-answer"
        sx={{
          width: { xs: "none", md: "25%" },
          minHeight: { xs: "none", md: "360px" },
          padding: { xs: "1rem 0rem", md: "0rem 0rem 0rem 1rem" },
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked={false} onChange={handleAnswerSubmit} id="show-answer-switch" />}
            label="Show Answer"
          />
        </FormGroup>
        {isAnswered && (
          <>
            <span style={{ padding: "0.5rem 0" }}>
              <b>Answer:</b> {answer}
            </span>
            <span style={{ padding: "0.5rem 0" }}>
              <b>Explanation:</b> {explanation ? explanation : "N/A"}
            </span>
          </>
        )}
      </Container>
    </Container>
  );
};

export default Question;
