import React, { useState } from "react";

const Questionbank = () => {
  const data = [
    {
      question: "How to create an ordered list in HTML?",
      options: [
        {
          answer: "<ul>",
          isRight: false,
        },
        {
          answer: "<ol>",
          isRight: true,
        },
        {
          answer: "<href>",
          isRight: false,
        },
        {
          answer: "<br>",
          isRight: false,
        },
      ],
    },

    {
      question:
        "Which HTML tag is called the root element of an HTML document?",
      options: [
        {
          answer: "<body>",
          isRight: false,
        },
        {
          answer: "<head>",
          isRight: false,
        },
        {
          answer: "<html>",
          isRight: true,
        },
        {
          answer: "<title>",
          isRight: false,
        },
      ],
    },
    {
      question:
        "Which of the following CSS property specifies the origin of the background image?",
      options: [
        {
          answer: "background-origin ",
          isRight: true,
        },
        {
          answer: "background-size",
          isRight: false,
        },
        {
          answer: "origin",
          isRight: false,
        },
        {
          answer: "background-image",
          isRight: false,
        },
      ],
    },
    {
      question: "What are the uses of CSS pseudo-elements?",
      options: [
        {
          answer: "Style specific parts of an element",
          isRight: false,
        },
        {
          answer: "Style the first letter or line of element",
          isRight: false,
        },
        {
          answer: "All of the above",
          isRight: true,
        },
        {
          answer: "Insert content before or after the element",
          isRight: true,
        },
      ],
    },
    {
      question:
        "When an operator’s value is NULL, the typeof returned by the unary operator is",
      options: [
        {
          answer: "Undefined",
          isRight: false,
        },
        {
          answer: "Null",
          isRight: false,
        },
        {
          answer: "Integer",
          isRight: false,
        },
        {
          answer: "object",
          isRight: true,
        },
      ],
    },
    {
      question: "output : var a = true + true + true * 3; print(a)",
      options: [
        {
          answer: "0",
          isRight: false,
        },
        {
          answer: "1",
          isRight: false,
        },
        {
          answer: "3",
          isRight: false,
        },
        {
          answer: "5",
          isRight: true,
        },
      ],
    },
    {
      question:
        "Which function is used to serialize an object into a JSON string in Javascript?",
      options: [
        {
          answer: "None of the above",
          isRight: false,
        },
        {
          answer: "stringfy()",
          isRight: true,
        },
        {
          answer: "parse()",
          isRight: false,
        },
        {
          answer: "convert()",
          isRight: false,
        },
      ],
    },
  ];
  const [start,setStart]=useState(0);
  const [correct,setCorrect]=useState(0);
  const [wrong,setWrong]=useState(0);
  const [last,setLast]=useState(false);
  const handleClick=(isRight)=>{
  
    if(isRight===true){
        setCorrect(correct+1)
    }
    if(isRight===false){
        setWrong(wrong+1)
    }
    let counter=start+1;
    if(counter<data.length){

        setStart(counter)
    }
    else{
        setLast(true);
        
    }
  


  }
  return (
  
  <div className="main">
   <div className="question-box">
    { last ?<div className="last">
         <h1>You have done it !
</h1>
                </div>:
        <>      <div className="questions">
         Question{start+1}:{data[start].question}
      </div>
      <h3>Answers:</h3>
      <div className="option">
        {
            data[start].options.map((option,i)=>(
                <button onClick={()=>handleClick(option.isRight)} key={i}>{i}){option.answer}</button>
            ))
        }

      </div></>

      }
   </div>
   <div className="score-box">
    <h3>Your Score Card</h3>
    <h5>Your correct answers: {correct}</h5>
    <h5>Your wrong answers:  {wrong}</h5>
    <h2>Total points: {correct-wrong}</h2>

   </div>
  </div>
  )

};

export default Questionbank;
