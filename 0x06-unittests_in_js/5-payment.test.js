const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentApi = require("./5-payment");

describe("sendPaymentApi", () => {
    let bigBrother;

    beforeEach(() => {
        if (!bigBrother) {
            bigBrother = sinon.spy(console);
        }
    });

    afterEach(() => {
        bigBrother.log.resetHistory();
    });

    it('sendPaymentApi(100, 20) logs "The total is: 120" to the console', () => {
        sendPaymentApi(100, 20);
        expect(bigBrother.log.calledWith("The total is: 120")).to.be.true;
        expect(bigBrother.log.calledOnce).to.be.true;
    });

    it('sendPaymentApi(10, 10) logs "The total is: 20" to the console', () => {
        sendPaymentApi(10, 10);
        expect(bigBrother.log.calledWith("The total is: 20")).to.be.true;
        expect(bigBrother.log.calledOnce).to.be.true;
    });
});