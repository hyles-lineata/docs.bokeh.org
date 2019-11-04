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
      };var element = document.getElementById("c0dcd735-e03d-4d9a-b23c-9dc8c27ca465");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c0dcd735-e03d-4d9a-b23c-9dc8c27ca465' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
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
                    
                  var docs_json = '{"df8714f2-5632-4c2a-9554-d69d2add4468":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"30730","type":"LogTicker"}},"id":"30733","type":"Grid"},{"attributes":{},"id":"30734","type":"PanTool"},{"attributes":{},"id":"30737","type":"SaveTool"},{"attributes":{"text":""},"id":"30757","type":"Title"},{"attributes":{},"id":"30766","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"30752","type":"ColumnDataSource"},"glyph":{"id":"30753","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30754","type":"Circle"},"selection_glyph":null,"view":{"id":"30756","type":"CDSView"}},"id":"30755","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"30761","type":"BasicTickFormatter"},"ticker":{"id":"30725","type":"BasicTicker"}},"id":"30724","type":"LinearAxis"},{"attributes":{"below":[{"id":"30724","type":"LinearAxis"}],"center":[{"id":"30728","type":"Grid"},{"id":"30733","type":"Grid"}],"left":[{"id":"30729","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30750","type":"GlyphRenderer"},{"id":"30755","type":"GlyphRenderer"}],"title":{"id":"30757","type":"Title"},"toolbar":{"id":"30740","type":"Toolbar"},"x_range":{"id":"30716","type":"DataRange1d"},"x_scale":{"id":"30720","type":"LinearScale"},"y_range":{"id":"30718","type":"DataRange1d"},"y_scale":{"id":"30722","type":"LogScale"}},"id":"30715","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"30759","type":"LogTickFormatter"},"ticker":{"id":"30730","type":"LogTicker"}},"id":"30729","type":"LogAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30749","type":"Line"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30748","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"30753","type":"Circle"},{"attributes":{"source":{"id":"30752","type":"ColumnDataSource"}},"id":"30756","type":"CDSView"},{"attributes":{},"id":"30725","type":"BasicTicker"},{"attributes":{},"id":"30763","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"30765","type":"Selection"},"selection_policy":{"id":"30766","type":"UnionRenderers"}},"id":"30752","type":"ColumnDataSource"},{"attributes":{},"id":"30739","type":"HelpTool"},{"attributes":{},"id":"30765","type":"Selection"},{"attributes":{},"id":"30764","type":"UnionRenderers"},{"attributes":{"source":{"id":"30747","type":"ColumnDataSource"}},"id":"30751","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30734","type":"PanTool"},{"id":"30735","type":"WheelZoomTool"},{"id":"30736","type":"BoxZoomTool"},{"id":"30737","type":"SaveTool"},{"id":"30738","type":"ResetTool"},{"id":"30739","type":"HelpTool"}]},"id":"30740","type":"Toolbar"},{"attributes":{},"id":"30761","type":"BasicTickFormatter"},{"attributes":{"ticker":null},"id":"30759","type":"LogTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30767","type":"BoxAnnotation"},{"attributes":{},"id":"30735","type":"WheelZoomTool"},{"attributes":{},"id":"30720","type":"LinearScale"},{"attributes":{},"id":"30738","type":"ResetTool"},{"attributes":{"ticker":{"id":"30725","type":"BasicTicker"}},"id":"30728","type":"Grid"},{"attributes":{},"id":"30722","type":"LogScale"},{"attributes":{"overlay":{"id":"30767","type":"BoxAnnotation"}},"id":"30736","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"30763","type":"Selection"},"selection_policy":{"id":"30764","type":"UnionRenderers"}},"id":"30747","type":"ColumnDataSource"},{"attributes":{"num_minor_ticks":10},"id":"30730","type":"LogTicker"},{"attributes":{"callback":null},"id":"30718","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"30754","type":"Circle"},{"attributes":{"data_source":{"id":"30747","type":"ColumnDataSource"},"glyph":{"id":"30748","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30749","type":"Line"},"selection_glyph":null,"view":{"id":"30751","type":"CDSView"}},"id":"30750","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"30716","type":"DataRange1d"}],"root_ids":["30715"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"df8714f2-5632-4c2a-9554-d69d2add4468","roots":{"30715":"c0dcd735-e03d-4d9a-b23c-9dc8c27ca465"}}];
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