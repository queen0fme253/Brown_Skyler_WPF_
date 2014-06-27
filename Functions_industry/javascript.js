//I work in an electrical warehouse so I figured this would be a fun one to do.

var p=prompt("How many watts are being used?");//First variable is power measured in watts.
while(p===""){
    p=prompt("Give a number value for watts, do not leave blank");//validation loop for var p
}

var i=prompt("How many amps are being used?");//Second variable.
while(i===""){
    i=prompt("Enter a value for amps, do not leave blank.");//validation for var i
}
CalcResistance(p,i);
function CalcResistance(p,i){
    CalcResistance=p/(i*i);
}//Anonymous function to solve for resistance in ohms.
console.log("Your resistance is "+CalcResistance+" ohms");
alert("Your resistance is "+CalcResistance+" ohms");//Alert and console log to display ohms to user.
