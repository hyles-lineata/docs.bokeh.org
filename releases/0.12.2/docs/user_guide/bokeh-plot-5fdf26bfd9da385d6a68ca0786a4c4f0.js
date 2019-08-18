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
      };var element = document.getElementById("8db10cee-6ffa-410c-b97a-e60c02454b7f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8db10cee-6ffa-410c-b97a-e60c02454b7f' but no matching script tag was found. ")
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
                  var docs_json = {"d95f1ce7-99ea-47c0-8612-a5486c86c887":{"roots":{"references":[{"attributes":{"data_source":{"id":"afc40bc5-2d15-45c9-8237-55a93d0a8d42","type":"ColumnDataSource"},"glyph":{"id":"0c72b7e6-1244-41a7-9fc0-5f3ccb53c9c7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5ced747f-e35a-4bfc-a96c-43b1e692be9e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"}},"id":"82dda374-5a60-4710-8c95-150e5fcbf255","type":"SaveTool"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"0492fe59-36ee-46f3-bebd-184c1dd1cdf4","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"028c419c-e539-4d30-9bf6-3bd8cee8c2d5","type":"ColumnDataSource"},{"attributes":{},"id":"d0e1e87d-ab62-43c4-ad1e-f54dac88de85","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":"MPG Summary (grouped and shaded by CYL)"},"id":"21b10f24-6f7b-4898-a436-bd52fd86d779","type":"Title"},{"attributes":{"data_source":{"id":"59f9a65b-c34b-4fad-8408-11620bc3cadb","type":"ColumnDataSource"},"glyph":{"id":"468cd724-e10d-492c-8c82-efe47e78d7a7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a1bfacdc-7c7f-4744-8fe5-e7c4765f9213","type":"GlyphRenderer"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"8a41ab33-9117-47de-85aa-e2a225b4bdcd","type":"BasicTickFormatter"},"plot":{"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"},"ticker":{"id":"da8dd33a-f633-466f-a73e-85cecc7a5ab8","type":"BasicTicker"}},"id":"86332bea-5c3c-4433-aabb-7176fda7cece","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f2198d0c-054a-4d7d-a3a5-b1e2deac1ea6","type":"ColumnDataSource"},"glyph":{"id":"4f1fb1d6-cbe7-4e73-9b3b-16f5bdf6bee3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6321f67e-7144-4b12-914c-07e4c31ce52b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"32bd3c80-922d-4411-817d-6031c6949f5d","type":"Rect"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":[26.6,23.0,23.9]}},"id":"59f9a65b-c34b-4fad-8408-11620bc3cadb","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":[26.8,28.8,32.7,38.0,30.7]}},"id":"00a17b89-60d7-4dc8-a0af-3156c886eed3","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f1fb1d6-cbe7-4e73-9b3b-16f5bdf6bee3","type":"Rect"},{"attributes":{"data_source":{"id":"028c419c-e539-4d30-9bf6-3bd8cee8c2d5","type":"ColumnDataSource"},"glyph":{"id":"e1d3f63e-0d9a-4a02-b881-b2663c1edaf6","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3c513c99-c28c-47c3-ad1f-550a3996bde6","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"c16e00e4-92f0-4fd2-8f8e-f4c6a3209e39","type":"Segment"},{"attributes":{"data_source":{"id":"a36c4ef2-85f6-4545-8341-d2d0c4adbf4c","type":"ColumnDataSource"},"glyph":{"id":"5f8ac593-b73b-4e10-bec0-82dca20a882f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b970b331-4318-4f44-8f54-5261de80a952","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":49.38},"id":"97f55851-6aa7-47e9-b335-cdcf6fd48ee2","type":"Range1d"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"e1d3f63e-0d9a-4a02-b881-b2663c1edaf6","type":"Segment"},{"attributes":{"data_source":{"id":"2bdbe057-7ba3-4819-8b10-f168145c1637","type":"ColumnDataSource"},"glyph":{"id":"2c99ab25-c024-4aee-98af-67a0e9064e38","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b5ee7503-054d-40e7-ba9b-3a456b632278","type":"GlyphRenderer"},{"attributes":{},"id":"10243213-a4bf-4648-b692-f803b536ab13","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"431e6063-2357-4e0c-b3b9-f40dd2cb8227","type":"Rect"},{"attributes":{"data_source":{"id":"c308a67c-b6b7-47a5-8cc2-1bcf827d0c73","type":"ColumnDataSource"},"glyph":{"id":"ccef6298-3aab-42af-a1c6-2085430370d8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"69772a16-96f6-4970-8692-2b6eda3bdcb8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"abaf6377-ac71-48b3-a145-ef82352bc7c5","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"2c99ab25-c024-4aee-98af-67a0e9064e38","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c72b7e6-1244-41a7-9fc0-5f3ccb53c9c7","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ccef6298-3aab-42af-a1c6-2085430370d8","type":"Rect"},{"attributes":{"data_source":{"id":"7bf95dd7-aaa2-4593-b5c5-e08f946a8a97","type":"ColumnDataSource"},"glyph":{"id":"c5e28999-d92f-4197-89f3-cc1a1ef3592f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f38562d8-b3d8-4e76-a137-54960ab1e4b8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"}},"id":"b8a7c2d0-2862-4ee3-8f52-09f1e08e1525","type":"ResetTool"},{"attributes":{"data_source":{"id":"6ffa27d3-9b8b-497c-99d7-26496dad0bab","type":"ColumnDataSource"},"glyph":{"id":"8d960bae-9e62-4820-82d9-2227f38f45cc","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e14a1b93-7117-4d82-9641-5b57a5c5340b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"468cd724-e10d-492c-8c82-efe47e78d7a7","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"},"ticker":{"id":"da8dd33a-f633-466f-a73e-85cecc7a5ab8","type":"BasicTicker"}},"id":"a055a853-8398-4849-88f9-0885bff68b08","type":"Grid"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5e28999-d92f-4197-89f3-cc1a1ef3592f","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"407c8989-a031-4148-8b32-4606af56fff3","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdd41a2f-b96e-4d91-a542-fa8ff3aa145b","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"2e5483ec-6754-438a-b517-9d0d52798302","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"}},"id":"406acbed-9903-4023-9fa1-435576cd9769","type":"HelpTool"},{"attributes":{"overlay":{"id":"f1a7f5c1-0986-4ce3-ad89-341e95afb7ed","type":"BoxAnnotation"},"plot":{"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"}},"id":"18b744f1-f8a9-498a-8ba4-1881cef7076d","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"9f5b2500-643f-4200-9514-ef9052337166","type":"ColumnDataSource"},"glyph":{"id":"46526778-97d2-4202-bbfb-855bf06bc5d2","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1d9bb8f7-535d-4134-a90c-b33212f53af3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#407ee7"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"c308a67c-b6b7-47a5-8cc2-1bcf827d0c73","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"459fb637-d93e-411e-9295-672f675084e3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11e07a27-9d1f-4d72-a81b-8281118d1d8c","type":"ColumnDataSource"},"glyph":{"id":"3e592374-3373-4c5b-a05d-ec0e81a12fd5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"984f08da-3ad4-42b8-8403-e1d94e40b94a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#407ee7"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"11e07a27-9d1f-4d72-a81b-8281118d1d8c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3b2d2a84-5956-4b64-b2fe-13f9a4d51ad1","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f1a7f5c1-0986-4ce3-ad89-341e95afb7ed","type":"BoxAnnotation"},{"attributes":{},"id":"da8dd33a-f633-466f-a73e-85cecc7a5ab8","type":"BasicTicker"},{"attributes":{"data_source":{"id":"407c8989-a031-4148-8b32-4606af56fff3","type":"ColumnDataSource"},"glyph":{"id":"1dcb5daa-0f4e-4d4f-b1e1-768f91067458","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f49355e4-6ed8-4ce3-b50a-498fcca286a3","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"0293c00f-919f-4864-b8e1-73b8c3d1ad13","type":"ColumnDataSource"},"glyph":{"id":"431e6063-2357-4e0c-b3b9-f40dd2cb8227","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"79e8e98b-d01a-468f-8b9d-b115fd77909a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#00ad9c"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"a36c4ef2-85f6-4545-8341-d2d0c4adbf4c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"f2198d0c-054a-4d7d-a3a5-b1e2deac1ea6","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1dcb5daa-0f4e-4d4f-b1e1-768f91067458","type":"Rect"},{"attributes":{"data_source":{"id":"ba589f73-1a33-45a1-91e8-9b8efee73e15","type":"ColumnDataSource"},"glyph":{"id":"32bd3c80-922d-4411-817d-6031c6949f5d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"af772e22-d023-4562-ab3a-a3f13e9abc39","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"459fb637-d93e-411e-9295-672f675084e3","type":"ColumnDataSource"},"glyph":{"id":"c16e00e4-92f0-4fd2-8f8e-f4c6a3209e39","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1ab0c41f-fd50-4a4b-860b-2b003cb2e076","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"6ffa27d3-9b8b-497c-99d7-26496dad0bab","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"2bdbe057-7ba3-4819-8b10-f168145c1637","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"ba589f73-1a33-45a1-91e8-9b8efee73e15","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"716edef0-0a02-451e-8091-c517cf66472e","type":"PanTool"},{"id":"98fa0f1d-9278-49ad-8f1d-b96b5bbec727","type":"WheelZoomTool"},{"id":"18b744f1-f8a9-498a-8ba4-1881cef7076d","type":"BoxZoomTool"},{"id":"82dda374-5a60-4710-8c95-150e5fcbf255","type":"SaveTool"},{"id":"b8a7c2d0-2862-4ee3-8f52-09f1e08e1525","type":"ResetTool"},{"id":"406acbed-9903-4023-9fa1-435576cd9769","type":"HelpTool"}]},"id":"f1cc0473-3c25-44b0-8d59-51f12f8738f4","type":"Toolbar"},{"attributes":{"data_source":{"id":"abaf6377-ac71-48b3-a145-ef82352bc7c5","type":"ColumnDataSource"},"glyph":{"id":"23f2c29e-ccef-4794-ac24-fe2bfe44b4c4","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"63b4bdc7-4c0b-4848-ad2c-435b982ec4f9","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"46526778-97d2-4202-bbfb-855bf06bc5d2","type":"Circle"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"7bf95dd7-aaa2-4593-b5c5-e08f946a8a97","type":"ColumnDataSource"},{"attributes":{"legends":[["3",[{"id":"f49355e4-6ed8-4ce3-b50a-498fcca286a3","type":"GlyphRenderer"},{"id":"f38562d8-b3d8-4e76-a137-54960ab1e4b8","type":"GlyphRenderer"},{"id":"b5ee7503-054d-40e7-ba9b-3a456b632278","type":"GlyphRenderer"}]],["4",[{"id":"04f8d89a-fbd9-4bbf-9284-6ac3765eaeca","type":"GlyphRenderer"},{"id":"6321f67e-7144-4b12-914c-07e4c31ce52b","type":"GlyphRenderer"},{"id":"1d9bb8f7-535d-4134-a90c-b33212f53af3","type":"GlyphRenderer"},{"id":"1ab0c41f-fd50-4a4b-860b-2b003cb2e076","type":"GlyphRenderer"}]],["5",[{"id":"69772a16-96f6-4970-8692-2b6eda3bdcb8","type":"GlyphRenderer"},{"id":"984f08da-3ad4-42b8-8403-e1d94e40b94a","type":"GlyphRenderer"},{"id":"63b4bdc7-4c0b-4848-ad2c-435b982ec4f9","type":"GlyphRenderer"}]],["6",[{"id":"5ced747f-e35a-4bfc-a96c-43b1e692be9e","type":"GlyphRenderer"},{"id":"af772e22-d023-4562-ab3a-a3f13e9abc39","type":"GlyphRenderer"},{"id":"ea583272-6e77-45e8-83ee-323eb2cdfab2","type":"GlyphRenderer"},{"id":"3c513c99-c28c-47c3-ad1f-550a3996bde6","type":"GlyphRenderer"}]],["8",[{"id":"b970b331-4318-4f44-8f54-5261de80a952","type":"GlyphRenderer"},{"id":"79e8e98b-d01a-468f-8b9d-b115fd77909a","type":"GlyphRenderer"},{"id":"a1bfacdc-7c7f-4744-8fe5-e7c4765f9213","type":"GlyphRenderer"},{"id":"e14a1b93-7117-4d82-9641-5b57a5c5340b","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"}},"id":"2daa59bc-94dd-49ab-b34c-5d788125e0ca","type":"Legend"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"23f2c29e-ccef-4794-ac24-fe2bfe44b4c4","type":"Segment"},{"attributes":{},"id":"4f0aaea8-dcf0-4ce9-8dcd-9ec44d3398ce","type":"ToolEvents"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e592374-3373-4c5b-a05d-ec0e81a12fd5","type":"Rect"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":[46.6]}},"id":"9f5b2500-643f-4200-9514-ef9052337166","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"afc40bc5-2d15-45c9-8237-55a93d0a8d42","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"}},"id":"716edef0-0a02-451e-8091-c517cf66472e","type":"PanTool"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"d0e1e87d-ab62-43c4-ad1e-f54dac88de85","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"},"ticker":{"id":"10243213-a4bf-4648-b692-f803b536ab13","type":"CategoricalTicker"}},"id":"829242ef-2b09-4250-81df-752d13412dff","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#00ad9c"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"0293c00f-919f-4864-b8e1-73b8c3d1ad13","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"829242ef-2b09-4250-81df-752d13412dff","type":"CategoricalAxis"}],"height":400,"left":[{"id":"86332bea-5c3c-4433-aabb-7176fda7cece","type":"LinearAxis"}],"renderers":[{"id":"f1a7f5c1-0986-4ce3-ad89-341e95afb7ed","type":"BoxAnnotation"},{"id":"f49355e4-6ed8-4ce3-b50a-498fcca286a3","type":"GlyphRenderer"},{"id":"f38562d8-b3d8-4e76-a137-54960ab1e4b8","type":"GlyphRenderer"},{"id":"b5ee7503-054d-40e7-ba9b-3a456b632278","type":"GlyphRenderer"},{"id":"04f8d89a-fbd9-4bbf-9284-6ac3765eaeca","type":"GlyphRenderer"},{"id":"6321f67e-7144-4b12-914c-07e4c31ce52b","type":"GlyphRenderer"},{"id":"1d9bb8f7-535d-4134-a90c-b33212f53af3","type":"GlyphRenderer"},{"id":"1ab0c41f-fd50-4a4b-860b-2b003cb2e076","type":"GlyphRenderer"},{"id":"69772a16-96f6-4970-8692-2b6eda3bdcb8","type":"GlyphRenderer"},{"id":"984f08da-3ad4-42b8-8403-e1d94e40b94a","type":"GlyphRenderer"},{"id":"63b4bdc7-4c0b-4848-ad2c-435b982ec4f9","type":"GlyphRenderer"},{"id":"5ced747f-e35a-4bfc-a96c-43b1e692be9e","type":"GlyphRenderer"},{"id":"af772e22-d023-4562-ab3a-a3f13e9abc39","type":"GlyphRenderer"},{"id":"ea583272-6e77-45e8-83ee-323eb2cdfab2","type":"GlyphRenderer"},{"id":"3c513c99-c28c-47c3-ad1f-550a3996bde6","type":"GlyphRenderer"},{"id":"b970b331-4318-4f44-8f54-5261de80a952","type":"GlyphRenderer"},{"id":"79e8e98b-d01a-468f-8b9d-b115fd77909a","type":"GlyphRenderer"},{"id":"a1bfacdc-7c7f-4744-8fe5-e7c4765f9213","type":"GlyphRenderer"},{"id":"e14a1b93-7117-4d82-9641-5b57a5c5340b","type":"GlyphRenderer"},{"id":"2daa59bc-94dd-49ab-b34c-5d788125e0ca","type":"Legend"},{"id":"829242ef-2b09-4250-81df-752d13412dff","type":"CategoricalAxis"},{"id":"86332bea-5c3c-4433-aabb-7176fda7cece","type":"LinearAxis"},{"id":"a055a853-8398-4849-88f9-0885bff68b08","type":"Grid"}],"title":{"id":"21b10f24-6f7b-4898-a436-bd52fd86d779","type":"Title"},"tool_events":{"id":"4f0aaea8-dcf0-4ce9-8dcd-9ec44d3398ce","type":"ToolEvents"},"toolbar":{"id":"f1cc0473-3c25-44b0-8d59-51f12f8738f4","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"0492fe59-36ee-46f3-bebd-184c1dd1cdf4","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"97f55851-6aa7-47e9-b335-cdcf6fd48ee2","type":"Range1d"}},"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"8a41ab33-9117-47de-85aa-e2a225b4bdcd","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d0201bd3-422b-495b-b263-1fde4b297cf8","subtype":"Chart","type":"Plot"}},"id":"98fa0f1d-9278-49ad-8f1d-b96b5bbec727","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"2e5483ec-6754-438a-b517-9d0d52798302","type":"ColumnDataSource"},"glyph":{"id":"cdd41a2f-b96e-4d91-a542-fa8ff3aa145b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"04f8d89a-fbd9-4bbf-9284-6ac3765eaeca","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"8d960bae-9e62-4820-82d9-2227f38f45cc","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f8ac593-b73b-4e10-bec0-82dca20a882f","type":"Rect"},{"attributes":{"data_source":{"id":"00a17b89-60d7-4dc8-a0af-3156c886eed3","type":"ColumnDataSource"},"glyph":{"id":"3b2d2a84-5956-4b64-b2fe-13f9a4d51ad1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ea583272-6e77-45e8-83ee-323eb2cdfab2","type":"GlyphRenderer"}],"root_ids":["d0201bd3-422b-495b-b263-1fde4b297cf8"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"d95f1ce7-99ea-47c0-8612-a5486c86c887","elementid":"8db10cee-6ffa-410c-b97a-e60c02454b7f","modelid":"d0201bd3-422b-495b-b263-1fde4b297cf8"}];
                  
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