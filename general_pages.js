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
        formsContainer.style.height = '160px';
    });

    btnIn.addEventListener('click', () => {
        navIndicator.style.width = btnIn.offsetWidth + 'px';
        navIndicator.style.left = btnIn.offsetLeft + 'px';
        formsContainer.classList.remove('signup');
        formsContainer.style.height = '200px';
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
    const formsContainer = document.querySelector('.forms-container');

    if (form === 'sign-in') {
        signInForm.classList.remove('hidden');
        signUpForm.classList.add('hidden');
        lineAuth.style.left = '0';
        btnIn.classList.add('active');
        btnUp.classList.remove('active');
        formsContainer.style.height = '200px';
    } else {
        signInForm.classList.add('hidden');
        signUpForm.classList.remove('hidden');
        lineAuth.style.left = '50%';
        btnIn.classList.remove('active');
        btnUp.classList.add('active');
        formsContainer.style.height = "160px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("blurButton");
    const overlay = document.getElementById("overlay");
    const loginMenu = document.getElementById("regForm");
    const navIndicator = document.querySelector('.nav-indicator');

    // При загрузке проверяем, было ли окно открыто в прошлый раз
    const isLoginMenuOpen = localStorage.getItem("loginMenuOpen");
    if (isLoginMenuOpen === "true") {
        overlay.style.display = "block";
        loginMenu.style.display = "block";
        navIndicator.style.width = 90 + 'px';
        setTimeout(() => {
            loginMenu.classList.add("show");
        }, 10); 
    }

    button.addEventListener("click", function () {
        overlay.style.display = "block"; 
        loginMenu.style.display = "block";
        navIndicator.style.width = 90 + 'px';
        setTimeout(() => {
            loginMenu.classList.add("show");
        }, 10); 
        
        // Сохраняем, что окно открыто
        localStorage.setItem("loginMenuOpen", "true");
    });

    // Закрытие окна при клике вне его
    document.addEventListener('click', (event) => {
        if (!loginMenu.contains(event.target) && !button.contains(event.target)) {
            loginMenu.classList.remove("show");
            setTimeout(() => {
                overlay.style.display = 'none';
                loginMenu.style.display = 'none';
            }, 500);

            // Сохраняем, что окно закрыто
            localStorage.setItem("loginMenuOpen", "false");
        }
    });
});


// Темная тема
const toggleContainer = document.getElementById("themeToggle");
const slider = document.getElementById("slider");
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const body = document.body;
let isDarkMode = false;

// Проверка текущей темы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add("dark-mode");
        isDarkMode = true;
    } else {
        body.classList.remove("dark-mode");
        isDarkMode = false;
    }
});

// Обработчик клика по "Light"
lightMode.addEventListener("click", () => {
    isDarkMode = false;
    body.classList.remove("dark-mode");
    localStorage.setItem('theme', 'light');
});

// Обработчик клика по "Dark"
darkMode.addEventListener("click", () => {
    isDarkMode = true;
    body.classList.add("dark-mode");
    localStorage.setItem('theme', 'dark');
});

