function reverseInParentheses(inputString) {
    regex = /\(\w+\)|\(\)/;
    
    //let phrase = '';
    //debugger;
    if(!regex.test(inputString)){
        //console.log(inputString);
        return inputString;
    }else{
        match = inputString.match(regex)[0];
        //console.log(match);
        array = match.split('');
        array.pop();
        array.shift();
        array.reverse();
        word = array.join('');
        let phrase = inputString.replace(regex,word);
        //console.log(phrase); 
        return reverseInParentheses(phrase);
    }
}
