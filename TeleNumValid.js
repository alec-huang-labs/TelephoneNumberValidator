function telephoneCheck(str) {
    let tenDigits = false;
    let elevenDigits = false;
    if (str.match(/\d/g).length == 10){
        tenDigits = true;
    } else if (str.match(/\d/g).length == 11){
        elevenDigits = true;
    }
    let allowedChar = /^[0-9|\(|\)|\0-|\s]+$/
    let permittedChars = allowedChar.test(str);
    let parenthesisLoc = /\(.+\)/g
    let correctParen = true;
    let parenRegex = /\(|\)/;
    if ((parenRegex).test(str)){
        correctParen = parenthesisLoc.test(str);
    }
    let beginWithOne = /^1/
    let correctOne = true;
    if (elevenDigits){
        correctOne = beginWithOne.test(str);
    }

    if (!tenDigits && !elevenDigits){
        return false;
    } else if (!permittedChars || !correctParen){
        return false;
    } else if (elevenDigits && !correctOne){
        return false;
    }
    let tenRegex = /(\(*|([0-9]))([0-9]{2,3})(\)\s*|-*|\s*)([0-9]{3,})(\(*|-*|\s*)([0-9]{4,})/;
    let result = tenRegex.test(str);
    console.log(`result: ${result}`);
    return result;
}
console.log(telephoneCheck("2 (757) 622-7382"));


//FCC Solution
function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
  telephoneCheck("555-555-5555");

  // ^(1\s?)? chekcs for 1 at the begining if there is 1 at the begining also space following if there is so. 
  // (\(\d{3}\)|\d{3})   followed by either brackets and three digits or just three digits
  // [\s\-]? followed by any character in the set if they are there
  // \d{3} followed by another three digits
  // [\s\-]? followed by any character in the set if they are there
  // \d{4}$ followed by 4 digits to end 
  //Way simpler. If I had known the ? mark notation, i would have tried to implement this

  