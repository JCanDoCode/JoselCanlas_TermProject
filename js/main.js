// The DOM selects the hamburger-icon class which is the svg that was taken from font awesome:
const ham_icon = document.querySelector(".hamburger-icon");
// The DOM selects the hamburger-menu class ul:
const ham_menu = document.querySelector(".hamburger-menu");
// Defines a global variable to hold a boolean:
let active = false;

// toggle_nav arrow function that runs when the ham_icon is clicked:
const toggle_nav = () => {
    // if statement to bring the hamburger menu out if the active boolean == false.
    if (active == false) {
        // changes the hamburger-menu transition style to transform 0.5s ease-in-out.
        ham_menu.style.transition = "transform 0.5s ease-in-out";
        // changes the hamburger-menu transform style to translate it 50 viewport width to the right:
        ham_menu.style.transform = "translateX(50vw)";
        // changes the active variable to true to recognize that the hamburger menu is active:
        active = true;
    } else {
        // changes the active variable to false to s
        active = false;
        ham_menu.style.transition = null;
        ham_menu.style.transform = null;
    }
};

// eventlistener detects if the ham_icon (.hamburger-icon svg) is clicked. When it is clicked, invokes the toggle_nav arrow function:
ham_icon.addEventListener("click", toggle_nav);