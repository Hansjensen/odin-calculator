const buttOne = document.getElementById("1");
const buttTwo = document.getElementById("2");
const buttThree = document.getElementById("3");
const buttFour = document.getElementById("4");
const buttFive = document.getElementById("5");
const buttSix = document.getElementById("6");
const buttSeven = document.getElementById("7");
const buttEight = document.getElementById("8");
const buttNine = document.getElementById("9");
const buttZero = document.getElementById("0");
const buttClear = document.getElementById("clear");
const buttDelete = document.getElementById("delete");
const buttDec = document.getElementById(".");
const opAdd = document.getElementById("add");
const oppSubtract = document.getElementById("subtract");
const oppDivide = document.getElementById("div");
const oppMultiply = document.getElementById("mult");
const oppEqual = document.getElementById("equal");
const display = document.getElementById("display");
let displayValue = "0"
display.textContent = displayValue;

buttOne.addEventListener('click', function (e) {
    displayFunction("1");
    console.log(1);
  });

buttTwo.addEventListener('click', function (e) {
    displayFunction("2");
  });
  
buttThree.addEventListener('click', function (e) {
    displayFunction("3");
  });

  buttFour.addEventListener('click', function (e) {
    displayFunction("4");
  });

  buttFive.addEventListener('click', function (e) {
    displayFunction("5");
  });

  buttSix.addEventListener('click', function (e) {
    displayFunction("6");
  });

  buttSeven.addEventListener('click', function (e) {
    displayFunction("7");
  });

  buttEight.addEventListener('click', function (e) {
    displayFunction("8");
  });

  buttNine.addEventListener('click', function (e) {
    displayFunction("9");
  });

  buttZero.addEventListener('click', function (e) {
    displayFunction("0");
  });

  buttDec.addEventListener('click', function (e) {
    if (displayValue == 0) {
        return;
    } else {
    displayFunction(".");
    }
  });

  buttDelete.addEventListener('click', function (e) {
    displayValue = displayValue.slice(0,-1);
    display.textContent = displayValue;
  });

  buttClear.addEventListener('click', function (e) {
    displayValue = "0"
    display.textContent = displayValue;
  });


function displayFunction(a) {
    if (displayValue.length >= 8) {
        return;
    } else if (displayValue == 0) {
        displayValue = a
    } else {
        displayValue += a;
    }
    return display.textContent = displayValue;
};






function add(a, b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
};



console.log(add(4,5), subtract(4,5), multiply(4,5), divide(4,5));