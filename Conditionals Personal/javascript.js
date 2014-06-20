alert("this program will check inputs of user to see if I work on day imputed");



var userInput =prompt("what day is it?");//user input


var workDays= ["monday" , "tuesday" , "wednesday" , "thursday" , "friday"]; //days that I work monday-friday


var dayOff=["saturday","sunday"];

if ( userInput=== ("")) prompt("enter a day monday-sunday") ;

console.log(userInput);//log of input.


if(userInput=workDays){alert("I work today");

}else

{(userInput=dayOff);alert("I do not work today!");


}





