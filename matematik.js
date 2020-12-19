const chalk = require("chalk");

chalk.rainbow = function(text) {
    var colors = ["#9400D3","#4B0082","#0000FF","#00FF00","#FFFF00","#FF7F00","#FF0000"];
    var index = 0;
    var arr = [];
    
    text.split("").forEach((y) => {
        if(index == color.length-1) index = 0;
        else { ++index; };
        arr.push(chalk.hex(color[index](y)));
    });
    return text.join("");
};


console.log(chalk.rainbow("Ben Merly BOT Hizmetinizdeyim O_o")); 
const Console = require("readline-sync");

var question_ = Console.question("Carpma, Bolme, Toplama, Cikarma Ne Yapmak Istersiniz");
var number = question_.split(" ");

var question__ = (answer) => Console.question(answer);

function MathFunction(number1, number2, id){
    switch(id) {
        case "Carpma":{
            return number1*number2;
            break;
        };
        case "Toplama": {
            return number1+number2;
            break;
        };
        case "Cikarma": {
            return number1-number2;
            break;
        };
        case "Bolme": {
            return number1/number2;
            break;
        };
        default: {
           throw new TypeError("Geçersiz...");
           break;
        };
    }
};
switch(question_){
    case "Carpma": {
        question__("Carpilicak sayilari girininiz.");
        console.log(MathFunction(number[0], number[1], "Carpma"));
        break;
    };
    case "Toplama": {
        question__("Toplanicak sayilari girininiz.");
        console.log(MathFunction(number[0], number[1], "Toplama"));
        break;
    };
    case "Cikarma": {
        question__("Cikarilicak sayilari girininiz.");
        console.log(MathFunction(number[0], number[1], "Carpma"));
        break;
    };
    case "Bolme": {
        question__("Bolunucek sayilari girininiz.");
        console.log(MathFunction(number[0], number[1], "Bolme"));
        break;
    };
    default: {
        console.log("Gecerli bir islem girmediniz");
        return question_;
        break;
    };
}; // readline-sync Kurmassanız Çalışmaz (Rengarenk Olmasını İstiyorsanız Chalkda Kurun Kurmayacaksanız 1 den 17 ye kadar silin)
