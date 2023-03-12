const display = document.querySelector("input");

const button1 = document.querySelector("button");
const list = document.querySelector("#list");


function addEvent() {
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    
    paragraph.innerText = display.value;
    
    list.appendChild(paragraph);


    display.value = "";
    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener("dblclick", function() {
        paragraph.remove();
    }); 
}

button1.addEventListener("click", addEvent);
display.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addEvent();
    }
});