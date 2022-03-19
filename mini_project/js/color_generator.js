document.getElementById('btn').onclick = function(){
    var hex = '#';
    var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    for (var i = 0; i < 6; i++){
      var index = Math.floor(Math.random()*hexValues.length);
      hex += hexValues[index];
    } 
    document.getElementById('hexcode').innerText = hex;
    document.getElementById('color').style.backgroundColor = hex;
}