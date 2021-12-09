function digitalDecipher(eMessage, key) {

	// utility function used to select a digit in the key
	// wraps around the key if out of bounds
	as_tape = (key, i) => {
		let n = Math.floor((Math.log(key) / Math.log(10))) + 1;
		let ip = i % n;
		let cut_back = Math.floor(key / Math.pow(10, n - ip - 1));
		return cut_back % 10;
	}
	let res = ""
	let cha = 'a'
	for (let i = 0; i < eMessage.length; i++) {
		let c = eMessage[i] - as_tape(key, i) + cha.charCodeAt() - 1;
		// console.log(c);
		// console.log(as_tape(key, i));
		res += String.fromCharCode(c);
		// ^ disgusting hidden O(n ^ 2) complexity.
	}
	return res;
}

console.log(digitalDecipher([20, 12, 18, 30, 21], 1939));
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990))
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100))
