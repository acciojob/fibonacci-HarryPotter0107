function fibonacci(num) {
// your code here
	if(num == 0) return 0;
	if(num == 1) return 1;
	let prev = 0
	let curr = 1;
	// let c = a + b;
	let next;

	for(let i = 2; i <= num; i++ ){
		next = prev + curr;
		prev = curr;
		curr = next;
	}

	return prev;
	// console.log(c);
}

module.exports = fibonacci;
