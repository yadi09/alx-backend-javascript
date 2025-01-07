const sinon = require("sinon");
const Utils = require("./utils");
const { expect } = require("chai");
const sendPaymentApi = require("./3-payment");

describe("sendPaymentApi", () => {
    it("sendPaymentApi uses the calculateNumber method of Utils", () => {
        const bigBrother = sinon.spy(Utils);

        sendPaymentApi(100, 20);
        expect(bigBrother.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
        expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
        bigBrother.calculateNumber.restore();
    });
});