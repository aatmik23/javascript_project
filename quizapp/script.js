const questions = [
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Delhi", correct: true },
      { text: "Punjab", correct: false },
      { text: "Goa", correct: false },
      { text: "Mumbai", correct: false }
    ]
  },
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Python", correct: false },
      { text: "C++", correct: false },
      { text: "JavaScript", correct: true },
      { text: "Java", correct: false }
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Trainer Marking Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Text Marketing Language", correct: false },
      { text: "Hyper Tool Multi Language", correct: false }
    ]
  },
  {
    question: "What year was JavaScript launched?",
    answers: [
      { text: "1996", correct: false },
      { text: "1995", correct: true },
      { text: "1994", correct: false },
      { text: "1997", correct: false }
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "#", correct: false }
    ]
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Google", correct: false },
      { text: "Netscape", correct: true },
      { text: "Apple", correct: false }
    ]
  }
];



let currentquestionindex = 0
let score = 0
const question = document.querySelector(".question h2")
let answebtn = document.querySelector(".answebtn")
let nextbtn = document.querySelector(".next")
gamestart()
function gamestart(){
    let currentquestion = questions[currentquestionindex]


      question.innerHTML = currentquestion.question

answebtn.innerHTML=""
currentquestion.answers.forEach(
    answer=>{
        
              let option = document.createElement('button')
      option.classList.add("option")
      option.innerHTML = answer.text
       
      answebtn.appendChild(option)
      if(answer.correct){
        option.dataset.correct = answer.correct
      }
      option.addEventListener('click',selectans)
     

    }
    
     
)

}

function selectans(e){
  const selected = e.target 
  const iscorrect = selected.dataset.correct === 'true' //dataset add value like name = rohan
  let option = document.querySelectorAll('.option')
  if(iscorrect){
    selected.classList.add("correct")
    score++
  }
  else{
    selected.classList.add("incorrect")
        
  }
  option.forEach(function(e){
    console.log(e.dataset)
    if (e.dataset.correct === "true"){
      e.classList.add("correct")
    }
    e.disabled=true
  })
  nextbtn.style.display = "block"
}

nextbtn.addEventListener("click",function(){
  if(currentquestionindex < questions.length){
    console.log("hello")
    handlenexxtbtn()
  }
  else{
    console.log("no hello")
      currentquestionindex = 0
      nextbtn.innerHTML = "Next"
    gamestart()
  }
})
    
function handlenexxtbtn(){
  currentquestionindex++
  if (currentquestionindex < questions.length){
    console.log("i am if")
    gamestart()

  }
  else{
    console.log("i am else")
    showresult()
  }
}

function showresult(){
  answebtn.innerHTML = ""
  answebtn.innerHTML = `you score ${score} out of ${questions.length}`
  nextbtn.innerHTML = "Play agan"
  

  

}    