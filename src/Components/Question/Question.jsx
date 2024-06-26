import React, { useEffect } from "react";
import "./Question.css";
import { IoIosArrowBack } from "react-icons/io";

const Question = (props) => {
  return (
    <div className="questioncontainer">
      <div className="Question" id="outquestion">
        {props.number != 0 && (
          <div
            className="back"
            onClick={() => {
              const previous = props.number - 1;
              document.getElementById("outquestion").className =
                "animatepreviousback Question";
              props.previousQuestion(previous);
            }}
          >
            <IoIosArrowBack className="iconback" />
          </div>
        )}
        <h1>{props.data.question}</h1>
        <div className="reponses">
          <div>
            <button
              className="button-74"
              onClick={() => {
                const next = props.number + 1;
                document.getElementById("outquestion").className =
                  "animateprevious Question";
                props.nextQuestion(next);
                props.logic(props.number, 0);
              }}
            >
              {props.data.reponses[0]}
            </button>


            <button
              className="button-74"
              onClick={() => {
                const next = props.number + 1;
                document.getElementById("outquestion").className =
                  "animateprevious Question";
                props.nextQuestion(next);
                props.logic(props.number, 1);
              }}
            >
              {props.data.reponses[1]}
            </button>

          </div>
          <div>
            <button
              className="button-74"
              onClick={() => {
                const next = props.number + 1;
                document.getElementById("outquestion").className =
                  "animateprevious Question";
                props.nextQuestion(next);
                props.logic(props.number, 2);
              }}
            >
              {props.data.reponses[2]}
            </button>
            <button
              className="button-74"
              onClick={() => {
                const next = props.number + 1;
                document.getElementById("outquestion").className =
                  "animateprevious Question";
                props.nextQuestion(next);
                props.logic(props.number, 3);

              }}
            >
              {props.data.reponses[3]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
