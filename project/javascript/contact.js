var yourName = prompt("Please enter your name", "");
if (yourName!= null) {
    document.getElementById("welcome").innerHTML =
    "Hello " + yourName + " please fill out this form with yiur details and one of our staff will get back to you with in 2 working days ";
}
  else {
  document.getElementById("welcome").innerHTML =
  "hi, please fill out this form with yiur details and one of our staff will get back to you with in 2 working days ";
  }