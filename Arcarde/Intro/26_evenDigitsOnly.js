function evenDigitsOnly(n) {
    let validation = true;
    n.toString().split('').forEach( value => {
        if(value%2 != 0){
            validation = false;
        }
    });
    return validation;
}
