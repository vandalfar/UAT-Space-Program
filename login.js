function logIn(){
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNo = document.getElementById("badgeNo").value;
    var comboN = firstName + lastName;
    //takes the combined first and last name and checks its length against the ruleset
    if (comboN.length > 20 || comboN.length < 4){
        document.getElementById("loginStatus").innerHTML = "Invalid input for name. Please try again";
        alert("Name Setting Invalid");
    } 
    //checks if the badge number is 3 digits
    else if (badgeNo.length > 3 || badgeNo.length < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge No. Please try again.";
        alert("Invalid Badge Number");
    }
    //login success
    else {
        alert("Welcome back, "+ firstName +"!");
        location.replace("missionControl.html");
    }
}
function logOut(){
    location.replace("UATSpaceProgram.html");
    alert("Logged Out Successfully!");
}