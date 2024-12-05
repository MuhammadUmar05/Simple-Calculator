let display = document.getElementById("display");
let button = document.querySelectorAll("button");
let buttonList = Array.from(button);
let text = "";

buttonList.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML === "AC") {
            text = "";
            display.value = text;
        }
        else if (e.target.innerHTML === "DEL") {
            text = text.substring(0, text.length - 1);
            display.value = text;
        }
        else if (e.target.innerHTML === "=") {
            text = (eval(display.value)).toString();
            display.value = text;
        }
        else {
            text += e.target.innerHTML;
            display.value = text;
        }
    });
});