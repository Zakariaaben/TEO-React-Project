import React, { useEffect, useState } from "react";
import "./Pages.css";
import data from "/src/Questions.json";
import Question from "../Components/Question/Question";
import Resultat from "../Components/Resultat/Resultat";

const Quizz = () => {
  const [questionNumber, SetQuestionNumber] = useState(25);
  const [psy,setPsy] = useState(0);
  const [couple,setCouple] = useState(0);
  const [phobie,setPhobie] = useState(0);
  const [trauma, setTrauma] = useState(0);
  const [enfant, setEnfant] = useState(0);
  const [aliment,setAliment] = useState(0);

  const logic = (indice, reponse)=>{

    if(indice<=3){
      setPsy(psy+reponse)
    }else if(indice<=6)
    {
      setCouple(couple+reponse);
    }else if(indice<=13)
      {
        setPhobie(phobie+reponse);
      }else if(indice<=16)
        {
          setTrauma(trauma+reponse);
        }else if(indice<=23)
          {
            setEnfant(enfant+reponse);
          }else if(indice<=26)
            {
              setAliment(aliment+reponse);
            }
  }
  let result = [psy, couple , phobie , trauma, enfant];



  useEffect(()=>{
    console.log(result);
    if (questionNumber == data.length){
      setType(result);
    }
    
  },[result,questionNumber]);

  const [res,setRes] = useState(0);
  const setType= (result)=>{
    setRes(result.reduce((m, n, i) => n > (result[m] ?? -Infinity) ? i : m, -1));
    console.log(res);
  }

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
          logic = {logic}
        />
      )}

      {
        
        questionNumber==data.length && <Resultat type = {res}/>
        
      }
    </div>
  );
};

export default Quizz;
