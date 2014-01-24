var Module, moduleKeywords,
  __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  __slice = Array.prototype.slice;

moduleKeywords = ['extended', 'included'];

Module = (function() {

  function Module() {}

  Module.extend = function(obj) {
    var key, value, _ref;
    console.log("extend", obj);
    for (key in obj) {
      value = obj[key];
      if (!(__indexOf.call(moduleKeywords, key) < 0)) continue;
      console.log("  ", key, ":", value);
      this[key] = value;
    }
    if ((_ref = obj.extended) != null) _ref.apply(this);
    return this;
  };

  Module.include = function(obj) {
    var key, value, _ref;
    console.log("include", obj);
    for (key in obj) {
      value = obj[key];
      if (!(__indexOf.call(moduleKeywords, key) < 0)) continue;
      console.log("  ", key, ":", value);
      this.prototype[key] = value;
    }
    if ((_ref = obj.included) != null) _ref.apply(this);
    return this;
  };

  Module.delegate = function() {
    var args, source, target, _i, _len, _results;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    target = args.pop();
    _results = [];
    for (_i = 0, _len = args.length; _i < _len; _i++) {
      source = args[_i];
      _results.push(this.prototype[source] = target.prototype[source]);
    }
    return _results;
  };

  Module.aliasFunction = function(to, from) {
    var _this = this;
    return this.prototype[to] = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return _this.prototype[from].apply(_this, args);
    };
  };

  Module.aliasProperty = function(to, from) {
    return Object.defineProperty(this.prototype, to, {
      get: function() {
        return this[from];
      },
      set: function(val) {
        return this[from] = val;
      }
    });
  };

  Module.included = function(func) {
    return func.call(this, this.prototype);
  };

  return Module;

})();
