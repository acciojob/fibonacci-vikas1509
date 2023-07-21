function fibonacci(num) {
// your code here
for (let i = 1; i <= num; i++) {
   
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
	return n1;
}

module.exports = fibonacci;
