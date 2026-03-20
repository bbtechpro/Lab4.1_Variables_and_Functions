
function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }

    let fullName = `${lastName.charAt(0).toUpperCase() + lastName.slice(1)}, ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}`;

    return fullName;
}
console.log(formatFullName("billy", "barber")); // Output: "Barber, Billy"

function calculateTotalCost(price, quantity, taxRate) {
    if (!Number.isFinite(price) || !Number.isFinite(quantity) || !Number.isFinite(taxRate)) {
        return "Invalid input.";
    }

    const subtotal = price * quantity;
    const tax = subtotal * taxRate;
    const totalCost = subtotal + tax;
    return totalCost;
}
console.log(calculateTotalCost(10, 5, 0.08));

function checkEligibility(age, isEmployed) {
    if (age >= 18 && isEmployed) {
        return "You are eligible for the program.";
    } else if (age >= 18 && !isEmployed) {
        return "You are conditionally eligible for the program.";
    } else {
        return "You are not eligible for the program.";
    }
} 
console.log(checkEligibility(25, true)); // Output: "You are eligible for the program."
console.log(checkEligibility(25, false)); // Output: "You are conditionally eligible for the program."
console.log(checkEligibility(18, true)); // Output: "You are not eligible for the program."
console.log(checkEligibility(17, false)); // Output: "You are not eligible for the program."  

function calculateTotalCostWithDiscount(price, quantity, taxRate, discount) {
    if (!Number.isFinite(price) || !Number.isFinite(quantity) || !Number.isFinite(taxRate)) {
        return "Invalid input.";
    }
    const discountedPrice = price * (1 - discount);
    const subtotal = discountedPrice * quantity;
    const tax = subtotal * taxRate;
    const totalCost = subtotal + tax;
    return totalCost;
}
console.log(calculateTotalCostWithDiscount(10, 5, 0.08, 0.1));

