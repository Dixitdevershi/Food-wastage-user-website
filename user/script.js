var logSign = document.querySelector('#logSign');
var regScreen = document.querySelector('.regScreen');
var logScreen = document.querySelector('.logScreen');
var userOrgPanel = document.querySelector('.user-org-panel');

var main = document.querySelector('#main');
logSign.addEventListener('click', function () {
    userOrgPanel.style.display = 'flex';
    main.style.overflowY = 'hidden';
})

var userpanel = document.querySelector('.user-panel');
userpanel.addEventListener('click', function () {
    userOrgPanel.style.display = 'none';
    logScreen.style.display = 'flex';
})

var orgpanel = document.querySelector('.org-panel');
orgpanel.addEventListener('click', function () {
    window.location.href = '/org';
})

var logclose = document.querySelector('.close #loginclose');
var regclose = document.querySelector('.close #regclose');

logclose.addEventListener('click', function () {
    logScreen.style.display = 'none';
    main.style.overflowY = 'scroll';
})

regclose.addEventListener('click', function () {
    regScreen.style.display = 'none';
    main.style.overflowY = 'scroll';
})

const togglePassword = document.querySelectorAll(".eye");
const passwords = document.querySelectorAll(".password");

togglePassword.forEach((elem) => {
    elem.addEventListener("click", function () {
        // toggle the type attribute
        const logtype = passwords[0].getAttribute("type") === "password" ? "text" : "password";
        passwords[0].setAttribute("type", logtype);
        const regtype = passwords[1].getAttribute("type") === "password" ? "text" : "password";
        passwords[1].setAttribute("type", regtype);

        // toggle the icon
        document.querySelector('#logdets .eye-show').classList.toggle("hide");
        document.querySelector('#logdets .eye-hide').classList.toggle("hide");
        document.querySelector('#password-div .eye-show').classList.toggle("hide");
        document.querySelector('#password-div .eye-hide').classList.toggle("hide");
    });
})

var newUser = document.querySelector('#newUser');
newUser.addEventListener('click', function () {
    logScreen.style.display = 'none';
    regScreen.style.display = 'flex';
})

