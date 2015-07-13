var Exception = Exception || {};

Exception.throwError = function(message) {
  message = message || "Error";
  if (typeof Error !== "undefined") throw new Error(message);
  throw message;
};

Exception.assert = function(condition, message) {
  if (!condition) throwError("Assertion failed");
};
