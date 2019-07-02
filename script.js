// Javascript Code

function calculator()
{
    // num1, num2 variables will manipulate the values entered by the user
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    // Let's define what type of operation we have to do
    let operation = document.getElementById('operators').value;
    
    if(operation === 'plus')
    {
        document.getElementById('result').value = (num1+num2).toFixed(3);
    }
    
    if(operation === 'minus')
    {
        document.getElementById('result').value = (num1-num2).toFixed(3);
    }
    
    if(operation === 'division')
    {
        document.getElementById('result').value = (num1/num2).toFixed(3);
    }
    
    if(operation === 'mult')
    {
        document.getElementById('result').value = (num1*num2).toFixed(3);
    }
}

