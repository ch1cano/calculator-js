let a = ''; // первое число 
let b = ''; // второе число
let sign = '' // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// Экран
const out = document.querySelector('.calc-screen p');

// Функция отчистки 
const clearAll = () => {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // Нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    // Нажата кнопка clearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // Получаю нажатую кнопку
    const key = event.target.textContent;

    // Если нажата кнопка 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '' ){
            a += key;
            console.log(a, b, sign);
            out.textContent = a;
    }
        else if (a!== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
     // Если нажата кнопка + - / X .
     if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    // Нажата кнопка =
    if (key === '=') {
        if (b === '' ) b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка'
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }

}