const colorThemes: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="theme-option"]');


const localStoreTheme = function (theme: string) {
    try {
        localStorage.setItem("theme", theme);
    }
    catch (e) { console.error("Unable to save theme to localStorage.") }
}

const setTheme = function () {

    const theme = localStorage.getItem("theme");

    // Set the correct theme to checked
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === theme) {
            themeOption.checked = true;
        }
    });
}

// Add click event for each radio button
colorThemes.forEach((themeOption) => {
    themeOption.addEventListener("click", () => {
        localStoreTheme(themeOption.id);
    })
});

// Apply theme when returning to saved pages
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        setTheme();
    }
});

setTheme();


