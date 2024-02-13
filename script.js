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
// your code here
	let a = 0;
	let b = 1;
	if(num<=1) return num;

	for(let i=2;i<=num;i++){
		const c = a+b;
		a=b;
		b=c;
	}
	return b;
}


module.exports = fibonacci;
