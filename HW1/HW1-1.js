function transform(nums) {

	if(!nums.every(function(element) {return typeof element === 'number'})) {
		console.log("Error. Input is not a numeric array")
		return
	}

	const squaredArray = nums.map(num => num*num)
	squaredArray.sort(function(a, b){return a - b});
	return squaredArray

}

const strings = ["1", "2", "3"]
const resultish = transform(strings)
console.log(resultish)
console.log("=========")
const strings2 = ["String", "Literal"]
const restult =transform(strings2)
console.log(restult)
console.log("=========")
const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums)
