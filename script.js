// function fibonacci(num) {
// // your code here
// 	if(num == 0) return 0;
// 	if(num == 1) return 1;
// 	let prev = 0
// 	let curr = 1;
// 	let next;

// 	for(let i = 2; i <= num; i++ ){
// 		next = prev + curr;
// 		prev = curr;
// 		curr = next;
// 	}

// 	return prev;
// 	// console.log(c);
// }

function fibonacci(num) {
  if (num === 1 ) {
    return 0;
  }
   if (num === 2 ) {
    return 1;
  }

  var num1 = 0;
  var num2 = 1;

  for (var i = 3; i <= num; i++) {
    var result = num1 + num2;
    num1= num2;
    num2 = result;
  }

  return result;
}


module.exports = fibonacci;
