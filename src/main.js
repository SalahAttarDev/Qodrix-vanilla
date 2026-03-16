import App from './App.js';
import './styles/global.css';

// ... rest of your main.js code
let unmountFunctions = [];

function createRoot() {
    let root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
    return root;
}

function initApp(root) {
    let pageFunctions = App();

    // 1. Execute the functions once to get all component objects
    let components = pageFunctions.map(pageFunc => pageFunc());

    // 2. Combine all HTML into one string, then inject it ONCE
    let combinedHTML = "";
    components.forEach(component => {
        if (component.html) combinedHTML += component.html;
    });
    root.innerHTML = combinedHTML;

    // 3. Now that the DOM is stable, run the mount functions
    components.forEach(component => {
        if (component.mount && typeof component.mount === 'function') {
            let unmountFn = component.mount();
            // If the mount function returns a cleanup function, save it
            if (typeof unmountFn === 'function') {
                unmountFunctions.push(unmountFn);
            }
        }
    });
}

function init() {
    let root = createRoot();
    initApp(root);
}

init();
console.log("Cleanup functions to run on unmount:", unmountFunctions);
