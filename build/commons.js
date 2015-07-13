var andiwand = andiwand || {};

andiwand.throwError = function(message) {
  message = message || "Error";
  if (typeof Error !== "undefined") throw new Error(message);
  throw message;
};

andiwand.assert = function(bool, message) {
  if (!bool) andiwand.throwError("Assertion failed");
};

var andiwand = andiwand || {};

andiwand.MarginOfError = function(error, absolute) {
  andiwand.assert(andiwand.isNumber(error));
  andiwand.assert(andiwand.isBoolean(absolute));
  this._error = error;
  this._absolute = absolute;
};

andiwand.MarginOfError.prototype.checkAbsolute = function(value, reference, error) {
  if (error == Number.POSITIVE_INFINITY) return true;
  return (value >= (reference - error)) && (value <= (reference + error));
};

andiwand.MarginOfError.prototype.checkRelative = function(value, reference, error) {
  if (error == Number.POSITIVE_INFINITY) return true;
  return this.checkAbsolute(value, reference, reference * error);
};

andiwand.MarginOfError.prototype.check = function(value, reference) {
  if (this._absolute) {
    return this.checkAbsolute(value, reference, this._error);
  } else {
    return this.checkRelative(value, reference, this._error);
  }
};

var andiwand = andiwand || {};

andiwand.byPath = function(object, path) {
    path = path.replace(/\[(\w+)\]/g, ".$1");
    path = path.replace(/^\./, "");
    var keys = path.split(".");
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key in object) object = object[key];
        else return;
    }
    return object;
};

andiwand.isObject = function(o) {
  return typeof o === "object";
};

andiwand.isArray = function(o) {
  return Object.prototype.toString.call(o) === "[object Array]";
};

andiwand.isString = function(o) {
  return (typeof o === "string") || (o instanceof String);
};

andiwand.isBoolean = function(o) {
  return (typeof o === "boolean") || (o instanceof Boolean);
};

andiwand.isNumberInt = function(n) {
  return (n % 1) === 0;
};

andiwand.isNumberFloat = function(n) {
  return (n % 1) !== 0;
};

andiwand.isNumber = function(o) {
  return !isNaN(o) && isFinite(o);
};

andiwand.isInt = function(o) {
  return andiwand.isNumber(o) && andiwand.isNumberInt(o);
};

andiwand.isFloat = function(o) {
  return andiwand.isNumber(o) && andiwand.isNumberFloat(o);
};

andiwand.isInt32 = function(o) {
  return andiwand.isInt(o) && (o >= 0) && (o <= 0xffffffff);
};

var andiwand = andiwand || {};

andiwand.notImplemented = function() {
  andiwand.throwError("not implemented");
};

andiwand.staticGet = function(o) {
  return function() { return o; };
};

andiwand.dynamicGet = function(o, prop) {
  return function() { return o[prop]; };
};
