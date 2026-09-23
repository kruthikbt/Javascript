let temp= prompt("Enter the temperature in Celcius:");

function temp_converter(temp){
    let faranhiet= (temp * 9/5) + 32;
    return faranhiet;
}


console.log(`The Convereted temperture to Celsius is: ${temp_converter(temp)}`);