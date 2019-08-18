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
      };var element = document.getElementById("6c8444c8-de22-4789-bd3a-f2852c791c7f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6c8444c8-de22-4789-bd3a-f2852c791c7f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d3a1efb3-f570-4b2f-a625-991c7224565b":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"32992","subtype":"Figure","type":"Plot"},"ticker":{"id":"33007","type":"BasicTicker"}},"id":"33010","type":"Grid"},{"attributes":{"callback":null},"id":"32995","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33028","type":"DiamondCross"},{"attributes":{},"id":"32999","type":"LinearScale"},{"attributes":{},"id":"33034","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"33032","type":"Title"},{"attributes":{"overlay":{"id":"33019","type":"BoxAnnotation"}},"id":"33013","type":"BoxZoomTool"},{"attributes":{},"id":"33016","type":"HelpTool"},{"attributes":{"source":{"id":"33026","type":"ColumnDataSource"}},"id":"33030","type":"CDSView"},{"attributes":{"formatter":{"id":"33036","type":"BasicTickFormatter"},"plot":{"id":"32992","subtype":"Figure","type":"Plot"},"ticker":{"id":"33007","type":"BasicTicker"}},"id":"33006","type":"LinearAxis"},{"attributes":{},"id":"33036","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"32993","type":"DataRange1d"},{"attributes":{},"id":"32997","type":"LinearScale"},{"attributes":{},"id":"33011","type":"PanTool"},{"attributes":{},"id":"33014","type":"SaveTool"},{"attributes":{},"id":"33015","type":"ResetTool"},{"attributes":{},"id":"33038","type":"UnionRenderers"},{"attributes":{},"id":"33039","type":"Selection"},{"attributes":{"plot":{"id":"32992","subtype":"Figure","type":"Plot"},"ticker":{"id":"33002","type":"BasicTicker"}},"id":"33005","type":"Grid"},{"attributes":{},"id":"33007","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33039","type":"Selection"},"selection_policy":{"id":"33038","type":"UnionRenderers"}},"id":"33026","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33019","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"33001","type":"LinearAxis"}],"left":[{"id":"33006","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33001","type":"LinearAxis"},{"id":"33005","type":"Grid"},{"id":"33006","type":"LinearAxis"},{"id":"33010","type":"Grid"},{"id":"33019","type":"BoxAnnotation"},{"id":"33029","type":"GlyphRenderer"}],"title":{"id":"33032","type":"Title"},"toolbar":{"id":"33017","type":"Toolbar"},"x_range":{"id":"32993","type":"DataRange1d"},"x_scale":{"id":"32997","type":"LinearScale"},"y_range":{"id":"32995","type":"DataRange1d"},"y_scale":{"id":"32999","type":"LinearScale"}},"id":"32992","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33027","type":"DiamondCross"},{"attributes":{},"id":"33012","type":"WheelZoomTool"},{"attributes":{},"id":"33002","type":"BasicTicker"},{"attributes":{"data_source":{"id":"33026","type":"ColumnDataSource"},"glyph":{"id":"33027","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33028","type":"DiamondCross"},"selection_glyph":null,"view":{"id":"33030","type":"CDSView"}},"id":"33029","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"33034","type":"BasicTickFormatter"},"plot":{"id":"32992","subtype":"Figure","type":"Plot"},"ticker":{"id":"33002","type":"BasicTicker"}},"id":"33001","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33011","type":"PanTool"},{"id":"33012","type":"WheelZoomTool"},{"id":"33013","type":"BoxZoomTool"},{"id":"33014","type":"SaveTool"},{"id":"33015","type":"ResetTool"},{"id":"33016","type":"HelpTool"}]},"id":"33017","type":"Toolbar"}],"root_ids":["32992"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"d3a1efb3-f570-4b2f-a625-991c7224565b","roots":{"32992":"6c8444c8-de22-4789-bd3a-f2852c791c7f"}}];
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