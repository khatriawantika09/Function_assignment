// ============================================================
// Q1. Password Strength Checker
// Write a function checkPassword(password) that:
// Takes a password as a parameter.
// Checks its length using .length.
// Checks whether it contains uppercase and lowercase letters.
// Checks whether it contains a number.
// Uses a loop to examine each character.
// Returns "Strong Password" if length ≥ 8 and it contains
// uppercase, lowercase, and a number.
// Returns "Weak Password" otherwise.
// ============================================================

function checkPassword(password) {
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= "A" && char <= "Z") {
            hasUppercase = true;
        }

        if (char >= "a" && char <= "z") {
            hasLowercase = true;
        }

        if (char >= "0" && char <= "9") {
            hasNumber = true;
        }
    }

    if (password.length >= 8 && hasUppercase && hasLowercase && hasNumber) {
        return "Strong Password";
    } else {
        return "Weak Password";
    }
}

console.log(checkPassword("Awanti123"));


// ============================================================
// Q2. Smart Delivery Decision System
// Create a Smart Delivery Decision System for a delivery company.
// The program should ask the user for:
// Package weight
// Distance in km
// Package value
// Weather: normal, rain, storm
// Road condition: good, bad
// Delivery type: normal, express
// Number of previous failed attempts
// Customer priority: normal, vip
//
// Rules:
// Base = 200
// Every km = 20
// Every kg above 5 kg = 100
// Express → add 500
// Rain → risk +20
// Storm → risk +40
// Bad road → risk +25
// Value > 100000 → risk +30
// Each failed attempt → risk +10
// VIP → risk -15
// Distance above 100 km → risk +20
//
// Final decision:
// 0–30 → "Safe Delivery"
// 31–60 → "Careful Delivery"
// 61+ → "High Risk Delivery"
// If VIP and package value > 100000 → "VIP Priority"
// ============================================================

function deliverySystem(weight, distance, value, weather, road, type, failedAttempts, customer) {

    let cost = 200;

    cost = cost + (distance * 20);

    if (weight > 5) {
        cost = cost + ((weight - 5) * 100);
    }

    if (type === "express") {
        cost = cost + 500;
    }

    let risk = 0;

    if (weather === "rain") {
        risk = risk + 20;
    }

    if (weather === "storm") {
        risk = risk + 40;
    }

    if (road === "bad") {
        risk = risk + 25;
    }

    if (value > 100000) {
        risk = risk + 30;
    }

    risk = risk + (failedAttempts * 10);

    if (customer === "vip") {
        risk = risk - 15;
    }

    if (distance > 100) {
        risk = risk + 20;
    }

    let priority = "Normal Priority";

    if (customer === "vip" && value > 100000) {
        priority = "VIP Priority";
    }

    let decision;

    if (risk <= 30) {
        decision = "Safe Delivery";
    } else if (risk <= 60) {
        decision = "Careful Delivery";
    } else {
        decision = "High Risk Delivery";
    }

    return {
        deliveryCost: cost,
        riskScore: risk,
        deliveryPriority: priority,
        finalDecision: decision
    };
}

console.log(
    deliverySystem(8, 50, 120000, "rain", "good", "express", 1, "vip")
);


// ============================================================
// Q3. Cinema Ticket Billing System
// Write a JavaScript program for a Cinema Ticket Billing System
// that takes the customer's name, number of tickets, ticket price,
// and customer type as input.
// Use a loop to calculate the total ticket cost.
// Use an arrow function to calculate the discount.
// Use conditions to apply different discounts according to
// customer type and number of tickets.
// Use string methods to format the customer's name.
// Use a Math method to round the final bill.
// Finally, display the customer name, total tickets, discount,
// and final payable amount.
// ============================================================

function calculateCinemaDiscount(total, customerType, tickets) {

    if (customerType === "vip") {
        return total * 0.20;
    } else if (tickets >= 5) {
        return total * 0.15;
    } else if (customerType === "student") {
        return total * 0.10;
    } else {
        return 0;
    }
}

function cinemaBilling(customerName, numberOfTickets, ticketPrice, customerType) {

    let total = 0;

    for (let i = 1; i <= numberOfTickets; i++) {
        total = total + ticketPrice;
    }

    let discountFunction = (total, customerType, tickets) => {
        return calculateCinemaDiscount(total, customerType, tickets);
    };

    let discount = discountFunction(total, customerType, numberOfTickets);

    let finalBill = total - discount;

    customerName = customerName.trim();

    customerName = customerName.charAt(0).toUpperCase() +
        customerName.slice(1).toLowerCase();

    finalBill = Math.round(finalBill);

    console.log("Customer Name: " + customerName);
    console.log("Total Tickets: " + numberOfTickets);
    console.log("Discount: Rs. " + discount);
    console.log("Final Payable Amount: Rs. " + finalBill);
}

cinemaBilling(" awantika ", 5, 500, "student");


// ============================================================
// Q4. Game Score Analyzer
// Write a function analyzeScore(score) that:
// Takes the player's score as a parameter.
// Checks the score using conditions.
// Uses a loop to calculate the sum of digits of the score.
// Uses .toString() and .length to check the number of digits.
// Uses a Math method to calculate the square root of the score.
// Returns:
// "Excellent Score" if score is 80 or above
// "Good Score" if score is 50–79
// "Needs Improvement" if score is below 50
// If the score is 100, return "Perfect Score".
// ============================================================

function analyzeScore(score) {

    let scoreString = score.toString();
    let digits = scoreString.length;

    let sum = 0;

    for (let i = 0; i < digits; i++) {
        sum = sum + Number(scoreString[i]);
    }

    let squareRoot = Math.sqrt(score);

    console.log("Number of Digits: " + digits);
    console.log("Sum of Digits: " + sum);
    console.log("Square Root: " + squareRoot);

    if (score === 100) {
        return "Perfect Score";
    } else if (score >= 80) {
        return "Excellent Score";
    } else if (score >= 50) {
        return "Good Score";
    } else {
        return "Needs Improvement";
    }
}

console.log(analyzeScore(85));


// ============================================================
// Q5. Mobile Number Validator
// Write a function checkMobileNumber(number) that:
// Takes a mobile number as a parameter.
// Converts the number into a string.
// Checks its length using .length.
// Uses a loop to examine each character.
// Checks whether all characters are numbers.
// Uses .startsWith() to check whether the number starts with "03".
// Returns "Valid Mobile Number" if it has exactly 11 digits
// and starts with "03".
// Returns "Invalid Mobile Number" otherwise.
// ============================================================

function checkMobileNumber(number) {

    number = number.toString();

    let allNumbers = true;

    for (let i = 0; i < number.length; i++) {
        if (number[i] < "0" || number[i] > "9") {
            allNumbers = false;
        }
    }

    if (number.length === 11 &&
        allNumbers &&
        number.startsWith("03")) {

        return "Valid Mobile Number";

    } else {
        return "Invalid Mobile Number";
    }
}

console.log(checkMobileNumber("03123456789"));


// ============================================================
// Q6. Temperature Checker
// Write a function checkTemperature(temperature) that:
// Takes temperature as a parameter.
// Uses a loop to count how many times the temperature value
// is checked.
// Checks whether the temperature is above, below, or equal to 30.
// Uses conditions to classify the temperature.
// Returns:
// "Hot" if temperature is greater than 30.
// "Cold" if temperature is less than 30.
// "Normal" if temperature is exactly 30.
// ============================================================

function checkTemperature(temperature) {

    let count = 0;

    for (let i = 0; i < 1; i++) {
        count++;
    }

    if (temperature > 30) {
        return "Hot";
    } else if (temperature < 30) {
        return "Cold";
    } else {
        return "Normal";
    }
}

console.log(checkTemperature(35));


// ============================================================
// Q7. Speed Checker
// Write a function checkSpeed(speed) that:
// Takes speed as a parameter.
// Uses a loop to count how many times the speed is checked.
// Checks whether the speed is above, below, or equal to 60.
// Uses conditions to classify the speed.
// ============================================================

function checkSpeed(speed) {

    let count = 0;

    for (let i = 0; i < 1; i++) {
        count++;
    }

    if (speed > 60) {
        return "Above Speed Limit";
    } else if (speed < 60) {
        return "Below Speed Limit";
    } else {
        return "Equal to Speed Limit";
    }
}

console.log(checkSpeed(70));


// ============================================================
// Q8. Student ID Validator
// Write a function checkStudentID(id) that:
// Takes a student ID as a parameter.
// Converts the ID into a string.
// Checks its length using .length.
// Uses .startsWith() to check whether the ID starts with "ST".
// Uses a loop to examine each character after "ST".
// Checks whether the remaining characters are numbers.
// Returns "Valid Student ID" if it contains exactly 7 characters
// and follows the required format.
// Returns "Invalid Student ID" otherwise.
// ============================================================

function checkStudentID(id) {

    id = id.toString();

    let numbersOnly = true;

    for (let i = 2; i < id.length; i++) {
        if (id[i] < "0" || id[i] > "9") {
            numbersOnly = false;
        }
    }

    if (id.length === 7 &&
        id.startsWith("ST") &&
        numbersOnly) {

        return "Valid Student ID";

    } else {
        return "Invalid Student ID";
    }
}

console.log(checkStudentID("ST12345"));


// ============================================================
// Q9. Student Result
// calculateResult(marks1, marks2, marks3) function banao jo:
// Total marks calculate kare.
// Percentage calculate kare.
// Agar percentage >= 80 ho → "A Grade"
// >= 70 → "B Grade"
// >= 60 → "C Grade"
// warna "Fail"
// Result return kare.
// ============================================================

function calculateResult(marks1, marks2, marks3) {

    let total = marks1 + marks2 + marks3;

    let percentage = (total / 300) * 100;

    let grade;

    if (percentage >= 80) {
        grade = "A Grade";
    } else if (percentage >= 70) {
        grade = "B Grade";
    } else if (percentage >= 60) {
        grade = "C Grade";
    } else {
        grade = "Fail";
    }

    return {
        totalMarks: total,
        percentage: percentage,
        grade: grade
    };
}

console.log(calculateResult(80, 75, 90));


// ============================================================
// Q10. Calculate Grade
// Create a function calculateGrade(marks) that takes a student's
// marks as a parameter and returns the grade according to:
// 80–100 → A
// 70–79 → B
// 60–69 → C
// 50–59 → D
// 0–49 → F
// ============================================================

function calculateGrade(marks) {

    if (marks >= 80 && marks <= 100) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else if (marks >= 0) {
        return "F";
    } else {
        return "Invalid Marks";
    }
}

console.log(calculateGrade(85));


// ============================================================
// Q11. School Admission Slip
// Write a function createSchoolAdmissionSlip(studentName,
// fatherName, className, admissionDate, monthlyFee) that takes
// 5 parameters and uses trim(), toLowerCase(), toUpperCase(),
// concat() and charAt() to return a detailed admission
// confirmation slip.
// The slip must show the student name in capital letters,
// a student ID created from the first 3 letters of the name
// plus roll digits, and end with the total annual fee message.
// ============================================================

function createSchoolAdmissionSlip(
    studentName,
    fatherName,
    className,
    admissionDate,
    monthlyFee
) {

    studentName = studentName.trim();
    fatherName = fatherName.trim();

    let upperName = studentName.toUpperCase();

    let lowerName = studentName.toLowerCase();

    let firstThreeLetters =
        lowerName.charAt(0) +
        lowerName.charAt(1) +
        lowerName.charAt(2);

    let rollDigits = "001";

    let studentID = firstThreeLetters.toUpperCase().concat(rollDigits);

    let annualFee = monthlyFee * 12;

    let slip = "Student Admission Confirmation\n";

    slip = slip.concat("Student Name: " + upperName + "\n");
    slip = slip.concat("Father Name: " + fatherName + "\n");
    slip = slip.concat("Class: " + className + "\n");
    slip = slip.concat("Admission Date: " + admissionDate + "\n");
    slip = slip.concat("Student ID: " + studentID + "\n");
    slip = slip.concat("Monthly Fee: Rs. " + monthlyFee + "\n");
    slip = slip.concat("Total Annual Fee: Rs. " + annualFee);

    return slip;
}

console.log(
    createSchoolAdmissionSlip(
        " awantika ",
        " muhammad khatri ",
        "BSCS",
        "01-10-2026",
        5000
    )
);


// ============================================================
// Q12. Temperature Checker - Advanced
// Write a function checkTemperature(temp) that checks the
// temperature according to:
// If temperature is 40 or above → "Very Hot"
// If temperature is 30 or above → "Hot"
// If temperature is 20 or above → "Normal"
// Otherwise → "Cold"
// ============================================================

function checkTemperatureAdvanced(temp) {

    if (temp >= 40) {
        return "Very Hot";
    } else if (temp >= 30) {
        return "Hot";
    } else if (temp >= 20) {
        return "Normal";
    } else {
        return "Cold";
    }
}

console.log(checkTemperatureAdvanced(35));


// ============================================================
// Q13. Weather Status Function
// Write a function checkWeather(degree) that checks the weather:
// If temperature is 45 or above → "Extreme Heat"
// If temperature is 35 or above → "Hot"
// If temperature is 25 or above → "Pleasant"
// Otherwise → "Cool"
// ============================================================

function checkWeather(degree) {

    if (degree >= 45) {
        return "Extreme Heat";
    } else if (degree >= 35) {
        return "Hot";
    } else if (degree >= 25) {
        return "Pleasant";
    } else {
        return "Cool";
    }
}

console.log(checkWeather(38));


// ============================================================
// Q14. Employee Salary Category
// Write a function checkSalary(salary) that categorizes an
// employee's salary:
// 100000 or above → "High Salary"
// 70000 or above → "Good Salary"
// 40000 or above → "Average Salary"
// Otherwise → "Low Salary"
// ============================================================

function checkSalary(salary) {

    if (salary >= 100000) {
        return "High Salary";
    } else if (salary >= 70000) {
        return "Good Salary";
    } else if (salary >= 40000) {
        return "Average Salary";
    } else {
        return "Low Salary";
    }
}

console.log(checkSalary(75000));


// ============================================================
// Q15. Shopping Discount Function
// Write a function checkDiscount(amount) that calculates the
// discount category:
// 50000 or above → return "30% Discount"
// 30000 or above → return "20% Discount"
// 10000 or above → return "10% Discount"
// Otherwise → return "No Discount"
// ============================================================

function checkDiscount(amount) {

    if (amount >= 50000) {
        return "30% Discount";
    } else if (amount >= 30000) {
        return "20% Discount";
    } else if (amount >= 10000) {
        return "10% Discount";
    } else {
        return "No Discount";
    }
}

console.log(checkDiscount(35000));


// ============================================================
// Q16. Employee Performance
// calculatePerformance(sales, target, rating) function banao jo:
// Target achievement percentage calculate kare.
// Agar achievement >= 100% aur rating >= 4 ho
// → "Excellent Performance"
// Agar achievement >= 80% aur rating >= 3 ho
// → "Good Performance"
// Agar achievement >= 60% aur rating >= 2 ho
// → "Average Performance"
// warna → "Poor Performance"
// Result return kare.
// ============================================================

function calculatePerformance(sales, target, rating) {

    let achievement = (sales / target) * 100;

    if (achievement >= 100 && rating >= 4) {
        return "Excellent Performance";
    } else if (achievement >= 80 && rating >= 3) {
        return "Good Performance";
    } else if (achievement >= 60 && rating >= 2) {
        return "Average Performance";
    } else {
        return "Poor Performance";
    }
}

console.log(calculatePerformance(110000, 100000, 4));


// ============================================================
// Q17. Bus Ticket Price Calculator
// Create a JavaScript function named calculateTicketPrice(age)
// that calculates the final bus ticket price.
// Normal ticket price is Rs. 500.
// If the user's age is below 12, apply a 50% discount.
// If the user's age is 60 or above, apply a 30% discount.
// For all other ages, charge the normal ticket price.
// Ask the user to enter their age using prompt().
// Pass the user's age to the function and display the final
// ticket price using console.log().
// ============================================================

function calculateTicketPrice(age) {

    let price = 500;

    if (age < 12) {
        price = price * 0.50;
    } else if (age >= 60) {
        price = price * 0.70;
    }

    return price;
}

let age = Number(prompt("Enter your age:"));

console.log("Final Ticket Price: Rs. " + calculateTicketPrice(age));


// ============================================================
// Q18. Product Price Analyzer
// Create a JavaScript function analyzePrice(price) that takes
// a product price as a parameter.
// If price is below 1000 → return "Budget Product"
// If price is between 1000 and 5000 → return "Regular Product"
// If price is above 5000 → return "Premium Product"
// Then create an arrow function showResult that calls
// analyzePrice() and displays the returned result using
// console.log().
// ============================================================

function analyzePrice(price) {

    if (price < 1000) {
        return "Budget Product";
    } else if (price <= 5000) {
        return "Regular Product";
    } else {
        return "Premium Product";
    }
}

let showResult = () => {
    console.log(analyzePrice(3500));
};

showResult();


// ============================================================
// Q19. Student Marks Evaluator
// Create an arrow function evaluateMarks(marks) that takes a
// student's marks as a parameter.
// Return "Invalid Marks" if marks are less than 0 or greater
// than 100.
// Return "Excellent" if marks are 85 or above.
// Return "Good" if marks are 70 or above.
// Return "Needs Improvement" if marks are 50 or above.
// Otherwise return "Fail".
// Then create a normal function displayResult() that calls
// the arrow function and prints the result.
// ============================================================

let evaluateMarks = (marks) => {

    if (marks < 0 || marks > 100) {
        return "Invalid Marks";
    } else if (marks >= 85) {
        return "Excellent";
    } else if (marks >= 70) {
        return "Good";
    } else if (marks >= 50) {
        return "Needs Improvement";
    } else {
        return "Fail";
    }
};

function displayResult() {
    console.log(evaluateMarks(78));
}

displayResult();


// ============================================================
// Q20. Smart Shopping Discount System
// Create a function calculateDiscount(amount, membership, items)
// that:
// Takes shopping amount as a parameter.
// Uses a loop to count the items.
// If amount ≥ 50,000 → 20% discount.
// If amount ≥ 20,000 → 10% discount.
// VIP members get an additional 5%.
// If items > 10 → additional 3%.
// Calculate the final amount.
// Return the final amount.
// ============================================================

function calculateDiscount(amount, membership, items) {

    let itemCount = 0;

    for (let i = 0; i < items.length; i++) {
        itemCount++;
    }

    let discount = 0;

    if (amount >= 50000) {
        discount = 20;
    } else if (amount >= 20000) {
        discount = 10;
    }

    if (membership === "vip") {
        discount = discount + 5;
    }

    if (itemCount > 10) {
        discount = discount + 3;
    }

    let discountAmount = amount * (discount / 100);

    let finalAmount = amount - discountAmount;

    return finalAmount;
}

console.log(
    calculateDiscount(
        60000,
        "vip",
        [
            "item1",
            "item2",
            "item3",
            "item4",
            "item5",
            "item6",
            "item7",
            "item8",
            "item9",
            "item10",
            "item11"
        ]
    )
);