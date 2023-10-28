const htmlDate = document.getElementById("date")
const htmlfav = document.getElementById("fav")
const button = document.getElementById("btn")
const result = document.getElementById("txtarea")

let date
let fav 

function check(){
    if(htmlDate.value != "" && fav !== NaN && fav !== "" && fav > 0){
        removedash()
    } else if(htmlDate.value === ""){
        result.innerText = "Enter valid date"
    } else if (!fav){
        result.innerText = "Enter valid favorite Number"
    }
}


function removedash(){
    const sum = date.replaceAll("-","")
    const finalArr = sum.split('').join(" + ")
    evalution(finalArr)
}

function evalution(finalArr){
    const fin =  eval(finalArr)
    let final = fin % fav
    conditionCheck(final)
}

function conditionCheck(final){
    if(final == 0){
        result.innerText = `Your DOB ${htmlDate.value} and favorite number ${htmlfav.value} is lucky 😍`
    }else{
        result.innerText = `Your DOB ${htmlDate.value} and favorite number ${htmlfav.value} is not so lucky 😢 `
    }
}

button.addEventListener("click", function (){
    date = htmlDate.value
    fav = Number(htmlfav.value)
    check()
})




