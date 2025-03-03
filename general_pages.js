// Шапка
window.onscroll = function() {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
        header.classList.add("scrolled"); // Добавляет тень
    } else {
        header.classList.remove("scrolled"); // Убирает тень
    }
};
// Шапка

// Форма входа-регистрации
document.addEventListener('DOMContentLoaded', function() {
    const showPassBtn = document.querySelector('.show-pas');
    const passwordInput = document.querySelector('.password');
    const btnIn = document.querySelector('.btn-in');
    const btnUp = document.querySelector('.btn-up');
    const navIndicator = document.querySelector('.nav-indicator');
    const formsContainer = document.querySelector('.forms-container');

    showPassBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPassBtn.classList.add('view');
        } else {
            passwordInput.type = 'password';
            showPassBtn.classList.remove('view');
        }
    });

    navIndicator.style.width = btnIn.offsetWidth + 'px';
    navIndicator.style.left = btnIn.offsetLeft + 'px';

    btnUp.addEventListener('click', () => {
        navIndicator.style.width = btnUp.offsetWidth + 'px';
        navIndicator.style.left = btnUp.offsetLeft + 'px';
        formsContainer.classList.add('signup');
    });

    btnIn.addEventListener('click', () => {
        navIndicator.style.width = btnIn.offsetWidth + 'px';
        navIndicator.style.left = btnIn.offsetLeft + 'px';
        formsContainer.classList.remove('signup');
    });

    const indicator = document.querySelector('.nav-curs-indicator');
    const javaButton = document.querySelector('.btn-java');
    
    javaButton.addEventListener('click', function() {
        indicator.style.animation = 'shakeIndicator 0.4s ease';
        
        setTimeout(() => {
            indicator.style.animation = '';
        }, 400);
    });
});


function toggleForm(form) {
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('sign-up-form');
    const lineAuth = document.querySelector('.line-auth');
    const btnIn = document.querySelector('.btn-in');
    const btnUp = document.querySelector('.btn-up');

    if (form === 'sign-in') {
        signInForm.classList.remove('hidden');
        signUpForm.classList.add('hidden');
        lineAuth.style.left = '0';
        btnIn.classList.add('active');
        btnUp.classList.remove('active');
    } else {
        signInForm.classList.add('hidden');
        signUpForm.classList.remove('hidden');
        lineAuth.style.left = '50%';
        btnIn.classList.remove('active');
        btnUp.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("blurButton");
    const overlay = document.getElementById("overlay");
    const loginMenu = document.getElementById("regForm");
    const modalContent = document.querySelector(".regForm-container");
    const body = document.body;
    const navIndicator = document.querySelector('.nav-indicator');

    button.addEventListener("click", function () {
        overlay.style.display = "block"; 
        loginMenu.style.display = "block"; 
        navIndicator.style.width = 90 + 'px';
    });

    document.addEventListener('click', (event) => {
        if (!loginMenu.contains(event.target) && !button.contains(event.target)) {
            overlay.style.display = 'none';
            loginMenu.style.display = 'none';
        }
    });
 
})

// Темная тема

const toggleContainer = document.getElementById("themeToggle");
const slider = document.getElementById("slider");
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const body = document.body;
let isDarkMode = false;

// Обработчик клика только по "Light"
lightMode.addEventListener("click", () => {
    isDarkMode = false;
    body.classList.remove("dark-mode");
});

// Обработчик клика только по "Dark"
darkMode.addEventListener("click", () => {
    isDarkMode = true;
    body.classList.add("dark-mode");
});

