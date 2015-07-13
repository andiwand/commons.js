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
