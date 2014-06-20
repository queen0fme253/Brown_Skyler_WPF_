//duties today

var workDuty= prompt("today am I driving or working in the warehouse");//what work duties am I expected to preform today?

if(workDuty==="")var workDuty= prompt("enter a reply for driving or working in the warehouse today ");//validating reply for prompt.

if(workDuty==="driving"){alert("I need to be at work by 4a.m.");//if driving then i need to start my day at 4am.

}else{

    alert("need to be at work at 6a.m.");

}//conditional phrase to decide if I start work at 4am or 6am

var startTime= prompt("what time was given to start work?");//prompt to get the start time given by first set of conditionals.

if(startTime==="")var startTime= prompt("enter your given start time for work as just a number no suffix");//validation prompt with starting variable included.

if(startTime==="4"){alert("I will be off work at noon");//alert for start time as 4am.

}else{

    alert("I will be off work at 2pm");//conditional alert for a start time other than 4.
}