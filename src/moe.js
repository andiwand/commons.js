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
