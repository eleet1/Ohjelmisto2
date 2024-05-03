document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start");
    const resultPara = document.getElementById("result");

    startBtn.addEventListener("click", function() {
        const calculation = document.getElementById("calculation").value;
        let result = "Error";

        if (calculation) {
            const [num1, operator, num2] = calculation.split(/([+\-*/])/);

            if (operator && ["+", "-", "*", "/"].includes(operator)) {
                const pNum1 = parseInt(num1);
                const pNum2 = parseInt(num2);

                switch(operator) {
                    case "+":
                        result = pNum1 + pNum2;
                        break;
                    case "-":
                        result = pNum1 - pNum2;
                        break;
                    case "*":
                        result = pNum1 * pNum2;
                        break;
                    case "/":
                        if (pNum2 !== 0) {
                            result = pNum1 / pNum2;
                        } else {
                            result = "Error: Division by zero";
                        }
                        break;
                }
            }
        } else {
            result = "Please enter a calculation";
        }
        resultPara.textContent = "Result: " + result;
    });
});

