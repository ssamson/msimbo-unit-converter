// Select input field
var input = document.querySelector("#input");

function convert() {
    var output = document.querySelector("#output");

    if (input.value !== "") {
        output.style.display = "block";
    } else {
        output.style.display = "none";
    }

    // gram
    document.querySelector("#gram").textContent = input.value * 453.592;
    // kilogram
    document.querySelector("kilogram").textContent =
        (input.value * 453.592) / 1000;
    // ounce
    document.querySelector("#ounce").textContent = input.value * 16;
}

input.addEventListener("input", convert);