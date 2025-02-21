// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", () => {

    // Function to Change Button Color
    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        colorButton.style.backgroundColor = randomColor;
    });

    // Function to Display Greeting Based on Time
    const greetingButton = document.querySelector('form button');
    greetingButton.addEventListener('click', () => {
        const currentHour = new Date().getHours();
        let greeting;

        if (currentHour < 12) {
            greeting = "Good Morning!";
        } else if (currentHour < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
        alert(greeting);
    });

    // Function to Calculate Sum of Two Numbers
    const calculatorButton = document.querySelector('.calculator button');
    calculatorButton.addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const sum = num1 + num2;
            document.getElementById('result').innerText = `Result: ${sum}`;
        } else {
            document.getElementById('result').innerText = "Please enter valid numbers!";
        }
    });
});