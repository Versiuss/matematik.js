
const console = require("readline-sync");

const question = console.question("Lutfen; Carpma, Bolme, Toplama, Cikarma islemlerinden birini seçiniz.");
var question_ = (answer) => console.question(answer);

function MathFunction(number1, number2, id){
    switch(id) {
        case "Carpma": {
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

switch(question_) {
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
};
