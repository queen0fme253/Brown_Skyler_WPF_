//calculate gained interest on student loans before repayment begins.

var loan=prompt("what is the loan amount of the student loan?");//variable for student loan amount.
while(loan===""){
    loan=prompt("do not leave blank, please enter a number value.");//validation loop for var loan.
}

var time=prompt("How many years until your first payment occurs?");//variable for time.
while(time===""){
    loan=prompt("Do not leave blank, enter years until first payment occurs.");//validation loop for var time.
}

var rate=prompt("What is the rate on your student loan as a decimal?");//third variable is variable for rate of interest.
while(rate===""){
    rate=prompt("Enter a value for rate of interest on loan as a decimal, do not leave blank ");//validation for var rate.

}

if(rate>1){
    rate=(rate/100);//Makes percentage into a decimal
}
else{
    console.log("Good job, your percentage was written as a decimal");//Log to confirm correct percentage.
}

SubTotal(loan,rate,time);
function SubTotal(loan,rate,time){
    SubTotal=loan*rate*time;
console.log("this is your subtotal "+SubTotal)
} //first function. Function for SubTotal.

var interest=CalcInterest(SubTotal,loan);
function CalcInterest(SubTotal,loan){
    interest=(SubTotal - loan);
    return interest;
}//Function for total interest gained on student loan.

