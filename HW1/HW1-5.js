function isVowel (letterToTest) {

	letterToTest = letterToTest.toLowerCase()
	if (letterToTest === 'a' ||
		letterToTest === 'e' ||
		letterToTest === 'i' ||
		letterToTest === 'o' ||
		letterToTest === 'u' ) {
		return true
	}

	return false
}

function convertToVowels (stringToConvert) {

	if (typeof(stringToConvert) != 'string') {
      console.log(`${stringToConvert} is not of type String`)
      return
    }

	convertedString = ""

	for(let c of stringToConvert) {
		if (isVowel(c) === true) {
			convertedString = convertedString + c
		}
	}

	if(!convertedString.length) {
		convertedString = "String doesn't contain vowels"
		return convertedString
	}
	return convertedString
}

test1 = convertToVowels("thisissomeword")
console.log(test1)
test2 = convertToVowels("bbcc")
console.log(test2)
console.log(convertToVowels("wordWithOnlyVowels"))
console.log(convertToVowels("yoilikepotatoes"))
console.log(convertToVowels("ilikefrenchfries"))
console.log(convertToVowels("ilikeketchuponmyfrenchfries"))
console.log(convertToVowels("hello world"))

