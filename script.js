const result = document.getElementById("result");
function appendNumber(number){
    result.value += number;
};

//calculate percentage
function calculatePercentage(){
    const resultInput = document.getElementById("result");
    const currentValue = parseFloat(resultInput.value) || 0;
    const percentage = currentValue/100;
    resultInput.value = percentage;
}
function appendToResult(value){
    const resultInput = document.getElementById("result");
    resultInput.value += value;
};
function clearResult(){
    document.getElementById("result").value = "";
};
function togglePageContent(){
    var pageContent = document.getElementById("content");
    pageContent.classList.toggle("hidden");
};
function pow(){
    result.value = Math.pow(result.value,2)
};
function powOne(){
    document.getElementById("result").value = Math.pow(result.value,1);
};
function powCube(){
    document.getElementById("result").value = Math.pow(result.value,3);

};
function expPow(){
    document.getElementById("result").value = Math.pow(result.value,prompt());

};
function log(){
    document.getElementById("result").value = Math.log(result.value);
};
function e(){
    document.getElementById("result").value *= 2.718281828459045;

};
function pi(){
    document.getElementById("result").value *= 3.1415;

};
function sqrRoot(){
    document.getElementById("result").value = Math.sqrt(result.value);
};
//Add to memory
let memory =0;
function addToMemory(){
    const resultInput = document.getElementById("result");
    const currentValue = parseFloat(resultInput.value) || 0;
    memory+=currentValue;
    //display the updated memory value
    resultInput.value = memory;
};
//subtract from memory
let memories = 0;
function subtractFromMemory(){
    const resultInput = document.getElementById("result");
    const currentValue = parseFloat(resultInput.value) || 0;
    memories -= currentValue;
    //display updated value
    resultInput.value = memories;
};
function memoryRecall(){
    const resultInput = document.getElementById("result");
    resultInput.value = memory;
};
function memoryClear(){
    const resultInput = document.getElementById("result");
    memory = "";
    resultInput.value = memory;
};
//reciprocal function
function calculateReciprocal(){
    const resultInput = document.getElementById("result");
    const currentValue = parseFloat(resultInput.value) || 0;
    const reciprocal = 1/currentValue;
    resultInput.value = reciprocal;
}

function calculator() {
    var radians = parseFloat(prompt("Enter the value in radians:"));
    var degrees = (radians * 180) / Math.PI;
    
    if (!isNaN(degrees)) {
        document.getElementById("result").value = degrees;
    } else {
      alert("Invalid input");
    }
  };
//trignometry functions
function calculateSin(){
    document.getElementById("result").value = Math.sin(result.value).toFixed(4);
};
function calculateCos(){
    document.getElementById("result").value = Math.cos(result.value).toFixed(4);
};
function calculateTan(){
    document.getElementById("result").value = Math.tan(result.value).toFixed(4);
};
function calculateSinInverse(){
    document.getElementById("result").value = Math.asin(result.value).toFixed(4);
};
function calculateCosInverse(){
    document.getElementById("result").value = Math.acos(result.value).toFixed(4);
};
function calculateTanInverse(){
    document.getElementById("result").value = Math.atan(result.value).toFixed(4);
};
function calculateSinHyper(){
    document.getElementById("result").value = Math.sinh(result.value).toFixed(4);
};
function calculateCosHyper(){
    document.getElementById("result").value = Math.cosh(result.value).toFixed(4);
};
function calculateTanHyper(){
    document.getElementById("result").value = Math.tanh(result.value).toFixed(4);
};

function calculateResult(){
    const result = document.getElementById("result").value;
    try {
        const answer = eval(result);
        document.getElementById("result").value = answer;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
};
function deleteResult(){
    document.getElementById("result").value = result.value.slice(0,-1);
};



























  











