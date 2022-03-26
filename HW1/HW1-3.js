function Reverse(string) {

	if (typeof(string) != 'string'){
		console.log(`${stringToTest} is not of type String`)
		return
	}

	let reverseString = ""

	for(let i = (string.length-1); i>=0; i--) {
		reverseString = reverseString + string[i]
	}

	return reverseString
}


Reverse(2)
const string = "hello"
const reversedString = Reverse(string)
console.log(reversedString)
