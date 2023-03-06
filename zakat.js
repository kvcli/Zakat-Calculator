var salary = document.getElementById("salary");
button = document.getElementById("btn");
var div = document.getElementById("div") 
function toBePaid() {
    var input = parseFloat(salary.value);
    if (isNaN(input)){
        var message = "please enter a valid number.";
    }
    else  {
         var zakatAmount = input > 1000 ? input * 0.025 : 0;
    var message = zakatAmount ? "Amout of Zakat to be paid is $" + zakatAmount.toFixed(2) : "No Zakat due." ;
    }
    var h3 = document.createElement("h3");
    h3.textContent = message;
    var existingH3Tag = div.querySelector("h3"); // to see if there is an existing h3 tag, if there is, we remove it before calculating the amount of zakat 
    if (existingH3Tag)
    {
        div.removeChild(existingH3Tag);
    }
    div.appendChild(h3);
    salary.value ="";
}
button.addEventListener("click", toBePaid);