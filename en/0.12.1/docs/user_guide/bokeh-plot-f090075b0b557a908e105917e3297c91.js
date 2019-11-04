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
      };var element = document.getElementById("00fd4bce-7fa6-4876-8711-c6b50e16dd5b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '00fd4bce-7fa6-4876-8711-c6b50e16dd5b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"5c7c4ed5-40a1-4f32-8a02-344d7aea5620":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"81a5106d-6f3f-42a1-a4f6-183388a052bc","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"}},"id":"47418848-9819-4e0b-8255-88c686e51de8","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2e3c4bef-265f-4dcd-96dd-a99676659053","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"0333e332-5398-41fe-aa59-637c1cc0cb7b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"54819fdf-4baf-48a5-b754-781ed3962f47","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"62ff4246-550b-4091-88b4-9a2426cded5c","type":"ColumnDataSource"},"glyph":{"id":"c514cb04-ea48-4353-a934-230bc96890f7","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"54efe2ac-28bd-4b39-97b2-9f0e6e21f96c","type":"GlyphRenderer"},{"attributes":{},"id":"8a5f2cca-48bd-40e5-bb96-e30ccb1b1746","type":"ToolEvents"},{"attributes":{"plot":{"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"}},"id":"51815129-890c-4efa-840a-6b8be6f59e7a","type":"ResetTool"},{"attributes":{"overlay":{"id":"d18caffa-971d-4d9d-aa2b-2756f1870f9a","type":"BoxAnnotation"},"plot":{"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"}},"id":"2a991091-607d-49f6-a948-40b9f33aeb4d","type":"BoxZoomTool"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"fa5322c4-b1ba-4c4f-b2f0-e6e470c0aaca","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"},"ticker":{"id":"d1681a23-a75b-43c3-afa8-c21cfe257759","type":"CategoricalTicker"}},"id":"edd9e41e-21e0-4802-a1a7-5f6dadb7a2d3","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6c6801c-5695-4606-97ad-2d67bfc36f22","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e82eacac-d23d-47df-9b1a-2c2a7d78c8ee","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"d7c3fd7b-f672-4bd9-90ec-bf4d7293b95a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5ff0c990-b228-4702-ab41-9a96e330c382","type":"ColumnDataSource"},"glyph":{"id":"fb18d6cd-a38a-4d7d-9880-465e74bd2b76","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"89cfa66e-5fd9-495b-80d5-2991628b8238","type":"GlyphRenderer"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"5ef2befa-b95c-4b85-8f31-d45a78185a07","type":"BasicTickFormatter"},"plot":{"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"},"ticker":{"id":"77088491-3051-4f4a-833d-d13238f1a09b","type":"BasicTicker"}},"id":"aa2660c3-8aa6-41ba-856d-1eeaf6865a4a","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"10ed6873-3155-42a9-a91f-94b2408fb28c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"827249ca-8628-4f1b-8564-b8a01b42303c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"074d3fe2-6ebd-4a65-b5a5-72bf4e78cae7","type":"ColumnDataSource"},"glyph":{"id":"9a5cc2f7-38e5-404a-9066-be65e7714151","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ea083aa7-1555-4d80-a02c-0d38242c8d3f","type":"GlyphRenderer"},{"attributes":{},"id":"fa5322c4-b1ba-4c4f-b2f0-e6e470c0aaca","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"}},"id":"39ce84f5-1069-4474-b350-878df4f0e5b9","type":"PanTool"},{"attributes":{"data_source":{"id":"0b4d4c28-c65f-43e0-a5ce-c37f15acb92e","type":"ColumnDataSource"},"glyph":{"id":"0f6fbf46-6bb1-4f7f-abe5-ef0d49e40aa3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6651509f-d86e-424b-9a07-e55122f4e318","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d18caffa-971d-4d9d-aa2b-2756f1870f9a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"}},"id":"36794738-8e4f-4a9f-bfc4-eb401cb5bbc0","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"2a84a952-0d17-4447-ae71-b599241f1994","type":"ColumnDataSource"},{"attributes":{},"id":"5ef2befa-b95c-4b85-8f31-d45a78185a07","type":"BasicTickFormatter"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"f89b22ac-0a9e-4aff-aa95-a4cd1d6926a1","type":"Segment"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"93948de8-697a-40a7-8419-3eaf3799b65c","type":"Segment"},{"attributes":{"data_source":{"id":"5659954d-2adf-4850-973c-1cf8f91405d3","type":"ColumnDataSource"},"glyph":{"id":"6065f8f8-ea7b-40f2-a0a7-2a34864f4d28","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"04c0c6ee-eecc-460a-89f5-646bf27fd30d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"0333e332-5398-41fe-aa59-637c1cc0cb7b","type":"ColumnDataSource"},"glyph":{"id":"12478866-83d3-4e8f-844a-6961593cc2e2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"272bb4bb-c585-4620-85fd-fd75e3443d9e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"62ff4246-550b-4091-88b4-9a2426cded5c","type":"ColumnDataSource"},{"attributes":{},"id":"d1681a23-a75b-43c3-afa8-c21cfe257759","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"0b4d4c28-c65f-43e0-a5ce-c37f15acb92e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a5cc2f7-38e5-404a-9066-be65e7714151","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"5659954d-2adf-4850-973c-1cf8f91405d3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1c234a79-0ef5-4bd1-9718-bf9a2cc356a2","type":"ColumnDataSource"},"glyph":{"id":"15fc67c1-fba5-470c-9859-c59fbcb7a907","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"47118cf8-b4d1-48ab-bda0-ff8adf5f7cfe","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"1c234a79-0ef5-4bd1-9718-bf9a2cc356a2","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"},"ticker":{"id":"77088491-3051-4f4a-833d-d13238f1a09b","type":"BasicTicker"}},"id":"791e8071-38cd-40cb-830e-0a1b243aacf7","type":"Grid"},{"attributes":{"data_source":{"id":"2a84a952-0d17-4447-ae71-b599241f1994","type":"ColumnDataSource"},"glyph":{"id":"2e3c4bef-265f-4dcd-96dd-a99676659053","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d6cc5bdf-948d-4332-9670-4c0de0c50c18","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3cf178a7-2974-49e3-9d48-97acca38ca32","type":"ColumnDataSource"},"glyph":{"id":"93948de8-697a-40a7-8419-3eaf3799b65c","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"402b90a7-69bc-4f23-9587-cfd69ca11d92","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"39ce84f5-1069-4474-b350-878df4f0e5b9","type":"PanTool"},{"id":"47418848-9819-4e0b-8255-88c686e51de8","type":"WheelZoomTool"},{"id":"2a991091-607d-49f6-a948-40b9f33aeb4d","type":"BoxZoomTool"},{"id":"36794738-8e4f-4a9f-bfc4-eb401cb5bbc0","type":"SaveTool"},{"id":"51815129-890c-4efa-840a-6b8be6f59e7a","type":"ResetTool"},{"id":"b422de03-5bc5-432d-b107-d95a37e6e26b","type":"HelpTool"}]},"id":"5154d694-07a0-45e7-85a3-d291e4822cfa","type":"Toolbar"},{"attributes":{"data_source":{"id":"81a5106d-6f3f-42a1-a4f6-183388a052bc","type":"ColumnDataSource"},"glyph":{"id":"44757e91-92c2-43a4-94ce-22877670c16d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ba942571-0ea0-4f73-8750-a45fef618faa","type":"GlyphRenderer"},{"attributes":{"legends":[["3",[{"id":"8ca9b6b7-e954-408f-965c-a59d8f7335a1","type":"GlyphRenderer"},{"id":"ba942571-0ea0-4f73-8750-a45fef618faa","type":"GlyphRenderer"},{"id":"47118cf8-b4d1-48ab-bda0-ff8adf5f7cfe","type":"GlyphRenderer"}]],["4",[{"id":"6651509f-d86e-424b-9a07-e55122f4e318","type":"GlyphRenderer"},{"id":"ea083aa7-1555-4d80-a02c-0d38242c8d3f","type":"GlyphRenderer"},{"id":"54efe2ac-28bd-4b39-97b2-9f0e6e21f96c","type":"GlyphRenderer"}]],["5",[{"id":"fcbc4448-9c52-4494-9630-23f97b174a01","type":"GlyphRenderer"},{"id":"272bb4bb-c585-4620-85fd-fd75e3443d9e","type":"GlyphRenderer"},{"id":"2f67a12a-6e76-4c51-81f4-418729124500","type":"GlyphRenderer"}]],["6",[{"id":"05f0e6da-500e-4382-95e1-fa2eaf2ef4c9","type":"GlyphRenderer"},{"id":"d6cc5bdf-948d-4332-9670-4c0de0c50c18","type":"GlyphRenderer"},{"id":"04c0c6ee-eecc-460a-89f5-646bf27fd30d","type":"GlyphRenderer"}]],["8",[{"id":"89cfa66e-5fd9-495b-80d5-2991628b8238","type":"GlyphRenderer"},{"id":"6ef82c7f-5a6b-4614-86c3-e4346bd3cef3","type":"GlyphRenderer"},{"id":"402b90a7-69bc-4f23-9587-cfd69ca11d92","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"}},"id":"0ddbe89a-dc81-4e6c-ab71-79383a4479ed","type":"Legend"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"5ff0c990-b228-4702-ab41-9a96e330c382","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":47.56875000000001},"id":"95b4fce6-12ec-47d3-8322-dfe8c3c4c960","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f6fbf46-6bb1-4f7f-abe5-ef0d49e40aa3","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"74d63752-75b2-4f12-b18f-c2656bdec755","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"MPG Summary (grouped by CYL, no outliers)"},"id":"e8f49631-18b5-46d0-be4c-df50e2701cc4","type":"Title"},{"attributes":{"below":[{"id":"edd9e41e-21e0-4802-a1a7-5f6dadb7a2d3","type":"CategoricalAxis"}],"height":400,"left":[{"id":"aa2660c3-8aa6-41ba-856d-1eeaf6865a4a","type":"LinearAxis"}],"renderers":[{"id":"d18caffa-971d-4d9d-aa2b-2756f1870f9a","type":"BoxAnnotation"},{"id":"8ca9b6b7-e954-408f-965c-a59d8f7335a1","type":"GlyphRenderer"},{"id":"ba942571-0ea0-4f73-8750-a45fef618faa","type":"GlyphRenderer"},{"id":"47118cf8-b4d1-48ab-bda0-ff8adf5f7cfe","type":"GlyphRenderer"},{"id":"6651509f-d86e-424b-9a07-e55122f4e318","type":"GlyphRenderer"},{"id":"ea083aa7-1555-4d80-a02c-0d38242c8d3f","type":"GlyphRenderer"},{"id":"54efe2ac-28bd-4b39-97b2-9f0e6e21f96c","type":"GlyphRenderer"},{"id":"fcbc4448-9c52-4494-9630-23f97b174a01","type":"GlyphRenderer"},{"id":"272bb4bb-c585-4620-85fd-fd75e3443d9e","type":"GlyphRenderer"},{"id":"2f67a12a-6e76-4c51-81f4-418729124500","type":"GlyphRenderer"},{"id":"05f0e6da-500e-4382-95e1-fa2eaf2ef4c9","type":"GlyphRenderer"},{"id":"d6cc5bdf-948d-4332-9670-4c0de0c50c18","type":"GlyphRenderer"},{"id":"04c0c6ee-eecc-460a-89f5-646bf27fd30d","type":"GlyphRenderer"},{"id":"89cfa66e-5fd9-495b-80d5-2991628b8238","type":"GlyphRenderer"},{"id":"6ef82c7f-5a6b-4614-86c3-e4346bd3cef3","type":"GlyphRenderer"},{"id":"402b90a7-69bc-4f23-9587-cfd69ca11d92","type":"GlyphRenderer"},{"id":"0ddbe89a-dc81-4e6c-ab71-79383a4479ed","type":"Legend"},{"id":"edd9e41e-21e0-4802-a1a7-5f6dadb7a2d3","type":"CategoricalAxis"},{"id":"aa2660c3-8aa6-41ba-856d-1eeaf6865a4a","type":"LinearAxis"},{"id":"791e8071-38cd-40cb-830e-0a1b243aacf7","type":"Grid"}],"title":{"id":"e8f49631-18b5-46d0-be4c-df50e2701cc4","type":"Title"},"tool_events":{"id":"8a5f2cca-48bd-40e5-bb96-e30ccb1b1746","type":"ToolEvents"},"toolbar":{"id":"5154d694-07a0-45e7-85a3-d291e4822cfa","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"55bdc79d-fad8-4ca6-a284-61f8833e7516","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"95b4fce6-12ec-47d3-8322-dfe8c3c4c960","type":"Range1d"}},"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"55bdc79d-fad8-4ca6-a284-61f8833e7516","type":"FactorRange"},{"attributes":{},"id":"77088491-3051-4f4a-833d-d13238f1a09b","type":"BasicTicker"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"c514cb04-ea48-4353-a934-230bc96890f7","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5716cae-37d4-4f3c-8648-4f88cc1a927f","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb18d6cd-a38a-4d7d-9880-465e74bd2b76","type":"Rect"},{"attributes":{"data_source":{"id":"54819fdf-4baf-48a5-b754-781ed3962f47","type":"ColumnDataSource"},"glyph":{"id":"f89b22ac-0a9e-4aff-aa95-a4cd1d6926a1","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2f67a12a-6e76-4c51-81f4-418729124500","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"3cf178a7-2974-49e3-9d48-97acca38ca32","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"827249ca-8628-4f1b-8564-b8a01b42303c","type":"ColumnDataSource"},"glyph":{"id":"e82eacac-d23d-47df-9b1a-2c2a7d78c8ee","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6ef82c7f-5a6b-4614-86c3-e4346bd3cef3","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12478866-83d3-4e8f-844a-6961593cc2e2","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44757e91-92c2-43a4-94ce-22877670c16d","type":"Rect"},{"attributes":{"data_source":{"id":"74d63752-75b2-4f12-b18f-c2656bdec755","type":"ColumnDataSource"},"glyph":{"id":"c5716cae-37d4-4f3c-8648-4f88cc1a927f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"05f0e6da-500e-4382-95e1-fa2eaf2ef4c9","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"6065f8f8-ea7b-40f2-a0a7-2a34864f4d28","type":"Segment"},{"attributes":{"data_source":{"id":"10ed6873-3155-42a9-a91f-94b2408fb28c","type":"ColumnDataSource"},"glyph":{"id":"adea2105-0deb-49d7-8c02-7799fbe6278e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fcbc4448-9c52-4494-9630-23f97b174a01","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"adea2105-0deb-49d7-8c02-7799fbe6278e","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"074d3fe2-6ebd-4a65-b5a5-72bf4e78cae7","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"15fc67c1-fba5-470c-9859-c59fbcb7a907","type":"Segment"},{"attributes":{"data_source":{"id":"d7c3fd7b-f672-4bd9-90ec-bf4d7293b95a","type":"ColumnDataSource"},"glyph":{"id":"b6c6801c-5695-4606-97ad-2d67bfc36f22","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8ca9b6b7-e954-408f-965c-a59d8f7335a1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3","subtype":"Chart","type":"Plot"}},"id":"b422de03-5bc5-432d-b107-d95a37e6e26b","type":"HelpTool"}],"root_ids":["d9ebab98-3c1f-4830-b619-5f4bb46b1ee3"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"5c7c4ed5-40a1-4f32-8a02-344d7aea5620","elementid":"00fd4bce-7fa6-4876-8711-c6b50e16dd5b","modelid":"d9ebab98-3c1f-4830-b619-5f4bb46b1ee3"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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