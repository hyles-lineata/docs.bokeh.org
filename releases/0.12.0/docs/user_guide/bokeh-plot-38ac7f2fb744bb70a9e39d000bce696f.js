document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("7c21f64a-ad42-4db5-86c1-08b2edaf8ea5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7c21f64a-ad42-4db5-86c1-08b2edaf8ea5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"bfcf9ab9-46ec-446f-8c38-6802abf2dce8":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"e8fc8132-427c-4b26-8e1e-f4ce2f2ab242","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"00f17096-39a1-4c45-8db8-8879dc09fce8","type":"Circle"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"d73ba585-4859-419f-944f-325430399e15","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"9fd2777e-aa3a-43be-afd1-97eaa7272adf","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"},"ticker":{"id":"b2cb5ad0-efed-4ca2-a0b9-c21337bdb1fb","type":"BasicTicker"}},"id":"0231b415-1b2a-419d-874c-a8abbe07b8b1","type":"Grid"},{"attributes":{"line_color":{"value":"#407ee7"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"7a709349-7e33-441b-bfc5-d2dfddf62f9e","type":"Segment"},{"attributes":{"data_source":{"id":"5d78adf0-b684-4349-b7c6-dda62e1fbd4e","type":"ColumnDataSource"},"glyph":{"id":"e4700a34-cac2-47be-9099-bee59c7e55b8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9ed99ac4-194c-4135-b970-c4d2a1ddd029","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"288d3527-6afc-4000-8156-63e1abe9221e","type":"Rect"},{"attributes":{"plot":{"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"}},"id":"96d37ca1-f127-4e89-9f5c-52da3f05c5c4","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d8669202-bc60-4419-9cb0-ba9ed9846148","type":"BoxAnnotation"},{"attributes":{},"id":"232c6162-de23-4ce8-93e5-0b710411dba4","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":[26.8,28.8,32.7,38.0,30.7]}},"id":"1a1b85a5-8799-4fdd-94ff-6c91ff6cca59","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"}},"id":"587c65f8-c49d-49db-9e94-86557ace840c","type":"PanTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4700a34-cac2-47be-9099-bee59c7e55b8","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c0eb673-8bd7-4678-b15c-948fa1f4da0c","type":"Rect"},{"attributes":{"data_source":{"id":"75712e08-a7c2-4b69-97a8-cb19b2a4e006","type":"ColumnDataSource"},"glyph":{"id":"31eb633b-9f53-4b74-b264-29f5f689e71d","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4e38dbbe-2ef9-4fc8-b78f-0ed1d322625a","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"8148c2ff-a12d-4e24-8d34-c3154bb2d8c9","type":"FactorRange"},{"attributes":{"data_source":{"id":"40f0b339-e880-45eb-a435-2c78e16e3814","type":"ColumnDataSource"},"glyph":{"id":"98d1ee4a-5807-4f04-b12b-f32383bc2131","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"02312e97-e10c-46e8-a717-6d7786638fed","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"ec2b6eb9-4e59-4218-85af-1d551decc3a6","type":"Circle"},{"attributes":{"line_color":{"value":"#5ab738"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"bb3c30a8-2d2b-4121-832b-6baa5959acb0","type":"Segment"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"497bc0d1-ae70-4bc2-b029-2a1d5239444b","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"},"ticker":{"id":"232c6162-de23-4ce8-93e5-0b710411dba4","type":"CategoricalTicker"}},"id":"7d43bc2e-764a-4346-afd6-5a3e0204cdab","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"5d78adf0-b684-4349-b7c6-dda62e1fbd4e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f097c654-01a4-4124-9c7e-188e5eafce61","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"75ed6ad0-1893-4d17-ae6f-9c8bc1ef2bec","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1a1b85a5-8799-4fdd-94ff-6c91ff6cca59","type":"ColumnDataSource"},"glyph":{"id":"e8fc8132-427c-4b26-8e1e-f4ce2f2ab242","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bf1d3d5c-a80d-494f-b3dc-bcb4b42d0ca8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"}},"id":"64484601-7118-4cc1-8b81-f9fa29d57181","type":"HelpTool"},{"attributes":{"overlay":{"id":"d8669202-bc60-4419-9cb0-ba9ed9846148","type":"BoxAnnotation"},"plot":{"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"}},"id":"e0a15c40-0941-42b6-b1de-58290a9bf1c7","type":"BoxZoomTool"},{"attributes":{"line_color":{"value":"#00ad9c"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"8fa550cb-5724-421b-8c43-75f2166d0c53","type":"Segment"},{"attributes":{"data_source":{"id":"51377961-6b7c-4075-8f3b-8be05d3a9895","type":"ColumnDataSource"},"glyph":{"id":"79c70a77-25e4-45ca-ad19-09f4e6e9d589","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f3e30585-03ca-401f-8d0d-cbb511742929","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d73ba585-4859-419f-944f-325430399e15","type":"ColumnDataSource"},"glyph":{"id":"1c0eb673-8bd7-4678-b15c-948fa1f4da0c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"be15c795-efac-447c-ae17-178074f598f9","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1235551-0d83-40ec-91ef-b954e5c11a2e","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"d78a8d53-ed5f-453c-bfc9-be9498960d65","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"98d1ee4a-5807-4f04-b12b-f32383bc2131","type":"Rect"},{"attributes":{"legends":[["3",[{"id":"f3e30585-03ca-401f-8d0d-cbb511742929","type":"GlyphRenderer"},{"id":"be15c795-efac-447c-ae17-178074f598f9","type":"GlyphRenderer"},{"id":"98648bc0-43e5-474f-a880-dca40f5cf496","type":"GlyphRenderer"}]],["4",[{"id":"02a7de2c-30fd-42a6-80ea-42ca4738569d","type":"GlyphRenderer"},{"id":"6c2e3985-4c92-4ac9-962d-0712484ab3c8","type":"GlyphRenderer"},{"id":"29d96df4-0cc6-4dac-a092-16e294af6845","type":"GlyphRenderer"},{"id":"8aa7904b-3b92-4da9-9a16-90783359071e","type":"GlyphRenderer"}]],["5",[{"id":"daed033a-46f4-4d21-b80c-3c994f70e071","type":"GlyphRenderer"},{"id":"02312e97-e10c-46e8-a717-6d7786638fed","type":"GlyphRenderer"},{"id":"43b399ec-5a49-4310-b048-91d832578ae5","type":"GlyphRenderer"}]],["6",[{"id":"9ed99ac4-194c-4135-b970-c4d2a1ddd029","type":"GlyphRenderer"},{"id":"87065112-e93c-47a0-880d-ae2975e9f1d8","type":"GlyphRenderer"},{"id":"bf1d3d5c-a80d-494f-b3dc-bcb4b42d0ca8","type":"GlyphRenderer"},{"id":"4e38dbbe-2ef9-4fc8-b78f-0ed1d322625a","type":"GlyphRenderer"}]],["8",[{"id":"59e473b9-aac1-4110-8aea-924bc0c93d68","type":"GlyphRenderer"},{"id":"1483857b-1ed1-488c-972e-38db93b1bd20","type":"GlyphRenderer"},{"id":"c2c86532-0479-45d2-94ed-a195b70c64de","type":"GlyphRenderer"},{"id":"b2135c72-4243-48aa-9d88-1a27ff887036","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"}},"id":"4c1a87ff-c105-45a5-a635-cc93c6ee7566","type":"Legend"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"40f0b339-e880-45eb-a435-2c78e16e3814","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bc525a96-f02c-45f6-b18b-4ff4b00715e1","type":"ColumnDataSource"},"glyph":{"id":"7a709349-7e33-441b-bfc5-d2dfddf62f9e","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"43b399ec-5a49-4310-b048-91d832578ae5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"7f0707ca-e79c-4bd1-bf20-f964a7980354","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3a1c6fdf-a2da-4fd7-a583-be3f56165f81","type":"ColumnDataSource"},"glyph":{"id":"288d3527-6afc-4000-8156-63e1abe9221e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"87065112-e93c-47a0-880d-ae2975e9f1d8","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#df5320"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"31eb633b-9f53-4b74-b264-29f5f689e71d","type":"Segment"},{"attributes":{"data_source":{"id":"586e2ae4-6e40-43c9-86dc-6c4824172dda","type":"ColumnDataSource"},"glyph":{"id":"ec2b6eb9-4e59-4218-85af-1d551decc3a6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c2c86532-0479-45d2-94ed-a195b70c64de","type":"GlyphRenderer"},{"attributes":{},"id":"b713b00f-92f9-433c-a457-8071cbfa6ef2","type":"ToolEvents"},{"attributes":{"data_source":{"id":"28df16f6-d459-4941-aa26-439f484721a0","type":"ColumnDataSource"},"glyph":{"id":"00f17096-39a1-4c45-8db8-8879dc09fce8","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"29d96df4-0cc6-4dac-a092-16e294af6845","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"deadd7b9-0b74-4722-a593-6e64c40d1575","type":"ColumnDataSource"},"glyph":{"id":"163620db-1d07-4eb3-a8f0-2d2729b87186","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"98648bc0-43e5-474f-a880-dca40f5cf496","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":[26.6,23.0,23.9]}},"id":"586e2ae4-6e40-43c9-86dc-6c4824172dda","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"587c65f8-c49d-49db-9e94-86557ace840c","type":"PanTool"},{"id":"96d37ca1-f127-4e89-9f5c-52da3f05c5c4","type":"WheelZoomTool"},{"id":"e0a15c40-0941-42b6-b1de-58290a9bf1c7","type":"BoxZoomTool"},{"id":"3913e4e0-de2e-4622-8f41-edca4aa93554","type":"SaveTool"},{"id":"235fe3e2-a7f8-4e17-a94b-a1c2901bc383","type":"ResetTool"},{"id":"64484601-7118-4cc1-8b81-f9fa29d57181","type":"HelpTool"}]},"id":"8843adeb-1fcb-4848-9c2d-b5eb3c5617a4","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"deadd7b9-0b74-4722-a593-6e64c40d1575","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"}},"id":"235fe3e2-a7f8-4e17-a94b-a1c2901bc383","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"51377961-6b7c-4075-8f3b-8be05d3a9895","type":"ColumnDataSource"},{"attributes":{},"id":"497bc0d1-ae70-4bc2-b029-2a1d5239444b","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"bc525a96-f02c-45f6-b18b-4ff4b00715e1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"3a1c6fdf-a2da-4fd7-a583-be3f56165f81","type":"ColumnDataSource"},{"attributes":{},"id":"b2cb5ad0-efed-4ca2-a0b9-c21337bdb1fb","type":"BasicTicker"},{"attributes":{"plot":null,"text":"MPG Summary (grouped and whiskers shaded by CYL)"},"id":"0424855e-4b53-4147-babe-5ce399ece6de","type":"Title"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f669231b-89e9-4b84-bf19-92a5a51fd7b7","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"224aee27-6b8a-4649-8478-6e2f11b318a3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"f4bfd2af-1ebf-4b87-af28-47077f453ea2","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"7d43bc2e-764a-4346-afd6-5a3e0204cdab","type":"CategoricalAxis"}],"height":400,"left":[{"id":"e6e8fb93-45bd-4031-aa97-491300e318fd","type":"LinearAxis"}],"renderers":[{"id":"d8669202-bc60-4419-9cb0-ba9ed9846148","type":"BoxAnnotation"},{"id":"f3e30585-03ca-401f-8d0d-cbb511742929","type":"GlyphRenderer"},{"id":"be15c795-efac-447c-ae17-178074f598f9","type":"GlyphRenderer"},{"id":"98648bc0-43e5-474f-a880-dca40f5cf496","type":"GlyphRenderer"},{"id":"02a7de2c-30fd-42a6-80ea-42ca4738569d","type":"GlyphRenderer"},{"id":"6c2e3985-4c92-4ac9-962d-0712484ab3c8","type":"GlyphRenderer"},{"id":"29d96df4-0cc6-4dac-a092-16e294af6845","type":"GlyphRenderer"},{"id":"8aa7904b-3b92-4da9-9a16-90783359071e","type":"GlyphRenderer"},{"id":"daed033a-46f4-4d21-b80c-3c994f70e071","type":"GlyphRenderer"},{"id":"02312e97-e10c-46e8-a717-6d7786638fed","type":"GlyphRenderer"},{"id":"43b399ec-5a49-4310-b048-91d832578ae5","type":"GlyphRenderer"},{"id":"9ed99ac4-194c-4135-b970-c4d2a1ddd029","type":"GlyphRenderer"},{"id":"87065112-e93c-47a0-880d-ae2975e9f1d8","type":"GlyphRenderer"},{"id":"bf1d3d5c-a80d-494f-b3dc-bcb4b42d0ca8","type":"GlyphRenderer"},{"id":"4e38dbbe-2ef9-4fc8-b78f-0ed1d322625a","type":"GlyphRenderer"},{"id":"59e473b9-aac1-4110-8aea-924bc0c93d68","type":"GlyphRenderer"},{"id":"1483857b-1ed1-488c-972e-38db93b1bd20","type":"GlyphRenderer"},{"id":"c2c86532-0479-45d2-94ed-a195b70c64de","type":"GlyphRenderer"},{"id":"b2135c72-4243-48aa-9d88-1a27ff887036","type":"GlyphRenderer"},{"id":"4c1a87ff-c105-45a5-a635-cc93c6ee7566","type":"Legend"},{"id":"7d43bc2e-764a-4346-afd6-5a3e0204cdab","type":"CategoricalAxis"},{"id":"e6e8fb93-45bd-4031-aa97-491300e318fd","type":"LinearAxis"},{"id":"0231b415-1b2a-419d-874c-a8abbe07b8b1","type":"Grid"}],"title":{"id":"0424855e-4b53-4147-babe-5ce399ece6de","type":"Title"},"tool_events":{"id":"b713b00f-92f9-433c-a457-8071cbfa6ef2","type":"ToolEvents"},"toolbar":{"id":"8843adeb-1fcb-4848-9c2d-b5eb3c5617a4","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"8148c2ff-a12d-4e24-8d34-c3154bb2d8c9","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"df2cab76-4d9d-40ed-8ff7-be037cd48d6b","type":"Range1d"}},"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":[46.6]}},"id":"28df16f6-d459-4941-aa26-439f484721a0","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":49.38},"id":"df2cab76-4d9d-40ed-8ff7-be037cd48d6b","type":"Range1d"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"a25be3a6-e6b4-4a9f-9ba2-3f4fde65a06a","type":"BasicTickFormatter"},"plot":{"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"},"ticker":{"id":"b2cb5ad0-efed-4ca2-a0b9-c21337bdb1fb","type":"BasicTicker"}},"id":"e6e8fb93-45bd-4031-aa97-491300e318fd","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d78a8d53-ed5f-453c-bfc9-be9498960d65","type":"ColumnDataSource"},"glyph":{"id":"006a6ae5-80dc-4f7c-8425-11fb9f82084b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1483857b-1ed1-488c-972e-38db93b1bd20","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"75ed6ad0-1893-4d17-ae6f-9c8bc1ef2bec","type":"ColumnDataSource"},"glyph":{"id":"f669231b-89e9-4b84-bf19-92a5a51fd7b7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"59e473b9-aac1-4110-8aea-924bc0c93d68","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"163620db-1d07-4eb3-a8f0-2d2729b87186","type":"Segment"},{"attributes":{"data_source":{"id":"9fd2777e-aa3a-43be-afd1-97eaa7272adf","type":"ColumnDataSource"},"glyph":{"id":"bb3c30a8-2d2b-4121-832b-6baa5959acb0","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8aa7904b-3b92-4da9-9a16-90783359071e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4ad41f44-227d-4aab-92db-5f5a0f6414a9","type":"ColumnDataSource"},"glyph":{"id":"f097c654-01a4-4124-9c7e-188e5eafce61","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"daed033a-46f4-4d21-b80c-3c994f70e071","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7f0707ca-e79c-4bd1-bf20-f964a7980354","type":"ColumnDataSource"},"glyph":{"id":"5f05adc4-9aac-466c-b8b6-3733803cabc1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"02a7de2c-30fd-42a6-80ea-42ca4738569d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"75712e08-a7c2-4b69-97a8-cb19b2a4e006","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"da0c3100-9ede-42ad-a812-ef910118d325","subtype":"Chart","type":"Plot"}},"id":"3913e4e0-de2e-4622-8f41-edca4aa93554","type":"SaveTool"},{"attributes":{"data_source":{"id":"224aee27-6b8a-4649-8478-6e2f11b318a3","type":"ColumnDataSource"},"glyph":{"id":"8fa550cb-5724-421b-8c43-75f2166d0c53","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b2135c72-4243-48aa-9d88-1a27ff887036","type":"GlyphRenderer"},{"attributes":{},"id":"a25be3a6-e6b4-4a9f-9ba2-3f4fde65a06a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"4ad41f44-227d-4aab-92db-5f5a0f6414a9","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"79c70a77-25e4-45ca-ad19-09f4e6e9d589","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"006a6ae5-80dc-4f7c-8425-11fb9f82084b","type":"Rect"},{"attributes":{"data_source":{"id":"f4bfd2af-1ebf-4b87-af28-47077f453ea2","type":"ColumnDataSource"},"glyph":{"id":"f1235551-0d83-40ec-91ef-b954e5c11a2e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6c2e3985-4c92-4ac9-962d-0712484ab3c8","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f05adc4-9aac-466c-b8b6-3733803cabc1","type":"Rect"}],"root_ids":["da0c3100-9ede-42ad-a812-ef910118d325"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"bfcf9ab9-46ec-446f-8c38-6802abf2dce8","elementid":"7c21f64a-ad42-4db5-86c1-08b2edaf8ea5","modelid":"da0c3100-9ede-42ad-a812-ef910118d325"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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