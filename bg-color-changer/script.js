const body = document.body;
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    body.style.backgroundColor = colorGenerator();
})

function colorGenerator() {
    let hex = `#${Math.floor(Math.random()*1000000)}`;
    return hex;
}