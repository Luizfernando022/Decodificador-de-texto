

let input = document.getElementById('input')
let buttonCriptografar = document.getElementById('cript')
let result = document.getElementById('result')
let resultText = document.getElementById('resultText')
let copyButton = document.getElementById('copy')
let array;

function texte(){

    if(resultText.children[0].value == ''){
        return
    }
    let content = resultText.children[0]
    content.select()
    document.execCommand('copy')
    
}


buttonCriptografar.addEventListener('click',showValue)

function showValue(){

    let value = input.value

    array = value.split('')


    
    let copyBtn = document.getElementById('copy')
    copyBtn.style.display = "flex"
    resultText.innerHTML = `<p>${cripto(array)}</p>`



}


function cripto(array){
 let num = 0
 array.forEach(element=>{
     verify(element,num)
     num++
 })
 let text = array.join('')

 return text

}

function verify(e,num){
    e = e
    if(e == "a"){
        e = "a01100001"
        array[num] = e
    }
    else if(e == "e"){
        e = "e01100101"
        array[num] = e
    }
    else if(e == "i"){
        e = "i01101001"
        array[num] = e
    }
    else if(e == "o"){
        e = "o01101111"
        array[num] = e
    }
    else if(e == "u"){
        e = "u01110101"
        array[num] = e
    }
}
