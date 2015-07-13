var andiwand = andiwand || {};

andiwand.throwError = function(message) {
  message = message || "Error";
  if (typeof Error !== "undefined") throw new Error(message);
  throw message;
};

andiwand.assert = function(bool, message) {
  if (!bool) andiwand.throwError("Assertion failed");
};
