//Javascript code to calculate BMI
var height=prompt("Enter your height in inches.");//variable for height in inches
while(height===""){
    height=prompt("Enter your height in inches, do not leave blank");//validation prompt for height in inches.
}

var weight=prompt("Enter your weight in pounds");//variable for weight
while(height===""){
    weight=prompt("Enter your weight in pounds, do not leave blank ");
}//validation loop for weight.
console.log("your height is "+height+" inches");
console.log("your weight is "+weight+" pounds");

function BMI(height,weight){
    BMI=weight/(height/100*height/100);
    console.log("your BMI is "+BMI);
    return BMI;
}//Function and console.log for BMI

if(BMI>18.5 && BMI<25){
    alert("You are healthy");//conditional for healthy
}
if(BMI<18.5){
    alert("You are too thin");//Conditional for too thin.
}
if(BMI>25){
    alert("You could lose some weight");//conditional for too big
}
