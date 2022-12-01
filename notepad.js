//created by Michael Anderson
//sets the notes variable to the one saved in sessionStorage
var notes = sessionStorage.getItem("note")
//calls the saved notes into the text area
function notePad(){
    document.getElementById("noteText").value = notes;
}
function saveNote(){
    //saves the notes in the text area
    var notes = document.getElementById("noteText").value;
    sessionStorage.setItem("note", notes)
}
function clearNote(){
    //removes the note from sessionStorage
    sessionStorage.removeItem("note")
    //resets the textarea
    document.getElementById("noteText").value = "";
}
//real-time date and time inside faux console
function rTime() {
    //defines the area affected by the function as a constant
    const display = document.getElementById("dateTime");
    //defines what the date and time should be and sets them as a string
    const dateString = new Date().toLocaleString();
    //replaces some of the string as defined below, changing the comma into a dash
    const formattedString = dateString.replace(", ", " - ");
    //displays the content inside the element defined above
    display.textContent = formattedString;
  }
  //update interval for rTime in milliseconds
  setInterval(rTime, 1000);