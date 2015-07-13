var Exception = Exception || {};

Exception.throwError = function(message) {
  message = message || "Error";
  if (typeof Error !== "undefined") throw new Error(message);
  throw message;
};

Exception.assert = function(condition, message) {
  if (!condition) Exception.throwError("Assertion failed");
};

MarginOfError = function(error, absolute) {
  Exception.assert(Object.isNumber(error));
  Exception.assert(Object.isBoolean(absolute));
  this._error = error;
  this._absolute = absolute;
};

MarginOfError.prototype.checkAbsolute = function(value, reference, error) {
  if (error == Number.POSITIVE_INFINITY) return true;
  return (value >= (reference - error)) && (value <= (reference + error));
};

MarginOfError.prototype.checkRelative = function(value, reference, error) {
  if (error == Number.POSITIVE_INFINITY) return true;
  return this.checkAbsolute(value, reference, reference * error);
};

MarginOfError.prototype.check = function(value, reference) {
  if (this._absolute) {
    return this.checkAbsolute(value, reference, this._error);
  } else {
    return this.checkRelative(value, reference, this._error);
  }
};

Object.byPath = function(object, path) {
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

Object.isObject = function(o) {
  return typeof o === "object";
};

Object.isArray = function(o) {
  return Object.prototype.toString.call(o) === "[object Array]";
};

Object.isString = function(o) {
  return (typeof o === "string") || (o instanceof String);
};

Object.isBoolean = function(o) {
  return (typeof o === "boolean") || (o instanceof Boolean);
};

Object.isNumberInt = function(n) {
  return (n % 1) === 0;
};

Object.isNumberFloat = function(n) {
  return (n % 1) !== 0;
};

Object.isNumber = function(o) {
  return !isNaN(o) && isFinite(o);
};

Object.isInt = function(o) {
  return Object.isNumber(o) && Object.isNumberInt(o);
};

Object.isFloat = function(o) {
  return Object.isNumber(o) && Object.isNumberFloat(o);
};

Object.isInt32 = function(o) {
  return Object.isInt(o) && (o >= 0) && (o <= 0xffffffff);
};

var Util = Util || {};

Util.notImplemented = function() {
  Exception.throwError("not implemented");
};

Util.staticGet = function(o) {
  return function() { return o; };
};

Util.dynamicGet = function(o, prop) {
  return function() { return o[prop]; };
};
