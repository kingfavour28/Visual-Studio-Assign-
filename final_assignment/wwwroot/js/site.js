// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.querySelectorAll(".text").forEach((elem) => {
    elem.addEventListener("mouseenter", (event) => {
        event.target.style.color = "white";
    });

    elem.addEventListener("mouseleave", (event) => {
        event.target.style.color = "black";
    });
});
