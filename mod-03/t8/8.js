document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start");
    const resultPara = document.getElementById("result");

    startBtn.addEventListener("click", function() {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const operation = document.getElementById("operation").value;

        let result;
        switch(operation) {
            case "add":
                result = num1 + num2;
                break;
            case "sub":
                result = num1 - num2;
                break;
            case "multi":
                result = num1 * num2;
                break;
            case "div":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Error: Division by zero";
                }
                break;
        }
        resultPara.textContent = "Result: " + result;
    });
});