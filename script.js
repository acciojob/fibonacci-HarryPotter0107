function fibonacci(num) {
// your code here
	let a = 0
	let b = 1;
	// let c = a + b;
	let c;

	for(let i = 2; i <= 50; i++ ){
		c = a + b;
		a = b;
		b = c;
	}
	console.log(c);
}

module.exports = fibonacci;
