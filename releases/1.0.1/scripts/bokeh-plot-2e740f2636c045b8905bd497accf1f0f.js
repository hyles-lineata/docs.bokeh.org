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
      };var element = document.getElementById("978038bf-c256-4120-99fc-529006fc6804");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '978038bf-c256-4120-99fc-529006fc6804' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"08f50d23-3a61-4a21-829c-f38667151d6a":{"roots":{"references":[{"attributes":{"data_source":{"id":"1225","type":"ColumnDataSource"},"glyph":{"id":"1276","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1277","type":"VBar"},"selection_glyph":null,"view":{"id":"1279","type":"CDSView"}},"id":"1278","type":"GlyphRenderer"},{"attributes":{},"id":"1242","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"1229","type":"FactorRange"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"1278","type":"GlyphRenderer"}]},"id":"1287","type":"LegendItem"},{"attributes":{"items":[{"id":"1259","type":"LegendItem"},{"id":"1273","type":"LegendItem"},{"id":"1287","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"1227","subtype":"Figure","type":"Plot"}},"id":"1258","type":"Legend"},{"attributes":{"data_source":{"id":"1225","type":"ColumnDataSource"},"glyph":{"id":"1249","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1250","type":"VBar"},"selection_glyph":null,"view":{"id":"1252","type":"CDSView"}},"id":"1251","type":"GlyphRenderer"},{"attributes":{"range":{"id":"1229","type":"FactorRange"},"value":-0.25},"id":"1247","type":"Dodge"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1247","type":"Dodge"}}},"id":"1250","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1246","type":"Toolbar"},{"attributes":{},"id":"1233","type":"CategoricalScale"},{"attributes":{"range":{"id":"1229","type":"FactorRange"}},"id":"1260","type":"Dodge"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1227","subtype":"Figure","type":"Plot"},"ticker":{"id":"1238","type":"CategoricalTicker"}},"id":"1240","type":"Grid"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1271","type":"Selection"},"selection_policy":{"id":"1272","type":"UnionRenderers"}},"id":"1225","type":"ColumnDataSource"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"1251","type":"GlyphRenderer"}]},"id":"1259","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1260","type":"Dodge"}}},"id":"1262","type":"VBar"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1247","type":"Dodge"}}},"id":"1249","type":"VBar"},{"attributes":{"below":[{"id":"1237","type":"CategoricalAxis"}],"left":[{"id":"1241","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"1237","type":"CategoricalAxis"},{"id":"1240","type":"Grid"},{"id":"1241","type":"LinearAxis"},{"id":"1245","type":"Grid"},{"id":"1258","type":"Legend"},{"id":"1251","type":"GlyphRenderer"},{"id":"1264","type":"GlyphRenderer"},{"id":"1278","type":"GlyphRenderer"}],"title":{"id":"1226","type":"Title"},"toolbar":{"id":"1246","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1229","type":"FactorRange"},"x_scale":{"id":"1233","type":"CategoricalScale"},"y_range":{"id":"1231","type":"Range1d"},"y_scale":{"id":"1235","type":"LinearScale"}},"id":"1227","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1260","type":"Dodge"}}},"id":"1263","type":"VBar"},{"attributes":{"source":{"id":"1225","type":"ColumnDataSource"}},"id":"1265","type":"CDSView"},{"attributes":{"data_source":{"id":"1225","type":"ColumnDataSource"},"glyph":{"id":"1262","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1263","type":"VBar"},"selection_glyph":null,"view":{"id":"1265","type":"CDSView"}},"id":"1264","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"1226","type":"Title"},{"attributes":{},"id":"1271","type":"Selection"},{"attributes":{"callback":null,"end":10},"id":"1231","type":"Range1d"},{"attributes":{},"id":"1257","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1225","type":"ColumnDataSource"}},"id":"1279","type":"CDSView"},{"attributes":{},"id":"1255","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"1255","type":"CategoricalTickFormatter"},"plot":{"id":"1227","subtype":"Figure","type":"Plot"},"ticker":{"id":"1238","type":"CategoricalTicker"}},"id":"1237","type":"CategoricalAxis"},{"attributes":{},"id":"1272","type":"UnionRenderers"},{"attributes":{},"id":"1235","type":"LinearScale"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"1264","type":"GlyphRenderer"}]},"id":"1273","type":"LegendItem"},{"attributes":{"source":{"id":"1225","type":"ColumnDataSource"}},"id":"1252","type":"CDSView"},{"attributes":{},"id":"1238","type":"CategoricalTicker"},{"attributes":{"range":{"id":"1229","type":"FactorRange"},"value":0.25},"id":"1274","type":"Dodge"},{"attributes":{"dimension":1,"plot":{"id":"1227","subtype":"Figure","type":"Plot"},"ticker":{"id":"1242","type":"BasicTicker"}},"id":"1245","type":"Grid"},{"attributes":{"formatter":{"id":"1257","type":"BasicTickFormatter"},"plot":{"id":"1227","subtype":"Figure","type":"Plot"},"ticker":{"id":"1242","type":"BasicTicker"}},"id":"1241","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1274","type":"Dodge"}}},"id":"1276","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1274","type":"Dodge"}}},"id":"1277","type":"VBar"}],"root_ids":["1227"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"08f50d23-3a61-4a21-829c-f38667151d6a","roots":{"1227":"978038bf-c256-4120-99fc-529006fc6804"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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