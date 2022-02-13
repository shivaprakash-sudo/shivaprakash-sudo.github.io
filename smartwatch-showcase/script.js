window.onload = () => {
    const blackWatch = document.querySelector(".black-img");
    const blueWatch = document.querySelector(".blue-img");
    const pinkWatch = document.querySelector(".pink-img");
    const redWatch = document.querySelector(".red-img");
    const purpleWatch = document.querySelector(".purple-img");

    const colorBtns = document.querySelectorAll(".color-btn");
    let imageClasses = [];
    let colorBtnClasses = [];
    const watchImages = document.querySelectorAll(".img");

    // get the image color classes
    pushFirstClass(watchImages, imageClasses);

    // get the color button classes
    pushFirstClass(colorBtns, colorBtnClasses);

    colorBtns.forEach(colorBtn => {
        colorBtn.addEventListener("click", (e) => {
            console.log(e.target.classList);
        })
    })

}

// to push the first class of an element to a new list
function pushFirstClass(fromArray, toNewArray) {
    fromArray.forEach(ele => {
        toNewArray.push(ele.classList[0]);
    });
}