const qustions=[
    {
       question:'Which is larget animal in the world?',
       answer:[
        { text :'Shark', correct:'false'},
        { text :'blue whale', correct:'true'},
        { text :'Elephant', correct:'false'},
        { text :'Giraffe', correct:'false'},
       ]
    },
    {
        question:'Which is talest animal in the world?',
        answer:[
         { text :'Shark', correct:'false'},
         { text :'blue whale', correct:'false'},
         { text :'Elephant', correct:'false'},
         { text :'Giraffe', correct:'true'},
        ]
     },
     {
       question:'Grand Central Terminal, Park Avenue, New York is the world',
        answer:[
         { text :'largest railway station', correct:'true'},
         { text :'highest railway station', correct:'false'},
         { text :'longest railway station', correct:'false'},
         { text :'None of the above', correct:'false'},
        ]
     },
     {
        question:'Entomology is the science that studies',
        answer:[
         { text :'Behavior of human beings', correct:'false'},
         { text :'Insects', correct:'true'},
         { text :'The origin and history of technical and scientific terms', correct:'false'},
         { text :'The formation of rocks', correct:'false'},
        ]
     }
];
const questionElement=document.querySelector('#qustion');
const answerButtons=document.querySelector('#answer-button');
const nextbtn=document.querySelector('#next-btn');
let currentQustionIndex=0;
let score=0;
function startQuiz() {
    currentQustionIndex=0;
    score=0;
    nextbtn.innerHTML='Next'
    showQustion();
}
function showQustion() {
    resetState()
    let currentQustion=qustions[currentQustionIndex]
    let questionNo=currentQustionIndex+1
    questionElement.innerHTML=questionNo+'. '+currentQustion.question;
    currentQustion.answer.forEach(function(answer){
        const button =document.createElement('button')
        button.innerHTML=answer.text
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
            score++
        }
        button.addEventListener('click',selectAnswer);
    })
}
function resetState(){
    nextbtn.style.display='none'
    while (answerButtons.firstChild){
       answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    //  selectedBtn.dataset.correct==='true'
    if(selectedBtn.dataset.correct==='true'){
        selectedBtn.classList.add('correct')
    }else if(selectedBtn.dataset.correct==='false'){
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct')
        }
        button.disabled='true'
    });
    nextbtn.style.display='block';
}
function showScore(){
    resetState()
    questionElement.innerHTML=`You scored ${score} out of ${qustions.length}`
    nextbtn.innerHTML='play again'
    nextbtn.style.display='block'
}

function handelnextbutton(){
    currentQustionIndex++
    if(currentQustionIndex<qustions.length){
        showQustion()
    }else{
        showScore()
    }
}
nextbtn.addEventListener('click',()=>{
     if(currentQustionIndex<qustions.length){
        handelnextbutton()
    }else{
        startQuiz()
    }
})
startQuiz()