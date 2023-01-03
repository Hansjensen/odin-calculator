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

function operate(a,b,c) {
    
    if (c === +) {
        add(a,b);
    } else if (c === -) {
        subtract(a,b);
    } else if (c === *) {
        multiply(a,b);
    } 
}

console.log(add(4,5), subtract(4,5), multiply(4,5), divide(4,5));