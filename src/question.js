import React from "react";
import { useState } from "react";
import questions from "./data";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function QuestionItem({ id, title, info }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="item" key={id}>
      <div className="item-info">
        <h4>{title}</h4>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </div>
      <div>{toggle ? <p>{info}</p> : ""}</div>
    </div>
  );
}

export default QuestionItem;
