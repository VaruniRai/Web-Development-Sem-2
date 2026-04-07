
let numberInput = document.getElementById("numberInput");
let checkBtn = document.getElementById("checkBtn");
let result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    
    let num = parseFloat(numberInput.value);

    
    if (isNaN(num)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    if (num % 2 === 0) {
        result.innerHTML = `${num} is <span class="even">EVEN</span>.`;
    } else {
        result.innerHTML = `${num} is <span class="odd">ODD</span>.`;
    }
});