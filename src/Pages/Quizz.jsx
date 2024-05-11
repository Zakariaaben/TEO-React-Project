import React, { useState } from "react";
import "./Pages.css";
import data from "/src/Questions.json";
import Question from "../Components/Question/Question";

const Quizz = () => {
  const [questionNumber, SetQuestionNumber] = useState(0);
  
  return (
    <div className="Page">
      {questionNumber + 1 <= data.length && -1 < questionNumber && (
        <Question
          nextQuestion={ async (number) => {

            await new Promise(resolve => {
              setTimeout(() => {
                SetQuestionNumber(-1);
                resolve();
              }, 600);
            });

            SetQuestionNumber(number);
            document.getElementById("outquestion").className="Question animatecurrent"
            }}

            previousQuestion={async(number)=>{
              await new Promise(resolve => {
                setTimeout(() => {
                  SetQuestionNumber(-1);
                  resolve();
                }, 600);
              });
  
              SetQuestionNumber(number);
              document.getElementById("outquestion").className="Question animatecurrentback"
            }}
          data={data[questionNumber]}
          number={questionNumber}
        />
      )}
    </div>
  );
};

export default Quizz;
