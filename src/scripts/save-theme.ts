const colorThemes: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="theme-option"]');

const tempStoreTheme = function (theme: string) {
    try {
        sessionStorage.setItem("theme", theme);
    }
    catch (e) { console.error("Unable to save theme to sessionStorage.") }
}

const permaStoreTheme = function (theme: string) {
    try {
        localStorage.setItem("theme", theme);
    }
    catch (e) { console.error("Unable to save theme to localStorage.") }
}

const setTheme = function () {
    // Get the local theme, which may be null
    const localTheme = localStorage.getItem("theme");
    let theme = localTheme;

    // If local theme is null, grab the session theme
    if (localTheme === null) {
        theme = sessionStorage.getItem("theme");
    }

    // Set the correct theme to checked
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === theme) {
            themeOption.checked = true;
        }
    });
}

colorThemes.forEach((themeOption) => {
    themeOption.addEventListener("click", () => {
        tempStoreTheme(themeOption.id);
    })
});

setTheme();

