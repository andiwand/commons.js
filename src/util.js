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
