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
      };var element = document.getElementById("6cf202bb-13f8-4fe9-ba23-747a63f8564e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6cf202bb-13f8-4fe9-ba23-747a63f8564e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"180edc1c-7e92-4cd5-a063-6d532249733b":{"roots":{"references":[{"attributes":{},"id":"17268","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17303","type":"BoxAnnotation"}},"id":"17279","type":"BoxZoomTool"},{"attributes":{"text":""},"id":"17295","type":"Title"},{"attributes":{},"id":"17265","type":"LinearScale"},{"attributes":{"callback":null},"id":"17259","type":"DataRange1d"},{"attributes":{"ticker":{"id":"17268","type":"BasicTicker"}},"id":"17271","type":"Grid"},{"attributes":{},"id":"17301","type":"Selection"},{"attributes":{"below":[{"id":"17267","type":"LinearAxis"}],"center":[{"id":"17271","type":"Grid"},{"id":"17276","type":"Grid"}],"left":[{"id":"17272","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17293","type":"GlyphRenderer"}],"title":{"id":"17295","type":"Title"},"toolbar":{"id":"17283","type":"Toolbar"},"x_range":{"id":"17259","type":"DataRange1d"},"x_scale":{"id":"17263","type":"LinearScale"},"y_range":{"id":"17261","type":"DataRange1d"},"y_scale":{"id":"17265","type":"LinearScale"}},"id":"17258","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"17297","type":"BasicTickFormatter"},"ticker":{"id":"17273","type":"BasicTicker"}},"id":"17272","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17290","type":"ColumnDataSource"},"glyph":{"id":"17291","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17292","type":"VBar"},"selection_glyph":null,"view":{"id":"17294","type":"CDSView"}},"id":"17293","type":"GlyphRenderer"},{"attributes":{},"id":"17282","type":"HelpTool"},{"attributes":{"formatter":{"id":"17299","type":"BasicTickFormatter"},"ticker":{"id":"17268","type":"BasicTicker"}},"id":"17267","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17277","type":"PanTool"},{"id":"17278","type":"WheelZoomTool"},{"id":"17279","type":"BoxZoomTool"},{"id":"17280","type":"SaveTool"},{"id":"17281","type":"ResetTool"},{"id":"17282","type":"HelpTool"}]},"id":"17283","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"17291","type":"VBar"},{"attributes":{},"id":"17299","type":"BasicTickFormatter"},{"attributes":{},"id":"17302","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"17273","type":"BasicTicker"}},"id":"17276","type":"Grid"},{"attributes":{},"id":"17263","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"17292","type":"VBar"},{"attributes":{},"id":"17297","type":"BasicTickFormatter"},{"attributes":{},"id":"17277","type":"PanTool"},{"attributes":{},"id":"17278","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17303","type":"BoxAnnotation"},{"attributes":{},"id":"17273","type":"BasicTicker"},{"attributes":{},"id":"17280","type":"SaveTool"},{"attributes":{"callback":null,"data":{"top":[1,2,3],"x":[1,2,3]},"selected":{"id":"17301","type":"Selection"},"selection_policy":{"id":"17302","type":"UnionRenderers"}},"id":"17290","type":"ColumnDataSource"},{"attributes":{},"id":"17281","type":"ResetTool"},{"attributes":{"callback":null},"id":"17261","type":"DataRange1d"},{"attributes":{"source":{"id":"17290","type":"ColumnDataSource"}},"id":"17294","type":"CDSView"}],"root_ids":["17258"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"180edc1c-7e92-4cd5-a063-6d532249733b","roots":{"17258":"6cf202bb-13f8-4fe9-ba23-747a63f8564e"}}];
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