(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("d1e123f2-7ba7-4539-92fb-7a9af26021a5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd1e123f2-7ba7-4539-92fb-7a9af26021a5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function(root, factory) {
          //  if(typeof exports === 'object' && typeof module === 'object')
          //    factory(require("Bokeh"));
          //  else if(typeof define === 'function' && define.amd)
          //    define(["Bokeh"], factory);
          //  else if(typeof exports === 'object')
          //    factory(require("Bokeh"));
          //  else
              factory(root["Bokeh"]);
          })(this, function(Bokeh) {
            var define;
            return (function outer(modules, entry) {
            if (Bokeh != null) {
              return Bokeh.register_plugin(modules, {}, entry);
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })
          ({
            "custom/main": function(require, module, exports) {
              var models = {
                "LatexLabel": require("custom/bk_script_074e546b3c1b47f8a4bb89c4700ab0a8.latex_label").LatexLabel,
          "Surface3d": require("custom/bk_script_503def5dd0ce428b82af5a6e6f63b14a.surface3d").Surface3d,
          "Custom": require("custom/bk_script_8bbacfc9cb254721ba43b510bccd5c8a.custom").Custom,
          "MyFormatter": require("custom/bk_script_8f1efcd166444c83bb98f1ac6fb868c4.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_a4dba819281c4cefb4f9daf58cfd98b7.draw_tool").DrawTool,
          "IonRangeSlider": require("custom/bk_script_f8f530827b6d40d0854e678ed2325104.ion_range_slider").IonRangeSlider
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_074e546b3c1b47f8a4bb89c4700ab0a8.latex_label": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var label_1 = require("models/annotations/label");
          exports.LatexLabelView = /** @class */ (function (_super) {
              __extends(LatexLabelView, _super);
              function LatexLabelView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              LatexLabelView.prototype.render = function () {
                  var angle, panel, ref, sx, sy, xscale, yscale;
                  //--- Start of copied section from ``Label.render`` implementation
                  // Here because AngleSpec does units tranform and label doesn't support specs
                  switch (this.model.angle_units) {
                      case "rad":
                          angle = -1 * this.model.angle;
                          break;
                      case "deg":
                          angle = -1 * this.model.angle * Math.PI / 180.0;
                  }
                  panel = (ref = this.model.panel) != null ? ref : this.plot_view.frame;
                  xscale = this.plot_view.frame.xscales[this.model.x_range_name];
                  yscale = this.plot_view.frame.yscales[this.model.y_range_name];
                  sx = this.model.x_units === "data" ? xscale.compute(this.model.x) : panel.xview.compute(this.model.x);
                  sy = this.model.y_units === "data" ? yscale.compute(this.model.y) : panel.yview.compute(this.model.y);
                  sx += this.model.x_offset;
                  sy -= this.model.y_offset;
                  //--- End of copied section from ``Label.render`` implementation
                  // Must render as superpositioned div (not on canvas) so that KaTex
                  // css can properly style the text
                  this._css_text(this.plot_view.canvas_view.ctx, "", sx, sy, angle);
                  // ``katex`` is loaded into the global window at runtime
                  // katex.renderToString returns a html ``span`` element
                  return katex.render(this.model.text, this.el, {
                      displayMode: true
                  });
              };
              return LatexLabelView;
          }(label_1.LabelView));
          exports.LatexLabel = (function () {
              var LatexLabel = /** @class */ (function (_super) {
                  __extends(LatexLabel, _super);
                  function LatexLabel() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return LatexLabel;
              }(label_1.Label));
              ;
              LatexLabel.prototype.type = 'LatexLabel';
              LatexLabel.prototype.default_view = exports.LatexLabelView;
              return LatexLabel;
          })();
          
          },
          "custom/bk_script_503def5dd0ce428b82af5a6e6f63b14a.surface3d": function(require, module, exports) {
          "use strict";
          // This file contains the JavaScript (CoffeeScript) implementation
          // for a Bokeh custom extension. The "surface3d.py" contains the
          // python counterpart.
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          // This custom model wraps one part of the third-party vis.js library:
          //     http://visjs.org/index.html
          // Making it easy to hook up python data analytics tools (NumPy, SciPy,
          // Pandas, etc.) to web presentations using the Bokeh server.
          // These "require" lines are similar to python "import" statements
          var OPTIONS;
          var p = require("core/properties");
          var layout_dom_1 = require("models/layouts/layout_dom");
          // This defines some default options for the Graph3d feature of vis.js
          // See: http://visjs.org/graph3d_examples.html for more details.
          OPTIONS = {
              width: '600px',
              height: '600px',
              style: 'surface',
              showPerspective: true,
              showGrid: true,
              keepAspectRatio: true,
              verticalRatio: 1.0,
              legendLabel: 'stuff',
              cameraPosition: {
                  horizontal: -0.35,
                  vertical: 0.22,
                  distance: 1.8
              }
          };
          // To create custom model extensions that will render on to the HTML canvas
          // or into the DOM, we must create a View subclass for the model. Currently
          // Bokeh models and views are based on BackBone. More information about
          // using Backbone can be found here:
          //     http://backbonejs.org/
          // In this case we will subclass from the existing BokehJS ``LayoutDOMView``,
          // corresponding to our
          exports.Surface3dView = /** @class */ (function (_super) {
              __extends(Surface3dView, _super);
              function Surface3dView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              Surface3dView.prototype.initialize = function (options) {
                  var _this = this;
                  var script, url;
                  _super.prototype.initialize.call(this, options);
                  url = "https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js";
                  script = document.createElement('script');
                  script.src = url;
                  script.async = false;
                  script.onreadystatechange = script.onload = function () {
                      return _this._init();
                  };
                  return document.querySelector("head").appendChild(script);
              };
              Surface3dView.prototype._init = function () {
                  // Create a new Graph3s using the vis.js API. This assumes the vis.js has
                  // already been loaded (e.g. in a custom app template). In the future Bokeh
                  // models will be able to specify and load external scripts automatically.
                  var _this = this;
                  // Backbone Views create <div> elements by default, accessible as @el. Many
                  // Bokeh views ignore this default <div>, and instead do things like draw
                  // to the HTML canvas. In this case though, we use the <div> to attach a
                  // Graph3d to the DOM.
                  this._graph = new vis.Graph3d(this.el, this.get_data(), OPTIONS);
                  // Set Backbone listener so that when the Bokeh data source has a change
                  // event, we can process the new data
                  return this.connect(this.model.data_source.change, function () {
                      return _this._graph.setData(_this.get_data());
                  });
              };
              // This is the callback executed when the Bokeh data has an change. Its basic
              // function is to adapt the Bokeh data source to the vis.js DataSet format.
              Surface3dView.prototype.get_data = function () {
                  var data, i, j, ref, source;
                  data = new vis.DataSet();
                  source = this.model.data_source;
                  for (i = j = 0, ref = source.get_length(); 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                      data.add({
                          x: source.get_column(this.model.x)[i],
                          y: source.get_column(this.model.y)[i],
                          z: source.get_column(this.model.z)[i],
                          style: source.get_column(this.model.color)[i]
                      });
                  }
                  return data;
              };
              return Surface3dView;
          }(layout_dom_1.LayoutDOMView));
          exports.Surface3d = (function () {
              // We must also create a corresponding JavaScript Backbone model sublcass to
              // correspond to the python Bokeh model subclass. In this case, since we want
              // an element that can position itself in the DOM according to a Bokeh layout,
              // we subclass from ``LayoutDOM``
              var Surface3d = /** @class */ (function (_super) {
                  __extends(Surface3d, _super);
                  function Surface3d() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return Surface3d;
              }(layout_dom_1.LayoutDOM));
              ;
              // This is usually boilerplate. In some cases there may not be a view.
              Surface3d.prototype.default_view = exports.Surface3dView;
              // The ``type`` class attribute should generally match exactly the name
              // of the corresponding Python class.
              Surface3d.prototype.type = "Surface3d";
              // The @define block adds corresponding "properties" to the JS model. These
              // should basically line up 1-1 with the Python model class. Most property
              // types have counterparts, e.g. ``bokeh.core.properties.String`` will be
              // ``p.String`` in the JS implementatin. Where the JS type system is not yet
              // as rich, you can use ``p.Any`` as a "wildcard" property type.
              Surface3d.define({
                  x: [p.String],
                  y: [p.String],
                  z: [p.String],
                  color: [p.String],
                  data_source: [p.Instance]
              });
              return Surface3d;
          })();
          
          },
          "custom/bk_script_8bbacfc9cb254721ba43b510bccd5c8a.custom": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var dom_1 = require("core/dom");
          var p = require("core/properties");
          var layout_dom_1 = require("models/layouts/layout_dom");
          var CustomView = /** @class */ (function (_super) {
              __extends(CustomView, _super);
              function CustomView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              CustomView.prototype.initialize = function (options) {
                  var _this = this;
                  _super.prototype.initialize.call(this, options);
                  this.render();
                  // Set BokehJS listener so that when the Bokeh slider has a change
                  // event, we can process the new data
                  this.connect(this.model.slider.change, function () { return _this.render(); });
              };
              CustomView.prototype.render = function () {
                  // BokehjS Views create <div> elements by default, accessible as
                  // ``this.el``. Many Bokeh views ignore this default <div>, and instead
                  // do things like draw to the HTML canvas. In this case though, we change
                  // the contents of the <div>, based on the current slider value.
                  dom_1.empty(this.el);
                  this.el.appendChild(dom_1.div({
                      style: {
                          'padding': '2px',
                          'color': '#b88d8e',
                          'background-color': '#2a3153',
                      },
                  }, this.model.text + ": " + this.model.slider.value));
              };
              return CustomView;
          }(layout_dom_1.LayoutDOMView));
          exports.CustomView = CustomView;
          var Custom = /** @class */ (function (_super) {
              __extends(Custom, _super);
              function Custom() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  // If there is an associated view, this is typically boilerplate.
                  _this.default_view = CustomView;
                  // The ``type`` class attribute should generally match exactly the name
                  // of the corresponding Python class.
                  _this.type = "Custom";
                  return _this;
              }
              return Custom;
          }(layout_dom_1.LayoutDOM));
          exports.Custom = Custom;
          // The @define block adds corresponding "properties" to the JS model. These
          // should normally line up 1-1 with the Python model class. Most property
          // types have counterparts, e.g. bokeh.core.properties.String will be
          // ``p.String`` in the JS implementation. Any time the JS type system is not
          // yet as complete, you can use ``p.Any`` as a "wildcard" property type.
          Custom.define({
              text: [p.String],
              slider: [p.Any],
          });
          
          },
          "custom/bk_script_8f1efcd166444c83bb98f1ac6fb868c4.my_formatter": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var tick_formatter_1 = require("models/formatters/tick_formatter");
          exports.MyFormatter = (function () {
              var MyFormatter = /** @class */ (function (_super) {
                  __extends(MyFormatter, _super);
                  function MyFormatter() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  // TickFormatters should implement this method, which accepts a lisst
                  // of numbers (ticks) and returns a list of strings
                  MyFormatter.prototype.doFormat = function (ticks) {
                      var formatted, i, j, ref;
                      // format the first tick as-is
                      formatted = ["" + ticks[0]];
                      // format the remaining ticks as a difference from the first
                      for (i = j = 1, ref = ticks.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
                          formatted.push("+" + (ticks[i] - ticks[0]).toPrecision(2));
                      }
                      return formatted;
                  };
                  return MyFormatter;
              }(tick_formatter_1.TickFormatter));
              ;
              MyFormatter.prototype.type = "MyFormatter";
              return MyFormatter;
          })();
          
          },
          "custom/bk_script_a4dba819281c4cefb4f9daf58cfd98b7.draw_tool": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var p = require("core/properties");
          var gesture_tool_1 = require("models/tools/gestures/gesture_tool");
          exports.DrawToolView = /** @class */ (function (_super) {
              __extends(DrawToolView, _super);
              function DrawToolView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              // this is executed when the pan/drag event starts
              DrawToolView.prototype._pan_start = function (e) {
                  return this.model.source.data = {
                      x: [],
                      y: []
                  };
              };
              // this is executed on subsequent mouse/touch moves
              DrawToolView.prototype._pan = function (e) {
                  var frame, sx, sy, x, y;
                  frame = this.plot_model.frame;
                  (_a = e.bokeh, sx = _a.sx, sy = _a.sy);
                  if (!frame.bbox.contains(sx, sy)) {
                      return null;
                  }
                  x = frame.xscales['default'].invert(sx);
                  y = frame.yscales['default'].invert(sy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
                  var _a;
              };
              // this is executed then the pan/drag ends
              DrawToolView.prototype._pan_end = function (e) {
                  return null;
              };
              return DrawToolView;
          }(gesture_tool_1.GestureToolView));
          exports.DrawTool = (function () {
              var DrawTool = /** @class */ (function (_super) {
                  __extends(DrawTool, _super);
                  function DrawTool() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return DrawTool;
              }(gesture_tool_1.GestureTool));
              ;
              DrawTool.prototype.default_view = exports.DrawToolView;
              DrawTool.prototype.type = "DrawTool";
              DrawTool.prototype.tool_name = "Drag Span";
              DrawTool.prototype.icon = "bk-tool-icon-lasso-select";
              DrawTool.prototype.event_type = "pan";
              DrawTool.prototype.default_order = 12;
              DrawTool.define({
                  source: [p.Instance]
              });
              return DrawTool;
          })();
          
          },
          "custom/bk_script_f8f530827b6d40d0854e678ed2325104.ion_range_slider": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var callback_1 = require("core/util/callback");
          var p = require("core/properties");
          var dom_1 = require("core/dom");
          var input_widget_1 = require("models/widgets/input_widget");
          // This model will actually need to render things, so we must provide
          // view. The LayoutDOM model has a view already, so we will start with that
          exports.IonRangeSliderView = /** @class */ (function (_super) {
              __extends(IonRangeSliderView, _super);
              function IonRangeSliderView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              IonRangeSliderView.prototype._createElement = function () {
                  var el;
                  el = _super.prototype._createElement.call(this);
                  this.$el = $(el);
                  return el;
              };
              IonRangeSliderView.prototype.template = function () {
                  var title, value;
                  if (this.model.title != null) {
                      if (this.model.title.length !== 0) {
                          title = dom_1.label({
                              for: this.model.id
                          }, " " + this.model.title + ": ");
                      }
                      value = dom_1.input({
                          type: "text",
                          id: this.model.id,
                          readonly: true
                      });
                  }
                  return dom_1.div({
                      class: "bk-slider-parent"
                  }, title, value, dom_1.div({
                      class: "bk-slider-horizontal"
                  }, dom_1.input({
                      type: "text",
                      class: "slider",
                      id: this.model.id
                  })));
              };
              IonRangeSliderView.prototype.initialize = function (options) {
                  _super.prototype.initialize.call(this, options);
                  this.connect(this.model.change, this.render);
                  dom_1.empty(this.el);
                  this.el.appendChild(this.template());
                  this.callbackWrapper = null;
                  if (this.model.callback_policy === 'continuous') {
                      this.callbackWrapper = function () {
                          var ref;
                          return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                      };
                  }
                  if (this.model.callback_policy === 'throttle' && this.model.callback) {
                      this.callbackWrapper = callback_1.throttle(function () {
                          var ref;
                          return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                      }, this.model.callback_throttle);
                  }
                  return this.render();
              };
              IonRangeSliderView.prototype.render = function () {
                  var _this = this;
                  var disable, from, grid, max, min, opts, range, slider, step, to;
                  // Backbone Views create <div> elements by default, accessible as @$el.
                  // Many Bokeh views ignore this default <div>, and instead do things
                  // like draw to the HTML canvas. In this case though, we change the
                  // contents of the <div>, based on the current slider value.
                  _super.prototype.render.call(this);
                  // Set up parameters
                  max = this.model.end;
                  min = this.model.start;
                  grid = this.model.grid;
                  disable = this.model.disabled;
                  range = this.model.range || [max, min];
                  from = range[0], to = range[1];
                  step = this.model.step || ((max - min) / 50);
                  opts = {
                      type: "double",
                      grid: grid,
                      min: min,
                      max: max,
                      from: from,
                      to: to,
                      step: step,
                      disable: disable,
                      onChange: function (data) {
                          return _this.slide(data);
                      },
                      onFinish: function (data) {
                          return _this.slidestop(data);
                      }
                  };
                  dom_1.input = this.$el.find('.slider')[0];
                  slider = jQuery(dom_1.input).ionRangeSlider(opts);
                  range = [from, to];
                  this.$el.find("#" + this.model.id).val(range.join(' - '));
                  this.$el.find('.bk-slider-parent').height(this.model.height);
                  return this;
              };
              IonRangeSliderView.prototype.slidestop = function (data) {
                  var ref;
                  if (this.model.callback_policy === 'mouseup' || this.model.callback_policy === 'throttle') {
                      return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                  }
              };
              IonRangeSliderView.prototype.slide = function (data) {
                  var range, value;
                  range = [data.from, data.to];
                  value = range.join(' - ');
                  this.$el.find("#" + this.model.id).val(value);
                  this.model.range = range;
                  if (this.callbackWrapper) {
                      return this.callbackWrapper();
                  }
              };
              return IonRangeSliderView;
          }(input_widget_1.InputWidgetView));
          exports.IonRangeSlider = (function () {
              var IonRangeSlider = /** @class */ (function (_super) {
                  __extends(IonRangeSlider, _super);
                  function IonRangeSlider() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return IonRangeSlider;
              }(input_widget_1.InputWidget));
              ;
              // If there is an associated view, this is boilerplate.
              IonRangeSlider.prototype.default_view = exports.IonRangeSliderView;
              // The ``type`` class attribute should generally match exactly the name
              // of the corresponding Python class.
              IonRangeSlider.prototype.type = "IonRangeSlider";
              // The @define block adds corresponding "properties" to the JS model. These
              // should basically line up 1-1 with the Python model class. Most property
              // types have counterparts, e.g. bokeh.core.properties.String will be
              // p.String in the JS implementation. Where the JS type system is not yet
              // as rich, you can use p.Any as a "wildcard" property type.
              IonRangeSlider.define({
                  range: [p.Any],
                  start: [p.Number, 0],
                  end: [p.Number, 1],
                  step: [p.Number, 0.1],
                  grid: [p.Bool, true],
                  callback_throttle: [p.Number, 200],
                  callback_policy: [p.String, "throttle"]
              });
              return IonRangeSlider;
          })();
          
          }
          }, "custom/main");
          ;
          });
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"fc400cee-9a2b-49ee-b833-31f9d178f3fb":{"roots":{"references":[{"attributes":{"callback":null,"end":100},"id":"dbcdc551-db85-4993-855a-2d40198088f3","type":"Range1d"},{"attributes":{},"id":"bf2e5b83-b260-4a1d-8300-f89dc7ce9731","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"8655cfe7-f166-4062-9b02-033c40839a24","type":"FactorRange"},{"attributes":{"below":[{"id":"d803609a-06fe-47f6-9d05-0132da36a30b","type":"CategoricalAxis"}],"left":[{"id":"4fe6c20e-22d9-46be-9719-29063c83627f","type":"CategoricalAxis"}],"renderers":[{"id":"d803609a-06fe-47f6-9d05-0132da36a30b","type":"CategoricalAxis"},{"id":"60b9a37c-f272-46f9-8d6f-7946c93b589b","type":"Grid"},{"id":"4fe6c20e-22d9-46be-9719-29063c83627f","type":"CategoricalAxis"},{"id":"5ec0f153-180b-494e-9220-780e35df33fe","type":"Grid"},{"id":"830e3aef-188f-4723-adff-b544e06e6ce7","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"63136f07-c7f5-47b6-9cf0-2cce67a1f06f","type":"Title"},"toolbar":{"id":"0f2c5c3b-097a-41cf-bb34-1f8b248299a2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e3b8cf5a-2ae2-492d-8959-818aa4346944","type":"FactorRange"},"x_scale":{"id":"bcf748b0-b567-401c-8959-fa012d893716","type":"CategoricalScale"},"y_range":{"id":"d5059f37-7811-405c-89b5-e3c0c2f73d92","type":"FactorRange"},"y_scale":{"id":"bf9c44ee-582b-4b66-94ca-4133986f4712","type":"CategoricalScale"}},"id":"47b8fafa-ce2b-4cec-81c3-8d514ef44586","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"63136f07-c7f5-47b6-9cf0-2cce67a1f06f","type":"Title"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"29941cfe-cf65-46a5-b82a-7f8da7437a0e","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d252b70c-4d19-436e-8645-5015bbe46378","type":"Circle"},{"attributes":{"formatter":{"id":"c78f92aa-6ad1-49ac-aac2-36f1f708ede2","type":"BasicTickFormatter"},"plot":{"id":"020b0725-352f-4b63-8f3f-f7dcc6376966","subtype":"Figure","type":"Plot"},"ticker":{"id":"a55aabe6-38cd-4ca8-bb81-4ca95aca075d","type":"BasicTicker"}},"id":"fcb18b13-96bd-421a-85b0-9d2578a04525","type":"LinearAxis"},{"attributes":{"children":[{"id":"47b8fafa-ce2b-4cec-81c3-8d514ef44586","subtype":"Figure","type":"Plot"},{"id":"020b0725-352f-4b63-8f3f-f7dcc6376966","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"9f035ac5-79a4-4660-97f2-6f5a00c9cce0","type":"Row"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"f5a89cb8-98f3-4e98-b96b-557da6157cc9","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"ef1b857b-4fee-435d-b9ed-b9be29720386","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f5a89cb8-98f3-4e98-b96b-557da6157cc9","type":"ColumnDataSource"}},"id":"5daa6d23-218f-48c6-8a29-c9d8196830e5","type":"CDSView"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7e38b73-06b4-45e0-bab5-970d53daa123","type":"Rect"},{"attributes":{"source":{"id":"c05cb129-2c92-4948-aa71-dd8b59972b30","type":"ColumnDataSource"}},"id":"3a692ee3-bf3b-4e04-ab96-15cc77769494","type":"CDSView"},{"attributes":{},"id":"a55aabe6-38cd-4ca8-bb81-4ca95aca075d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"bf2e5b83-b260-4a1d-8300-f89dc7ce9731","type":"CategoricalTickFormatter"},"plot":{"id":"47b8fafa-ce2b-4cec-81c3-8d514ef44586","subtype":"Figure","type":"Plot"},"ticker":{"id":"356b7b20-7c47-4971-b752-033a31a87669","type":"CategoricalTicker"}},"id":"4fe6c20e-22d9-46be-9719-29063c83627f","type":"CategoricalAxis"},{"attributes":{"below":[{"id":"fcb18b13-96bd-421a-85b0-9d2578a04525","type":"LinearAxis"}],"left":[{"id":"47f4d63a-142e-4f64-be21-1bc56e09f6f5","type":"CategoricalAxis"}],"renderers":[{"id":"fcb18b13-96bd-421a-85b0-9d2578a04525","type":"LinearAxis"},{"id":"18d9c7c0-caaf-4caf-a508-33c510489bd6","type":"Grid"},{"id":"47f4d63a-142e-4f64-be21-1bc56e09f6f5","type":"CategoricalAxis"},{"id":"c597e5ff-2aff-4b1c-bd0d-d18aaea305e6","type":"Grid"},{"id":"90a1a906-a732-489d-9d06-e4b6ee6f02ce","type":"GlyphRenderer"},{"id":"6b8d1b27-e413-4c3a-bc4f-b8cb69ccdb3f","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"29941cfe-cf65-46a5-b82a-7f8da7437a0e","type":"Title"},"toolbar":{"id":"20521222-060b-41dd-8b49-b1118b447a9c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dbcdc551-db85-4993-855a-2d40198088f3","type":"Range1d"},"x_scale":{"id":"402887da-f9c3-41fa-b409-2403a8a3b0c2","type":"LinearScale"},"y_range":{"id":"8655cfe7-f166-4062-9b02-033c40839a24","type":"FactorRange"},"y_scale":{"id":"13eda229-9aaa-41e2-9aed-145bcf25c2ab","type":"CategoricalScale"}},"id":"020b0725-352f-4b63-8f3f-f7dcc6376966","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]}},"id":"c05cb129-2c92-4948-aa71-dd8b59972b30","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"ace6415e-a44d-4bd9-8f69-b1e0903845ea","type":"Rect"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"7f3e8537-72fc-4d5e-b20f-d0a72773dd1a","type":"Segment"},{"attributes":{},"id":"13eda229-9aaa-41e2-9aed-145bcf25c2ab","type":"CategoricalScale"},{"attributes":{},"id":"0a06cee5-6b50-457c-8541-27ec1916cd01","type":"CategoricalTicker"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"9f5e7421-cae8-4ec2-b234-5fc6ee30131d","type":"Segment"},{"attributes":{"dimension":1,"plot":{"id":"020b0725-352f-4b63-8f3f-f7dcc6376966","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a06cee5-6b50-457c-8541-27ec1916cd01","type":"CategoricalTicker"}},"id":"c597e5ff-2aff-4b1c-bd0d-d18aaea305e6","type":"Grid"},{"attributes":{"data_source":{"id":"ef1b857b-4fee-435d-b9ed-b9be29720386","type":"ColumnDataSource"},"glyph":{"id":"0c688e9c-6cfb-4786-b127-4f730ec4ce9a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d252b70c-4d19-436e-8645-5015bbe46378","type":"Circle"},"selection_glyph":null,"view":{"id":"36be1a9c-06be-48c4-af5a-ba282818cd6a","type":"CDSView"}},"id":"6b8d1b27-e413-4c3a-bc4f-b8cb69ccdb3f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c05cb129-2c92-4948-aa71-dd8b59972b30","type":"ColumnDataSource"},"glyph":{"id":"e7e38b73-06b4-45e0-bab5-970d53daa123","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ace6415e-a44d-4bd9-8f69-b1e0903845ea","type":"Rect"},"selection_glyph":null,"view":{"id":"3a692ee3-bf3b-4e04-ab96-15cc77769494","type":"CDSView"}},"id":"830e3aef-188f-4723-adff-b544e06e6ce7","type":"GlyphRenderer"},{"attributes":{},"id":"bf9c44ee-582b-4b66-94ca-4133986f4712","type":"CategoricalScale"},{"attributes":{"source":{"id":"ef1b857b-4fee-435d-b9ed-b9be29720386","type":"ColumnDataSource"}},"id":"36be1a9c-06be-48c4-af5a-ba282818cd6a","type":"CDSView"},{"attributes":{},"id":"356b7b20-7c47-4971-b752-033a31a87669","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"e5e71333-25ba-4c14-a1d1-b1a76ad9a702","type":"CategoricalTickFormatter"},"plot":{"id":"020b0725-352f-4b63-8f3f-f7dcc6376966","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a06cee5-6b50-457c-8541-27ec1916cd01","type":"CategoricalTicker"}},"id":"47f4d63a-142e-4f64-be21-1bc56e09f6f5","type":"CategoricalAxis"},{"attributes":{},"id":"e5e71333-25ba-4c14-a1d1-b1a76ad9a702","type":"CategoricalTickFormatter"},{"attributes":{},"id":"0a97e23b-66d2-4371-a20f-d03ccf5017f4","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c688e9c-6cfb-4786-b127-4f730ec4ce9a","type":"Circle"},{"attributes":{"data_source":{"id":"f5a89cb8-98f3-4e98-b96b-557da6157cc9","type":"ColumnDataSource"},"glyph":{"id":"9f5e7421-cae8-4ec2-b234-5fc6ee30131d","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7f3e8537-72fc-4d5e-b20f-d0a72773dd1a","type":"Segment"},"selection_glyph":null,"view":{"id":"5daa6d23-218f-48c6-8a29-c9d8196830e5","type":"CDSView"}},"id":"90a1a906-a732-489d-9d06-e4b6ee6f02ce","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"8c79b298-b706-4f0e-8577-30047a6a1516","type":"CategoricalTickFormatter"},"plot":{"id":"47b8fafa-ce2b-4cec-81c3-8d514ef44586","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a97e23b-66d2-4371-a20f-d03ccf5017f4","type":"CategoricalTicker"}},"id":"d803609a-06fe-47f6-9d05-0132da36a30b","type":"CategoricalAxis"},{"attributes":{"callback":null},"id":"380efce0-910b-4286-b21a-75f57cea0340","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"47b8fafa-ce2b-4cec-81c3-8d514ef44586","subtype":"Figure","type":"Plot"},"ticker":{"id":"356b7b20-7c47-4971-b752-033a31a87669","type":"CategoricalTicker"}},"id":"5ec0f153-180b-494e-9220-780e35df33fe","type":"Grid"},{"attributes":{"plot":{"id":"47b8fafa-ce2b-4cec-81c3-8d514ef44586","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a97e23b-66d2-4371-a20f-d03ccf5017f4","type":"CategoricalTicker"}},"id":"60b9a37c-f272-46f9-8d6f-7946c93b589b","type":"Grid"},{"attributes":{},"id":"c78f92aa-6ad1-49ac-aac2-36f1f708ede2","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"20521222-060b-41dd-8b49-b1118b447a9c","type":"Toolbar"},{"attributes":{},"id":"bcf748b0-b567-401c-8959-fa012d893716","type":"CategoricalScale"},{"attributes":{"plot":{"id":"020b0725-352f-4b63-8f3f-f7dcc6376966","subtype":"Figure","type":"Plot"},"ticker":{"id":"a55aabe6-38cd-4ca8-bb81-4ca95aca075d","type":"BasicTicker"}},"id":"18d9c7c0-caaf-4caf-a508-33c510489bd6","type":"Grid"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"e3b8cf5a-2ae2-492d-8959-818aa4346944","type":"FactorRange"},{"attributes":{},"id":"402887da-f9c3-41fa-b409-2403a8a3b0c2","type":"LinearScale"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"d5059f37-7811-405c-89b5-e3c0c2f73d92","type":"FactorRange"},{"attributes":{},"id":"8c79b298-b706-4f0e-8577-30047a6a1516","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"380efce0-910b-4286-b21a-75f57cea0340","type":"HoverTool"}]},"id":"0f2c5c3b-097a-41cf-bb34-1f8b248299a2","type":"Toolbar"}],"root_ids":["9f035ac5-79a4-4660-97f2-6f5a00c9cce0"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"fc400cee-9a2b-49ee-b833-31f9d178f3fb","elementid":"d1e123f2-7ba7-4539-92fb-7a9af26021a5","modelid":"9f035ac5-79a4-4660-97f2-6f5a00c9cce0"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/css/ion.rangeSlider.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/css/ion.rangeSlider.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/css/ion.rangeSlider.skinFlat.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/css/ion.rangeSlider.skinFlat.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/img/sprite-skin-flat.png");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/img/sprite-skin-flat.png");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();