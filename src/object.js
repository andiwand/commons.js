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
  return $.isNumeric(o);
};

Object.isInt = function(o) {
  return isNumber(o) && isNumberInt(o);
};

Object.isFloat = function(o) {
  return isNumber(o) && isNumberFloat(o);
};

Object.isInt32 = function(o) {
  return isInt(o) && (o >= 0) && (o <= 0xffffffff);
};
