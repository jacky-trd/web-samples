function calculate() {
    // 获取操作数
    var numberOne = parseFloat(document.getElementById("number-one").value);
    var numberTwo = parseFloat(document.getElementById("number-two").value);
    // 获取操作符
    var operator = document.getElementById("operator").value;

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        alert("操作数必须是一个数字！");
        return;
    }

    if ((operator == "/") && (numberTwo == 0)) {
        alert("除数不可以为零！");
        document.getElementById("result").innerText = "NaN";
        return;
    }

    switch (operator) {
        case "+":
            // 加法
            displayResult(parseFloat((numberOne + numberTwo).toFixed(8)));
            break;
        case "-":
            // 减法
            displayResult(parseFloat((numberOne - numberTwo).toFixed(8)));
            break;
        case "*":
            // 乘法
            displayResult(parseFloat((numberOne * numberTwo).toFixed(8)));
            break;
        case "/":
            // 除法
            displayResult(parseFloat((numberOne / numberTwo).toFixed(8)));
            break;
        default:
            alert("请选择一个正确的操作符！");
    }
    return;
}

function displayResult(result) {
    // 显示结果
    document.getElementById("result").innerText = result;
}
