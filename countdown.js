//created by Michael Anderson
var time = 0
var currTime = 10
function countDown(){
    //currTime is reset to 10 for repeated clicks of the button
    currTime = 10;
    //clears the countdownParagraph and quoteBlock elements if the easter egg has been triggered
    document.getElementById("countdownParagraph").innerHTML = " ";
    document.getElementById("quoteBlock").innerHTML = " ";
    //new timer using loops
    time =  setInterval(function () {
        //using an if statement to create the Blast Off function, with the end result at the top of the code in contrast to the copy-and-paste method that places it at the bottm
        if(currTime <= 0){
            //calls the countdownTimer element by ID and replaces the inner HTML with the text from this statement
            document.getElementById("countdownTimer").innerHTML = "Blast Off!";
            //stops the timer
            clearInterval(time);
            //calls an alert for the Blast Off like the previous version
            alert("Blast Off!");
        }
        //the else statement here is the actual timer that runs when you click the button
        else{
            //calls the countdownTimer element by ID and replaces its inner HTML with the text from this statement.
            document.getElementById("countdownTimer").innerHTML = "T - "+currTime;
        }
        //using the decrease shorthand to decrease the timer by the value of 1 (saves some characters that this comment more than took up)
        currTime -= 1;
    //milliseconds to wait between intervals    
    }, 1000);
}
//a proper stop button has been included in this function - 
function endCountDown(){
    //thank you for the suggestion for the Stop button!
    clearInterval(time);
    document.getElementById("countdownTimer").innerHTML = "Ignition Cancelled.</br>There were " +currTime+ " seconds left on the clock.";
}
