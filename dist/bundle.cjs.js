
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('lodash')) :
  typeof define === 'function' && define.amd ? define(['lodash'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global._));
})(this, (function (_) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

  var sayHello = function sayHello(message) {
    alert(message);
  };

  var Greeter = /** @class */ (function () {
      function Greeter(message) {
          this.greeting = message;
      }
      Greeter.prototype.greet = function () {
          console.log('hello ts:' + this.greeting);
      };
      return Greeter;
  }());

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "body {\n  background: red;\n}\n\n.container {\n  width: 300px;\n  height: 200px;\n  background: black;\n}";
  styleInject(css_248z);

  var a = new Greeter('hi');
  a.greet();

  var arr = ___default["default"].concat([1, 2, 3], 4);

  sayHello('hello world & lodash:' + arr);

}));
//# sourceMappingURL=bundle.cjs.js.map
