//create currTime variable
var currTime = 10;
function displayCountDown()  //for an unknown reason, the function takes two seconds to display the initial countdown timer.
// One second may be taken up by unhide(); in unhide.js, but I do not like the time it takes to display the box - even though it calls memories of early DSL loading times.
{ 
    //timeout code from class-version.js
    setTimeout(function () {
        //first subtraction
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);
    //timeout code from class-version.js
    setTimeout(function () {
        //second
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);
    //timeout code from class-version.js
    setTimeout(function () {
        //third
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);
    //timeout code from class-version.js
    setTimeout(function () {
        //there must be some reason for this
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);
    //timeout code from class-version.js
    setTimeout(function () {
        //something funny is going to be going on in this function
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 5000);
    //timeout code from class-version.js
    setTimeout(function () {
        //a loop would make this so much easier
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 6000);
    //timeout code from class-version.js
    setTimeout(function () {
        //we need to use loops
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 7000);
    //timeout code from class-version.js
    setTimeout(function () {
        //almost there
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 8000);
    //timeout code from class-version.js
    setTimeout(function () {
        //just one more
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 9000);
    //timeout code from class-version.js
    setTimeout(function () {
        //should be final repetition
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 10000);
    //timeout code from class-version.js
    setTimeout(function () {
        //display Blastoff message
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
        }, 11000);

}
function stopCountDown()
//stopCounDown does not stop the timer - another reason to use a loop...
{
    document.getElementById("countdownParagraph").innerHTML = "Error: Ignition detected. There were "+ currTime +" seconds on the clock.";
    alert("Unfortunately, starting the timer also seems to have started the ignition. The rocket still launched!");
    document.getElementById("countdownParagraph").innerHTML
}