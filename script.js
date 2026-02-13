let randomNum = math.floor(math.random()*5 +1)
if (randomNum === 4 || randomNum === 5 ){
console.log("Equal to 4 or 5"); 
} else if (randomNum === 2 || randomNum === 3) {
console.log ("equals to 4 or 5");
} else {
console.log ("equals to 1");
}

if (randomNum !== 3) {
  console.log("Not equal to 3");
}

if (randomNum != 3 && randomNum != 5) {
  console.log ("The number is not 3 and not 5");
}

if (randomNum === 2 || randomNum === 4) { 
  console.log ("The number is equal to 2 or equal to 4");
} 