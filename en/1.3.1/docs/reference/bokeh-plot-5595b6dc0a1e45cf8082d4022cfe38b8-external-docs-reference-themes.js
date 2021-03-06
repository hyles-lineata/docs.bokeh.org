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
      };var element = document.getElementById("13c1726d-36da-4cb8-a992-cafdb4c44fc3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '13c1726d-36da-4cb8-a992-cafdb4c44fc3' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"a40475b1-933f-460c-9362-3ae6ccc7300b":{"roots":{"references":[{"attributes":{"overlay":{"id":"17673","type":"BoxAnnotation"}},"id":"17652","type":"BoxZoomTool"},{"attributes":{},"id":"17669","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17663","type":"ColumnDataSource"},"glyph":{"id":"17664","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17665","type":"Line"},"selection_glyph":null,"view":{"id":"17667","type":"CDSView"}},"id":"17666","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17650","type":"PanTool"},{"id":"17651","type":"WheelZoomTool"},{"id":"17652","type":"BoxZoomTool"},{"id":"17653","type":"SaveTool"},{"id":"17654","type":"ResetTool"},{"id":"17655","type":"HelpTool"}]},"id":"17656","type":"Toolbar"},{"attributes":{},"id":"17674","type":"Selection"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"17669","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"ticker":{"id":"17646","type":"BasicTicker"}},"id":"17645","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"17674","type":"Selection"},"selection_policy":{"id":"17675","type":"UnionRenderers"}},"id":"17663","type":"ColumnDataSource"},{"attributes":{},"id":"17655","type":"HelpTool"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"17671","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"ticker":{"id":"17641","type":"BasicTicker"}},"id":"17640","type":"LinearAxis"},{"attributes":{},"id":"17671","type":"BasicTickFormatter"},{"attributes":{},"id":"17651","type":"WheelZoomTool"},{"attributes":{},"id":"17654","type":"ResetTool"},{"attributes":{"callback":null},"id":"17634","type":"DataRange1d"},{"attributes":{},"id":"17646","type":"BasicTicker"},{"attributes":{},"id":"17650","type":"PanTool"},{"attributes":{},"id":"17638","type":"LinearScale"},{"attributes":{"below":[{"id":"17640","type":"LinearAxis"}],"center":[{"id":"17644","type":"Grid"},{"id":"17649","type":"Grid"}],"left":[{"id":"17645","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17666","type":"GlyphRenderer"}],"title":{"id":"17630","type":"Title"},"toolbar":{"id":"17656","type":"Toolbar"},"x_range":{"id":"17632","type":"DataRange1d"},"x_scale":{"id":"17636","type":"LinearScale"},"y_range":{"id":"17634","type":"DataRange1d"},"y_scale":{"id":"17638","type":"LinearScale"}},"id":"17629","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17641","type":"BasicTicker"},{"attributes":{},"id":"17653","type":"SaveTool"},{"attributes":{"source":{"id":"17663","type":"ColumnDataSource"}},"id":"17667","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17664","type":"Line"},{"attributes":{"dimension":1,"ticker":{"id":"17646","type":"BasicTicker"}},"id":"17649","type":"Grid"},{"attributes":{"callback":null},"id":"17632","type":"DataRange1d"},{"attributes":{},"id":"17636","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17673","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17665","type":"Line"},{"attributes":{},"id":"17675","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"17641","type":"BasicTicker"}},"id":"17644","type":"Grid"},{"attributes":{"text":"caliber","text_color":{"value":"#5B5B5B"},"text_font":"Calibri Light","text_font_size":{"value":"1.25em"},"text_font_style":"bold"},"id":"17630","type":"Title"}],"root_ids":["17629"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"a40475b1-933f-460c-9362-3ae6ccc7300b","roots":{"17629":"13c1726d-36da-4cb8-a992-cafdb4c44fc3"}}];
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