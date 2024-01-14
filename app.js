const calculatePropalTax = require('./index');

const totalAmount = 1000; // Replace with the actual amount received by the bot

const taxDetails = calculatePropalTax(totalAmount);

console.log('Bot Tax:', taxDetails.botTax);
console.log('Server Owner Tax:', taxDetails.serverOwnerTax);
console.log('Delete Tax:', taxDetails.deleteTax);

// Developed by AmtiXDev
// Discord Username: amtix