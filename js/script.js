// Copyright (c) 2022 Ms Raffin All rights reserved
// Created by: Kukwac
// Created on: June 2025
// This file contains the JS functions for index.html

"use strict"

/**
* This function displays all numbers from up to the user number */
function numberProduct() {
    let sum = 0
    let numbers = ""
    
    // get the user number
    let userNumFirst = parseFloat(document.getElementById('firstNumber').value)
    let userNumSecond = parseFloat(document.getElementById('secondNumber').value)

    for (let counter = 0; counter < userNumSecond; counter++) {
        if(counter < (userNumSecond -1)) {
            numbers =  numbers + userNumFirst + "+"; 
        }
        else {
            numbers = numbers + userNumFirst;
        }
        sum = sum + userNumFirst; // Was once counter
    }
    
    // return the string of numbers back to html
    document.getElementById('result').innerHTML = numbers + " = " + sum
}