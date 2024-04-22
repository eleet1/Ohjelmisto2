const targetElement = document.getElementById("target");

let li1 = document.createElement("li");
li1.textContent = "First item";
let li2 = document.createElement("li");
li2.textContent = "Second item";
let li3 = document.createElement("li");
li3.textContent = "Third item";

targetElement.appendChild(li1);
targetElement.appendChild(li2);
targetElement.appendChild(li3);

li2.classList.add("my-item");