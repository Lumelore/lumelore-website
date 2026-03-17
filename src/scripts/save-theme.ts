const colorThemes: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="theme-option"]');

// No longer using - cookies are not needed
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

    // Uncomment below and comment the const theme line to go back to the old cookie way
    // click event for buttons will need to be changed back to cookie store theme as well

    /*
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
    }*/

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


