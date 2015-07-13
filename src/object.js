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
