var Proxy = (function(w) {

  var noop = function() {};

  var Proxy = function() {
    this._onStorage = this._onStorage.bind(this);
    w.addEventListener('storage', this._onStorage);
  };

  Proxy.prototype.destroy = function() {
    w.removeEventListener('storage', this._onStorage);
  };

  Proxy.prototype.onMessage = noop;

  Proxy.prototype.send = function(message) {
    w.localStorage.setItem('proxy_message', message);
  };

  Proxy.prototype._onStorage = function() {
    this.onMessage(w.localStorage.getItem('proxy_message'));
  };

  return Proxy;

}(window));
