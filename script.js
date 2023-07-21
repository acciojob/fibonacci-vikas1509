function fibonacci(num) {
// your code here
	if(num==1){
		return 0;
	}
	if(num==1){
		return 1;
	}
	var i =0;
	var j=1;
	var ans =0;
	for(const k=3;k<=num;i++){
		ans=i+k;
		i=k;
	}
	return ans;
}

module.exports = fibonacci;
