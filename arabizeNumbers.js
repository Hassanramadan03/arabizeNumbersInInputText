
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace'];
  input.oninput = function () {
      input.value = input.value
          .replace(/0/g, '۰')
          .replace(/1/g, '۱')
          .replace(/2/g, '۲')
          .replace(/3/g, '۳')
          .replace(/4/g, '٤')
          .replace(/5/g, '٥')
          .replace(/6/g, '٦')
          .replace(/7/g, '۷')
          .replace(/8/g, '۸')
          .replace(/9/g, '۹')
      if (input.value.indexOf('.') > -1) input.value = input.value.substring(0, input.value.indexOf('.') + 3)
  };
  function arabize(element) {

      var nubmers = { '۰': 0, '۱': 1, '۲': 2, '۳': 3, '٤': 4, '۵': 5, '۶': 6, '۷': 7, '۸': 8, '۹': 9, '.': '.' }
      var result = '';
      for (let letter of element) {
          console.log(letter)
          result += nubmers[letter];
          console.log(result)
      }
      return result;
  }
  function onlyNumbers(event) {
      var key = event.key;
      console.log(input.value.indexOf('.') == -1 || (key === '.'))
      return (numbers.indexOf(key) > -1) || (input.value.indexOf('.') == -1 && key === '.')
  };
  function viewEnglishNumbers() {
    const element = input.value;
    const num = arabize(element)
    const n=parseFloat(num)
    alert(n)
}