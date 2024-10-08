function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function main() {
    const string = prompt("Enter a string:");
    const result = capitalizeFirstLetter(string);
    console.log(result);
}