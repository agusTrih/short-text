"use strict";

var shorText = require("../shorText");

test("shortText", function () {
  expect(shorText("my name is rangga", 7)).toBe("my name");
  expect(shorText("my name is rangga", 8, "agus")).toBe("my name agus");
  expect(shorText("my name is rangga")).toBe("my name is rangga");
});