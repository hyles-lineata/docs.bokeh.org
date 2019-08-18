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
      };var element = document.getElementById("927e5b64-73a6-4588-b905-15bf17b5b992");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '927e5b64-73a6-4588-b905-15bf17b5b992' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c9174ea4-307f-4c0a-b544-65827704b489":{"roots":{"references":[{"attributes":{},"id":"17970","type":"LinearScale"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"17986","type":"Line"},{"attributes":{},"id":"17998","type":"BasicTickFormatter"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"17991","type":"Line"},{"attributes":{"plot":null,"text":""},"id":"17996","type":"Title"},{"attributes":{},"id":"18003","type":"Selection"},{"attributes":{"callback":null},"id":"17968","type":"DataRange1d"},{"attributes":{"callback":null},"id":"17966","type":"DataRange1d"},{"attributes":{"below":[{"id":"17974","type":"LinearAxis"}],"left":[{"id":"17979","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"17974","type":"LinearAxis"},{"id":"17978","type":"Grid"},{"id":"17979","type":"LinearAxis"},{"id":"17983","type":"Grid"},{"id":"17988","type":"GlyphRenderer"},{"id":"17993","type":"GlyphRenderer"}],"title":{"id":"17996","type":"Title"},"toolbar":{"id":"17984","type":"Toolbar"},"x_range":{"id":"17966","type":"DataRange1d"},"x_scale":{"id":"17970","type":"LinearScale"},"y_range":{"id":"17968","type":"DataRange1d"},"y_scale":{"id":"17972","type":"LinearScale"}},"id":"17965","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"17990","type":"ColumnDataSource"}},"id":"17994","type":"CDSView"},{"attributes":{"data_source":{"id":"17985","type":"ColumnDataSource"},"glyph":{"id":"17986","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17987","type":"Line"},"selection_glyph":null,"view":{"id":"17989","type":"CDSView"}},"id":"17988","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"17965","subtype":"Figure","type":"Plot"},"ticker":{"id":"17980","type":"BasicTicker"}},"id":"17983","type":"Grid"},{"attributes":{"plot":{"id":"17965","subtype":"Figure","type":"Plot"},"ticker":{"id":"17975","type":"BasicTicker"},"visible":false},"id":"17978","type":"Grid"},{"attributes":{"source":{"id":"17985","type":"ColumnDataSource"}},"id":"17989","type":"CDSView"},{"attributes":{"data_source":{"id":"17990","type":"ColumnDataSource"},"glyph":{"id":"17991","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17992","type":"Line"},"selection_glyph":null,"view":{"id":"17994","type":"CDSView"},"visible":false},"id":"17993","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17987","type":"Line"},{"attributes":{},"id":"18001","type":"Selection"},{"attributes":{},"id":"17980","type":"BasicTicker"},{"attributes":{},"id":"18004","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17992","type":"Line"},{"attributes":{"formatter":{"id":"17998","type":"BasicTickFormatter"},"plot":{"id":"17965","subtype":"Figure","type":"Plot"},"ticker":{"id":"17975","type":"BasicTicker"},"visible":false},"id":"17974","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"17984","type":"Toolbar"},{"attributes":{},"id":"17975","type":"BasicTicker"},{"attributes":{},"id":"17972","type":"LinearScale"},{"attributes":{},"id":"18002","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"18000","type":"BasicTickFormatter"},"plot":{"id":"17965","subtype":"Figure","type":"Plot"},"ticker":{"id":"17980","type":"BasicTicker"}},"id":"17979","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"18001","type":"Selection"},"selection_policy":{"id":"18002","type":"UnionRenderers"}},"id":"17985","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"18003","type":"Selection"},"selection_policy":{"id":"18004","type":"UnionRenderers"}},"id":"17990","type":"ColumnDataSource"},{"attributes":{},"id":"18000","type":"BasicTickFormatter"}],"root_ids":["17965"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"c9174ea4-307f-4c0a-b544-65827704b489","roots":{"17965":"927e5b64-73a6-4588-b905-15bf17b5b992"}}];
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