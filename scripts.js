/* Add your JavaScript to this file */
/*const txt1 = document.getElementById('email');
const btn1 = document.getElementsByClassName('btnn');
const out1 = document.getElementById('output1');

function funct1(){
    out1.innerHTML = txt1.value;

}

btn1.addEventListener('click', funct1)
*/

const emInput = document.getElementById("email");

const button = document.querySelector("btn");

const displayMessage = document.querySelector('output1');

button.addEventListener("click", function(){
     const entEmail = emInput.value;
  
  if(entEmail){
    displayMessage.textContent = "Thank you! Your email address" + entEmail + " has been added to our mailing list!"
  } else {
    displayMessage.textContent = "Please enter a valid email address";
  }
});