

let input = document.getElementById('input')
let buttonCriptografar = document.getElementById('cript')
let result = document.getElementById('result')


buttonCriptografar.addEventListener('click',showValue)

function showValue(){

    let value = input.value

    let resultText = document.getElementById('resultText')
    let copyBtn = document.getElementById('copy')
    copyBtn.style.display = "flex"
    resultText.innerHTML = `<p>${value}</p>`



}


let luiz = [0,1,2,3]

let texto1 = "Luiz Fernando"
let texto = texto1.length
let array = []

// for(let i = 0;i < texto;i++){
//     array.push(texto.slice(i))
// }

console.log(texto1.slice(1))