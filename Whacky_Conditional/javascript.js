//battle Trogdor using math.


var slaying= true;//boolean for slaying Trogdor.
var youHit= Math.floor(Math.random()*2);//varible for striking.
var damageThisRound= Math.floor(Math.random()*5+1);//variable for damage this round.

var totalDamage=0;//added to track damage through simulation.

while(slaying){
    if(youHit){
        console.log("You hit my mighty lizard and did "+damageThisRound+ " damage!");
totalDamage += damageThisRound;
        if(totalDamage >=4) {
            alert("You defeated Trogdor! you owe me a new lizard!");

            slaying = false;

        }else{

        youHit=Math.floor(Math.random()*2);
        }
    }else{ alert("You cannot defeat Trogdor! Refresh page to try again");
        slaying=false;
    }
}

var ending= prompt("Did you win?");

if(ending==="")alert("did you win? yes or no");

if (ending==="yes")alert("Good job, you still owe me a new lizard!");


if(ending==="no");
    alert("Refresh the page to try again");




console.log(youHit);
console.log(damageThisRound);
console.log(totalDamage);

