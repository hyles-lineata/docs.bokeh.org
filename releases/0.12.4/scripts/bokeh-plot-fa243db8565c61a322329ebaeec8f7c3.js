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
      };var element = document.getElementById("9e499441-c2e0-4ad1-838f-c18c87ed39cc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9e499441-c2e0-4ad1-838f-c18c87ed39cc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"dc408541-98e8-4785-85c9-274711acce45":{"roots":{"references":[{"attributes":{},"id":"83e9ba42-8473-4ab8-bc05-c9fe27972ce9","type":"ToolEvents"},{"attributes":{"plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"}},"id":"da835d2b-d4ae-495f-be3b-9f98a6502c4e","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":837.1,"start":-76.10000000000001},"id":"24e62a72-895e-4467-9e6a-f400c2dac867","type":"Range1d"},{"attributes":{"children":[{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"},{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"}]},"id":"d4deeb16-eee0-43ea-9114-8ef12382b592","type":"Row"},{"attributes":{"items":[{"id":"6140aeaa-22b8-4e57-aba0-58d02ce270ff","type":"LegendItem"},{"id":"4386c428-42c7-48e9-96a0-1a3e025ab0a5","type":"LegendItem"},{"id":"d1d90649-5702-4ef5-afdc-d175491e0e5c","type":"LegendItem"}],"location":"top_left","plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"}},"id":"3dca6aa0-cc9b-4c17-aa3a-d955bd052fa4","type":"Legend"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"da30d824-b64d-472a-b093-47b89ab09fa3","type":"PanTool"},{"id":"da835d2b-d4ae-495f-be3b-9f98a6502c4e","type":"WheelZoomTool"},{"id":"f824b5b4-07d7-4154-86ca-c5213ff12a30","type":"BoxZoomTool"},{"id":"bae4b18d-337e-4d48-8f64-0266ad2e5a01","type":"SaveTool"},{"id":"df0a83d5-b49d-44b1-962d-b62d0d26fdeb","type":"ResetTool"},{"id":"10fc977e-94e4-476b-bc97-e475fea57a73","type":"HelpTool"}]},"id":"4a06c31b-1c4a-4e23-9728-1cd8d9986f9d","type":"Toolbar"},{"attributes":{},"id":"d2b85dff-1024-4057-943d-1bddf4a0abba","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"pypy"},"renderers":[{"id":"d9344602-ae3e-466d-802b-d286c02ded33","type":"GlyphRenderer"}]},"id":"4386c428-42c7-48e9-96a0-1a3e025ab0a5","type":"LegendItem"},{"attributes":{"overlay":{"id":"d8e40ff3-6730-4ae0-a8ae-28eac4c60e62","type":"BoxAnnotation"},"plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"}},"id":"f824b5b4-07d7-4154-86ca-c5213ff12a30","type":"BoxZoomTool"},{"attributes":{},"id":"0c6b5dac-5482-47f5-91f5-c3c07a7697d1","type":"ToolEvents"},{"attributes":{"plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"}},"id":"58f91909-d329-46c7-9c02-1694b944fbe7","type":"PanTool"},{"attributes":{"label":{"value":"python"},"renderers":[{"id":"614b457b-122b-445a-8d93-0fa92073c369","type":"GlyphRenderer"}]},"id":"d1d90649-5702-4ef5-afdc-d175491e0e5c","type":"LegendItem"},{"attributes":{"below":[{"id":"6a1debfe-3b39-4ea4-8128-ecdac0f15e06","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"85d4ebec-c97c-46b0-ac3a-92aba3aef29b","type":"LinearAxis"}],"renderers":[{"id":"4bfc2d73-76a1-4096-832b-e381ea9859c7","type":"BoxAnnotation"},{"id":"6da6eb4b-a5ff-4c39-8786-d4705e8d41dc","type":"GlyphRenderer"},{"id":"d9344602-ae3e-466d-802b-d286c02ded33","type":"GlyphRenderer"},{"id":"614b457b-122b-445a-8d93-0fa92073c369","type":"GlyphRenderer"},{"id":"3dca6aa0-cc9b-4c17-aa3a-d955bd052fa4","type":"Legend"},{"id":"6a1debfe-3b39-4ea4-8128-ecdac0f15e06","type":"LinearAxis"},{"id":"85d4ebec-c97c-46b0-ac3a-92aba3aef29b","type":"LinearAxis"},{"id":"108a0aca-ae94-4f55-894c-1c4d11a7caef","type":"Grid"},{"id":"781139c5-e9f7-47ce-845c-68dd69d42c00","type":"Grid"}],"title":{"id":"ddf18a51-f2cd-4f27-a3aa-577825a88719","type":"Title"},"tool_events":{"id":"0c6b5dac-5482-47f5-91f5-c3c07a7697d1","type":"ToolEvents"},"toolbar":{"id":"62c5b017-606b-485d-8398-bb07844faa6c","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"50ebbf5e-b5a1-4cb0-8039-3d5def084f1d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"24e62a72-895e-4467-9e6a-f400c2dac867","type":"Range1d"}},"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"},"ticker":{"id":"8801a1f3-69ed-4d70-b54c-53c101704cd3","type":"BasicTicker"}},"id":"1b3bd21e-5ee5-4626-ac23-cfc672ff5476","type":"Grid"},{"attributes":{},"id":"930e6575-6be9-45d8-b46f-2e3849e6b253","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"6d24eb65-83f2-4548-90e6-9822430e0dcb","type":"Patches"},{"attributes":{"data_source":{"id":"8e617ff1-4d21-4037-984d-cd02bc11f757","type":"ColumnDataSource"},"glyph":{"id":"780e80ae-04bf-42d2-b2fa-a5ff1f615f5c","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"68fb832a-4fd3-4401-8371-f53e9191f34f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"866154f3-fb42-4f4f-97ce-2caadbdfe339","type":"Patches"},{"attributes":{"data_source":{"id":"cf36e7ea-eaf1-4072-9a30-1fd43968d9cc","type":"ColumnDataSource"},"glyph":{"id":"6d24eb65-83f2-4548-90e6-9822430e0dcb","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"614b457b-122b-445a-8d93-0fa92073c369","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"9855c1a2-5c28-4020-b25d-4ce6aff5e3d1","type":"LegendItem"},{"id":"f17bc551-e53f-4660-aa70-1a8966c20adf","type":"LegendItem"},{"id":"e018146e-4fa2-4cc7-92d3-161311060446","type":"LegendItem"}],"location":"top_left","plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"}},"id":"56b965a4-7163-4476-9670-ac946e48b302","type":"Legend"},{"attributes":{},"id":"6d543ac3-e215-423a-9be2-a9808e2ac9ad","type":"BasicTickFormatter"},{"attributes":{"axis_label":"memory","formatter":{"id":"930e6575-6be9-45d8-b46f-2e3849e6b253","type":"BasicTickFormatter"},"plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"},"ticker":{"id":"ffda32dd-375f-4df4-8c9c-9a7e08899c6b","type":"BasicTicker"}},"id":"85d4ebec-c97c-46b0-ac3a-92aba3aef29b","type":"LinearAxis"},{"attributes":{"axis_label":"memory","formatter":{"id":"6d543ac3-e215-423a-9be2-a9808e2ac9ad","type":"BasicTickFormatter"},"plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"},"ticker":{"id":"8801a1f3-69ed-4d70-b54c-53c101704cd3","type":"BasicTicker"}},"id":"40eaf4fb-76bb-41ed-867c-52e4a68abbc9","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13,13,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAABBQAAAAAAAAFNAAAAAAACATEAAAAAAAABEQAAAAAAAAGNAAAAAAADAa0AAAAAAACBwQAAAAAAAQHtAAAAAAAAAfEAAAAAAAIB7QAAAAAAAsHpAAAAAAADgfkAAAAAAACBvQAAAAAAAIHJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRAAAAAAABgYUAAAAAAAGBsQAAAAAAAIGlAAAAAAADgakAAAAAAAEBoQAAAAAAAYGlAAAAAAACAXEAAAAAAAEBZQAAAAAAAADpAAAAAAAAAOUAAAAAAAAAkQAAAAAAAgEVAAAAAAAAANkAAAAAAAAAAAA==","dtype":"float64","shape":[32]}]}},"id":"0babb40a-d522-4e3a-a632-a70888a8922b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"}},"id":"8d226886-1d47-4590-b79e-4adcec48dbed","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"}},"id":"90f7391a-a377-4144-9b74-ef4bfd44f12c","type":"HelpTool"},{"attributes":{"data_source":{"id":"7ee87493-fb4a-48b6-a122-fb0d08f1266d","type":"ColumnDataSource"},"glyph":{"id":"235c8752-6d73-4ffa-934f-269556890af9","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6da6eb4b-a5ff-4c39-8786-d4705e8d41dc","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"5b54ae4a-c3bf-45a4-8b9e-b2a4e74287a5","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"40eaf4fb-76bb-41ed-867c-52e4a68abbc9","type":"LinearAxis"}],"renderers":[{"id":"d8e40ff3-6730-4ae0-a8ae-28eac4c60e62","type":"BoxAnnotation"},{"id":"68fb832a-4fd3-4401-8371-f53e9191f34f","type":"GlyphRenderer"},{"id":"f0f03a01-244d-4481-b82d-fa3a87e13616","type":"GlyphRenderer"},{"id":"4300fd8c-a2d1-4e3f-bc63-d529cccf9802","type":"GlyphRenderer"},{"id":"56b965a4-7163-4476-9670-ac946e48b302","type":"Legend"},{"id":"5b54ae4a-c3bf-45a4-8b9e-b2a4e74287a5","type":"LinearAxis"},{"id":"40eaf4fb-76bb-41ed-867c-52e4a68abbc9","type":"LinearAxis"},{"id":"f272c73b-51d9-4276-b6be-a3d097aa918e","type":"Grid"},{"id":"1b3bd21e-5ee5-4626-ac23-cfc672ff5476","type":"Grid"}],"title":{"id":"dc862511-5407-480f-9a10-ea7a27e37e39","type":"Title"},"tool_events":{"id":"83e9ba42-8473-4ab8-bc05-c9fe27972ce9","type":"ToolEvents"},"toolbar":{"id":"4a06c31b-1c4a-4e23-9728-1cd8d9986f9d","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"858889c8-53c3-471f-82c8-ff32dde9cc3e","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"4ef96aca-506d-47e1-bdda-894aadfec67e","type":"Range1d"}},"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"}},"id":"bae4b18d-337e-4d48-8f64-0266ad2e5a01","type":"SaveTool"},{"attributes":{"overlay":{"id":"4bfc2d73-76a1-4096-832b-e381ea9859c7","type":"BoxAnnotation"},"plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"}},"id":"16bb59c0-ec93-4212-b1bd-80632050d0a8","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"}},"id":"df0a83d5-b49d-44b1-962d-b62d0d26fdeb","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"7492b13e-bb14-4ab7-a7f5-661039692ef3","type":"Patches"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"858889c8-53c3-471f-82c8-ff32dde9cc3e","type":"Range1d"},{"attributes":{"plot":null,"text":"Stacked Area Chart"},"id":"ddf18a51-f2cd-4f27-a3aa-577825a88719","type":"Title"},{"attributes":{"label":{"value":"jython"},"renderers":[{"id":"6da6eb4b-a5ff-4c39-8786-d4705e8d41dc","type":"GlyphRenderer"}]},"id":"6140aeaa-22b8-4e57-aba0-58d02ce270ff","type":"LegendItem"},{"attributes":{},"id":"0845088c-a9d2-43d0-8d28-1d34f1ba8576","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAoQAAAAAAAgEBAAAAAAACAR0AAAAAAAAAuQAAAAAAAgF9AAAAAAABAXkAAAAAAAABiQAAAAAAAIG1AAAAAAADAb0AAAAAAACBsQAAAAAAAQGxAAAAAAACwcEAAAAAAAIBbQAAAAAAAQGBAAAAAAAAAAAA=","dtype":"float64","shape":[16]}]}},"id":"2013d3ca-4884-43df-b955-555a5604d170","type":"ColumnDataSource"},{"attributes":{"label":{"value":"pypy"},"renderers":[{"id":"f0f03a01-244d-4481-b82d-fa3a87e13616","type":"GlyphRenderer"}]},"id":"f17bc551-e53f-4660-aa70-1a8966c20adf","type":"LegendItem"},{"attributes":{"axis_label":"time","formatter":{"id":"d2b85dff-1024-4057-943d-1bddf4a0abba","type":"BasicTickFormatter"},"plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"},"ticker":{"id":"0845088c-a9d2-43d0-8d28-1d34f1ba8576","type":"BasicTicker"}},"id":"6a1debfe-3b39-4ea4-8128-ecdac0f15e06","type":"LinearAxis"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"50ebbf5e-b5a1-4cb0-8039-3d5def084f1d","type":"Range1d"},{"attributes":{"data_source":{"id":"2013d3ca-4884-43df-b955-555a5604d170","type":"ColumnDataSource"},"glyph":{"id":"7492b13e-bb14-4ab7-a7f5-661039692ef3","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f0f03a01-244d-4481-b82d-fa3a87e13616","type":"GlyphRenderer"},{"attributes":{},"id":"ffda32dd-375f-4df4-8c9c-9a7e08899c6b","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"58f91909-d329-46c7-9c02-1694b944fbe7","type":"PanTool"},{"id":"8d226886-1d47-4590-b79e-4adcec48dbed","type":"WheelZoomTool"},{"id":"16bb59c0-ec93-4212-b1bd-80632050d0a8","type":"BoxZoomTool"},{"id":"664b4ca1-69bd-4d64-a60b-7228a0371db1","type":"SaveTool"},{"id":"49049b8c-cf3b-4b81-88e1-92af61020ab7","type":"ResetTool"},{"id":"90f7391a-a377-4144-9b74-ef4bfd44f12c","type":"HelpTool"}]},"id":"62c5b017-606b-485d-8398-bb07844faa6c","type":"Toolbar"},{"attributes":{},"id":"b36f77e6-38e0-4a74-93e4-ae10504369f3","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"python"},"renderers":[{"id":"4300fd8c-a2d1-4e3f-bc63-d529cccf9802","type":"GlyphRenderer"}]},"id":"e018146e-4fa2-4cc7-92d3-161311060446","type":"LegendItem"},{"attributes":{"label":{"value":"jython"},"renderers":[{"id":"68fb832a-4fd3-4401-8371-f53e9191f34f","type":"GlyphRenderer"}]},"id":"9855c1a2-5c28-4020-b25d-4ce6aff5e3d1","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"235c8752-6d73-4ffa-934f-269556890af9","type":"Patches"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13,13,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAABCQAAAAAAAwFNAAAAAAAAAUEAAAAAAAIBGQAAAAAAAQGZAAAAAAACwe0AAAAAAAOByQAAAAAAA6IRAAAAAAADwhUAAAAAAAAiGQAAAAAAAqIVAAAAAAADIh0AAAAAAABB3QAAAAAAAEHlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIHJAAAAAAAAgb0AAAAAAAOB+QAAAAAAAsHpAAAAAAACAe0AAAAAAAAB8QAAAAAAAQHtAAAAAAAAgcEAAAAAAAMBrQAAAAAAAAGNAAAAAAAAAREAAAAAAAIBMQAAAAAAAAFNAAAAAAAAAQUAAAAAAAAAAAA==","dtype":"float64","shape":[32]}]}},"id":"cf36e7ea-eaf1-4072-9a30-1fd43968d9cc","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":293.7,"start":-26.700000000000003},"id":"4ef96aca-506d-47e1-bdda-894aadfec67e","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4bfc2d73-76a1-4096-832b-e381ea9859c7","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d8e40ff3-6730-4ae0-a8ae-28eac4c60e62","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"},"ticker":{"id":"0092c0b2-a8c6-4686-b3a6-a874e2c96ae4","type":"BasicTicker"}},"id":"f272c73b-51d9-4276-b6be-a3d097aa918e","type":"Grid"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAQAAAAAAAAAhAAAAAAAAAHEAAAAAAAAAUQAAAAAAAADpAAAAAAACga0AAAAAAAABGQAAAAAAAIG1AAAAAAADAb0AAAAAAAJBwQAAAAAAAoHBAAAAAAACwcEAAAAAAAABeQAAAAAAAwFtAAAAAAAAAAAA=","dtype":"float64","shape":[16]}]}},"id":"6a641f0f-d610-40ea-8b05-e17348685cdf","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"780e80ae-04bf-42d2-b2fa-a5ff1f615f5c","type":"Patches"},{"attributes":{"axis_label":"time","formatter":{"id":"b36f77e6-38e0-4a74-93e4-ae10504369f3","type":"BasicTickFormatter"},"plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"},"ticker":{"id":"0092c0b2-a8c6-4686-b3a6-a874e2c96ae4","type":"BasicTicker"}},"id":"5b54ae4a-c3bf-45a4-8b9e-b2a4e74287a5","type":"LinearAxis"},{"attributes":{"plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"}},"id":"da30d824-b64d-472a-b093-47b89ab09fa3","type":"PanTool"},{"attributes":{},"id":"8801a1f3-69ed-4d70-b54c-53c101704cd3","type":"BasicTicker"},{"attributes":{},"id":"0092c0b2-a8c6-4686-b3a6-a874e2c96ae4","type":"BasicTicker"},{"attributes":{"plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"},"ticker":{"id":"0845088c-a9d2-43d0-8d28-1d34f1ba8576","type":"BasicTicker"}},"id":"108a0aca-ae94-4f55-894c-1c4d11a7caef","type":"Grid"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAA2QAAAAAAAgEVAAAAAAAAAJEAAAAAAAAA5QAAAAAAAADpAAAAAAABAWUAAAAAAAIBcQAAAAAAAYGlAAAAAAABAaEAAAAAAAOBqQAAAAAAAIGlAAAAAAABgbEAAAAAAAGBhQAAAAAAAAGRAAAAAAAAAAAA=","dtype":"float64","shape":[16]}]}},"id":"8e617ff1-4d21-4037-984d-cd02bc11f757","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0babb40a-d522-4e3a-a632-a70888a8922b","type":"ColumnDataSource"},"glyph":{"id":"de201481-0f78-4b70-b511-84c62e56bf2f","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9344602-ae3e-466d-802b-d286c02ded33","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"48d0045d-d821-4559-b70f-eae2fa6e6ff3","subtype":"Chart","type":"Plot"}},"id":"10fc977e-94e4-476b-bc97-e475fea57a73","type":"HelpTool"},{"attributes":{"data_source":{"id":"6a641f0f-d610-40ea-8b05-e17348685cdf","type":"ColumnDataSource"},"glyph":{"id":"866154f3-fb42-4f4f-97ce-2caadbdfe339","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4300fd8c-a2d1-4e3f-bc63-d529cccf9802","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Area Chart"},"id":"dc862511-5407-480f-9a10-ea7a27e37e39","type":"Title"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13,13,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAA2QAAAAAAAgEVAAAAAAAAAJEAAAAAAAAA5QAAAAAAAADpAAAAAAABAWUAAAAAAAIBcQAAAAAAAYGlAAAAAAABAaEAAAAAAAOBqQAAAAAAAIGlAAAAAAABgbEAAAAAAAGBhQAAAAAAAAGRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==","dtype":"float64","shape":[32]}]}},"id":"7ee87493-fb4a-48b6-a122-fb0d08f1266d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"}},"id":"664b4ca1-69bd-4d64-a60b-7228a0371db1","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"},"ticker":{"id":"ffda32dd-375f-4df4-8c9c-9a7e08899c6b","type":"BasicTicker"}},"id":"781139c5-e9f7-47ce-845c-68dd69d42c00","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"de201481-0f78-4b70-b511-84c62e56bf2f","type":"Patches"},{"attributes":{"plot":{"id":"76027ff3-7c9f-41eb-96ed-dbdd88481bfd","subtype":"Chart","type":"Plot"}},"id":"49049b8c-cf3b-4b81-88e1-92af61020ab7","type":"ResetTool"}],"root_ids":["d4deeb16-eee0-43ea-9114-8ef12382b592"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"dc408541-98e8-4785-85c9-274711acce45","elementid":"9e499441-c2e0-4ad1-838f-c18c87ed39cc","modelid":"d4deeb16-eee0-43ea-9114-8ef12382b592"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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