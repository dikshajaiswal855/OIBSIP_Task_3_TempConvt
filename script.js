function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");
    
    if (!temperatureInput || isNaN(temperatureInput)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let unitString;

    if (unit === "celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
        unitString = "Celsius";
    } else {
        convertedTemperature = (temperature * 9/5) + 32;
        unitString = "Fahrenheit";
    }

    resultElement.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unitString}`;
}