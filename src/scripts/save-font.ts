const fontOptions: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="font-option"]');


const localStoreFont= function (font: string) {
    try {
        localStorage.setItem("font", font);
    }
    catch (e) { console.error("Unable to save font preference to localStorage.") }
}

const setFont = function () {

    const font = localStorage.getItem("font");

    // Set the correct font to checked
    fontOptions.forEach((fontOption) => {
        if (fontOption.id === font) {
            fontOption.checked = true;
        }
    });
}

// Add click event for each radio button
fontOptions.forEach((fontOption) => {
    fontOption.addEventListener("click", () => {
        localStoreFont(fontOption.id);
    })
});

// Apply font when returning to saved pages
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        setFont();
    }
});

setFont();


