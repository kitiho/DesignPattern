/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./02.简单的Promise.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/javascript-state-machine/lib/state-machine.js":
/*!******************************************************************************************!*\
  !*** /Users/mac/Desktop/设计模式/node_modules/javascript-state-machine/lib/state-machine.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n(function webpackUniversalModuleDefinition(root, factory) {\n  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}\n})(this, function () {\n  return (\n    /******/\n    function (modules) {\n      // webpackBootstrap\n\n      /******/\n      // The module cache\n\n      /******/\n      var installedModules = {};\n      /******/\n\n      /******/\n      // The require function\n\n      /******/\n\n      function __webpack_require__(moduleId) {\n        /******/\n\n        /******/\n        // Check if module is in cache\n\n        /******/\n        if (installedModules[moduleId]) {\n          /******/\n          return installedModules[moduleId].exports;\n          /******/\n        }\n        /******/\n        // Create a new module (and put it into the cache)\n\n        /******/\n\n\n        var module = installedModules[moduleId] = {\n          /******/\n          i: moduleId,\n\n          /******/\n          l: false,\n\n          /******/\n          exports: {}\n          /******/\n\n        };\n        /******/\n\n        /******/\n        // Execute the module function\n\n        /******/\n\n        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n        /******/\n\n        /******/\n        // Flag the module as loaded\n\n        /******/\n\n        module.l = true;\n        /******/\n\n        /******/\n        // Return the exports of the module\n\n        /******/\n\n        return module.exports;\n        /******/\n      }\n      /******/\n\n      /******/\n\n      /******/\n      // expose the modules object (__webpack_modules__)\n\n      /******/\n\n\n      __webpack_require__.m = modules;\n      /******/\n\n      /******/\n      // expose the module cache\n\n      /******/\n\n      __webpack_require__.c = installedModules;\n      /******/\n\n      /******/\n      // identity function for calling harmony imports with the correct context\n\n      /******/\n\n      __webpack_require__.i = function (value) {\n        return value;\n      };\n      /******/\n\n      /******/\n      // define getter function for harmony exports\n\n      /******/\n\n\n      __webpack_require__.d = function (exports, name, getter) {\n        /******/\n        if (!__webpack_require__.o(exports, name)) {\n          /******/\n          Object.defineProperty(exports, name, {\n            /******/\n            configurable: false,\n\n            /******/\n            enumerable: true,\n\n            /******/\n            get: getter\n            /******/\n\n          });\n          /******/\n        }\n        /******/\n\n      };\n      /******/\n\n      /******/\n      // getDefaultExport function for compatibility with non-harmony modules\n\n      /******/\n\n\n      __webpack_require__.n = function (module) {\n        /******/\n        var getter = module && module.__esModule ?\n        /******/\n        function getDefault() {\n          return module['default'];\n        } :\n        /******/\n        function getModuleExports() {\n          return module;\n        };\n        /******/\n\n        __webpack_require__.d(getter, 'a', getter);\n        /******/\n\n\n        return getter;\n        /******/\n      };\n      /******/\n\n      /******/\n      // Object.prototype.hasOwnProperty.call\n\n      /******/\n\n\n      __webpack_require__.o = function (object, property) {\n        return Object.prototype.hasOwnProperty.call(object, property);\n      };\n      /******/\n\n      /******/\n      // __webpack_public_path__\n\n      /******/\n\n\n      __webpack_require__.p = \"\";\n      /******/\n\n      /******/\n      // Load entry module and return exports\n\n      /******/\n\n      return __webpack_require__(__webpack_require__.s = 5);\n      /******/\n    }(\n    /************************************************************************/\n\n    /******/\n    [\n    /* 0 */\n\n    /***/\n    function (module, exports, __webpack_require__) {\n      \"use strict\";\n\n      module.exports = function (target, sources) {\n        var n, source, key;\n\n        for (n = 1; n < arguments.length; n++) {\n          source = arguments[n];\n\n          for (key in source) {\n            if (source.hasOwnProperty(key)) target[key] = source[key];\n          }\n        }\n\n        return target;\n      };\n      /***/\n\n    },\n    /* 1 */\n\n    /***/\n    function (module, exports, __webpack_require__) {\n      \"use strict\"; //-------------------------------------------------------------------------------------------------\n\n      var mixin = __webpack_require__(0); //-------------------------------------------------------------------------------------------------\n\n\n      module.exports = {\n        build: function build(target, config) {\n          var n,\n              max,\n              plugin,\n              plugins = config.plugins;\n\n          for (n = 0, max = plugins.length; n < max; n++) {\n            plugin = plugins[n];\n            if (plugin.methods) mixin(target, plugin.methods);\n            if (plugin.properties) Object.defineProperties(target, plugin.properties);\n          }\n        },\n        hook: function hook(fsm, name, additional) {\n          var n,\n              max,\n              method,\n              plugin,\n              plugins = fsm.config.plugins,\n              args = [fsm.context];\n          if (additional) args = args.concat(additional);\n\n          for (n = 0, max = plugins.length; n < max; n++) {\n            plugin = plugins[n];\n            method = plugins[n][name];\n            if (method) method.apply(plugin, args);\n          }\n        }\n      }; //-------------------------------------------------------------------------------------------------\n\n      /***/\n    },\n    /* 2 */\n\n    /***/\n    function (module, exports, __webpack_require__) {\n      \"use strict\"; //-------------------------------------------------------------------------------------------------\n\n      function camelize(label) {\n        if (label.length === 0) return label;\n        var n,\n            result,\n            word,\n            words = label.split(/[_-]/); // single word with first character already lowercase, return untouched\n\n        if (words.length === 1 && words[0][0].toLowerCase() === words[0][0]) return label;\n        result = words[0].toLowerCase();\n\n        for (n = 1; n < words.length; n++) {\n          result = result + words[n].charAt(0).toUpperCase() + words[n].substring(1).toLowerCase();\n        }\n\n        return result;\n      } //-------------------------------------------------------------------------------------------------\n\n\n      camelize.prepended = function (prepend, label) {\n        label = camelize(label);\n        return prepend + label[0].toUpperCase() + label.substring(1);\n      }; //-------------------------------------------------------------------------------------------------\n\n\n      module.exports = camelize;\n      /***/\n    },\n    /* 3 */\n\n    /***/\n    function (module, exports, __webpack_require__) {\n      \"use strict\"; //-------------------------------------------------------------------------------------------------\n\n      var mixin = __webpack_require__(0),\n          camelize = __webpack_require__(2); //-------------------------------------------------------------------------------------------------\n\n\n      function Config(options, StateMachine) {\n        options = options || {};\n        this.options = options; // preserving original options can be useful (e.g visualize plugin)\n\n        this.defaults = StateMachine.defaults;\n        this.states = [];\n        this.transitions = [];\n        this.map = {};\n        this.lifecycle = this.configureLifecycle();\n        this.init = this.configureInitTransition(options.init);\n        this.data = this.configureData(options.data);\n        this.methods = this.configureMethods(options.methods);\n        this.map[this.defaults.wildcard] = {};\n        this.configureTransitions(options.transitions || []);\n        this.plugins = this.configurePlugins(options.plugins, StateMachine.plugin);\n      } //-------------------------------------------------------------------------------------------------\n\n\n      mixin(Config.prototype, {\n        addState: function addState(name) {\n          if (!this.map[name]) {\n            this.states.push(name);\n            this.addStateLifecycleNames(name);\n            this.map[name] = {};\n          }\n        },\n        addStateLifecycleNames: function addStateLifecycleNames(name) {\n          this.lifecycle.onEnter[name] = camelize.prepended('onEnter', name);\n          this.lifecycle.onLeave[name] = camelize.prepended('onLeave', name);\n          this.lifecycle.on[name] = camelize.prepended('on', name);\n        },\n        addTransition: function addTransition(name) {\n          if (this.transitions.indexOf(name) < 0) {\n            this.transitions.push(name);\n            this.addTransitionLifecycleNames(name);\n          }\n        },\n        addTransitionLifecycleNames: function addTransitionLifecycleNames(name) {\n          this.lifecycle.onBefore[name] = camelize.prepended('onBefore', name);\n          this.lifecycle.onAfter[name] = camelize.prepended('onAfter', name);\n          this.lifecycle.on[name] = camelize.prepended('on', name);\n        },\n        mapTransition: function mapTransition(transition) {\n          var name = transition.name,\n              from = transition.from,\n              to = transition.to;\n          this.addState(from);\n          if (typeof to !== 'function') this.addState(to);\n          this.addTransition(name);\n          this.map[from][name] = transition;\n          return transition;\n        },\n        configureLifecycle: function configureLifecycle() {\n          return {\n            onBefore: {\n              transition: 'onBeforeTransition'\n            },\n            onAfter: {\n              transition: 'onAfterTransition'\n            },\n            onEnter: {\n              state: 'onEnterState'\n            },\n            onLeave: {\n              state: 'onLeaveState'\n            },\n            on: {\n              transition: 'onTransition'\n            }\n          };\n        },\n        configureInitTransition: function configureInitTransition(init) {\n          if (typeof init === 'string') {\n            return this.mapTransition(mixin({}, this.defaults.init, {\n              to: init,\n              active: true\n            }));\n          } else if (_typeof(init) === 'object') {\n            return this.mapTransition(mixin({}, this.defaults.init, init, {\n              active: true\n            }));\n          } else {\n            this.addState(this.defaults.init.from);\n            return this.defaults.init;\n          }\n        },\n        configureData: function configureData(data) {\n          if (typeof data === 'function') return data;else if (_typeof(data) === 'object') return function () {\n            return data;\n          };else return function () {\n            return {};\n          };\n        },\n        configureMethods: function configureMethods(methods) {\n          return methods || {};\n        },\n        configurePlugins: function configurePlugins(plugins, builtin) {\n          plugins = plugins || [];\n          var n, max, plugin;\n\n          for (n = 0, max = plugins.length; n < max; n++) {\n            plugin = plugins[n];\n            if (typeof plugin === 'function') plugins[n] = plugin = plugin();\n            if (plugin.configure) plugin.configure(this);\n          }\n\n          return plugins;\n        },\n        configureTransitions: function configureTransitions(transitions) {\n          var i,\n              n,\n              transition,\n              from,\n              to,\n              wildcard = this.defaults.wildcard;\n\n          for (n = 0; n < transitions.length; n++) {\n            transition = transitions[n];\n            from = Array.isArray(transition.from) ? transition.from : [transition.from || wildcard];\n            to = transition.to || wildcard;\n\n            for (i = 0; i < from.length; i++) {\n              this.mapTransition({\n                name: transition.name,\n                from: from[i],\n                to: to\n              });\n            }\n          }\n        },\n        transitionFor: function transitionFor(state, transition) {\n          var wildcard = this.defaults.wildcard;\n          return this.map[state][transition] || this.map[wildcard][transition];\n        },\n        transitionsFor: function transitionsFor(state) {\n          var wildcard = this.defaults.wildcard;\n          return Object.keys(this.map[state]).concat(Object.keys(this.map[wildcard]));\n        },\n        allStates: function allStates() {\n          return this.states;\n        },\n        allTransitions: function allTransitions() {\n          return this.transitions;\n        }\n      }); //-------------------------------------------------------------------------------------------------\n\n      module.exports = Config; //-------------------------------------------------------------------------------------------------\n\n      /***/\n    },\n    /* 4 */\n\n    /***/\n    function (module, exports, __webpack_require__) {\n      var mixin = __webpack_require__(0),\n          Exception = __webpack_require__(6),\n          plugin = __webpack_require__(1),\n          UNOBSERVED = [null, []]; //-------------------------------------------------------------------------------------------------\n\n\n      function JSM(context, config) {\n        this.context = context;\n        this.config = config;\n        this.state = config.init.from;\n        this.observers = [context];\n      } //-------------------------------------------------------------------------------------------------\n\n\n      mixin(JSM.prototype, {\n        init: function init(args) {\n          mixin(this.context, this.config.data.apply(this.context, args));\n          plugin.hook(this, 'init');\n          if (this.config.init.active) return this.fire(this.config.init.name, []);\n        },\n        is: function is(state) {\n          return Array.isArray(state) ? state.indexOf(this.state) >= 0 : this.state === state;\n        },\n        isPending: function isPending() {\n          return this.pending;\n        },\n        can: function can(transition) {\n          return !this.isPending() && !!this.seek(transition);\n        },\n        cannot: function cannot(transition) {\n          return !this.can(transition);\n        },\n        allStates: function allStates() {\n          return this.config.allStates();\n        },\n        allTransitions: function allTransitions() {\n          return this.config.allTransitions();\n        },\n        transitions: function transitions() {\n          return this.config.transitionsFor(this.state);\n        },\n        seek: function seek(transition, args) {\n          var wildcard = this.config.defaults.wildcard,\n              entry = this.config.transitionFor(this.state, transition),\n              to = entry && entry.to;\n          if (typeof to === 'function') return to.apply(this.context, args);else if (to === wildcard) return this.state;else return to;\n        },\n        fire: function fire(transition, args) {\n          return this.transit(transition, this.state, this.seek(transition, args), args);\n        },\n        transit: function transit(transition, from, to, args) {\n          var lifecycle = this.config.lifecycle,\n              changed = this.config.options.observeUnchangedState || from !== to;\n          if (!to) return this.context.onInvalidTransition(transition, from, to);\n          if (this.isPending()) return this.context.onPendingTransition(transition, from, to);\n          this.config.addState(to); // might need to add this state if it's unknown (e.g. conditional transition or goto)\n\n          this.beginTransit();\n          args.unshift({\n            // this context will be passed to each lifecycle event observer\n            transition: transition,\n            from: from,\n            to: to,\n            fsm: this.context\n          });\n          return this.observeEvents([this.observersForEvent(lifecycle.onBefore.transition), this.observersForEvent(lifecycle.onBefore[transition]), changed ? this.observersForEvent(lifecycle.onLeave.state) : UNOBSERVED, changed ? this.observersForEvent(lifecycle.onLeave[from]) : UNOBSERVED, this.observersForEvent(lifecycle.on.transition), changed ? ['doTransit', [this]] : UNOBSERVED, changed ? this.observersForEvent(lifecycle.onEnter.state) : UNOBSERVED, changed ? this.observersForEvent(lifecycle.onEnter[to]) : UNOBSERVED, changed ? this.observersForEvent(lifecycle.on[to]) : UNOBSERVED, this.observersForEvent(lifecycle.onAfter.transition), this.observersForEvent(lifecycle.onAfter[transition]), this.observersForEvent(lifecycle.on[transition])], args);\n        },\n        beginTransit: function beginTransit() {\n          this.pending = true;\n        },\n        endTransit: function endTransit(result) {\n          this.pending = false;\n          return result;\n        },\n        failTransit: function failTransit(result) {\n          this.pending = false;\n          throw result;\n        },\n        doTransit: function doTransit(lifecycle) {\n          this.state = lifecycle.to;\n        },\n        observe: function observe(args) {\n          if (args.length === 2) {\n            var observer = {};\n            observer[args[0]] = args[1];\n            this.observers.push(observer);\n          } else {\n            this.observers.push(args[0]);\n          }\n        },\n        observersForEvent: function observersForEvent(event) {\n          // TODO: this could be cached\n          var n = 0,\n              max = this.observers.length,\n              observer,\n              result = [];\n\n          for (; n < max; n++) {\n            observer = this.observers[n];\n            if (observer[event]) result.push(observer);\n          }\n\n          return [event, result, true];\n        },\n        observeEvents: function observeEvents(events, args, previousEvent, previousResult) {\n          if (events.length === 0) {\n            return this.endTransit(previousResult === undefined ? true : previousResult);\n          }\n\n          var event = events[0][0],\n              observers = events[0][1],\n              pluggable = events[0][2];\n          args[0].event = event;\n          if (event && pluggable && event !== previousEvent) plugin.hook(this, 'lifecycle', args);\n\n          if (observers.length === 0) {\n            events.shift();\n            return this.observeEvents(events, args, event, previousResult);\n          } else {\n            var observer = observers.shift(),\n                result = observer[event].apply(observer, args);\n\n            if (result && typeof result.then === 'function') {\n              return result.then(this.observeEvents.bind(this, events, args, event))[\"catch\"](this.failTransit.bind(this));\n            } else if (result === false) {\n              return this.endTransit(false);\n            } else {\n              return this.observeEvents(events, args, event, result);\n            }\n          }\n        },\n        onInvalidTransition: function onInvalidTransition(transition, from, to) {\n          throw new Exception(\"transition is invalid in current state\", transition, from, to, this.state);\n        },\n        onPendingTransition: function onPendingTransition(transition, from, to) {\n          throw new Exception(\"transition is invalid while previous transition is still in progress\", transition, from, to, this.state);\n        }\n      }); //-------------------------------------------------------------------------------------------------\n\n      module.exports = JSM; //-------------------------------------------------------------------------------------------------\n\n      /***/\n    },\n    /* 5 */\n\n    /***/\n    function (module, exports, __webpack_require__) {\n      \"use strict\"; //-----------------------------------------------------------------------------------------------\n\n      var mixin = __webpack_require__(0),\n          camelize = __webpack_require__(2),\n          plugin = __webpack_require__(1),\n          Config = __webpack_require__(3),\n          JSM = __webpack_require__(4); //-----------------------------------------------------------------------------------------------\n\n\n      var PublicMethods = {\n        is: function is(state) {\n          return this._fsm.is(state);\n        },\n        can: function can(transition) {\n          return this._fsm.can(transition);\n        },\n        cannot: function cannot(transition) {\n          return this._fsm.cannot(transition);\n        },\n        observe: function observe() {\n          return this._fsm.observe(arguments);\n        },\n        transitions: function transitions() {\n          return this._fsm.transitions();\n        },\n        allTransitions: function allTransitions() {\n          return this._fsm.allTransitions();\n        },\n        allStates: function allStates() {\n          return this._fsm.allStates();\n        },\n        onInvalidTransition: function onInvalidTransition(t, from, to) {\n          return this._fsm.onInvalidTransition(t, from, to);\n        },\n        onPendingTransition: function onPendingTransition(t, from, to) {\n          return this._fsm.onPendingTransition(t, from, to);\n        }\n      };\n      var PublicProperties = {\n        state: {\n          configurable: false,\n          enumerable: true,\n          get: function get() {\n            return this._fsm.state;\n          },\n          set: function set(state) {\n            throw Error('use transitions to change state');\n          }\n        }\n      }; //-----------------------------------------------------------------------------------------------\n\n      function StateMachine(options) {\n        return apply(this || {}, options);\n      }\n\n      function factory() {\n        var cstor, options;\n\n        if (typeof arguments[0] === 'function') {\n          cstor = arguments[0];\n          options = arguments[1] || {};\n        } else {\n          cstor = function cstor() {\n            this._fsm.apply(this, arguments);\n          };\n\n          options = arguments[0] || {};\n        }\n\n        var config = new Config(options, StateMachine);\n        build(cstor.prototype, config);\n        cstor.prototype._fsm.config = config; // convenience access to shared config without needing an instance\n\n        return cstor;\n      } //-------------------------------------------------------------------------------------------------\n\n\n      function apply(instance, options) {\n        var config = new Config(options, StateMachine);\n        build(instance, config);\n\n        instance._fsm();\n\n        return instance;\n      }\n\n      function build(target, config) {\n        if (_typeof(target) !== 'object' || Array.isArray(target)) throw Error('StateMachine can only be applied to objects');\n        plugin.build(target, config);\n        Object.defineProperties(target, PublicProperties);\n        mixin(target, PublicMethods);\n        mixin(target, config.methods);\n        config.allTransitions().forEach(function (transition) {\n          target[camelize(transition)] = function () {\n            return this._fsm.fire(transition, [].slice.call(arguments));\n          };\n        });\n\n        target._fsm = function () {\n          this._fsm = new JSM(this, config);\n\n          this._fsm.init(arguments);\n        };\n      } //-----------------------------------------------------------------------------------------------\n\n\n      StateMachine.version = '3.0.1';\n      StateMachine.factory = factory;\n      StateMachine.apply = apply;\n      StateMachine.defaults = {\n        wildcard: '*',\n        init: {\n          name: 'init',\n          from: 'none'\n        }\n      }; //===============================================================================================\n\n      module.exports = StateMachine;\n      /***/\n    },\n    /* 6 */\n\n    /***/\n    function (module, exports, __webpack_require__) {\n      \"use strict\";\n\n      module.exports = function (message, transition, from, to, current) {\n        this.message = message;\n        this.transition = transition;\n        this.from = from;\n        this.to = to;\n        this.current = current;\n      };\n      /***/\n\n    }\n    /******/\n    ])\n  );\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:////Users/mac/Desktop/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/node_modules/javascript-state-machine/lib/state-machine.js?");

/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (module) {\n  if (!module.webpackPolyfill) {\n    module.deprecate = function () {};\n\n    module.paths = []; // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function get() {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function get() {\n        return module.i;\n      }\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./02.简单的Promise.js":
/*!**************************!*\
  !*** ./02.简单的Promise.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ \"../../node_modules/javascript-state-machine/lib/state-machine.js\");\n/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n    Promise就是一个有限状态机\n\n*/\n // 状态机模型\n\nvar fsm = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a({\n  init: 'pending',\n  transitions: [{\n    name: 'resolve',\n    // 事件名称\n    from: 'pending',\n    to: 'fullfilled'\n  }, {\n    name: 'reject',\n    // 事件名称\n    from: 'pending',\n    to: 'rejected'\n  }],\n  methods: {\n    onResolve: function onResolve(state, data) {\n      // state当前状态机实例；data fsm.resolve(xxx)传递的参数\n      console.log(data);\n      data.successList.forEach(function (fn) {\n        return fn();\n      });\n    },\n    onReject: function onReject(state, data) {\n      // state当前状态机实例；data fsm.reject(xxx)传递的参数\n      data.failList.forEach(function (fn) {\n        return fn();\n      });\n    }\n  }\n}); // 定义Promise的calss\n\nvar MyPromise = /*#__PURE__*/function () {\n  function MyPromise(fn) {\n    var _this = this;\n\n    _classCallCheck(this, MyPromise);\n\n    this.successList = [];\n    this.failList = [];\n    console.log(this);\n    fn(function () {\n      // resolve函数\n      fsm.resolve(_this);\n    }, function () {\n      // reject函数\n      fsm.reject(_this);\n    });\n  }\n\n  _createClass(MyPromise, [{\n    key: \"then\",\n    value: function then(successFn, failFn) {\n      this.successList.push(successFn);\n      this.failList.push(failFn);\n    }\n  }]);\n\n  return MyPromise;\n}(); // 测试代码\n\n\nfunction loadImg(src) {\n  var promise = new MyPromise(function (resolve, reject) {\n    var img = document.createElement('img');\n\n    img.onload = function () {\n      resolve(img);\n    };\n\n    img.onerror = function () {\n      reject();\n    };\n\n    img.src = src;\n  });\n  return promise;\n}\n\nvar src = 'https://www.baidu.com/img/bd_logo1.png?where=super';\nvar res = loadImg(src);\nres.then(function () {\n  console.log('ok1');\n}, function () {\n  console.log('fail1');\n});\nres.then(function () {\n  console.log('ok2');\n}, function () {\n  console.log('fail2');\n});\n\n//# sourceURL=webpack:///./02.%E7%AE%80%E5%8D%95%E7%9A%84Promise.js?");

/***/ })

/******/ });