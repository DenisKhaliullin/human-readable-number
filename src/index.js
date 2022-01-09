module.exports = function toReadable (number) {
  let digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var numString = number.toString();
  let word = ''
  if (number == 0){
      return 'zero';
  } else if(number < 20) {
    return digits[number];
  } else if (number < 100){
      word = tens[Math.floor(number / 10)] + ' ' + digits[parseInt(numString.charAt(1))];
    return word.trim();
  }
  else if(number < 1000 && number % 100 >= 20){
    word = digits[parseInt(numString.charAt(0))] + ' hundred ' + tens[Number(numString.charAt(1))] + ' ' + digits[parseInt(numString.charAt(2))];
    return word.trim()
  }else if (number % 100 < 20){
    word = digits[parseInt(numString.charAt(0))] + ' hundred ' + digits[number % 100]
    return word.trim();
  }
 
}

