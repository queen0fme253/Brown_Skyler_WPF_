alert("this program will check inputs of user to see if I work on day imputed");



var userInput =prompt("what day is it?");//user input


var workDays= ["monday" , "tuesday" , "wednesday" , "thursday" , "friday"]; //days that I work monday-friday


var dayOff=["saturday","sunday"];//days off variable

if ( userInput=== ("")) prompt("enter a day monday-sunday");//validate the prompt.

console.log(userInput);//log of input.


if(userInput=workDays){alert("I work today");//if user input is equal to work day then use alert.

}else//if user input is equal to day off variable use other alert.

{(userInput=dayOff);alert("I do not work today!");


}





