//created by Michael Anderson
function unhide(){
        //make countdown visible
        document.getElementById("countdownTimer").style.display = "block";
}
function stopCountDown()
//stopCounDown does not stop the timer - interrupts can happen with a loop...
{
    //targets countdownParagraph via id and updates the text inside to  what's quoted below, adding in the time that the button was pressed if pressed during the countDown function.
    //could use a loop to check if there were still 10 seconds on the clock, making a different line of text appear.
    document.getElementById("countdownParagraph").innerHTML = "> Error: Ignition detected!";
    //alert shows whenever the "Stop" button is pressed, which also causes the above paragraph to contain text
    alert("There was an error.\n> Error: Ignition detected!\nThe rocket still launched!");
}