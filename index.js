
function formatFullName(firstName, lastName) {

    let fullName = `${lastName.charAt(0).toUpperCase() + lastName.slice(1)}, ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}`;

    return fullName;
}
console.log(formatFullName("billy", "barber")); // Output: "Barber, Billy"