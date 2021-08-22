// new.html
function bodmas(c){
    switch(c){
        case 1 : console.log("7 + 8 = ",7 + 8);
        break;
        case 2 : console.log("7 - 8 = ",7 - 8);
        break;
        case 3 : console.log("7 x 8 = ",7 * 8);
        break;
        default : console.log("7 / 8 = ",7 / 8);
        break;
    }
}
// dmas.html
function dmas(){
    var x = document.getElementById("e1").value, x = parseInt(x);
    var y = document.getElementById("e2").value, y = parseInt(y);
    var sum = x + y, diff = x - y, mul = x * y, div = x / y;
    document.getElementById("val1").innerHTML = "Sum = "+sum;
    document.getElementById("val2").innerHTML = "Difference = "+diff;
    document.getElementById("val3").innerHTML = "Multiplication = "+mul;
    document.getElementById("val4").innerHTML = "Division = "+div;
}

// calculator.html
function cal(a){
    var x = document.getElementById("num1").value;
    x = parseInt(x);
    var y = document.getElementById("num2").value;
    y = parseInt(y);
    var sum = x + y, diff = x - y, mul = x * y, div = x / y;
    switch(a){
        case 1: document.getElementById("val").innerHTML = "Sum = "+sum;
        break;
        case 2: document.getElementById("val").innerHTML = "Difference = "+diff;
        break;
        case 3: document.getElementById("val").innerHTML = "Multiplication = "+mul;
        break;
        default: document.getElementById("val").innerHTML = "Division = "+div;
        break;
    }
}

//tableinput.html
function tab(){
    var _tab_ = document.getElementById("table").value, user = document.getElementById("table2").value;
    var i = 1;
    var product = "";
    for (i = 1 ; i <= user ; i++) {
        var w = parseInt(_tab_) * parseInt(i);
        product += _tab_+" x " +i+" = " +w+ '</br>'+'<br>';
    }
    document.getElementById("output1").innerHTML = product;
   
}
