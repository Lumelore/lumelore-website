const colorThemes: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="theme-option"]');

const cookieStoreTheme = function (theme: string) {
    try {
        document.cookie = `theme=${theme}; Max-Age=604800; Path=/; Secure;`;
    }
    catch (e) { console.error("Unable to save theme as cookie.") }
}

const localStoreTheme = function (theme: string) {
    try {
        localStorage.setItem("theme", theme);
    }
    catch (e) { console.error("Unable to save theme to localStorage.") }
}

const setTheme = function () {

    // Get the cookie theme
    const cookieTheme = document.cookie.split(";").find((row) => row.startsWith("theme="))?.split("=")[1];
    let theme: string | undefined | null = cookieTheme;

    // If null grab from local storage
    if (cookieTheme === undefined) {
        theme = localStorage.getItem("theme");
        // store local storage theme in cookie
        if (theme !== null) { 
            cookieStoreTheme(theme) 
        }
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
        cookieStoreTheme(themeOption.id);
    })
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        setTheme();
        console.log("triggered theme set");
    }
});

setTheme();


