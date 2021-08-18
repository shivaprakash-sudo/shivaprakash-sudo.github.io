const body = document.body;
const btn = document.querySelector(".btn");
const hex_val = document.querySelector("#hex-val")

const symbols = "0123456789ABCDEF";
const symbolsArray = symbols.split("");

btn.addEventListener("click", (e) => {
    body.style.backgroundColor = colorGenerator();
    hex_val.textContent = `${colorGenerator()}`
})

function colorGenerator() {
    let hex = "#";
    const hexLength = 6;
    for (let index = 0; index < hexLength; index++) {
        const index = Math.floor(Math.random() * 16)
        hex += symbolsArray[index];
    }
    return hex;
}