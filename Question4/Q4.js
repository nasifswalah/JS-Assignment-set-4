function calculateVolume(){
    const inputData = document.getElementById('radius').value;
    const outputData = volume(inputData);
    document.getElementById('result').value = outputData;
}

const volume = (radius) => {
    result = ((4/3)*3.14)*radius**3;
    return result;
}