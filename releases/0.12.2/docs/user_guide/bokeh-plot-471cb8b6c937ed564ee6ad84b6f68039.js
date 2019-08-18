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
      };var element = document.getElementById("8e331b6f-6e97-411a-8ab9-bd07b2e57dcf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8e331b6f-6e97-411a-8ab9-bd07b2e57dcf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"1f1e15d7-9457-4fc7-b280-dd702ffa14ae":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"x_values":[98.0,98.0,97.0,97.0,121.0,98.0,90.0,98.0,78.0,85.0,91.0,140.0,140.0,90.0,119.0,105.0,105.0,141.0,121.0,98.0,86.0,89.0,134.0,140.0,89.0,121.0,119.0,151.0,156.0,134.0,98.0,97.0,151.0,97.0,107.0,91.0,121.0,121.0,120.0,115.0,116.0,90.0,90.0,134.0,140.0,140.0,97.0,79.0,119.0,140.0,98.0,101.0,85.0,122.0,79.0,111.0,98.0,120.0,130.0,140.0,97.0,85.0,97.0,91.0,120.0,98.0,85.0,105.0,85.0,151.0,108.0,140.0,151.0,135.0,112.0,112.0,112.0,105.0,112.0,120.0,119.0,108.0,107.0,105.0,98.0,141.0,98.0,91.0,105.0,135.0,97.0,140.0,151.0,135.0,144.0,91.0,156.0,91.0,91.0,108.0,107.0,120.0,98.0,91.0,105.0,91.0,89.0,86.0,108.0,119.0,120.0,134.0,97.0,156.0,151.0,151.0,86.0,98.0,89.0,98.0,151.0,140.0,85.0,90.0,90.0,85.0,97.0,81.0,86.0,79.0,135.0,156.0,151.0,135.0,107.0,122.0,89.0,97.0,91.0,146.0,91.0,120.0,119.0,90.0,71.0,122.0,79.0,140.0,98.0,116.0,121.0,113.0,121.0,114.0,116.0,68.0,140.0,97.0,110.0,107.0,98.0,122.0,104.0,121.0,113.0,140.0,97.0,108.0,140.0,97.0,97.0,122.0,97.0,121.0,97.0,76.0,88.0,121.0,116.0,71.0,72.0,120.0,97.0,113.0,97.5,97.0,140.0,122.0,83.0,90.0,91.0,79.0,97.0,98.0,96.0,122.0,97.0,79.0,120.0],"y_values":[63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97]}},"id":"1b13a75f-fd5b-4452-bbd6-513ced98c52a","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"6dff78cb-5779-48ea-86a5-b5337b216811","type":"BasicTicker"}},"id":"c5eab277-7d92-4548-9089-dd01d2d01b5c","type":"Grid"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"1280924c-867e-41b2-9314-c12b5ffff559","type":"Range1d"},{"attributes":{},"id":"61ec75fc-5aaf-41cf-ab09-8359ee60e79d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"fbaab0d9-706a-421c-ac4c-accc67a76c27","type":"ColumnDataSource"},"glyph":{"id":"f3448832-b712-4810-95a5-15fae20e4491","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"50d5f08a-7a26-44aa-93b1-6cd587fa9df3","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"859890fb-687e-4746-b908-27e2d9a31b8a","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"44bfb710-f8db-47d7-8dc7-eee4be8a124e","type":"LinearAxis"}],"height":400,"left":[{"id":"8095c6c8-2045-4aac-9075-e39f744ec7ea","type":"LinearAxis"}],"renderers":[{"id":"859890fb-687e-4746-b908-27e2d9a31b8a","type":"BoxAnnotation"},{"id":"50d5f08a-7a26-44aa-93b1-6cd587fa9df3","type":"GlyphRenderer"},{"id":"947067c6-9df1-4d7e-9855-1db0213ecb72","type":"GlyphRenderer"},{"id":"784773ab-7bde-4833-93f5-cf62ec2ec748","type":"GlyphRenderer"},{"id":"e8ac6cc5-08e1-41e4-bdcb-c31a1087df95","type":"GlyphRenderer"},{"id":"24081fd8-0f64-4e62-a69b-97e32c7a7972","type":"GlyphRenderer"},{"id":"334c758e-a22a-4ab3-b37f-df87aeaf6805","type":"Legend"},{"id":"44bfb710-f8db-47d7-8dc7-eee4be8a124e","type":"LinearAxis"},{"id":"8095c6c8-2045-4aac-9075-e39f744ec7ea","type":"LinearAxis"},{"id":"8d50b5fc-08ea-4aa9-b7b1-f526abe595f1","type":"Grid"},{"id":"c5eab277-7d92-4548-9089-dd01d2d01b5c","type":"Grid"}],"title":{"id":"c2be4a86-2cb2-4586-81f2-7896bdcd76ed","type":"Title"},"tool_events":{"id":"7beaca19-fb2a-4470-9af6-cd2b3638e309","type":"ToolEvents"},"toolbar":{"id":"e60eab5a-254e-40fb-951a-bf7c438ee04a","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"106bdf66-bce8-42a4-be3c-ccaa0687bac2","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1280924c-867e-41b2-9314-c12b5ffff559","type":"Range1d"}},"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"8e631f5f-69ea-47cc-a432-d04ce9af31c0","type":"Circle"},{"attributes":{"plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"}},"id":"7a0e1fcb-d94d-49b4-8685-0a8a2b78a6cf","type":"SaveTool"},{"attributes":{"data_source":{"id":"f0d424d1-26b4-4546-a300-c20cd7266b41","type":"ColumnDataSource"},"glyph":{"id":"2652ff5e-0d98-4f9d-901b-ae672eab9018","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"784773ab-7bde-4833-93f5-cf62ec2ec748","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"315c891e-0f49-493d-97af-7edbf51535db","type":"ColumnDataSource"},"glyph":{"id":"afa46df1-b649-4894-83b3-952c73ec4e4c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"24081fd8-0f64-4e62-a69b-97e32c7a7972","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"}},"id":"bc461e48-a2b9-4c5e-8666-fbec8e22cbb1","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"}},"id":"c88b7ddc-9e84-4ab8-bb75-c58403e1f25d","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#00ad9c"},"line_color":{"value":"#00ad9c"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"afa46df1-b649-4894-83b3-952c73ec4e4c","type":"Circle"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"af0e0846-6805-4ca4-bfb0-a8c76c034e54","type":"BasicTickFormatter"},"plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"61ec75fc-5aaf-41cf-ab09-8359ee60e79d","type":"BasicTicker"}},"id":"44bfb710-f8db-47d7-8dc7-eee4be8a124e","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#df5320"},"line_color":{"value":"#df5320"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"aff987ad-6c96-441e-a9d1-e84449119d6a","type":"Circle"},{"attributes":{"plot":null,"text":"HP vs DISPL (shaded by CYL)"},"id":"c2be4a86-2cb2-4586-81f2-7896bdcd76ed","type":"Title"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"2652ff5e-0d98-4f9d-901b-ae672eab9018","type":"Circle"},{"attributes":{"overlay":{"id":"859890fb-687e-4746-b908-27e2d9a31b8a","type":"BoxAnnotation"},"plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"}},"id":"7860202b-7420-4346-bc99-615116fbbb5f","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"}},"id":"6c945d7b-8e30-4d8f-aeed-cc6abf2d2190","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5],"x_values":[121.0,131.0,183.0],"y_values":[67,103,77]}},"id":"f0d424d1-26b4-4546-a300-c20cd7266b41","type":"ColumnDataSource"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"3c745f7c-43b9-4718-bf4e-38980f00efd1","type":"BasicTickFormatter"},"plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"6dff78cb-5779-48ea-86a5-b5337b216811","type":"BasicTicker"}},"id":"8095c6c8-2045-4aac-9075-e39f744ec7ea","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1b13a75f-fd5b-4452-bbd6-513ced98c52a","type":"ColumnDataSource"},"glyph":{"id":"8e631f5f-69ea-47cc-a432-d04ce9af31c0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"947067c6-9df1-4d7e-9855-1db0213ecb72","type":"GlyphRenderer"},{"attributes":{},"id":"3c745f7c-43b9-4718-bf4e-38980f00efd1","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"106bdf66-bce8-42a4-be3c-ccaa0687bac2","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"26686d55-e4f9-4438-8017-0d0dc465b27f","type":"PanTool"},{"id":"bc461e48-a2b9-4c5e-8666-fbec8e22cbb1","type":"WheelZoomTool"},{"id":"7860202b-7420-4346-bc99-615116fbbb5f","type":"BoxZoomTool"},{"id":"7a0e1fcb-d94d-49b4-8685-0a8a2b78a6cf","type":"SaveTool"},{"id":"c88b7ddc-9e84-4ab8-bb75-c58403e1f25d","type":"ResetTool"},{"id":"6c945d7b-8e30-4d8f-aeed-cc6abf2d2190","type":"HelpTool"}]},"id":"e60eab5a-254e-40fb-951a-bf7c438ee04a","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"x_values":[400.0,350.0,302.0,318.0,350.0,304.0,318.0,350.0,304.0,429.0,360.0,440.0,351.0,455.0,390.0,383.0,400.0,340.0,400.0,400.0,455.0,350.0,383.0,318.0,454.0,307.0,318.0,318.0,350.0,302.0,318.0,400.0,350.0,305.0,260.0,318.0,302.0,400.0,350.0,400.0,351.0,350.0,360.0,350.0,400.0,318.0,350.0,400.0,350.0,318.0,351.0,262.0,302.0,304.0,302.0,318.0,350.0,302.0,305.0,318.0,304.0,351.0,318.0,400.0,360.0,260.0,351.0,267.0,360.0,350.0,260.0,318.0,302.0,307.0,304.0,400.0,350.0,350.0,429.0,304.0,351.0,350.0,318.0,351.0,302.0,318.0,302.0,455.0,305.0,302.0,318.0,440.0,400.0,318.0,400.0,429.0,302.0,350.0,304.0,350.0,305.0,351.0,307.0],"y_values":[175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"315c891e-0f49-493d-97af-7edbf51535db","type":"ColumnDataSource"},{"attributes":{"legends":[["3",[{"id":"50d5f08a-7a26-44aa-93b1-6cd587fa9df3","type":"GlyphRenderer"}]],["4",[{"id":"947067c6-9df1-4d7e-9855-1db0213ecb72","type":"GlyphRenderer"}]],["5",[{"id":"784773ab-7bde-4833-93f5-cf62ec2ec748","type":"GlyphRenderer"}]],["6",[{"id":"e8ac6cc5-08e1-41e4-bdcb-c31a1087df95","type":"GlyphRenderer"}]],["8",[{"id":"24081fd8-0f64-4e62-a69b-97e32c7a7972","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"}},"id":"334c758e-a22a-4ab3-b37f-df87aeaf6805","type":"Legend"},{"attributes":{"plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"}},"id":"26686d55-e4f9-4438-8017-0d0dc465b27f","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"x_values":[250.0,250.0,231.0,232.0,225.0,200.0,231.0,250.0,232.0,225.0,250.0,200.0,163.0,200.0,173.0,232.0,250.0,250.0,163.0,173.0,198.0,231.0,258.0,200.0,231.0,232.0,258.0,225.0,232.0,225.0,173.0,225.0,168.0,231.0,232.0,198.0,232.0,146.0,200.0,250.0,225.0,250.0,250.0,258.0,225.0,181.0,232.0,262.0,171.0,232.0,232.0,231.0,225.0,258.0,250.0,231.0,250.0,250.0,250.0,225.0,156.0,225.0,225.0,156.0,199.0,250.0,231.0,225.0,225.0,200.0,168.0,199.0,198.0,258.0,250.0,250.0,250.0,232.0,146.0,168.0,145.0,200.0,155.0],"y_values":[88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107]}},"id":"7368b541-d8e1-4b26-b703-1c5ea1b8b134","type":"ColumnDataSource"},{"attributes":{},"id":"6dff78cb-5779-48ea-86a5-b5337b216811","type":"BasicTicker"},{"attributes":{},"id":"af0e0846-6805-4ca4-bfb0-a8c76c034e54","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7368b541-d8e1-4b26-b703-1c5ea1b8b134","type":"ColumnDataSource"},"glyph":{"id":"aff987ad-6c96-441e-a9d1-e84449119d6a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e8ac6cc5-08e1-41e4-bdcb-c31a1087df95","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x_values":[80.0,70.0,70.0,70.0],"y_values":[110,100,90,97]}},"id":"fbaab0d9-706a-421c-ac4c-accc67a76c27","type":"ColumnDataSource"},{"attributes":{},"id":"7beaca19-fb2a-4470-9af6-cd2b3638e309","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"f3448832-b712-4810-95a5-15fae20e4491","type":"Circle"},{"attributes":{"plot":{"id":"423dea35-a172-4a2b-9f77-e250bc3a65f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"61ec75fc-5aaf-41cf-ab09-8359ee60e79d","type":"BasicTicker"}},"id":"8d50b5fc-08ea-4aa9-b7b1-f526abe595f1","type":"Grid"}],"root_ids":["423dea35-a172-4a2b-9f77-e250bc3a65f7"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"1f1e15d7-9457-4fc7-b280-dd702ffa14ae","elementid":"8e331b6f-6e97-411a-8ab9-bd07b2e57dcf","modelid":"423dea35-a172-4a2b-9f77-e250bc3a65f7"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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