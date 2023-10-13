function convertBinaryToDecimal() {
    const binaryInput = document.getElementById("binaryInput").value;
    const decimalValue = parseInt(binaryInput, 2);

    if (!isNaN(decimalValue)) {
        document.getElementById("binaryToDecimalResult").innerHTML = `Decimal Value: ${decimalValue}`;
    } else {
        document.getElementById("binaryToDecimalResult").innerHTML = "Invalid binary input";
    }
}

function convertDecimalToBinary() {
    const decimalInput = document.getElementById("decimalInput").value;
    const binaryValue = (decimalInput >>> 0).toString(2);

    if (!isNaN(binaryValue)) {
        document.getElementById("decimalToBinaryResult").innerHTML = `Binary Value: ${binaryValue}`;
    } else {
        document.getElementById("decimalToBinaryResult").innerHTML = "Invalid decimal input";
    }
}