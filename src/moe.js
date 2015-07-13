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
