
var joinButton = document.querySelector('.button--join');
var loginButton = document.querySelector('.login__login');
var loginForm = document.querySelector('.login__form');
var signupForm = document.querySelector('.login__signup');

var loginQuestion_1 = document.querySelector('.login__question');
var loginQuestion_2 = document.querySelector('.login__question--2');



joinButton.addEventListener('click', function(){

    loginForm.style.opacity = "0";
    loginForm.style.visibility = "hidden";
    loginForm.style.transition = "all .7s";

    signupForm.style.opacity = ".8";
    signupForm.style.visibility = "visible";
    signupForm.style.transition = "all .7s";
    signupForm.style.transitionDelay = ".9s";
    
    loginQuestion_1.style.opacity = "0";
    loginQuestion_1.style.visibility = "hidden";
    loginQuestion_1.style.transition = "all .7s";
    loginQuestion_1.style.transitionDelay = "1.6s";

    loginQuestion_2.style.opacity = "1";
    loginQuestion_2.style.visibility = "visible";
    loginQuestion_2.style.transition = "all .7s";
    loginQuestion_2.style.transitionDelay = "2s";

});


loginButton.addEventListener('click', function(){

    signupForm.style.opacity = "0";
    signupForm.style.visibility = "hidden";
    signupForm.style.transition = "all .7s";

    loginForm.style.opacity = ".8";
    loginForm.style.visibility = "visible";
    loginForm.style.transition = "all .7s";
    loginForm.style.transitionDelay = ".9s";

    loginQuestion_2.style.opacity = "0";
    loginQuestion_2.style.visibility = "hidden";
    loginQuestion_2.style.transition = "all .7s";
    loginQuestion_2.style.transitionDelay = "1.6s";

    loginQuestion_1.style.opacity = "1";
    loginQuestion_1.style.visibility = "visible";
    loginQuestion_1.style.transition = "all .7s";
    loginQuestion_1.style.transitionDelay = "2s";

})