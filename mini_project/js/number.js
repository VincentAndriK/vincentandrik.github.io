var count = 0;
document.getElementById('plus').onclick = function(){
  document.getElementById('counter').innerHTML = count++;
}
document.getElementById('minus').onclick = function(){
  document.getElementById('counter').innerHTML = count--;
}
document.getElementById('reset').onclick = function(){
  document.getElementById('counter').innerHTML = 0;
}
function acak() {
  var x = document.getElementById("demo")
  var n = document.getElementById("angka").value;
  x.innerHTML = Math.floor((Math.random() * n) + 1);
}