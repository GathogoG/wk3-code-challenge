const readline = require('readline-sync');
//required to run the program:it displays the enter message kwa terminal
function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const TAX_RATE = 0.15; //it calculate (taxrate,NHIFrate,NSSFDrate) 
    const NHIF_RATE = 0.025;
    const NSSFD_RATE = 0.06;

    // Calculate gross salary
    const grossSalary = (basicSalary + benefits).toFixed(2);
//.to fixed is used to tell the computer to give a whole number not decimals

    // Calculate deductions
    const taxDeduction = (grossSalary * TAX_RATE).toFixed(2);
    const nhifDeduction = (grossSalary * NHIF_RATE).toFixed(2);
    const nssfDeduction = (grossSalary * NSSFD_RATE).toFixed(2);

    // Calculate net salary
    const netSalary = (grossSalary - taxDeduction - nhifDeduction - nssfDeduction).toFixed(2);

    return {
        'Gross Salary': grossSalary,
        'Payee (Tax)': taxDeduction,
        'NHIF Deductions': nhifDeduction,
        'NSSF Deductions': nssfDeduction,
        'Net Salary': netSalary
    };
}

// Example usage
const basicSalary = parseFloat(readline.question("Enter basic salary: "));
//parse Float is used to assign an number to a variable
// readline question is used to ask the question
//enter basic salary is the actual question to be asked.
const benefits = parseFloat(readline.question("Enter benefits: "));

const result = calculateNetSalary(basicSalary, benefits);
//takes the function at line 3 to assign it to a variable 
//  it will later display results
for (const key in result)
//for is a loop used to dispaly results 
 {
    console.log(`${key}: ${result[key]}`);
}
// line(30-39) it lists what one will see in the terminal
//it represent the terminal