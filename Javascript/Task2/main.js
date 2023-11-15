var num1 = document.getElementById("input1");
var num2 = document.getElementById("input2");

var btn = document.getElementById("btn");
var result =  document.getElementById("result");

result.innerHTML = 0;

function sum_of_nums(a, b){
  return a + b;
}

btn.addEventListener("click", function(){
    var a = parseInt(num1.value);
    var b = parseInt(num2.value);
    var sum = sum_of_nums(a, b);
    result.innerHTML = sum;
}
);