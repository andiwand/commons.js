var andiwand = andiwand || {};

andiwand.throwError = function(message) {
  message = message || "error";
  if (typeof Error !== "undefined") throw message;
  throw new Error(message);
};

andiwand.assert = function(bool, message) {
  if (!bool) andiwand.throwError("assertion failed");
};
