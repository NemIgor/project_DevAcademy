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
});

// Обработчик клика только по "Dark"
darkMode.addEventListener("click", () => {
    isDarkMode = true;
    body.classList.add("dark-mode");
});
// Шапка


const editor = document.querySelector(".editor")
const highlight = editor => {
  // highlight.js does not trim old tags,
  // let's do it by this hack.
  editor.textContent = editor.textContent
  hljs.highlightBlock(editor)
}
const jar = new CodeJar(editor, withLineNumbers(highlight))


jar.updateCode(localStorage.getItem("code"))
jar.onUpdate(code => {
  localStorage.setItem("code", code)
})