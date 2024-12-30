let operator = "";
let number_1 = "";
let number_2 = "";


document.addEventListener("DOMContentLoaded",function(){
    let clear = document.querySelector("#clearing")
    let equal = document.querySelector(".equal")
    let decimal = document.querySelector(".decimal")

    let previousnumber = document.querySelector(".previous")
    let currentnumber = document.querySelector(".current")

    let numbers = document.querySelectorAll(".number")
    let operator = document.querySelectorAll(".operator")

    numbers.forEach((number)=>number.addEventListener("click",function(e){
        handleNumber(e.target.textContent)
        currentnumber.textContent = number_1
    }))

    operator.forEach((operand)=> operand.addEventListener("click",function(e){
        handleOperand(e.target.textContent)
        previousnumber.textContent = number_2 + " "+ operatorz;
        currentnumber.textContent = number_1;
    }))

    clear.addEventListener("click",()=>{
        number_1 = "";
        number_2 = "";
        operator = "";
        previousnumber.textContent = number_1
        currentnumber.textContent = number_1
    })

    equal.addEventListener('click',function(){
        calculate();
    })
})

function handleNumber(num){
    if(number_1.length<=5){
        number_1 += num
    }
}

function handleOperand(op){
    operatorz = op;
    number_2 = number_1;
    number_1 = "";
}

function calculate(){
    number_2 = Number(number_2)
    number_1 = Number(number_1);

    console.log(number_1)
    console.log(number_2)

    if(operatorz === "+"){
        number_2 += number_1
    }else if(operatorz === "-"){
        number_2 -= number_1;
    }else if(operatorz === "*"){
        number_2 *= number_1
    }else{
        number_2 /= number_1;
    }

    console.log(number_2)

}