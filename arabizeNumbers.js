
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace', 'ArrowRight', 'ArrowLeft'];
input.oninput = () => {
    input.value = fromEnglishToArabic(input.value)
    if (input.value.indexOf('.') > -1) input.value = input.value.substring(0, input.value.indexOf('.') + 3)
};

const onlyNumbers = event => {
    var key = event.key;
    return (numbers.indexOf(key) > -1) || (input.value.indexOf('.') == -1 && key === '.')
};
const viewEnglishNumbers = () => {
    const element = input.value;
    const num = fromArabicToEnglish(element)
    const realNumber = parseFloat(num)
    alert(realNumber)
}
const fromEnglishToArabic = english => english.replace(/[0-9]/g, a => String.fromCharCode(a.charCodeAt(0) + 1584))
const fromArabicToEnglish = arabic => arabic.replace(/[\u0660-\u0669\u06F0-\u06F9]/g, a => String.fromCharCode((a.charCodeAt(0) & 15) + 48))
