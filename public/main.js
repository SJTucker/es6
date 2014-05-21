$(document).ready(init);

function init(){
  $('#sq-odds').click(squareOdds);
  $('#destructure').click(destructure);
  $('#power').click(power);
  $('#generator').click(generator);
}

/*function squareOdds(){
  var output = $('#numbers').val().split(',').map(function(n){return n*1;});
  console.log(output);
}*/

function squareOdds(){
  var output = $('#numbers').val().split(',').map(n=> n*1).filter(n=>n%2).map(n=>n*n).map(n=>`<div>${n}</div>`);
  $('#odds').append(output);
}

//array destructuring
//

function destructure(){
  var numbers = $('#numbers').val().split(',').map(n=>n*1);
  //var output = areaVol(numbers[0], numbers[1], numbers[2]);
  //ES6
  var [a, v] = areaVol(...numbers);//creates two variables called a and v, not one array
  console.log(a);
  console.log(v);
}

function areaVol(l, w, h){
  let area = l * w;
  let vol = area * h;
  return [area, vol];
}

function power(){
  var numbers = $('#numbers').val().split(',').map(n=>n*1);
  var output = realPower(...numbers);
  console.log(output);
}

function realPower(base, exponent=2){//default parameter
  return Math.pow(base, exponent);
}

function generator(){
  var [x, y] = $('#numbers').val().split(',').map(n=>n*1);

  //array comprehension
  //
  var output = [for(j of realGenerator(x)) for(k of realGenerator(y)) {x:j, y:k}].map(o=>`<div>x:${o.x} y:${o.y}</div>`);
  console.log(output);

  
}

function* realGenerator(x, y){
  for(var i = 0; i < x; i++){
    yield i;
  }
}
