const container = document.querySelector(".container");
const display = document.querySelector(".display-container");
const keys = document.querySelector(".keys-container");

// adding event listener to the calculator keys
addKeysEventListener("click", "button", (e) => {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = container.dataset.previousKeyType;
    if (!action) {
        if (displayedNum === "0" || previousKeyType === "operator") {
            display.textContent = keyContent;
        } else {
            display.textContent += keyContent;
        }
    }
    if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divide"
    ) {
        container.dataset.firstNum = displayedNum;
        container.dataset.operator = action;
        key.classList.add("is-pressed");
        // adding custom attribute to the operator keys
        container.dataset.previousKeyType = "operator";
    }

    // remove .is-pressed class from all keys
    Array.from(key.parentNode.children).forEach((key) => {
        key.classList.remove("is-pressed");
    });

    if (action === "decimal") {
        display.textContent += keyContent;
    }
    if (action === "clear") {
        display.textContent = "0";
    }
    if (action === "calculate") {
        const firstNum = container.dataset.firstNum;
        const operator = container.dataset.operator;
        const secondNum = displayedNum;
        display.textContent = calculate(firstNum, operator, secondNum);
    }
});

const calculate = (num1, operator, num2) => {
    let result = "";
    if (operator === "add") {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === "subtract") {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === "multiply") {
        result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === "divide") {
        result = parseFloat(num1) / parseFloat(num2);
    }
    return result;
};

// keys event delegation
function addKeysEventListener(type, selector, callback) {
    keys.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            callback(e);
        }
    });
}