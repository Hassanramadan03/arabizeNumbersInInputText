const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace', 'ArrowRight', 'ArrowLeft', 'Tab'];
var inputs = document.querySelectorAll('.arabicNumberInput')

inputs.forEach(input => {
    input.oninput = () => {
        input.value = fromEnglishToArabic(input.value)
        if (input.value.indexOf('.') > -1) input.value = input.value.substring(0, input.value.indexOf('.') + 3)
    };
    input.onkeyup=event=>onlyNumbers(event)
    input.onkeydown=event=>onlyNumbers(event)
})


const onlyNumbers = (event) => {
    var key = event.key;
    return (numbers.indexOf(key) > -1) || (event.target.value.indexOf('.') == -1 && key === '.')
};
const viewEnglishNumbers = (arabicNumber) => {
    const num = fromArabicToEnglish(arabicNumber)
    return parseFloat(num)
    
}
const fromEnglishToArabic = english => english.replace(/[0-9]/g, a => String.fromCharCode(a.charCodeAt(0) + 1584))
const fromArabicToEnglish = arabic => arabic.replace(/[\u0660-\u0669\u06F0-\u06F9]/g, a => String.fromCharCode((a.charCodeAt(0) & 15) + 48))

