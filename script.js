function fibonacci(num) {
// your code here
	var i =0;
	var j=1;
	var ans =0;
	for(const k=1;k<=num;i++){
		ans=i+k;
		i=k;
	}
	return ans;
}

module.exports = fibonacci;
