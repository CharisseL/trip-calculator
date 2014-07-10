var prompt = require('sync-prompt').prompt;

var distance = parseInt(prompt('How many miles will you drive? '));
var costGas = parseFloat(prompt('How much does gas cost per gallon? $')).toFixed(2);
var tankSize = parseInt(prompt('How many gallons can yout gas tank hold? '));
var mpg = parseInt(prompt('How many miles per gallon (MPG) do you get? '));
var speed = parseInt(prompt('How fast (MPH) will you drive? '));
var vehicle = prompt('What vehicle will you drive (car/truck? ').toLowerCase();

var mphOver55 = speed - 55;

var mpgOffset;
var goodMpg

if(mphOver55 > 0){
  if(vehicle === 'car'){
    goodMpg = mpg - mphOver55;
  }else if(vehicle === 'truck'){
    goodMpg = mpg - (mphOver55 * 3);
  }else{
    console.log('All bad. You clearly drove a truck');
    vehicle = 'truck';
    goodMpg = mpg - (mphOver55 * 3);
  }
}else{
  goodMpg = mpg;
}

goodMpg = (goodMpg >= 10) ? effMpg : 10;

var gallonsOfGas =distance / goodMpg;

var totalCostOfGas =costOfGalGas * gallonsOfGas;
var numberOfTanks = gallonsOfGas / tankSize
var numberOfStops = Math.ceil(numberOfTanks);

console.log('To go ' + distance + 'miles in your' + vehicle + ' ,it will cost you $' + totalCostOfGas.toFixed(2) + ' and take' + numberOfStops + ' rest breaks.');

