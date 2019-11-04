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
      };var element = document.getElementById("6d1b090e-3f64-4a07-b062-b3963b6d1f57");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6d1b090e-3f64-4a07-b062-b3963b6d1f57' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a5e249b2-2047-48e1-9a43-4b2a13368678":{"roots":{"references":[{"attributes":{"data_source":{"id":"10792","type":"ColumnDataSource"},"glyph":{"id":"10793","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10794","type":"Line"},"selection_glyph":null,"view":{"id":"10796","type":"CDSView"}},"id":"10795","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"10785","type":"BoxAnnotation"}},"id":"10779","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"10802","type":"BasicTickFormatter"},"plot":{"id":"10758","subtype":"Figure","type":"Plot"},"ticker":{"id":"10773","type":"BasicTicker"}},"id":"10772","type":"LinearAxis"},{"attributes":{"formatter":{"id":"10800","type":"BasicTickFormatter"},"plot":{"id":"10758","subtype":"Figure","type":"Plot"},"ticker":{"id":"10768","type":"BasicTicker"}},"id":"10767","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10777","type":"PanTool"},{"id":"10778","type":"WheelZoomTool"},{"id":"10779","type":"BoxZoomTool"},{"id":"10780","type":"SaveTool"},{"id":"10781","type":"ResetTool"},{"id":"10782","type":"HelpTool"}]},"id":"10783","type":"Toolbar"},{"attributes":{},"id":"10800","type":"BasicTickFormatter"},{"attributes":{},"id":"10802","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10785","type":"BoxAnnotation"},{"attributes":{},"id":"10773","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"10758","subtype":"Figure","type":"Plot"},"ticker":{"id":"10773","type":"BasicTicker"}},"id":"10776","type":"Grid"},{"attributes":{"source":{"id":"10792","type":"ColumnDataSource"}},"id":"10796","type":"CDSView"},{"attributes":{},"id":"10781","type":"ResetTool"},{"attributes":{"callback":null},"id":"10759","type":"DataRange1d"},{"attributes":{},"id":"10782","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"10805","type":"Selection"},"selection_policy":{"id":"10804","type":"UnionRenderers"}},"id":"10792","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10793","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10794","type":"Line"},{"attributes":{},"id":"10805","type":"Selection"},{"attributes":{},"id":"10778","type":"WheelZoomTool"},{"attributes":{},"id":"10765","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"10798","type":"Title"},{"attributes":{"plot":{"id":"10758","subtype":"Figure","type":"Plot"},"ticker":{"id":"10768","type":"BasicTicker"}},"id":"10771","type":"Grid"},{"attributes":{},"id":"10763","type":"LinearScale"},{"attributes":{},"id":"10780","type":"SaveTool"},{"attributes":{"below":[{"id":"10767","type":"LinearAxis"}],"left":[{"id":"10772","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"10767","type":"LinearAxis"},{"id":"10771","type":"Grid"},{"id":"10772","type":"LinearAxis"},{"id":"10776","type":"Grid"},{"id":"10785","type":"BoxAnnotation"},{"id":"10795","type":"GlyphRenderer"}],"title":{"id":"10798","type":"Title"},"toolbar":{"id":"10783","type":"Toolbar"},"x_range":{"id":"10759","type":"DataRange1d"},"x_scale":{"id":"10763","type":"LinearScale"},"y_range":{"id":"10761","type":"DataRange1d"},"y_scale":{"id":"10765","type":"LinearScale"}},"id":"10758","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10804","type":"UnionRenderers"},{"attributes":{},"id":"10777","type":"PanTool"},{"attributes":{"callback":null},"id":"10761","type":"DataRange1d"},{"attributes":{},"id":"10768","type":"BasicTicker"}],"root_ids":["10758"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"a5e249b2-2047-48e1-9a43-4b2a13368678","roots":{"10758":"6d1b090e-3f64-4a07-b062-b3963b6d1f57"}}];
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