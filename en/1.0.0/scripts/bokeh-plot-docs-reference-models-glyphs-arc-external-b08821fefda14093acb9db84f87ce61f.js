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
      };var element = document.getElementById("33aa9d13-c43e-4e97-9b05-32f20e0fe0e0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '33aa9d13-c43e-4e97-9b05-32f20e0fe0e0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"495261df-beaa-46da-9838-318f3934346a":{"roots":{"references":[{"attributes":{"formatter":{"id":"27857","type":"BasicTickFormatter"},"plot":{"id":"27838","type":"Plot"},"ticker":{"id":"27847","type":"BasicTicker"}},"id":"27844","type":"LinearAxis"},{"attributes":{},"id":"27855","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"27843","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"27844","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"27841","type":"GlyphRenderer"},{"id":"27843","type":"LinearAxis"},{"id":"27844","type":"LinearAxis"},{"id":"27846","type":"Grid"},{"id":"27848","type":"Grid"}],"title":null,"toolbar":{"id":"27850","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27853","type":"DataRange1d"},"x_scale":{"id":"27852","type":"LinearScale"},"y_range":{"id":"27849","type":"DataRange1d"},"y_scale":{"id":"27851","type":"LinearScale"}},"id":"27838","type":"Plot"},{"attributes":{},"id":"27847","type":"BasicTicker"},{"attributes":{},"id":"27845","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"27850","type":"Toolbar"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"27858","type":"Selection"},"selection_policy":{"id":"27859","type":"UnionRenderers"}},"id":"27837","type":"ColumnDataSource"},{"attributes":{},"id":"27859","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"27838","type":"Plot"},"ticker":{"id":"27847","type":"BasicTicker"}},"id":"27848","type":"Grid"},{"attributes":{"data_source":{"id":"27837","type":"ColumnDataSource"},"glyph":{"id":"27840","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"27842","type":"CDSView"}},"id":"27841","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"27849","type":"DataRange1d"},{"attributes":{},"id":"27858","type":"Selection"},{"attributes":{},"id":"27857","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"27840","type":"Arc"},{"attributes":{"callback":null},"id":"27853","type":"DataRange1d"},{"attributes":{"plot":{"id":"27838","type":"Plot"},"ticker":{"id":"27845","type":"BasicTicker"}},"id":"27846","type":"Grid"},{"attributes":{"source":{"id":"27837","type":"ColumnDataSource"}},"id":"27842","type":"CDSView"},{"attributes":{"formatter":{"id":"27855","type":"BasicTickFormatter"},"plot":{"id":"27838","type":"Plot"},"ticker":{"id":"27845","type":"BasicTicker"}},"id":"27843","type":"LinearAxis"},{"attributes":{},"id":"27852","type":"LinearScale"},{"attributes":{},"id":"27851","type":"LinearScale"}],"root_ids":["27838"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"495261df-beaa-46da-9838-318f3934346a","roots":{"27838":"33aa9d13-c43e-4e97-9b05-32f20e0fe0e0"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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