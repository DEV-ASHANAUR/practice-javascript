//Two Type of dataType in javascript 
// 1. primitive - Define by Javascript is khown as promitive datatype
    //* number - 12,4.2,3.14 etc
    //* string - 'hello world' + "hey What about You"
    //*boolean - true false undefined null

// 2. object - Define by user is khown as object Type dataType
    //*array 
    //*object 
    //*function

    // ============================number===============

    var n = 1425;
    var f = 3.1416;
    var nn = Number('45');
    console.log(nn);
    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);
    console.log('ami' * 54);
    console.log(1/0);

    // ============================string===============
    //AnyThing Wrepped between quote is called string
    //literal
    var str1 = 'string';
    var str2 = "string";
    var string = `hello backtrict`;
    //constract
    var str3 = String(52);
    var str4 = String(52.35);

    console.log(str1,str2,str3,str4);
    // ============================boolean===============
    // if the answer always be either true or false then you called it boolean 
    //literal
    var b1 = true;
    var b2 = false;
    //constract
    var b3 = Boolean(true);
    var b4 = Boolean(false);
    console.log(b3,b4);