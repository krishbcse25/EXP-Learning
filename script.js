function registerUser(event){
event.preventDefault();

let name = document.getElementById("name").value;

alert("Registration Successful! Welcome " + name);
}

function setAmount(value){
document.getElementById("amount").value = value;
}

function donateNow(){

let donor = document.getElementById("donor").value;
let amount = document.getElementById("amount").value;

if(donor=="" || amount==""){
alert("Please fill all donation details");
}
else{
alert("Thank You " + donor + " for donating ₹" + amount);
}
}