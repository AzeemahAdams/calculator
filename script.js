let useDegrees = true;

function appendValue(value) {
    const display = document.getElementById("display");
    if (display.value === "Error") display.value = "";
    display.value += value;
}

function appendOperator(op) {
    const display = document.getElementById("display");
    if (display.value === "" || display.value === "Error") return;
    // Replace trailing operator if one already exists
    if (/[+\-*/]$/.test(display.value)) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    const display = document.getElementById("display");
    if (display.value === "Error") {
        display.value = "";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    const display = document.getElementById("display");
    if (display.value === "" || display.value === "Error") return;
    try {
        const expr = display.value.replace(/[+\-*/]$/, "");
        const result = eval(expr);
        display.value = parseFloat(result.toFixed(10));
    } catch (e) {
        display.value = "Error";
    }
}

function percentage() {
    const display = document.getElementById("display");
    if (display.value === "" || display.value === "Error") return;
    try {
        const result = eval(display.value) / 100;
        display.value = parseFloat(result.toFixed(10));
    } catch (e) {
        display.value = "Error";
    }
}

function toggleDegRad() {
    useDegrees = !useDegrees;
    document.getElementById("degRadBtn").textContent = useDegrees ? "DEG" : "RAD";
}

function applyTrig(fn) {
    const display = document.getElementById("display");
    if (display.value === "" || display.value === "Error") return;
    try {
        const expr = display.value.replace(/[+\-*/]$/, "");
        const val = parseFloat(eval(expr));
        if (isNaN(val)) { display.value = "Error"; return; }
        const angle = useDegrees ? (val * Math.PI) / 180 : val;
        const result = Math[fn](angle);
        display.value = parseFloat(result.toFixed(10));
    } catch (e) {
        display.value = "Error";
    }
}
