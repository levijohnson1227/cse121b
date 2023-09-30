/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2;
}

function addNumbers ()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum') = add(addNumber1, addNumber2);

}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2)
{
    return number1 - number2;
}

const subtractNumbers = function()
{
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference') = add(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => 
{
    let multiplyNumber1 = Number(document.querySelector('#multiply1').value);
    let multiplyNumber2 = Number(document.querySelector('#multiply2').value);
    document.querySelector('#product') = add(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers ()
{
    let divideNumber1 = Number(document.querySelector('#divide1').value);
    let divideNumber2 = Number(document.querySelector('#divide2').value);
    document.querySelector('#quotient') = add(divideNumber1, divideNumber2);

}
document.querySelector('#divideNumbers').addEventListener('click', Numbers);
/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
