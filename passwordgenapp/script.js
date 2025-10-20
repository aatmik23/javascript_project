let password = document.querySelector("input")
let button = document.querySelector("button")
let copy = document.querySelector('.passwordbox img')
let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let loweralpha = "abcdefghijklmnopqrstuvwxyz"
let num = "1234567890"
let specialchara = "!@#$%^&*()_"
let newpassword = ""
let length = 12


function yourpass() {
    newpassword += alpha[Math.floor(Math.random() * alpha.length)]
    newpassword += loweralpha[Math.floor(Math.random() * loweralpha.length)]
    newpassword += num[Math.floor(Math.random() * num.length)]
    newpassword += specialchara[Math.floor(Math.random() * specialchara.length)]

}



button.addEventListener("click", function () {
    newpassword = ""
    console.log('button')
    while (newpassword.length < length) {
        yourpass()
    }
    password.value = newpassword
    copy.addEventListener("click", function () {
        password.select() 
        document.execCommand('copy')

    })
})


console.log(newpassword)