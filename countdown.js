var time = 0
var currTime = 10
function countDown(){
    //currTime should be able to be the only integer in this code.
    currTime = 10;
    time =  setInterval(function () {
        //using an if statement to create the Blast Off function, with the end result at the top of the code
        if(currTime <= 0){
            //calls the countdownTimer element by ID and replaces the inner HTML with the text from this statement
            document.getElementById("countdownTimer").innerHTML = "Blast Off!";
            //calls an alert for the BlastOff like the previous version
            alert("Blast Off!");
            clearInterval(time);
        }
        //the else statement here is the actual timer that runs when you click the button
        else{
            //calls the countdownTimer element by ID and replaces its inner HTML with the text from this statement.
            document.getElementById("countdownTimer").innerHTML = "T - "+currTime;
        }
        //using the decrease shorthand to decrease the timer by the value of 1 (saves some characters that this comment more than took up)
        currTime -= 1;
    }, 1000);
}
//a proper stop button has been included in this function.
function endCountDown(){
    clearInterval(time);
    document.getElementById("countdownTimer").innerHTML = "Ignition Cancelled.</br>There were " +currTime+ " seconds left on the clock.";
}
