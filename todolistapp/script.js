const input = document.querySelector(".input")
const button = document.querySelector(".row button")
const listcontainer = document.querySelector(".listcontainer")

console.log(input)
button.addEventListener('click', function () {
    if (input.value === ""){
        alert('input cant be blank')
    }
    else{
    console.log(input.value)
    const task = document.createElement("li")
    task.innerHTML = `${input.value}`
    listcontainer.appendChild(task)

    const cross = document.createElement("span")
    cross.innerHTML = "\u00d7"
    task.appendChild(cross)
    
    input.value = ""
    }
    store()
})

listcontainer.addEventListener('click',function(e){
    console.log(e.target.tagName)
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        store()
    }
    else if (e.target.tagName ==="SPAN"){
           e.target.parentElement.remove()
           store()
    }
})


function store(){
     const data = localStorage.setItem("data",listcontainer.innerHTML)
     console.log(data)
}  //stores data

function show(){
  listcontainer.innerHTML=  localStorage.getItem("data")
} //show data
show()


console.log(localStorage.getItem("data"))