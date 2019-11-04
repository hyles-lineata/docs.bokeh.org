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
      };var element = document.getElementById("751f6132-6925-4a68-abee-eaf382dbb472");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '751f6132-6925-4a68-abee-eaf382dbb472' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"6294e280-7fa5-4207-a18a-6fcc4936e83a":{"roots":{"references":[{"attributes":{},"id":"15479","type":"BasicTicker"},{"attributes":{"callback":null},"id":"15465","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15509","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15483","type":"PanTool"},{"id":"15484","type":"WheelZoomTool"},{"id":"15485","type":"BoxZoomTool"},{"id":"15486","type":"SaveTool"},{"id":"15487","type":"ResetTool"},{"id":"15488","type":"HelpTool"}]},"id":"15489","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"15479","type":"BasicTicker"}},"id":"15482","type":"Grid"},{"attributes":{"data_source":{"id":"15496","type":"ColumnDataSource"},"glyph":{"id":"15497","type":"HArea"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15498","type":"HArea"},"selection_glyph":null,"view":{"id":"15500","type":"CDSView"}},"id":"15499","type":"GlyphRenderer"},{"attributes":{},"id":"15471","type":"LinearScale"},{"attributes":{"callback":null},"id":"15467","type":"DataRange1d"},{"attributes":{"source":{"id":"15496","type":"ColumnDataSource"}},"id":"15500","type":"CDSView"},{"attributes":{"fill_color":"#99D594","x1":{"field":"x1"},"x2":{"field":"x2"},"y":{"field":"y"}},"id":"15497","type":"HArea"},{"attributes":{},"id":"15469","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x1":[0,0,0],"x2":[1,4,2],"y":[1,2,3]},"selected":{"id":"15508","type":"Selection"},"selection_policy":{"id":"15507","type":"UnionRenderers"}},"id":"15496","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"15503","type":"BasicTickFormatter"},"ticker":{"id":"15474","type":"BasicTicker"}},"id":"15473","type":"LinearAxis"},{"attributes":{"text":""},"id":"15501","type":"Title"},{"attributes":{},"id":"15483","type":"PanTool"},{"attributes":{},"id":"15484","type":"WheelZoomTool"},{"attributes":{},"id":"15503","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"15473","type":"LinearAxis"}],"center":[{"id":"15477","type":"Grid"},{"id":"15482","type":"Grid"}],"left":[{"id":"15478","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15499","type":"GlyphRenderer"}],"title":{"id":"15501","type":"Title"},"toolbar":{"id":"15489","type":"Toolbar"},"x_range":{"id":"15465","type":"DataRange1d"},"x_scale":{"id":"15469","type":"LinearScale"},"y_range":{"id":"15467","type":"DataRange1d"},"y_scale":{"id":"15471","type":"LinearScale"}},"id":"15464","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"15509","type":"BoxAnnotation"}},"id":"15485","type":"BoxZoomTool"},{"attributes":{},"id":"15474","type":"BasicTicker"},{"attributes":{},"id":"15505","type":"BasicTickFormatter"},{"attributes":{},"id":"15486","type":"SaveTool"},{"attributes":{"ticker":{"id":"15474","type":"BasicTicker"}},"id":"15477","type":"Grid"},{"attributes":{},"id":"15507","type":"UnionRenderers"},{"attributes":{},"id":"15487","type":"ResetTool"},{"attributes":{"formatter":{"id":"15505","type":"BasicTickFormatter"},"ticker":{"id":"15479","type":"BasicTicker"}},"id":"15478","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x1":{"field":"x1"},"x2":{"field":"x2"},"y":{"field":"y"}},"id":"15498","type":"HArea"},{"attributes":{},"id":"15508","type":"Selection"},{"attributes":{},"id":"15488","type":"HelpTool"}],"root_ids":["15464"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"6294e280-7fa5-4207-a18a-6fcc4936e83a","roots":{"15464":"751f6132-6925-4a68-abee-eaf382dbb472"}}];
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