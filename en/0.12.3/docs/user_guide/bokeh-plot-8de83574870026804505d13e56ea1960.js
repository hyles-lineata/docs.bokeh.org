document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("4a1313f9-8a1d-4574-b254-df38156199b6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4a1313f9-8a1d-4574-b254-df38156199b6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"4c710b99-4b4f-45f0-9320-f0cc97badb58":{"roots":{"references":[{"attributes":{"items":[{"id":"1ebae03f-4278-4873-bbb1-8cfcacd9fae5","type":"LegendItem"},{"id":"6f28b909-35de-44fc-8f39-cc0cac2b8bd1","type":"LegendItem"},{"id":"8e5fa007-7301-4a47-a730-3e385aff15cf","type":"LegendItem"},{"id":"adc91a20-0ead-485a-9d6b-9f6f5baae751","type":"LegendItem"},{"id":"89e0b327-b691-4a8c-979a-08ee2a42a61f","type":"LegendItem"}],"location":"top_left","plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"}},"id":"90173172-2c74-4beb-80da-2d51e73e65c6","type":"Legend"},{"attributes":{"plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"}},"id":"53bfbc00-40de-4e47-9a1b-2a33da89d59c","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7ff00772-a284-49c0-a137-7920e7aa63b5","type":"PanTool"},{"id":"53bfbc00-40de-4e47-9a1b-2a33da89d59c","type":"WheelZoomTool"},{"id":"15a1f53b-dddc-42d4-9747-4b4733dd9948","type":"BoxZoomTool"},{"id":"e5a253c2-d818-4fbc-a558-906389d40778","type":"SaveTool"},{"id":"145e8e1e-acdc-4dea-8793-08cb82bba548","type":"ResetTool"},{"id":"66dc39a5-da5f-46da-9f1c-9e8c978ce9f0","type":"HelpTool"}]},"id":"7a24f4c3-522b-4eb5-a0ab-92ffc2e81e10","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"x_values":[400.0,350.0,302.0,318.0,350.0,304.0,318.0,350.0,304.0,429.0,360.0,440.0,351.0,455.0,390.0,383.0,400.0,340.0,400.0,400.0,455.0,350.0,383.0,318.0,454.0,307.0,318.0,318.0,350.0,302.0,318.0,400.0,350.0,305.0,260.0,318.0,302.0,400.0,350.0,400.0,351.0,350.0,360.0,350.0,400.0,318.0,350.0,400.0,350.0,318.0,351.0,262.0,302.0,304.0,302.0,318.0,350.0,302.0,305.0,318.0,304.0,351.0,318.0,400.0,360.0,260.0,351.0,267.0,360.0,350.0,260.0,318.0,302.0,307.0,304.0,400.0,350.0,350.0,429.0,304.0,351.0,350.0,318.0,351.0,302.0,318.0,302.0,455.0,305.0,302.0,318.0,440.0,400.0,318.0,400.0,429.0,302.0,350.0,304.0,350.0,305.0,351.0,307.0],"y_values":[175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"197324ef-ac0d-460f-9fa0-bcc76eacfb25","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"dd3f0d03-69dd-491b-90e6-50fe92d10c5e","type":"BoxAnnotation"},"plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"}},"id":"15a1f53b-dddc-42d4-9747-4b4733dd9948","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"197324ef-ac0d-460f-9fa0-bcc76eacfb25","type":"ColumnDataSource"},"glyph":{"id":"6a636aab-2006-43b0-9cec-1d9adf4123a0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7fc81509-3ae7-46f2-91d6-2f72fcbfc9d1","type":"GlyphRenderer"},{"attributes":{},"id":"e60fc28f-4b4d-4f8e-94ad-888f42a501fc","type":"BasicTicker"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"f80b9a69-707e-40f1-b30a-65826d718002","type":"Range1d"},{"attributes":{"plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"},"ticker":{"id":"66a3f032-dfc1-46f3-83ef-5db548980112","type":"BasicTicker"}},"id":"b3e14a18-dbc3-4d71-a4f0-c0169be7fa7c","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"1077a0f8-7918-4a56-8938-c608b4ef026f","type":"Circle"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"810be43b-8cf7-456e-a955-5eb4c502850b","type":"GlyphRenderer"}]},"id":"6f28b909-35de-44fc-8f39-cc0cac2b8bd1","type":"LegendItem"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"6d9f69e3-9257-4c81-8735-2753ffc13515","type":"BasicTickFormatter"},"plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"},"ticker":{"id":"e60fc28f-4b4d-4f8e-94ad-888f42a501fc","type":"BasicTicker"}},"id":"0138d893-e7ab-49a5-b92a-8228ffc72377","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"x_values":[250.0,250.0,231.0,232.0,225.0,200.0,231.0,250.0,232.0,225.0,250.0,200.0,163.0,200.0,173.0,232.0,250.0,250.0,163.0,173.0,198.0,231.0,258.0,200.0,231.0,232.0,258.0,225.0,232.0,225.0,173.0,225.0,168.0,231.0,232.0,198.0,232.0,146.0,200.0,250.0,225.0,250.0,250.0,258.0,225.0,181.0,232.0,262.0,171.0,232.0,232.0,231.0,225.0,258.0,250.0,231.0,250.0,250.0,250.0,225.0,156.0,225.0,225.0,156.0,199.0,250.0,231.0,225.0,225.0,200.0,168.0,199.0,198.0,258.0,250.0,250.0,250.0,232.0,146.0,168.0,145.0,200.0,155.0],"y_values":[88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107]}},"id":"a3b0df83-96bf-47b3-a31e-5f6de38eb59e","type":"ColumnDataSource"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"4ef38ea6-976c-4951-89bc-c17fad2b1e52","type":"BasicTickFormatter"},"plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"},"ticker":{"id":"66a3f032-dfc1-46f3-83ef-5db548980112","type":"BasicTicker"}},"id":"15337289-59de-4d3b-a820-a97c9da9eada","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#df5320"},"line_color":{"value":"#df5320"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"0717a538-fb41-4fde-8721-5ac3efc8c1a4","type":"Circle"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"7fc81509-3ae7-46f2-91d6-2f72fcbfc9d1","type":"GlyphRenderer"}]},"id":"89e0b327-b691-4a8c-979a-08ee2a42a61f","type":"LegendItem"},{"attributes":{},"id":"66a3f032-dfc1-46f3-83ef-5db548980112","type":"BasicTicker"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"fc794dbe-dc59-40b3-a203-e2c01d628dd3","type":"GlyphRenderer"}]},"id":"8e5fa007-7301-4a47-a730-3e385aff15cf","type":"LegendItem"},{"attributes":{},"id":"4ef38ea6-976c-4951-89bc-c17fad2b1e52","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5],"x_values":[121.0,131.0,183.0],"y_values":[67,103,77]}},"id":"93427ed7-9e6e-4b76-9085-404554a894df","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"9ee0007c-d2a1-4492-abe0-b1634bfd8ba9","type":"Circle"},{"attributes":{"below":[{"id":"15337289-59de-4d3b-a820-a97c9da9eada","type":"LinearAxis"}],"height":400,"left":[{"id":"0138d893-e7ab-49a5-b92a-8228ffc72377","type":"LinearAxis"}],"renderers":[{"id":"dd3f0d03-69dd-491b-90e6-50fe92d10c5e","type":"BoxAnnotation"},{"id":"b2b3c8cd-023e-4f6b-b37a-c6ebea2e4022","type":"GlyphRenderer"},{"id":"810be43b-8cf7-456e-a955-5eb4c502850b","type":"GlyphRenderer"},{"id":"fc794dbe-dc59-40b3-a203-e2c01d628dd3","type":"GlyphRenderer"},{"id":"35cfe4f6-2410-4e91-b74a-d1d8c89733a2","type":"GlyphRenderer"},{"id":"7fc81509-3ae7-46f2-91d6-2f72fcbfc9d1","type":"GlyphRenderer"},{"id":"90173172-2c74-4beb-80da-2d51e73e65c6","type":"Legend"},{"id":"15337289-59de-4d3b-a820-a97c9da9eada","type":"LinearAxis"},{"id":"0138d893-e7ab-49a5-b92a-8228ffc72377","type":"LinearAxis"},{"id":"b3e14a18-dbc3-4d71-a4f0-c0169be7fa7c","type":"Grid"},{"id":"79e63335-d859-4e76-990b-973ebbe449b9","type":"Grid"}],"title":{"id":"79729d6d-cbd6-49a4-b3fb-a5107213a524","type":"Title"},"tool_events":{"id":"a7cef3f2-5ceb-4a53-a535-f8f20d56cb97","type":"ToolEvents"},"toolbar":{"id":"7a24f4c3-522b-4eb5-a0ab-92ffc2e81e10","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"7682c917-a03c-436a-b497-45cc80626821","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"f80b9a69-707e-40f1-b30a-65826d718002","type":"Range1d"}},"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"}},"id":"66dc39a5-da5f-46da-9f1c-9e8c978ce9f0","type":"HelpTool"},{"attributes":{"data_source":{"id":"771e9169-2f8a-4fa9-90fa-e54f566e4088","type":"ColumnDataSource"},"glyph":{"id":"9ee0007c-d2a1-4492-abe0-b1634bfd8ba9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b2b3c8cd-023e-4f6b-b37a-c6ebea2e4022","type":"GlyphRenderer"},{"attributes":{},"id":"6d9f69e3-9257-4c81-8735-2753ffc13515","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"HP vs DISPL (shaded by CYL)"},"id":"79729d6d-cbd6-49a4-b3fb-a5107213a524","type":"Title"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"fab6e6c8-139a-40ae-98d3-b9ffa633328e","type":"Circle"},{"attributes":{"data_source":{"id":"93427ed7-9e6e-4b76-9085-404554a894df","type":"ColumnDataSource"},"glyph":{"id":"1077a0f8-7918-4a56-8938-c608b4ef026f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fc794dbe-dc59-40b3-a203-e2c01d628dd3","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"7682c917-a03c-436a-b497-45cc80626821","type":"Range1d"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"b2b3c8cd-023e-4f6b-b37a-c6ebea2e4022","type":"GlyphRenderer"}]},"id":"1ebae03f-4278-4873-bbb1-8cfcacd9fae5","type":"LegendItem"},{"attributes":{"plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"}},"id":"145e8e1e-acdc-4dea-8793-08cb82bba548","type":"ResetTool"},{"attributes":{"data_source":{"id":"cb1e5dd9-e1f6-40ad-8235-2c2fed6527c0","type":"ColumnDataSource"},"glyph":{"id":"fab6e6c8-139a-40ae-98d3-b9ffa633328e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"810be43b-8cf7-456e-a955-5eb4c502850b","type":"GlyphRenderer"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"35cfe4f6-2410-4e91-b74a-d1d8c89733a2","type":"GlyphRenderer"}]},"id":"adc91a20-0ead-485a-9d6b-9f6f5baae751","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dd3f0d03-69dd-491b-90e6-50fe92d10c5e","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x_values":[80.0,70.0,70.0,70.0],"y_values":[110,100,90,97]}},"id":"771e9169-2f8a-4fa9-90fa-e54f566e4088","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"},"ticker":{"id":"e60fc28f-4b4d-4f8e-94ad-888f42a501fc","type":"BasicTicker"}},"id":"79e63335-d859-4e76-990b-973ebbe449b9","type":"Grid"},{"attributes":{"plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"}},"id":"7ff00772-a284-49c0-a137-7920e7aa63b5","type":"PanTool"},{"attributes":{},"id":"a7cef3f2-5ceb-4a53-a535-f8f20d56cb97","type":"ToolEvents"},{"attributes":{"data_source":{"id":"a3b0df83-96bf-47b3-a31e-5f6de38eb59e","type":"ColumnDataSource"},"glyph":{"id":"0717a538-fb41-4fde-8721-5ac3efc8c1a4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"35cfe4f6-2410-4e91-b74a-d1d8c89733a2","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#00ad9c"},"line_color":{"value":"#00ad9c"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"6a636aab-2006-43b0-9cec-1d9adf4123a0","type":"Circle"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"x_values":[98.0,98.0,97.0,97.0,121.0,98.0,90.0,98.0,78.0,85.0,91.0,140.0,140.0,90.0,119.0,105.0,105.0,141.0,121.0,98.0,86.0,89.0,134.0,140.0,89.0,121.0,119.0,151.0,156.0,134.0,98.0,97.0,151.0,97.0,107.0,91.0,121.0,121.0,120.0,115.0,116.0,90.0,90.0,134.0,140.0,140.0,97.0,79.0,119.0,140.0,98.0,101.0,85.0,122.0,79.0,111.0,98.0,120.0,130.0,140.0,97.0,85.0,97.0,91.0,120.0,98.0,85.0,105.0,85.0,151.0,108.0,140.0,151.0,135.0,112.0,112.0,112.0,105.0,112.0,120.0,119.0,108.0,107.0,105.0,98.0,141.0,98.0,91.0,105.0,135.0,97.0,140.0,151.0,135.0,144.0,91.0,156.0,91.0,91.0,108.0,107.0,120.0,98.0,91.0,105.0,91.0,89.0,86.0,108.0,119.0,120.0,134.0,97.0,156.0,151.0,151.0,86.0,98.0,89.0,98.0,151.0,140.0,85.0,90.0,90.0,85.0,97.0,81.0,86.0,79.0,135.0,156.0,151.0,135.0,107.0,122.0,89.0,97.0,91.0,146.0,91.0,120.0,119.0,90.0,71.0,122.0,79.0,140.0,98.0,116.0,121.0,113.0,121.0,114.0,116.0,68.0,140.0,97.0,110.0,107.0,98.0,122.0,104.0,121.0,113.0,140.0,97.0,108.0,140.0,97.0,97.0,122.0,97.0,121.0,97.0,76.0,88.0,121.0,116.0,71.0,72.0,120.0,97.0,113.0,97.5,97.0,140.0,122.0,83.0,90.0,91.0,79.0,97.0,98.0,96.0,122.0,97.0,79.0,120.0],"y_values":[63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97]}},"id":"cb1e5dd9-e1f6-40ad-8235-2c2fed6527c0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4f65e76f-00ad-48d4-8783-e19bd1f89146","subtype":"Chart","type":"Plot"}},"id":"e5a253c2-d818-4fbc-a558-906389d40778","type":"SaveTool"}],"root_ids":["4f65e76f-00ad-48d4-8783-e19bd1f89146"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"4c710b99-4b4f-45f0-9320-f0cc97badb58","elementid":"4a1313f9-8a1d-4574-b254-df38156199b6","modelid":"4f65e76f-00ad-48d4-8783-e19bd1f89146"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});