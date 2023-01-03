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
const oppAdd = document.getElementById("add");
const oppSubtract = document.getElementById("subtract");
const oppDivide = document.getElementById("div");
const oppMultiply = document.getElementById("mult");
const oppEqual = document.getElementById("equal");
const display = document.getElementById("display");
let displayValue = "0"
let runningValue = null
let tempValue = null
let prevop = 0
let dec = 0
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
     if (dec === 1) {
      return;  
    } else {
    displayFunction(".");
    dec = 1;
    }
  });

  buttDelete.addEventListener('click', function (e) {
    if (displayValue == 0) {
        return;
    } else if (displayValue.length === 1) {
        displayValue = 0;
        display.textContent = displayValue;
    } else {
    displayValue = displayValue.slice(0,-1);
    display.textContent = displayValue;
    }
  });

  buttClear.addEventListener('click', function (e) {
     displayValue = "0"
    runningValue = null
    tempValue = null
    prevop = 0
    dec=0;
    display.textContent = displayValue;
  });

  oppAdd.addEventListener('click', function (e) {
    operate(1);
  });

  oppSubtract.addEventListener('click', function (e) {
    operate(2);
  });

  oppMultiply.addEventListener('click', function (e) {
    operate(3);
  });

  oppDivide.addEventListener('click', function (e) {
    operate(4);
  });

  oppEqual.addEventListener('click', function (e) {
    if (tempValue === null) {
        return;
    }
    operate(5);
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

function operate(a) {
    if (tempValue === null ) {
    tempValue = displayValue ;
    display.textContent = tempValue;
    displayValue = 0;
    prevop = a;
    dec=0;
    return;
    } else if (runningValue === null) {
        if (prevop === 1){
            runningValue = add(tempValue, displayValue);

        } else if (prevop === 2) {
            runningValue = subtract(tempValue, displayValue);
        
        } else if (prevop === 3) {
            runningValue = multiply(tempValue, displayValue);
            
        } else if (prevop === 4) {
            runningValue = divide(tempValue, displayValue);
            
        } 
    } else if (a === 5) {
        if (prevop === 1) {
            runningValue = add(runningValue, displayValue);
          
        } else if (prevop === 2) {
            runningValue = subtract(runningValue, displayValue);
          
        } else if (prevop === 3) {
            runningValue = multiply(runningValue, displayValue);
        } else if (prevop === 4) {
            runningValue = divide(runningValue, displayValue);
        } 
    } else {
        if (prevop === 1) {
            runningValue = add(runningValue, displayValue);
          
        } else if (prevop === 2) {
            runningValue = subtract(runningValue, displayValue);
          
        } else if (prevop === 3) {
            runningValue = multiply(runningValue, displayValue);
        } else if (prevop === 4) {
            runningValue = divide(runningValue, displayValue);
        } 
    } 
    
    if (runningValue % 1 != 0) {
        runningValue = round.math(100*runningValue)/100;
    }
    
    display.textContent = runningValue     
    displayValue = 0;
    prevop = a;
    dec = 0;
    if (runningValue.toString().length > 10) {
        display.textContent = "eRROR"
    }
    return;
    
    
}




function add(a, b) {
    let c = parseFloat(a);
    let d = parseFloat(b);
    
    return c+d;
};

function subtract(a,b) {
    let c = parseFloat(a);
    let d = parseFloat(b);
    
    return c-d;
};

function multiply(a,b) {
    let c = parseFloat(a);
    let d = parseFloat(b);
    
    return c*d;
};

function divide(a,b) {
    let c = parseFloat(a);
    let d = parseFloat(b);
    
    return c/d;
};



console.log(add(4,5), subtract(4,5), multiply(4,5), divide(4,5));