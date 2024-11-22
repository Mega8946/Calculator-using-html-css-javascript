const display = document.getElementById("display");

display.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculateResult();
    }
});

function appendtoDisplay(value){
    display.value += value;
}

function ClearDisplay(){
    display.value = '';
}

function calculateResult(){
    try{
        if(display.value.includes('/') && display.value.endsWith('/')){
            alert("Invalid input")
            ClearDisplay();
            return
        }

        display.value = eval(display.value);

        if (display.value === 'Infinity' || display.value === '-Infinity') {
            alert("Number can not be divided by zero");
            ClearDisplay();
        }
        
    }
    catch(error){
        alert("Invalid Expression")
        ClearDisplay();
    }
}