//create currTime variable
var currTime = 10;
function countDown()  //for an unknown reason, the function takes two seconds to display the initial countdown timer.
// One second may be taken up by unhide(); in unhide.js, but I do not like the time it takes to display the box - even though it calls memories of early DSL loading times.
//fixed timing issue by reducing each event by 1000 milliseconds. Timer now quickly appears and begins to count down to blastoff.
{ 
    //timeout code from class-version.js
    setTimeout(function () {
        //first
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
        //using the millisecond as an exact value seems to move the stage of the function to the assigned slot
    }, 0000);
    //timeout code from class-version.js
    setTimeout(function () {
        //second
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
        //making this appear after lower numbers on the timer
    }, 1000);
    //timeout code from class-version.js
    setTimeout(function () {
        //third
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
        //during development, I accidentally mixed around a few of these timings
    }, 2000);
    //timeout code from class-version.js
    setTimeout(function () {
        //fourth
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
        //and this block appeared before the previous block
    }, 3000);
    //timeout code from class-version.js
    setTimeout(function () {
        //fifth
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
        //this block appeared normally
    }, 4000);
    //timeout code from class-version.js
    setTimeout(function () {
        //this made me realize that the millisecond counter when using setTimeout occurs numerically
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 5000);
    //timeout code from class-version.js
    setTimeout(function () {
        //and not in a cascading order
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 6000);
    //timeout code from class-version.js
    setTimeout(function () {
        //or even one after the other
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 7000);
    //timeout code from class-version.js
    setTimeout(function () {
        //W3C schools has a notice that setTimeout() only runs once, and repeated occurances should use setInterval()
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 8000);
    //timeout code from class-version.js
    setTimeout(function () {
        //leading to this behavior with the millisecond count
        //each occurance of setTimeout() is run together, with the actions happening in order of the milliseconds defined within the code
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 9000);
    //timeout code from class-version.js
    setTimeout(function () {
        //display Blastoff message
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
        }, 10000);

}
function stopCountDown()
//stopCounDown does not stop the timer - interrupts can happen with a loop...
{
    //targets countdownParagraph via id and updates the text inside to  what's quoted below, adding in the time that the button was pressed if pressed during the countDown function.
    //could use a loop to check if there were still 10 seconds on the clock, making a different line of text appear.
    document.getElementById("countdownParagraph").innerHTML = "> Error: Ignition detected! There were "+ currTime +" seconds on the clock when the error occurred.";
    //the alert causes the screen to freeze on the current time - the countDown function still counts in the background.
    //the page does not update until the alert is dismissed
    //added newline elements to text below
    alert("There was an error.\n> Error: Ignition detected!\nThe rocket still launched!");
}