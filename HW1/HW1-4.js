function isPalindrome(stringToTest) {

	if (typeof(stringToTest) != 'string') {
      console.log(`${stringToTest} is not of type String`)
      return
    }

    const tempArray = stringToTest.split("")
    const reversedStringToTest = tempArray.reverse().join("")

	if (stringToTest === reversedStringToTest) {
		return true
	}

	return false
}

console.log("deified :" + isPalindrome("deified"))
console.log("=====")
console.log("racecar :" +isPalindrome("racecar"))
console.log("uwu :" +isPalindrome("uwu"))
console.log("joseph :" +isPalindrome("joseph"))
console.log("enzo :" +isPalindrome("enzo"))
console.log("3 :" + isPalindrome(3))