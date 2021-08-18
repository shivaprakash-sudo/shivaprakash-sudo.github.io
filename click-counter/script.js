const container = document.querySelector(".container");

const btn = document.createElement("button");

btn.id = "btn";
btn.textContent = 0;
container.append(btn);

btn.style.width = "96px";
btn.style.height = "49px";
btn.style.fontSize = "24px";

let count = 0;
btn.addEventListener("click", (e) => {
    ++count;
    btn.textContent = count;
});