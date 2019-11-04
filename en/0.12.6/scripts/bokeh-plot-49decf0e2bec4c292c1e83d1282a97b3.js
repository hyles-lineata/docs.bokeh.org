(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("9315586b-af3b-4800-8fa7-9dcb5605d057");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9315586b-af3b-4800-8fa7-9dcb5605d057' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"e9c8a937-5a46-449d-b754-9b827e5c463f":{"roots":{"references":[{"attributes":{"callback":null,"end":10,"start":-10},"id":"13d4bf85-bc4a-4c4f-aceb-a94033536fea","type":"Range1d"},{"attributes":{"plot":{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"}},"id":"6c090d03-13d8-4ea6-83d4-e7b32b3de96b","type":"WheelZoomTool"},{"attributes":{},"id":"dc04be32-0f39-4c47-8712-f048b0d7928b","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9f541396-17c4-43bc-a4d0-39224d4cc787","type":"PanTool"},{"id":"6c090d03-13d8-4ea6-83d4-e7b32b3de96b","type":"WheelZoomTool"},{"id":"6f59a7e4-e511-46ba-b451-1d02d89a6c66","type":"BoxZoomTool"},{"id":"f76eb9f0-8f46-49e9-8b45-ee33c621f84c","type":"SaveTool"},{"id":"974a9214-164b-4f06-9efc-13291e8df4e7","type":"ResetTool"},{"id":"dbc85ada-e948-41df-9539-dd60b58c2370","type":"HelpTool"}]},"id":"e36041c5-0013-4335-9c09-9c99d35a7c29","type":"Toolbar"},{"attributes":{"callback":null},"id":"927204ff-077e-466a-9045-dd6fd211fbb6","type":"DataRange1d"},{"attributes":{"children":[{"id":"8c879779-070b-454e-b4c3-d8c713ea60db","type":"Slider"},{"id":"8b98daf3-c078-49cc-8bb3-c3b0cb41e6be","type":"Slider"},{"id":"184fe17e-0ec7-4c20-a827-4fc25cff1907","type":"Slider"},{"id":"f1c056ab-6f0c-4767-82b3-e504756adcde","type":"Slider"}]},"id":"31de88b9-c10b-44fc-9504-a10ad7a46c27","type":"WidgetBox"},{"attributes":{"callback":{"id":"f8c5e556-8bb5-4c91-8ab4-439b9e5d72f6","type":"CustomJS"},"end":10,"start":0.1,"title":"Amplitude","value":1},"id":"8c879779-070b-454e-b4c3-d8c713ea60db","type":"Slider"},{"attributes":{},"id":"4b0b844e-fa64-4332-bd68-f84a2987870b","type":"LinearScale"},{"attributes":{"plot":{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"}},"id":"dbc85ada-e948-41df-9539-dd60b58c2370","type":"HelpTool"},{"attributes":{"callback":{"id":"f8c5e556-8bb5-4c91-8ab4-439b9e5d72f6","type":"CustomJS"},"end":6.4,"title":"Phase","value":0},"id":"184fe17e-0ec7-4c20-a827-4fc25cff1907","type":"Slider"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}}},"id":"838f5649-5c4c-4a30-ad99-8863067b8a65","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"}},"id":"f76eb9f0-8f46-49e9-8b45-ee33c621f84c","type":"SaveTool"},{"attributes":{"plot":{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"}},"id":"974a9214-164b-4f06-9efc-13291e8df4e7","type":"ResetTool"},{"attributes":{"data_source":{"id":"838f5649-5c4c-4a30-ad99-8863067b8a65","type":"ColumnDataSource"},"glyph":{"id":"db37e8a1-baef-44ce-85f2-5d3c4b5d4618","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"be97d8a2-0c65-4645-acaa-c8754288b683","type":"Line"},"selection_glyph":null},"id":"1fd90d44-b090-42ca-ac04-28f06dc422dd","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"7cdbbf87-4ae4-4510-b2b8-152b6778280f","type":"BasicTickFormatter"},"plot":{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc04be32-0f39-4c47-8712-f048b0d7928b","type":"BasicTicker"}},"id":"87d52ece-f2c7-4c21-b1c2-ee8aadba8f60","type":"LinearAxis"},{"attributes":{"callback":{"id":"f8c5e556-8bb5-4c91-8ab4-439b9e5d72f6","type":"CustomJS"},"end":10,"start":0.1,"title":"Frequency","value":1},"id":"8b98daf3-c078-49cc-8bb3-c3b0cb41e6be","type":"Slider"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"be97d8a2-0c65-4645-acaa-c8754288b683","type":"Line"},{"attributes":{},"id":"ec2b8792-9676-4267-b4ea-f2401e2498b5","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc04be32-0f39-4c47-8712-f048b0d7928b","type":"BasicTicker"}},"id":"d34c2ac1-a403-4f17-94a1-f64e196eb1f4","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"3f9e6d64-00be-4d06-8016-3bb7362be2f5","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8e013449-a243-43bd-be71-955778d33eed","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"db37e8a1-baef-44ce-85f2-5d3c4b5d4618","type":"Line"},{"attributes":{},"id":"f0c833ce-4e65-4ed4-9655-f12f9e10c3da","type":"ToolEvents"},{"attributes":{},"id":"7cdbbf87-4ae4-4510-b2b8-152b6778280f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"}},"id":"9f541396-17c4-43bc-a4d0-39224d4cc787","type":"PanTool"},{"attributes":{"callback":{"id":"f8c5e556-8bb5-4c91-8ab4-439b9e5d72f6","type":"CustomJS"},"end":5,"start":-5,"title":"Offset","value":0},"id":"f1c056ab-6f0c-4767-82b3-e504756adcde","type":"Slider"},{"attributes":{},"id":"f9dd0aa6-b655-4aa9-8035-1be7457ad425","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8e013449-a243-43bd-be71-955778d33eed","type":"BoxAnnotation"},"plot":{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"}},"id":"6f59a7e4-e511-46ba-b451-1d02d89a6c66","type":"BoxZoomTool"},{"attributes":{"args":{"amp":{"id":"8c879779-070b-454e-b4c3-d8c713ea60db","type":"Slider"},"freq":{"id":"8b98daf3-c078-49cc-8bb3-c3b0cb41e6be","type":"Slider"},"offset":{"id":"f1c056ab-6f0c-4767-82b3-e504756adcde","type":"Slider"},"phase":{"id":"184fe17e-0ec7-4c20-a827-4fc25cff1907","type":"Slider"},"source":{"id":"838f5649-5c4c-4a30-ad99-8863067b8a65","type":"ColumnDataSource"}},"code":"\n    var data = source.data;\n    var A = amp.value;\n    var k = freq.value;\n    var phi = phase.value;\n    var B = offset.value;\n    x = data['x']\n    y = data['y']\n    for (i = 0; i < x.length; i++) {\n        y[i] = B + A*Math.sin(k*x[i]+phi);\n    }\n    source.change.emit();\n"},"id":"f8c5e556-8bb5-4c91-8ab4-439b9e5d72f6","type":"CustomJS"},{"attributes":{"children":[{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"},{"id":"31de88b9-c10b-44fc-9504-a10ad7a46c27","type":"WidgetBox"}]},"id":"6558466e-29b6-4bb6-b9de-776247343c19","type":"Row"},{"attributes":{},"id":"67103e51-c468-475a-8624-75c5f3a322f8","type":"LinearScale"},{"attributes":{"formatter":{"id":"ec2b8792-9676-4267-b4ea-f2401e2498b5","type":"BasicTickFormatter"},"plot":{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9dd0aa6-b655-4aa9-8035-1be7457ad425","type":"BasicTicker"}},"id":"258cc46c-ab1e-4aa3-b3de-e81abc5a51c9","type":"LinearAxis"},{"attributes":{"plot":{"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9dd0aa6-b655-4aa9-8035-1be7457ad425","type":"BasicTicker"}},"id":"1b70f9f0-ee61-442f-b505-da8ada2c91ae","type":"Grid"},{"attributes":{"below":[{"id":"258cc46c-ab1e-4aa3-b3de-e81abc5a51c9","type":"LinearAxis"}],"left":[{"id":"87d52ece-f2c7-4c21-b1c2-ee8aadba8f60","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"258cc46c-ab1e-4aa3-b3de-e81abc5a51c9","type":"LinearAxis"},{"id":"1b70f9f0-ee61-442f-b505-da8ada2c91ae","type":"Grid"},{"id":"87d52ece-f2c7-4c21-b1c2-ee8aadba8f60","type":"LinearAxis"},{"id":"d34c2ac1-a403-4f17-94a1-f64e196eb1f4","type":"Grid"},{"id":"8e013449-a243-43bd-be71-955778d33eed","type":"BoxAnnotation"},{"id":"1fd90d44-b090-42ca-ac04-28f06dc422dd","type":"GlyphRenderer"}],"title":{"id":"3f9e6d64-00be-4d06-8016-3bb7362be2f5","type":"Title"},"tool_events":{"id":"f0c833ce-4e65-4ed4-9655-f12f9e10c3da","type":"ToolEvents"},"toolbar":{"id":"e36041c5-0013-4335-9c09-9c99d35a7c29","type":"Toolbar"},"x_range":{"id":"927204ff-077e-466a-9045-dd6fd211fbb6","type":"DataRange1d"},"x_scale":{"id":"4b0b844e-fa64-4332-bd68-f84a2987870b","type":"LinearScale"},"y_range":{"id":"13d4bf85-bc4a-4c4f-aceb-a94033536fea","type":"Range1d"},"y_scale":{"id":"67103e51-c468-475a-8624-75c5f3a322f8","type":"LinearScale"}},"id":"a91a5c84-ad01-4e78-8dc3-1602d2ff2909","subtype":"Figure","type":"Plot"}],"root_ids":["6558466e-29b6-4bb6-b9de-776247343c19"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"e9c8a937-5a46-449d-b754-9b827e5c463f","elementid":"9315586b-af3b-4800-8fa7-9dcb5605d057","modelid":"6558466e-29b6-4bb6-b9de-776247343c19"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();