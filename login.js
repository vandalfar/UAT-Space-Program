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
        document.getElementById("loginStatus").innerHTML = "Invalid input for name. Please try again.";
        //alert("Name Setting Invalid");
    } 
    //checks if the badge number is 3 digits
    else if (badgeNo.length > 3 || badgeNo.length < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge No. Please try again.";
        //alert("Invalid Badge Number");
    }
    //login success
    else {
        alert("Welcome back, "+ firstName +"!");
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
}