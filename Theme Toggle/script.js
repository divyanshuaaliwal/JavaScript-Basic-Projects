
function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}

function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem("theme") || getSystemTheme();
    applyTheme(savedTheme);
};


setInitialTheme();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(getSystemTheme());
    }
});

const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark") ? "dark": "light";
    const newTheme = (currentTheme === "dark" ? "light" : "dark");
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});
