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
      };var element = document.getElementById("50d047b6-d199-4bbf-ac06-114db1d5bc76");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '50d047b6-d199-4bbf-ac06-114db1d5bc76' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c27b59b4-6bb7-48a7-a98e-b2b7b78e470e":{"roots":{"references":[{"attributes":{"formatter":{"id":"15973","type":"BasicTickFormatter"},"ticker":{"id":"15950","type":"BasicTicker"}},"id":"15949","type":"LinearAxis"},{"attributes":{"source":{"id":"15967","type":"ColumnDataSource"}},"id":"15971","type":"CDSView"},{"attributes":{"text":"line"},"id":"15934","type":"Title"},{"attributes":{},"id":"15959","type":"HelpTool"},{"attributes":{"formatter":{"id":"15975","type":"BasicTickFormatter"},"ticker":{"id":"15945","type":"BasicTicker"}},"id":"15944","type":"LinearAxis"},{"attributes":{},"id":"15950","type":"BasicTicker"},{"attributes":{},"id":"15973","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15954","type":"PanTool"},{"id":"15955","type":"WheelZoomTool"},{"id":"15956","type":"BoxZoomTool"},{"id":"15957","type":"SaveTool"},{"id":"15958","type":"ResetTool"},{"id":"15959","type":"HelpTool"}]},"id":"15960","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"15950","type":"BasicTicker"}},"id":"15953","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15979","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"15936","type":"DataRange1d"},{"attributes":{},"id":"15975","type":"BasicTickFormatter"},{"attributes":{},"id":"15978","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"15968","type":"Line"},{"attributes":{},"id":"15940","type":"LinearScale"},{"attributes":{},"id":"15977","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"15977","type":"Selection"},"selection_policy":{"id":"15978","type":"UnionRenderers"}},"id":"15967","type":"ColumnDataSource"},{"attributes":{},"id":"15942","type":"LinearScale"},{"attributes":{},"id":"15955","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"15938","type":"DataRange1d"},{"attributes":{},"id":"15945","type":"BasicTicker"},{"attributes":{},"id":"15954","type":"PanTool"},{"attributes":{"overlay":{"id":"15979","type":"BoxAnnotation"}},"id":"15956","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"15969","type":"Line"},{"attributes":{},"id":"15957","type":"SaveTool"},{"attributes":{"below":[{"id":"15944","type":"LinearAxis"}],"center":[{"id":"15948","type":"Grid"},{"id":"15953","type":"Grid"}],"left":[{"id":"15949","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15970","type":"GlyphRenderer"}],"title":{"id":"15934","type":"Title"},"toolbar":{"id":"15960","type":"Toolbar"},"x_range":{"id":"15936","type":"DataRange1d"},"x_scale":{"id":"15940","type":"LinearScale"},"y_range":{"id":"15938","type":"DataRange1d"},"y_scale":{"id":"15942","type":"LinearScale"}},"id":"15933","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"15945","type":"BasicTicker"}},"id":"15948","type":"Grid"},{"attributes":{"data_source":{"id":"15967","type":"ColumnDataSource"},"glyph":{"id":"15968","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15969","type":"Line"},"selection_glyph":null,"view":{"id":"15971","type":"CDSView"}},"id":"15970","type":"GlyphRenderer"},{"attributes":{},"id":"15958","type":"ResetTool"}],"root_ids":["15933"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"c27b59b4-6bb7-48a7-a98e-b2b7b78e470e","roots":{"15933":"50d047b6-d199-4bbf-ac06-114db1d5bc76"}}];
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