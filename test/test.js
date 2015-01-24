var assert = require("assert"),
    reverse = require("../src/index");


describe("reverse(object)", function() {
    it("should return array with the values reverse, if object should return object with key values switched", function() {

        assert.deepEqual(reverse([1, 2, 3, 4]), [4, 3, 2, 1]);

        assert.deepEqual(reverse({
            key: "value"
        }), {
            value: "key"
        });
    });
});
