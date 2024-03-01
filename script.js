const question=[
    {
        question:"Which is larget animal in the world",
        answers:[
            {text:"Shark",correct:false},
            {text:"Bule Whale",correct:true},
            {text:"Elephant",correct:false}, {text:"Giraffe",correct:false},
        ] 
    },
    {
        question:"Which is larget country in the world?",
        answers:[
            {text:"Bangladesh",correct:false},
            {text:"India",correct:false},
            {text:"Nepal",correct:false}, 
            {text:"Russia",correct:true},
        ]   
    },
     {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Afrika",correct:false},
            {text:"Arctic",correct:false}, 
            {text:"Australia",correct:true},
        ] 
     }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-bth");


