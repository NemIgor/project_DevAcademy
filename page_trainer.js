// Шапка
window.onscroll = function() {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
        header.classList.add("scrolled"); // Добавляет тень
    } else {
        header.classList.remove("scrolled"); // Убирает тень
    }
};

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
    editor.setOption("theme", "idea");  
});

// Обработчик клика только по "Dark"
darkMode.addEventListener("click", () => {
    isDarkMode = true;
    body.classList.add("dark-mode");
    editor.setOption("theme", "darcula"); 
});
// Шапка


var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,        // Включаем номера строк
    mode: "python",           // Подсветка синтаксиса Python
    theme: "idea",
    extraKeys: {
        "Ctrl": "autocomplete",  // Включаем автодополнение при нажатии Ctrl+Space
         "Ctrl-/": "toggleComment",  // Включаем горячую клавишу для комментирования
    "Cmd-/": "toggleComment"
    },
    hintOptions: {
        completeSingle: false  // Отключаем автозавершение при вводе одного символа
    }
});

async function runCode() {
    let code = editor.getValue();
    
    let response = await fetch("http://127.0.0.1:5000/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
    });

    let result = await response.json();
    document.getElementById("output").textContent = result.output || result.error;
}

// Функция для подгонки высоты редактора
function resizeEditor() {
    var container = document.querySelector('.task_solution-editor');  // Находим родительский контейнер
    editor.setSize(container.clientWidth, container.clientHeight);  // Устанавливаем размеры редактора
}

// Слушаем изменение размеров окна и вызываем функцию
window.addEventListener("resize", resizeEditor);

// Вызываем resizeEditor при загрузке страницы
window.addEventListener("load", resizeEditor);