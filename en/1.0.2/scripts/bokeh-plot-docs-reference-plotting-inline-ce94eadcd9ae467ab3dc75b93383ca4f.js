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
      };var element = document.getElementById("9198cb3d-6c25-47ec-a27e-b066fddd71c1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9198cb3d-6c25-47ec-a27e-b066fddd71c1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"d5fccc6b-d761-47a6-b07a-a549b6745801":{"roots":{"references":[{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"34205","type":"Ray"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34188","type":"PanTool"},{"id":"34189","type":"WheelZoomTool"},{"id":"34190","type":"BoxZoomTool"},{"id":"34191","type":"SaveTool"},{"id":"34192","type":"ResetTool"},{"id":"34193","type":"HelpTool"}]},"id":"34194","type":"Toolbar"},{"attributes":{"source":{"id":"34203","type":"ColumnDataSource"}},"id":"34207","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"34169","subtype":"Figure","type":"Plot"},"ticker":{"id":"34184","type":"BasicTicker"}},"id":"34187","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"34209","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34196","type":"BoxAnnotation"},{"attributes":{},"id":"34191","type":"SaveTool"},{"attributes":{},"id":"34184","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34172","type":"DataRange1d"},{"attributes":{"data_source":{"id":"34203","type":"ColumnDataSource"},"glyph":{"id":"34204","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34205","type":"Ray"},"selection_glyph":null,"view":{"id":"34207","type":"CDSView"}},"id":"34206","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"34211","type":"BasicTickFormatter"},"plot":{"id":"34169","subtype":"Figure","type":"Plot"},"ticker":{"id":"34179","type":"BasicTicker"}},"id":"34178","type":"LinearAxis"},{"attributes":{"overlay":{"id":"34196","type":"BoxAnnotation"}},"id":"34190","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"34178","type":"LinearAxis"}],"left":[{"id":"34183","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34178","type":"LinearAxis"},{"id":"34182","type":"Grid"},{"id":"34183","type":"LinearAxis"},{"id":"34187","type":"Grid"},{"id":"34196","type":"BoxAnnotation"},{"id":"34206","type":"GlyphRenderer"}],"title":{"id":"34209","type":"Title"},"toolbar":{"id":"34194","type":"Toolbar"},"x_range":{"id":"34170","type":"DataRange1d"},"x_scale":{"id":"34174","type":"LinearScale"},"y_range":{"id":"34172","type":"DataRange1d"},"y_scale":{"id":"34176","type":"LinearScale"}},"id":"34169","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34192","type":"ResetTool"},{"attributes":{},"id":"34189","type":"WheelZoomTool"},{"attributes":{},"id":"34216","type":"Selection"},{"attributes":{},"id":"34213","type":"BasicTickFormatter"},{"attributes":{},"id":"34188","type":"PanTool"},{"attributes":{},"id":"34179","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34170","type":"DataRange1d"},{"attributes":{},"id":"34193","type":"HelpTool"},{"attributes":{},"id":"34174","type":"LinearScale"},{"attributes":{"formatter":{"id":"34213","type":"BasicTickFormatter"},"plot":{"id":"34169","subtype":"Figure","type":"Plot"},"ticker":{"id":"34184","type":"BasicTicker"}},"id":"34183","type":"LinearAxis"},{"attributes":{},"id":"34215","type":"UnionRenderers"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"34204","type":"Ray"},{"attributes":{},"id":"34176","type":"LinearScale"},{"attributes":{"plot":{"id":"34169","subtype":"Figure","type":"Plot"},"ticker":{"id":"34179","type":"BasicTicker"}},"id":"34182","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34216","type":"Selection"},"selection_policy":{"id":"34215","type":"UnionRenderers"}},"id":"34203","type":"ColumnDataSource"},{"attributes":{},"id":"34211","type":"BasicTickFormatter"}],"root_ids":["34169"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"d5fccc6b-d761-47a6-b07a-a549b6745801","roots":{"34169":"9198cb3d-6c25-47ec-a27e-b066fddd71c1"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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