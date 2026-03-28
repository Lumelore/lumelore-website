// Can you tell by the name of this file that I am a Java programmer? lololol

// In order for this script to work, it requires a css file with .preload * { transition: none !important; }

// We start by adding the class to the body using the script, so that transitions will still work if someone has a JS blocker.
document.querySelector('body')?.classList.add('preload');

// After the page is loaded we can remove the class so transition animations will be played
addEventListener("load", () => {
    document.querySelector('body')?.classList.remove('preload');
})