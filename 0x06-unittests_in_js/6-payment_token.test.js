const { expect } = require("chai");
const getPaymentApi = require("./6-payment_token");

describe("getPaymentApi", () => {
    it("getPaymentApi(success), where success == true", (done) => {
        getPaymentApi(true).then((res) => {
            expect(res).to.deep.equal({ data: "Successful response from the API" });
            done();
        });
    });
});