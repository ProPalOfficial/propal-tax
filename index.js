/**
 * Calculate taxes for ProPal Discord bot.
 * @param {number} totalAmount - The total amount the bot received.
 * @returns {Object} - Object containing tax details.
 */
function calculatePropalTax(totalAmount) {
    const botTax = totalAmount * 0.05;
    const serverOwnerTax = totalAmount * 0.025;
    const deleteTax = totalAmount * 0.025;
  
    return {
      botTax,
      serverOwnerTax,
      deleteTax,
    };
  }
  
module.exports = calculatePropalTax;

// Developed by AmtiXDev
// Discord Username: amtix