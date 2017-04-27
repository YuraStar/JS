let text = prompt("Введите текст дял проверки на палиндром :", '').toLowerCase();
function findPalindrome(str) {
    let textReverse = str.split('').reverse().join('');
    return textReverse == str;
}
console.log(findPalindrome(text));

