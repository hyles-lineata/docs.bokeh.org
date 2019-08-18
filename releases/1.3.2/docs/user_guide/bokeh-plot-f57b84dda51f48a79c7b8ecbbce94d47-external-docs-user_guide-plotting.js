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
      };var element = document.getElementById("5fd23ce0-2a0b-45dd-8622-9d70fcfa1a5f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5fd23ce0-2a0b-45dd-8622-9d70fcfa1a5f' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"d3053e99-a62a-4db2-98d8-1dafb997b8d7":{"roots":{"references":[{"attributes":{"callback":null},"id":"29921","type":"DataRange1d"},{"attributes":{"formatter":{"id":"29961","type":"BasicTickFormatter"},"ticker":{"id":"29935","type":"BasicTicker"}},"id":"29934","type":"LinearAxis"},{"attributes":{},"id":"29943","type":"ResetTool"},{"attributes":{"data_source":{"id":"29952","type":"ColumnDataSource"},"glyph":{"id":"29953","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29954","type":"Ray"},"selection_glyph":null,"view":{"id":"29956","type":"CDSView"}},"id":"29955","type":"GlyphRenderer"},{"attributes":{},"id":"29927","type":"LinearScale"},{"attributes":{"callback":null},"id":"29923","type":"DataRange1d"},{"attributes":{},"id":"29963","type":"UnionRenderers"},{"attributes":{},"id":"29935","type":"BasicTicker"},{"attributes":{},"id":"29942","type":"SaveTool"},{"attributes":{"callback":null,"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"29964","type":"Selection"},"selection_policy":{"id":"29963","type":"UnionRenderers"}},"id":"29952","type":"ColumnDataSource"},{"attributes":{},"id":"29930","type":"BasicTicker"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29954","type":"Ray"},{"attributes":{},"id":"29961","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29965","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"29930","type":"BasicTicker"}},"id":"29933","type":"Grid"},{"attributes":{},"id":"29959","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"29952","type":"ColumnDataSource"}},"id":"29956","type":"CDSView"},{"attributes":{},"id":"29939","type":"PanTool"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29953","type":"Ray"},{"attributes":{},"id":"29925","type":"LinearScale"},{"attributes":{"formatter":{"id":"29959","type":"BasicTickFormatter"},"ticker":{"id":"29930","type":"BasicTicker"}},"id":"29929","type":"LinearAxis"},{"attributes":{},"id":"29944","type":"HelpTool"},{"attributes":{"overlay":{"id":"29965","type":"BoxAnnotation"}},"id":"29941","type":"BoxZoomTool"},{"attributes":{"text":""},"id":"29957","type":"Title"},{"attributes":{},"id":"29940","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"29935","type":"BasicTicker"}},"id":"29938","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29939","type":"PanTool"},{"id":"29940","type":"WheelZoomTool"},{"id":"29941","type":"BoxZoomTool"},{"id":"29942","type":"SaveTool"},{"id":"29943","type":"ResetTool"},{"id":"29944","type":"HelpTool"}]},"id":"29945","type":"Toolbar"},{"attributes":{},"id":"29964","type":"Selection"},{"attributes":{"below":[{"id":"29929","type":"LinearAxis"}],"center":[{"id":"29933","type":"Grid"},{"id":"29938","type":"Grid"}],"left":[{"id":"29934","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29955","type":"GlyphRenderer"}],"title":{"id":"29957","type":"Title"},"toolbar":{"id":"29945","type":"Toolbar"},"x_range":{"id":"29921","type":"DataRange1d"},"x_scale":{"id":"29925","type":"LinearScale"},"y_range":{"id":"29923","type":"DataRange1d"},"y_scale":{"id":"29927","type":"LinearScale"}},"id":"29920","subtype":"Figure","type":"Plot"}],"root_ids":["29920"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"d3053e99-a62a-4db2-98d8-1dafb997b8d7","roots":{"29920":"5fd23ce0-2a0b-45dd-8622-9d70fcfa1a5f"}}];
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