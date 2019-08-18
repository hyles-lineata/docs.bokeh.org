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
      };var element = document.getElementById("f80ddfea-869d-470d-af41-0fee95137b6e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f80ddfea-869d-470d-af41-0fee95137b6e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"5852d4ab-757d-4730-8c4a-ffb103517e72":{"roots":{"references":[{"attributes":{},"id":"23827","type":"LinearScale"},{"attributes":{"data_source":{"id":"23817","type":"ColumnDataSource"},"glyph":{"id":"23843","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23843","type":"Rect"},"selection_glyph":{"id":"23843","type":"Rect"},"view":{"id":"23845","type":"CDSView"}},"id":"23844","type":"GlyphRenderer"},{"attributes":{},"id":"23829","type":"LinearScale"},{"attributes":{},"id":"23851","type":"UnionRenderers"},{"attributes":{"args":{"source":{"id":"23817","type":"ColumnDataSource"}},"code":"\\n        // get data source from Callback args\\n        var data = source.data;\\n\\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\\n        var geometry = cb_data[&#x27;geometry&#x27;];\\n\\n        /// calculate Rect attributes\\n        var width = geometry[&#x27;x1&#x27;] - geometry[&#x27;x0&#x27;];\\n        var height = geometry[&#x27;y1&#x27;] - geometry[&#x27;y0&#x27;];\\n        var x = geometry[&#x27;x0&#x27;] + width/2;\\n        var y = geometry[&#x27;y0&#x27;] + height/2;\\n\\n        /// update data source with new Rect attributes\\n        data[&#x27;x&#x27;].push(x);\\n        data[&#x27;y&#x27;].push(y);\\n        data[&#x27;width&#x27;].push(width);\\n        data[&#x27;height&#x27;].push(height);\\n\\n        // emit update of data source\\n        source.change.emit();\\n    "},"id":"23818","type":"CustomJS"},{"attributes":{},"id":"23848","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"23850","type":"BasicTickFormatter"},"ticker":{"id":"23832","type":"BasicTicker"}},"id":"23831","type":"LinearAxis"},{"attributes":{"callback":{"id":"23818","type":"CustomJS"},"overlay":{"id":"23853","type":"BoxAnnotation"}},"id":"23819","type":"BoxSelectTool"},{"attributes":{},"id":"23832","type":"BasicTicker"},{"attributes":{"callback":null},"id":"23820","type":"Range1d"},{"attributes":{},"id":"23850","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"23832","type":"BasicTicker"}},"id":"23835","type":"Grid"},{"attributes":{"callback":null},"id":"23821","type":"Range1d"},{"attributes":{},"id":"23837","type":"BasicTicker"},{"attributes":{},"id":"23852","type":"Selection"},{"attributes":{"below":[{"id":"23831","type":"LinearAxis"}],"center":[{"id":"23835","type":"Grid"},{"id":"23840","type":"Grid"}],"left":[{"id":"23836","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"23844","type":"GlyphRenderer"}],"title":{"id":"23823","type":"Title"},"toolbar":{"id":"23841","type":"Toolbar"},"x_range":{"id":"23820","type":"Range1d"},"x_scale":{"id":"23827","type":"LinearScale"},"y_range":{"id":"23821","type":"Range1d"},"y_scale":{"id":"23829","type":"LinearScale"}},"id":"23822","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"23817","type":"ColumnDataSource"}},"id":"23845","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"23843","type":"Rect"},{"attributes":{"callback":null,"data":{"height":[],"width":[],"x":[],"y":[]},"selected":{"id":"23852","type":"Selection"},"selection_policy":{"id":"23851","type":"UnionRenderers"}},"id":"23817","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23853","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"23837","type":"BasicTicker"}},"id":"23840","type":"Grid"},{"attributes":{"text":"Select Below"},"id":"23823","type":"Title"},{"attributes":{"formatter":{"id":"23848","type":"BasicTickFormatter"},"ticker":{"id":"23837","type":"BasicTicker"}},"id":"23836","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23819","type":"BoxSelectTool"}]},"id":"23841","type":"Toolbar"}],"root_ids":["23822"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"5852d4ab-757d-4730-8c4a-ffb103517e72","roots":{"23822":"f80ddfea-869d-470d-af41-0fee95137b6e"}}];
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