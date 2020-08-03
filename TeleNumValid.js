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
    return result;
}
//Test Functions:
console.log(telephoneCheck("2 (757) 622-7382"), telephoneCheck("(275)76227382"), telephoneCheck("1 456 789 4444"));

//Try calling the function within the '()' followed by commas like above:
console.log();
