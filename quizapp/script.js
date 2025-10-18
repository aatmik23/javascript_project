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
  }
];


let currentquestionindex = 0
let score = 0

gamestart()
function gamestart(){
    let currentquestion = questions[currentquestionindex]

    const question = document.querySelector(".question h2")

      question.innerHTML = currentquestion.question
let answebtn = document.querySelector(".answebtn")
answebtn.innerHTML=""
currentquestion.answers.forEach(
    answer=>{
        
              let option = document.createElement('button')
      option.classList.add("option")
      option.innerHTML = answer.text
       
      answebtn.appendChild(option)
      option.addEventListener('click',click)
     

    }
    
     
)

}

