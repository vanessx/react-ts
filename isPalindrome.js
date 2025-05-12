function isPalindrome(word) {
    var lowerCaseWord = word.toLowerCase();
    var reversedWord = lowerCaseWord.split('').reverse().join('');
    return lowerCaseWord === reversedWord;
}
