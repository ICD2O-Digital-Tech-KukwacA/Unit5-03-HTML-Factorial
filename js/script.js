// Copyright (c) 2022 Ms Raffin All rights reserved
// Created by: Kukwac
// Created on: June 2025
// This file contains the JS functions for index.html

"use strict"

function numberFactorial() {
    // Get the user's input number
    let userNum = parseFloat(document.getElementById('userNumber').value);

    // Check for negative or decimal numbers
    if (userNum < 0 || !Number.isInteger(userNum)) {
        document.getElementById('result').innerHTML = "Please enter an integer.";
        return;
    }

    let result = 1;
    let counter = 1;

    // Use do...while loop to calculate factorial
    do {
        result = result * counter;
        counter++;
    } while (counter <= userNum);

    // Display the result
    document.getElementById('result').innerHTML = userNum + "!" + " = " + result;
}