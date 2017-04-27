function arcFunctionArg(...str) {
    let arg = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] && typeof(str[i]) != "function") {
            arg.push(str[i]);
        }
        if (str[i] && typeof(str[i]) === "function") {
            str[i](arg.join(' '));
        }
    }
}
arcFunctionArg('asd','asd2','asd3','asd4','asd5',function(arg) {
    console.log(arg.toUpperCase());
});