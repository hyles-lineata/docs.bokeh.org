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
      };var element = document.getElementById("efc34ccf-2f6c-4275-8509-8cc63c54c375");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'efc34ccf-2f6c-4275-8509-8cc63c54c375' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"b2103ce9-e14a-476f-87ef-100c0c093611":{"roots":{"references":[{"attributes":{},"id":"31291","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"31275","type":"Plot"},"ticker":{"id":"31284","type":"BasicTicker"}},"id":"31285","type":"Grid"},{"attributes":{},"id":"31282","type":"BasicTicker"},{"attributes":{},"id":"31295","type":"UnionRenderers"},{"attributes":{},"id":"31284","type":"BasicTicker"},{"attributes":{},"id":"31288","type":"LinearScale"},{"attributes":{},"id":"31286","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"31277","type":"SquareX"},{"attributes":{"source":{"id":"31274","type":"ColumnDataSource"}},"id":"31279","type":"CDSView"},{"attributes":{"data_source":{"id":"31274","type":"ColumnDataSource"},"glyph":{"id":"31277","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"31279","type":"CDSView"}},"id":"31278","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"31280","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"31281","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"31278","type":"GlyphRenderer"},{"id":"31280","type":"LinearAxis"},{"id":"31281","type":"LinearAxis"},{"id":"31283","type":"Grid"},{"id":"31285","type":"Grid"}],"title":null,"toolbar":{"id":"31289","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31287","type":"DataRange1d"},"x_scale":{"id":"31286","type":"LinearScale"},"y_range":{"id":"31290","type":"DataRange1d"},"y_scale":{"id":"31288","type":"LinearScale"}},"id":"31275","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"31289","type":"Toolbar"},{"attributes":{"formatter":{"id":"31291","type":"BasicTickFormatter"},"plot":{"id":"31275","type":"Plot"},"ticker":{"id":"31284","type":"BasicTicker"}},"id":"31281","type":"LinearAxis"},{"attributes":{},"id":"31293","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"31275","type":"Plot"},"ticker":{"id":"31282","type":"BasicTicker"}},"id":"31283","type":"Grid"},{"attributes":{"callback":null},"id":"31290","type":"DataRange1d"},{"attributes":{"formatter":{"id":"31293","type":"BasicTickFormatter"},"plot":{"id":"31275","type":"Plot"},"ticker":{"id":"31282","type":"BasicTicker"}},"id":"31280","type":"LinearAxis"},{"attributes":{"callback":null},"id":"31287","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"31296","type":"Selection"},"selection_policy":{"id":"31295","type":"UnionRenderers"}},"id":"31274","type":"ColumnDataSource"},{"attributes":{},"id":"31296","type":"Selection"}],"root_ids":["31275"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"b2103ce9-e14a-476f-87ef-100c0c093611","roots":{"31275":"efc34ccf-2f6c-4275-8509-8cc63c54c375"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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