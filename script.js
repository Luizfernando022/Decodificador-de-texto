

let input = document.getElementById('input')
let buttonCriptografar = document.getElementById('cript')
let buttonDescriptografar = document.getElementById('descript')
let result = document.getElementById('result')
let resultText = document.getElementById('resultText')
let copyButton = document.getElementById('copy')
let array;
let arrayNumbers = [

]

function texte(){

    if(resultText.children[0].value == ''){
        return
    }
    let content = resultText.children[0]
    content.select()
    document.execCommand('copy')
    
}


buttonCriptografar.addEventListener('click',criptoValue)
buttonDescriptografar.addEventListener('click',descriptoValue)

function criptoValue(){

    let value = input.value

    array = value.split('')
     console.log(array)


    
     let copyBtn = document.getElementById('copy')
     copyBtn.style.display = "flex"
     resultText.innerHTML = `<p>${cripto(array)}</p>`
     array = []

}

function descriptoValue(array){

    let value = input.value

    array = value.split('')
    console.log(array)

    let copyBtn = document.getElementById('copy')
    copyBtn.style.display = "flex"
    resultText.innerHTML = `<p>${descripto(array)}</p>`
    arrayNumbers = []

}
function descripto(array){
let num = 0
array.forEach(element=>{
    verifyDescripto(element)
    num++
    
})
   let teste = arrayNumbers.join(' ')
    

return teste
    
}


function cripto(array){
 let num = 0
 array.forEach(element=>{
     verifyCripto(element,num)
     num++
 })
 let text = array.join('')

 return text
}




function verifyCripto(e,num){
    e = e
    if(e == "a"){
        e = "01100001"
        array[num] = e
    }
    else if(e == "e"){
        e = "01100101"
        array[num] = e
    }
    else if(e == "i"){
        e = "01101001"
        array[num] = e
    }
    else if(e == "o"){
        e = "01101111"
        array[num] = e
    }
    else if(e == "u"){
        e = "01110101"
        array[num] = e
    }
}
function verifyDescripto(e){
    elemento = e
    let indexVez = 0
    if(elemento == 0 || e == 1){
        e = e 
        if(num == 8){
            num = 0
            indexVez++
            criarNovoIndice()
            arrayNumbers[indexVez].push(e)
            num++
        }else{
            arrayNumbers[indexVez].push(e)
            num++
        }
    }else{
        arrayNumbers[indexVez].push(e)
    }
}


function criarNovoIndice(){

    arrayNumbers.push([])

}