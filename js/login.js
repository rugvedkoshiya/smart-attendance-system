const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

function displaymsg() {
	// this.innerHTML=
	element = document.querySelector('.account-create-message'); 
  element.style.visibility = 'visible';
	// document.getElementsByClassName("account-create-message").style.visibility = 'visible';
}