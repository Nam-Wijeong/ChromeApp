const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit (e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}

function paintGreetings(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.textContent = `Hello, ${userName}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}