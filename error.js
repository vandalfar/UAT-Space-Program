//created by Michael Anderson
/*stopCountDown does not stop the timer, and instead gives a fake error and updates the paragraphs selected by id*/
function stopCountDown() {
  /*Creates a fake error that targets #countdownParagraph and #quoteBlock via id and updates the text inside*/
  document.getElementById("countdownParagraph").innerHTML = "> Error: Ignition detected!";
  //alert shows whenever the "Stop" button is pressed, which also causes the above paragraph to contain text
  //added \n to create new line elements
  alert("There was an error.\n \n> Error: Ignition detected!\n \nThe rocket just launched!");
  document.getElementById("quoteBlock").innerHTML = "<br><q>Each time you fail, you have eliminated another wrong option.</q><br>   - Thomas A. Edison";
}