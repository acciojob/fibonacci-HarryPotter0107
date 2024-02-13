function fibonacci(num) {
// your code here
	let a = 0
	let b = 1;
	// let c = a + b;
	let c;

	for(let i = 2; i < n; i++ ){
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}

module.exports = fibonacci;
