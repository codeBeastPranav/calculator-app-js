let btn=document.querySelectorAll(".btns")
let firstNum=document.querySelector(".first-num")
let operator=document.querySelector(".operator")
let secondNum=document.querySelector(".second-num")
let answer=document.querySelector(".answer")

let currNum1=""
let currNum2=""
let opr=""
let index
let flag=0;
let resFlag=0

btn[0].addEventListener("click", function(){
    if(flag==0){
        currNum1=currNum1+7
        firstNum.innerHTML=currNum1;
    }

    else{
        currNum2=currNum2+7;
        secondNum.innerHTML=currNum2
    }
})

btn[1].addEventListener("click", function(){
    if(flag==0){
        currNum1=currNum1+8
        firstNum.innerHTML=currNum1;
    }

    else{
        currNum2=currNum2+8;
        secondNum.innerHTML=currNum2
    }

})

btn[2].addEventListener("click", function(){
    if(flag==0){
        currNum1=currNum1+9
        firstNum.innerHTML=currNum1;
    }
    else{
        currNum2=currNum2+9;
        secondNum.innerHTML=currNum2
    }

})

btn[3].addEventListener("click", function(){
    opr="/"
    operator.innerHTML=opr;
    flag=1
})

btn[4].addEventListener("click", function(){
    if(flag==0){
    currNum1=currNum1+4
    firstNum.innerHTML=currNum1;
    }

    else{
        currNum2=currNum2+4;
        secondNum.innerHTML=currNum2
    }

})

btn[5].addEventListener("click", function(){
    if(flag==0){
    currNum1=currNum1+5
    firstNum.innerHTML=currNum1;
    }

    else{
        currNum2=currNum2+5;
        secondNum.innerHTML=currNum2
    }

})

btn[6].addEventListener("click", function(){
    if(flag==0){
    currNum1=currNum1+6
    firstNum.innerHTML=currNum1;
    }

    else{
        currNum2=currNum2+6;
        secondNum.innerHTML=currNum2
    }

})

btn[7].addEventListener("click", function(){
    opr="*"
    operator.innerHTML=opr;
    flag=1
})

btn[8].addEventListener("click", function(){
    if(flag==0){
    currNum1=currNum1+1
    firstNum.innerHTML=currNum1;
    }

    else{
        currNum2=currNum2+1;
        secondNum.innerHTML=currNum2
    }

})

btn[9].addEventListener("click", function(){
    if(flag==0){
    currNum1=currNum1+2
    firstNum.innerHTML=currNum1;
    }

    else{
        currNum2=currNum2+2;
        secondNum.innerHTML=currNum2
    }

})

btn[10].addEventListener("click", function(){
    if(flag==0){
    currNum1=currNum1+3
    firstNum.innerHTML=currNum1;
    }

    else{
        currNum2=currNum2+3;
        secondNum.innerHTML=currNum2
    }

})

btn[11].addEventListener("click", function(){
    opr="-"
    operator.innerHTML=opr;
    flag=1
})

btn[12].addEventListener("click", function(){
    if(flag==0){
    currNum1=currNum1+0
    firstNum.innerHTML=currNum1;
    }

    else{
        currNum2=currNum2+0;
        secondNum.innerHTML=currNum2
    }

})



btn[14].addEventListener("click", function(){
    //do the functionality of equal to
    //ints
    let currNumInt1=parseInt(currNum1)
    let currNumInt2=parseInt(currNum2)
    if(opr=="/"){
        result=currNumInt1/currNumInt2
    }

    else if(opr=="*"){
        result=currNumInt1*currNumInt2
    }

    else if(opr=="-"){
        result=currNumInt1-currNumInt2
    }
    else if(opr=="+"){
        result=currNumInt1+currNumInt2
    }
    
    answer.innerHTML=result
})

btn[15].addEventListener("click", function(){
    opr="+"
    operator.innerHTML=opr;
    flag=1
})


btn[13].addEventListener("click", function(){
    //put reset here
    firstNum.innerHTML="";
    secondNum.innerHTML="";
    operator.innerHTML="";
    currNum1="";
    currNum2="";
    opr="";
    answer.innerHTML=""
    flag=0


})