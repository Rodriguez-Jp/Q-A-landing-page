import React from "react";
import QuestionItem from "./question";

const Questions = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => {
        return <QuestionItem key={question.id} {...question} />;
      })}
    </div>
  );
};

export default Questions;
