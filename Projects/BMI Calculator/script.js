const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please give a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please give a valid weight.";
    } else {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;
    }
});
