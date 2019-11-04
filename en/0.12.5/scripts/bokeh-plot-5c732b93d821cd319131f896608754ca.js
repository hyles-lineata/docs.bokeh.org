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
      };var element = document.getElementById("5972fab1-71e3-45ac-9c41-2435767ad4f7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5972fab1-71e3-45ac-9c41-2435767ad4f7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"31f59b4f-62d6-4ff9-b22c-c89f67606bb4":{"roots":{"references":[{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"eb340299-4d25-46ee-8e0a-02f869bf8abb","type":"BasicTickFormatter"},"plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"},"ticker":{"id":"6ad003ec-5bee-43d3-bc0e-57e5f7d2112d","type":"BasicTicker"}},"id":"650fa9bb-9e7c-4875-ae4c-24eec54c8070","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"455c5182-7ac9-4dff-88ce-ed869da00ba7","type":"PanTool"},{"id":"f77ea363-9943-4b94-b580-e3e5dab9911d","type":"WheelZoomTool"},{"id":"6a199be1-b8ac-4266-a575-c46b4be89082","type":"BoxZoomTool"},{"id":"72f57ba3-f423-427e-aaff-fba5780cd99d","type":"SaveTool"},{"id":"9bc8eb8d-0f1e-4296-b117-91a5457c66af","type":"ResetTool"},{"id":"b913b00f-e034-4dcd-b0b3-cb2d7c70f1ee","type":"HelpTool"}]},"id":"d4f7e754-0de9-4524-a714-88c5a9cec3d1","type":"Toolbar"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"db372453-e216-41c4-950c-3d74a2e4d0df","type":"Range1d"},{"attributes":{"items":[{"id":"44729cbd-a47c-4c6a-876d-fddc90d78aef","type":"LegendItem"},{"id":"9c195989-6ce6-4be9-b141-139cf44e2b45","type":"LegendItem"},{"id":"345ec790-7ce0-476e-af03-9d0d639cd113","type":"LegendItem"},{"id":"517b0cbb-4c63-4185-aa49-3af5d66067ef","type":"LegendItem"},{"id":"cbfd9d89-1378-400b-abbb-05aa521ff72a","type":"LegendItem"}],"location":"top_left","plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"}},"id":"c8ccdc62-c330-49c1-b5b5-5c2d9bc58ef1","type":"Legend"},{"attributes":{"data_source":{"id":"2ccb9c34-def3-4c5f-ab94-406820a35ca7","type":"ColumnDataSource"},"glyph":{"id":"f712f39f-ad6d-4901-9594-132d76e673c6","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"f13ebf7c-93ab-4f4e-8c06-a9ba002384c5","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"HP vs MPG (shaded by CYL)"},"id":"8735f6e9-f223-4d6e-a40a-befdd59e5bb7","type":"Title"},{"attributes":{"plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"}},"id":"b913b00f-e034-4dcd-b0b3-cb2d7c70f1ee","type":"HelpTool"},{"attributes":{"overlay":{"id":"462d2063-4df4-40b5-8db2-f9de9d11a2be","type":"BoxAnnotation"},"plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"}},"id":"6a199be1-b8ac-4266-a575-c46b4be89082","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x_values":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAgDVAMzMzMzOzN0A=","dtype":"float64","shape":[4]},"y_values":[97,90,110,100]}},"id":"c770acaf-2eb0-4f65-a306-5e21363bb2f1","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"},"ticker":{"id":"164b5472-e0a0-4c39-8d90-9d6c88c2f118","type":"BasicTicker"}},"id":"4f3cd6bb-9530-43f6-9fc5-093b2237e32a","type":"Grid"},{"attributes":{"plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"}},"id":"f77ea363-9943-4b94-b580-e3e5dab9911d","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"}},"id":"455c5182-7ac9-4dff-88ce-ed869da00ba7","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"x_values":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAACRAAAAAAAAAJEAAAAAAAAAmQAAAAAAAACJAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALEAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADFAAAAAAAAAJkAAAAAAAAAqQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAuQAAAAAAAACpAAAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAAChAAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAJkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADBAAAAAAAAALEAAAAAAAAA0QAAAAAAAACpAAAAAAACAMUAAAAAAAAAwQAAAAAAAAC9AAAAAAAAALUAAAAAAAAAqQAAAAAAAgDBAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACpAAAAAAACAMUAAAAAAAAAxQAAAAAAAAC9AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAmpmZmZkZMkAAAAAAAIAxQAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkAAAAAAAAA3QGZmZmZm5jdAmpmZmZmZOkA=","dtype":"float64","shape":[103]},"y_values":[130,165,150,150,140,198,220,215,225,190,170,160,150,225,215,200,210,193,165,175,153,150,180,170,175,165,175,150,153,150,208,155,160,190,150,130,140,150,175,150,145,137,150,198,150,158,150,215,225,175,150,167,170,180,145,230,150,180,140,150,150,140,150,170,145,150,148,110,129,140,150,120,152,150,180,145,130,150,145,110,145,130,180,170,190,149,110,140,139,145,139,140,130,129,138,135,155,142,125,150,125,90,105]}},"id":"522daefc-af6f-4ef8-aa2a-4335329d9017","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"522daefc-af6f-4ef8-aa2a-4335329d9017","type":"ColumnDataSource"},"glyph":{"id":"2b4a643f-c4e4-4d8f-9098-feb23690009c","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"b79ffe60-b2d9-408a-a94e-3ee77ed06986","type":"GlyphRenderer"},{"attributes":{},"id":"eb340299-4d25-46ee-8e0a-02f869bf8abb","type":"BasicTickFormatter"},{"attributes":{},"id":"164b5472-e0a0-4c39-8d90-9d6c88c2f118","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#df5320"},"line_color":{"value":"#df5320"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"cc15195e-8602-45dd-80ba-36f8154272ed","type":"Circle"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"2f4fec46-a8a1-48e6-b38c-a8a509580311","type":"GlyphRenderer"}]},"id":"345ec790-7ce0-476e-af03-9d0d639cd113","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"8a325784-7f27-4377-a53e-c27ee3491409","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"df99f497-fc02-433e-9291-f11e40d7868b","type":"Circle"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"d77382a2-148d-4216-89b0-3414ecde35c3","type":"BasicTickFormatter"},"plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"},"ticker":{"id":"164b5472-e0a0-4c39-8d90-9d6c88c2f118","type":"BasicTicker"}},"id":"81353da6-7f04-4589-8378-52780c05f210","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"462d2063-4df4-40b5-8db2-f9de9d11a2be","type":"BoxAnnotation"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"b79ffe60-b2d9-408a-a94e-3ee77ed06986","type":"GlyphRenderer"}]},"id":"44729cbd-a47c-4c6a-876d-fddc90d78aef","type":"LegendItem"},{"attributes":{},"id":"8f498429-3937-4d93-9db0-2918de361536","type":"ToolEvents"},{"attributes":{"below":[{"id":"650fa9bb-9e7c-4875-ae4c-24eec54c8070","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"81353da6-7f04-4589-8378-52780c05f210","type":"LinearAxis"}],"renderers":[{"id":"462d2063-4df4-40b5-8db2-f9de9d11a2be","type":"BoxAnnotation"},{"id":"b79ffe60-b2d9-408a-a94e-3ee77ed06986","type":"GlyphRenderer"},{"id":"f13ebf7c-93ab-4f4e-8c06-a9ba002384c5","type":"GlyphRenderer"},{"id":"2f4fec46-a8a1-48e6-b38c-a8a509580311","type":"GlyphRenderer"},{"id":"4ce15f0f-f919-490e-b3a2-9cab884ab679","type":"GlyphRenderer"},{"id":"0de36e37-f15f-4ac3-bf75-b1b0cd0de60e","type":"GlyphRenderer"},{"id":"c8ccdc62-c330-49c1-b5b5-5c2d9bc58ef1","type":"Legend"},{"id":"650fa9bb-9e7c-4875-ae4c-24eec54c8070","type":"LinearAxis"},{"id":"81353da6-7f04-4589-8378-52780c05f210","type":"LinearAxis"},{"id":"35ecbf87-9606-42df-824d-a15dda4e9612","type":"Grid"},{"id":"4f3cd6bb-9530-43f6-9fc5-093b2237e32a","type":"Grid"}],"title":{"id":"8735f6e9-f223-4d6e-a40a-befdd59e5bb7","type":"Title"},"tool_events":{"id":"8f498429-3937-4d93-9db0-2918de361536","type":"ToolEvents"},"toolbar":{"id":"d4f7e754-0de9-4524-a714-88c5a9cec3d1","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"db372453-e216-41c4-950c-3d74a2e4d0df","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"8ceee6de-de56-4680-8c9d-6e913c94c4b3","type":"Range1d"}},"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"ab6a7590-59e0-4e89-a50a-a643f9602ad2","type":"ColumnDataSource"},"glyph":{"id":"cc15195e-8602-45dd-80ba-36f8154272ed","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"2f4fec46-a8a1-48e6-b38c-a8a509580311","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"x_values":{"__ndarray__":"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","dtype":"float64","shape":[199]},"y_values":[95,88,46,87,90,95,113,88,90,95,72,86,90,70,76,65,69,60,70,95,80,54,90,86,112,76,87,69,86,92,97,80,88,46,88,72,94,85,90,49,75,91,112,110,67,80,65,75,83,67,78,52,61,75,75,75,97,93,67,75,83,78,96,71,97,70,95,88,98,115,53,86,81,92,79,83,52,60,70,53,71,70,75,72,102,88,68,80,58,96,70,78,88,75,89,63,83,67,78,110,48,66,52,70,60,88,68,95,97,75,95,105,85,97,115,71,68,88,71,65,80,80,71,70,70,65,69,90,90,76,60,70,65,90,88,90,78,90,75,92,75,65,105,65,48,48,67,67,67,62,88,72,84,84,92,84,58,64,60,67,65,62,68,63,65,65,74,75,75,100,74,80,88,88,88,85,84,90,92,74,68,68,63,70,88,75,70,67,67,67,92,96,84,90,86,52,84,79,82]}},"id":"2ccb9c34-def3-4c5f-ab94-406820a35ca7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"},"ticker":{"id":"6ad003ec-5bee-43d3-bc0e-57e5f7d2112d","type":"BasicTicker"}},"id":"35ecbf87-9606-42df-824d-a15dda4e9612","type":"Grid"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"x_values":{"__ndarray__":"AAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAANUAAAAAAAAAzQAAAAAAAADBAAAAAAAAAMUAAAAAAAAAzQAAAAAAAADJAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADJAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAADRAAAAAAAAAM0AAAAAAAAAuQAAAAAAAADBAAAAAAAAAMEAAAAAAAAAyQAAAAAAAADNAAAAAAAAAMkAAAAAAAAAuQAAAAAAAAC5AAAAAAAAAMUAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMkAAAAAAAAA1QAAAAAAAADRAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADZAAAAAAAAANkAAAAAAAAA4QAAAAAAAgDZAAAAAAAAANEAAAAAAAAAyQAAAAAAAgDJAAAAAAACAMUAAAAAAAAAzQAAAAAAAgDBAAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAA2QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QAAAAAAAgDRAZmZmZmZmM0CamZmZmZk0QM3MzMzMzDRAmpmZmZmZMkCamZmZmRkyQDMzMzMzszFAAAAAAAAAMUAzMzMzMzMwQAAAAAAAgDVAzczMzMzMM0AzMzMzMzM0QJqZmZmZmTRAzczMzMzMPEDNzMzMzMw6QJqZmZmZGTNAmpmZmZlZQEAAAAAAAIA3QDMzMzMzsz5AZmZmZmZmOUAzMzMzMzM4QGZmZmZmZjZAMzMzMzMzNECamZmZmZkxQAAAAAAAADlAAAAAAAAAQ0AAAAAAAAA2QA==","dtype":"float64","shape":[83]},"y_values":[95,97,85,90,100,105,100,88,100,110,100,88,105,100,100,88,95,100,107,122,95,100,100,100,110,105,95,105,72,72,110,105,110,95,110,100,97,90,100,105,81,90,100,78,110,95,108,120,110,105,100,98,97,105,95,85,100,90,105,85,110,120,165,125,133,115,85,90,110,115,115,90,132,110,76,116,120,110,88,85,110,85,112]}},"id":"ab6a7590-59e0-4e89-a50a-a643f9602ad2","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#00ad9c"},"line_color":{"value":"#00ad9c"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"2b4a643f-c4e4-4d8f-9098-feb23690009c","type":"Circle"},{"attributes":{"plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"}},"id":"72f57ba3-f423-427e-aaff-fba5780cd99d","type":"SaveTool"},{"attributes":{"plot":{"id":"474f80ba-9494-4e67-8b50-e636ddf5c17d","subtype":"Chart","type":"Plot"}},"id":"9bc8eb8d-0f1e-4296-b117-91a5457c66af","type":"ResetTool"},{"attributes":{},"id":"6ad003ec-5bee-43d3-bc0e-57e5f7d2112d","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5],"x_values":{"__ndarray__":"zczMzMxMNEBmZmZmZmY5QDMzMzMzM0JA","dtype":"float64","shape":[3]},"y_values":[103,77,67]}},"id":"9b231a56-c7f3-48e5-a800-967cfb039528","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9b231a56-c7f3-48e5-a800-967cfb039528","type":"ColumnDataSource"},"glyph":{"id":"8a325784-7f27-4377-a53e-c27ee3491409","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"0de36e37-f15f-4ac3-bf75-b1b0cd0de60e","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"8ceee6de-de56-4680-8c9d-6e913c94c4b3","type":"Range1d"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"0de36e37-f15f-4ac3-bf75-b1b0cd0de60e","type":"GlyphRenderer"}]},"id":"cbfd9d89-1378-400b-abbb-05aa521ff72a","type":"LegendItem"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"4ce15f0f-f919-490e-b3a2-9cab884ab679","type":"GlyphRenderer"}]},"id":"517b0cbb-4c63-4185-aa49-3af5d66067ef","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"f712f39f-ad6d-4901-9594-132d76e673c6","type":"Circle"},{"attributes":{"data_source":{"id":"c770acaf-2eb0-4f65-a306-5e21363bb2f1","type":"ColumnDataSource"},"glyph":{"id":"df99f497-fc02-433e-9291-f11e40d7868b","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"4ce15f0f-f919-490e-b3a2-9cab884ab679","type":"GlyphRenderer"},{"attributes":{},"id":"d77382a2-148d-4216-89b0-3414ecde35c3","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"f13ebf7c-93ab-4f4e-8c06-a9ba002384c5","type":"GlyphRenderer"}]},"id":"9c195989-6ce6-4be9-b141-139cf44e2b45","type":"LegendItem"}],"root_ids":["474f80ba-9494-4e67-8b50-e636ddf5c17d"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"31f59b4f-62d6-4ff9-b22c-c89f67606bb4","elementid":"5972fab1-71e3-45ac-9c41-2435767ad4f7","modelid":"474f80ba-9494-4e67-8b50-e636ddf5c17d"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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