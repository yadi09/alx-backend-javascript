const Utils = require("./utils");

const sendPaymentApi = (totalAmount, totalShipping) => {
    const totalCost = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentApi;