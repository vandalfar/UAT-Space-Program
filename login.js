//checks for stored variables
var firstName = sessionStorage.getItem("fName")
var lastName = sessionStorage.getItem("lName")
var badgeNo = sessionStorage.getItem("badgeNo")
function saveData(){
    //calls the variables from the document
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNo = document.getElementById("badgeNo").value;
    //stores the variables in sessionStorage
    sessionStorage.setItem("fName", firstName);
    sessionStorage.setItem("lName", lastName);
    sessionStorage.setItem("badgeNo", badgeNo);
}
function logIn(){
    //calls the variables from the document
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNo = document.getElementById("badgeNo").value;
    var comboN = firstName + lastName;
    //takes the combined first and last name and checks its length against the ruleset
    if (comboN.length > 20 || comboN.length < 4){
        //updates loginStatus to the text below
        document.getElementById("loginStatus").innerHTML = "Invalid input for name. </br> Total length must be less than 20 characters.";
        //alert("Name Setting Invalid");
    } 
    //assuming that the minimum total length of the combined names is four, half of that is two
    else if (lastName.length < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid input for name. </br> Please enter your last name.";
    }
    //assuming that the minimum total length of the combined names is four, half of that is two
    else if (firstName.length < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid input for name. </br> Please enter your first name.";
    }
    //checks if the badge number is 3 digits
    else if (badgeNo.length > 3 || badgeNo.length < 2){
        //updates loginStatus to the text below
        document.getElementById("loginStatus").innerHTML = "Invalid Badge No. </br>Please try again.";
        //alert("Invalid Badge Number");
    }
    //login success
    else {
        alert("Welcome back, "+ firstName +"!");
        //loads the page into Mission Control
        location.replace("missionControl.html");
    }
}
function logOut(){
    //load into the main page
    location.replace("UATSpaceProgram.html");
    //using an alert to hide page load
    //alert("Logged Out Successfully!");
    //remove stored session data set by this function forcefully to mitigate vulnerabilities
    sessionStorage.removeItem("fName");
    sessionStorage.removeItem("lName");
    sessionStorage.removeItem("badgeNo");
}
function getInfo(){
    document.getElementById("loginStatusTwo").innerHTML = "User: "+lastName+", "+firstName+"</br>ID: "+badgeNo;
    document.getElementById("userNotes").innerHTML = "><span>:</span>/user/no_"+badgeNo+"/Notes/sessionNote.txt";
}