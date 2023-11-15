var btn = document.getElementById("btn");
var result =  document.getElementById("result");

result.innerHTML = 1;
function generateRandomNumber(){
  var random = Math.floor(Math.random() * 6) + 1;
    return random;
}

btn.addEventListener("click", function(){
  var random = generateRandomNumber();
  result.innerHTML = random;
}
);
