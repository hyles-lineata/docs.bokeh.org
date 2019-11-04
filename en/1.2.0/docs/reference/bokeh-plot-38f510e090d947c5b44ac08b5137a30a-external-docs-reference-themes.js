(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("4afdf59e-ec26-4d2c-ab68-29e3db92d973");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4afdf59e-ec26-4d2c-ab68-29e3db92d973' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"bdf12fba-07ec-4aff-83a8-ba1e88751aa2":{"roots":{"references":[{"attributes":{"callback":null},"id":"17691","type":"DataRange1d"},{"attributes":{},"id":"17730","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17709","type":"PanTool"},{"id":"17710","type":"WheelZoomTool"},{"id":"17711","type":"BoxZoomTool"},{"id":"17712","type":"SaveTool"},{"id":"17713","type":"ResetTool"},{"id":"17714","type":"HelpTool"}]},"id":"17715","type":"Toolbar"},{"attributes":{},"id":"17695","type":"LinearScale"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#E0E0E0"},"axis_label_text_font":"Helvetica","axis_label_text_font_size":{"value":"1.25em"},"axis_label_text_font_style":"normal","axis_line_alpha":{"value":0},"axis_line_color":{"value":"#E0E0E0"},"formatter":{"id":"17730","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#E0E0E0"},"major_label_text_font":"Helvetica","major_label_text_font_size":{"value":"1.025em"},"major_tick_line_alpha":{"value":0},"major_tick_line_color":{"value":"#E0E0E0"},"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#E0E0E0"},"ticker":{"id":"17700","type":"BasicTicker"}},"id":"17699","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17723","type":"Line"},{"attributes":{"grid_line_alpha":0.25,"grid_line_color":"#E0E0E0","ticker":{"id":"17700","type":"BasicTicker"}},"id":"17703","type":"Grid"},{"attributes":{},"id":"17713","type":"ResetTool"},{"attributes":{},"id":"17710","type":"WheelZoomTool"},{"attributes":{},"id":"17712","type":"SaveTool"},{"attributes":{},"id":"17732","type":"Selection"},{"attributes":{"background_fill_color":{"value":"#20262B"},"below":[{"id":"17699","type":"LinearAxis"}],"border_fill_color":{"value":"#15191C"},"center":[{"id":"17703","type":"Grid"},{"id":"17708","type":"Grid"}],"left":[{"id":"17704","type":"LinearAxis"}],"outline_line_alpha":{"value":0.25},"outline_line_color":{"value":"#E0E0E0"},"plot_height":300,"plot_width":300,"renderers":[{"id":"17725","type":"GlyphRenderer"}],"title":{"id":"17689","type":"Title"},"toolbar":{"id":"17715","type":"Toolbar"},"x_range":{"id":"17691","type":"DataRange1d"},"x_scale":{"id":"17695","type":"LinearScale"},"y_range":{"id":"17693","type":"DataRange1d"},"y_scale":{"id":"17697","type":"LinearScale"}},"id":"17688","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"17693","type":"DataRange1d"},{"attributes":{},"id":"17733","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17724","type":"Line"},{"attributes":{"dimension":1,"grid_line_alpha":0.25,"grid_line_color":"#E0E0E0","ticker":{"id":"17705","type":"BasicTicker"}},"id":"17708","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"17732","type":"Selection"},"selection_policy":{"id":"17733","type":"UnionRenderers"}},"id":"17722","type":"ColumnDataSource"},{"attributes":{"text":"dark_minimal","text_color":{"value":"#E0E0E0"},"text_font":"Helvetica","text_font_size":{"value":"1.15em"}},"id":"17689","type":"Title"},{"attributes":{},"id":"17709","type":"PanTool"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#E0E0E0"},"axis_label_text_font":"Helvetica","axis_label_text_font_size":{"value":"1.25em"},"axis_label_text_font_style":"normal","axis_line_alpha":{"value":0},"axis_line_color":{"value":"#E0E0E0"},"formatter":{"id":"17728","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#E0E0E0"},"major_label_text_font":"Helvetica","major_label_text_font_size":{"value":"1.025em"},"major_tick_line_alpha":{"value":0},"major_tick_line_color":{"value":"#E0E0E0"},"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#E0E0E0"},"ticker":{"id":"17705","type":"BasicTicker"}},"id":"17704","type":"LinearAxis"},{"attributes":{},"id":"17697","type":"LinearScale"},{"attributes":{},"id":"17714","type":"HelpTool"},{"attributes":{"source":{"id":"17722","type":"ColumnDataSource"}},"id":"17726","type":"CDSView"},{"attributes":{},"id":"17700","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17734","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"17722","type":"ColumnDataSource"},"glyph":{"id":"17723","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17724","type":"Line"},"selection_glyph":null,"view":{"id":"17726","type":"CDSView"}},"id":"17725","type":"GlyphRenderer"},{"attributes":{},"id":"17728","type":"BasicTickFormatter"},{"attributes":{},"id":"17705","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17734","type":"BoxAnnotation"}},"id":"17711","type":"BoxZoomTool"}],"root_ids":["17688"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"bdf12fba-07ec-4aff-83a8-ba1e88751aa2","roots":{"17688":"4afdf59e-ec26-4d2c-ab68-29e3db92d973"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();