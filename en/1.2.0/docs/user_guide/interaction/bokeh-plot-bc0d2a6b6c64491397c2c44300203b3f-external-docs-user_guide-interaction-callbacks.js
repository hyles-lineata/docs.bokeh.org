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
      };var element = document.getElementById("c952213a-62bc-49b4-97c2-6f62218c148d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c952213a-62bc-49b4-97c2-6f62218c148d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"266c7dd9-0eb2-49c0-9a02-99366f05e4f2":{"roots":{"references":[{"attributes":{"callback":null},"id":"24882","type":"DataRange1d"},{"attributes":{},"id":"24924","type":"UnionRenderers"},{"attributes":{"below":[{"id":"24890","type":"LinearAxis"}],"center":[{"id":"24894","type":"Grid"},{"id":"24899","type":"Grid"}],"left":[{"id":"24895","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"24905","type":"GlyphRenderer"},{"id":"24911","type":"GlyphRenderer"}],"title":{"id":"24880","type":"Title"},"toolbar":{"id":"24900","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"24882","type":"DataRange1d"},"x_scale":{"id":"24886","type":"LinearScale"},"y_range":{"id":"24884","type":"DataRange1d"},"y_scale":{"id":"24888","type":"LinearScale"}},"id":"24879","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"24923","type":"Selection"},{"attributes":{"formatter":{"id":"24919","type":"BasicTickFormatter"},"ticker":{"id":"24891","type":"BasicTicker"}},"id":"24890","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24914","type":"HoverTool"}]},"id":"24900","type":"Toolbar"},{"attributes":{"text":"Hover over points"},"id":"24880","type":"Title"},{"attributes":{"callback":null,"data":{"x0":[],"x1":[],"y0":[],"y1":[]},"selected":{"id":"24921","type":"Selection"},"selection_policy":{"id":"24922","type":"UnionRenderers"}},"id":"24901","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"24909","type":"Circle"},{"attributes":{"formatter":{"id":"24917","type":"BasicTickFormatter"},"ticker":{"id":"24896","type":"BasicTicker"}},"id":"24895","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"24910","type":"Circle"},{"attributes":{},"id":"24921","type":"Selection"},{"attributes":{"callback":{"id":"24913","type":"CustomJS"},"renderers":[{"id":"24911","type":"GlyphRenderer"}],"tooltips":null},"id":"24914","type":"HoverTool"},{"attributes":{"ticker":{"id":"24891","type":"BasicTicker"}},"id":"24894","type":"Grid"},{"attributes":{},"id":"24919","type":"BasicTickFormatter"},{"attributes":{},"id":"24896","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]},"selected":{"id":"24923","type":"Selection"},"selection_policy":{"id":"24924","type":"UnionRenderers"}},"id":"24907","type":"ColumnDataSource"},{"attributes":{"source":{"id":"24901","type":"ColumnDataSource"}},"id":"24906","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"24904","type":"Segment"},{"attributes":{},"id":"24917","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"24896","type":"BasicTicker"}},"id":"24899","type":"Grid"},{"attributes":{"source":{"id":"24907","type":"ColumnDataSource"}},"id":"24912","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"24903","type":"Segment"},{"attributes":{},"id":"24891","type":"BasicTicker"},{"attributes":{},"id":"24922","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"24907","type":"ColumnDataSource"},"glyph":{"id":"24908","type":"Circle"},"hover_glyph":{"id":"24910","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"24909","type":"Circle"},"selection_glyph":null,"view":{"id":"24912","type":"CDSView"}},"id":"24911","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"24908","type":"Circle"},{"attributes":{"callback":null},"id":"24884","type":"DataRange1d"},{"attributes":{"args":{"circle":{"id":"24907","type":"ColumnDataSource"},"segment":{"id":"24901","type":"ColumnDataSource"}},"code":"\\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\\nvar data = {&#x27;x0&#x27;: [], &#x27;y0&#x27;: [], &#x27;x1&#x27;: [], &#x27;y1&#x27;: []};\\nvar cdata = circle.data;\\nvar indices = cb_data.index[&#x27;1d&#x27;].indices;\\nfor (var i = 0; i &lt; indices.length; i++) {\\n    var ind0 = indices[i]\\n    for (var j = 0; j &lt; links[ind0].length; j++) {\\n        var ind1 = links[ind0][j];\\n        data[&#x27;x0&#x27;].push(cdata.x[ind0]);\\n        data[&#x27;y0&#x27;].push(cdata.y[ind0]);\\n        data[&#x27;x1&#x27;].push(cdata.x[ind1]);\\n        data[&#x27;y1&#x27;].push(cdata.y[ind1]);\\n    }\\n}\\nsegment.data = data;\\n"},"id":"24913","type":"CustomJS"},{"attributes":{"data_source":{"id":"24901","type":"ColumnDataSource"},"glyph":{"id":"24903","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24904","type":"Segment"},"selection_glyph":null,"view":{"id":"24906","type":"CDSView"}},"id":"24905","type":"GlyphRenderer"},{"attributes":{},"id":"24886","type":"LinearScale"},{"attributes":{},"id":"24888","type":"LinearScale"}],"root_ids":["24879"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"266c7dd9-0eb2-49c0-9a02-99366f05e4f2","roots":{"24879":"c952213a-62bc-49b4-97c2-6f62218c148d"}}];
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