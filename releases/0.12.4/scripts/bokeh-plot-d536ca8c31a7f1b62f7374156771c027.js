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
      };var element = document.getElementById("324bc81e-032e-491b-993a-b974744aa5b4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '324bc81e-032e-491b-993a-b974744aa5b4' but no matching script tag was found. ")
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
                var docs_json = {"7336126f-086b-4680-b432-44d1fa8633ce":{"roots":{"references":[{"attributes":{"callback":null,"factors":["Dec","Nov","Oct","Sep","Aug","Jul","Jun","May","Apr","Mar","Feb","Jan"]},"id":"cc4dc9e6-f036-4de5-85e3-d8577e203e0d","type":"FactorRange"},{"attributes":{"plot":{"id":"ff384582-7eef-4d9e-a284-b659c6cb304b","subtype":"Figure","type":"Plot"}},"id":"dc776e9b-f14f-42ea-b480-b9065e364282","type":"WheelZoomTool"},{"attributes":{"fill_color":{"field":"rate","transform":{"id":"5687ed04-0f50-49d9-b97a-f5b535e17c90","type":"LinearColorMapper"}},"height":{"units":"data","value":1},"line_color":{"value":null},"width":{"units":"data","value":1},"x":{"field":"year"},"y":{"field":"month"}},"id":"2a48d6fa-af84-4b5b-b577-b565895b8496","type":"Rect"},{"attributes":{"data_source":{"id":"b7b26d68-879f-4865-aeb7-c25f29e031c3","type":"ColumnDataSource"},"glyph":{"id":"2a48d6fa-af84-4b5b-b577-b565895b8496","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"314c9a63-0c28-42b2-a4d0-07541238510c","type":"Rect"},"selection_glyph":null},"id":"f6a4ee70-a260-4601-b621-9959b4ebb606","type":"GlyphRenderer"},{"attributes":{},"id":"e7af6946-a5a8-4588-bbfe-954e8f508de7","type":"ToolEvents"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"ff384582-7eef-4d9e-a284-b659c6cb304b","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a946992-727f-428a-b042-5a4f11f8e5e2","type":"CategoricalTicker"}},"id":"ca796da8-2acf-44c3-a3f5-9fb9bb2a58c8","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"407c9ba8-6e72-4a83-bb51-a19d1f388fd4","type":"BoxAnnotation"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"e7fe3696-bf71-4eba-9982-272f709ca786","type":"CategoricalTickFormatter"},"major_label_orientation":1.0471975511965976,"major_label_standoff":0,"major_label_text_font_size":{"value":"5pt"},"major_tick_line_color":{"value":null},"plot":{"id":"ff384582-7eef-4d9e-a284-b659c6cb304b","subtype":"Figure","type":"Plot"},"ticker":{"id":"44b8d587-a4fd-4759-bf46-9895cdbedc2e","type":"CategoricalTicker"}},"id":"c35f9bba-05ab-46fb-a283-3ac733e3373a","type":"CategoricalAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"898efcda-cb24-42a8-9862-4efe399e91df","type":"CategoricalTickFormatter"},"major_label_standoff":0,"major_label_text_font_size":{"value":"5pt"},"major_tick_line_color":{"value":null},"plot":{"id":"ff384582-7eef-4d9e-a284-b659c6cb304b","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a946992-727f-428a-b042-5a4f11f8e5e2","type":"CategoricalTicker"}},"id":"dd90a807-e1b4-4526-b84f-82acc4836bd1","type":"CategoricalAxis"},{"attributes":{},"id":"e7fe3696-bf71-4eba-9982-272f709ca786","type":"CategoricalTickFormatter"},{"attributes":{"above":[{"id":"c35f9bba-05ab-46fb-a283-3ac733e3373a","type":"CategoricalAxis"}],"left":[{"id":"dd90a807-e1b4-4526-b84f-82acc4836bd1","type":"CategoricalAxis"}],"plot_height":400,"plot_width":900,"renderers":[{"id":"c35f9bba-05ab-46fb-a283-3ac733e3373a","type":"CategoricalAxis"},{"id":"329fb26e-0f11-4123-83ba-1da3d5cedc2e","type":"Grid"},{"id":"dd90a807-e1b4-4526-b84f-82acc4836bd1","type":"CategoricalAxis"},{"id":"ca796da8-2acf-44c3-a3f5-9fb9bb2a58c8","type":"Grid"},{"id":"407c9ba8-6e72-4a83-bb51-a19d1f388fd4","type":"BoxAnnotation"},{"id":"f6a4ee70-a260-4601-b621-9959b4ebb606","type":"GlyphRenderer"}],"title":{"id":"d3cbe6bf-186e-4f55-9b55-53d75ae4f774","type":"Title"},"tool_events":{"id":"e7af6946-a5a8-4588-bbfe-954e8f508de7","type":"ToolEvents"},"toolbar":{"id":"da59800e-cb6d-49c3-9684-489376372537","type":"Toolbar"},"x_range":{"id":"077a2d3d-fe18-4dcf-a9da-bc6315dd8e29","type":"FactorRange"},"y_range":{"id":"cc4dc9e6-f036-4de5-85e3-d8577e203e0d","type":"FactorRange"}},"id":"ff384582-7eef-4d9e-a284-b659c6cb304b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"ff384582-7eef-4d9e-a284-b659c6cb304b","subtype":"Figure","type":"Plot"}},"id":"093d0968-915a-47bc-87d2-db08a3a9a535","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"year"},"y":{"field":"month"}},"id":"314c9a63-0c28-42b2-a4d0-07541238510c","type":"Rect"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ff384582-7eef-4d9e-a284-b659c6cb304b","subtype":"Figure","type":"Plot"},"ticker":{"id":"44b8d587-a4fd-4759-bf46-9895cdbedc2e","type":"CategoricalTicker"}},"id":"329fb26e-0f11-4123-83ba-1da3d5cedc2e","type":"Grid"},{"attributes":{"callback":null,"plot":{"id":"ff384582-7eef-4d9e-a284-b659c6cb304b","subtype":"Figure","type":"Plot"},"tooltips":[["date","@month @year"],["rate","@rate"]]},"id":"c597798f-bbb4-4f21-9269-deb3067ab39b","type":"HoverTool"},{"attributes":{},"id":"898efcda-cb24-42a8-9862-4efe399e91df","type":"CategoricalTickFormatter"},{"attributes":{"palette":["#75968f","#a5bab7","#c9d9d3","#e2e2e2","#dfccce","#ddb7b1","#cc7878","#933b41","#550b1d"]},"id":"5687ed04-0f50-49d9-b97a-f5b535e17c90","type":"LinearColorMapper"},{"attributes":{"callback":null,"factors":["1948","1949","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013"]},"id":"077a2d3d-fe18-4dcf-a9da-bc6315dd8e29","type":"FactorRange"},{"attributes":{},"id":"7a946992-727f-428a-b042-5a4f11f8e5e2","type":"CategoricalTicker"},{"attributes":{},"id":"44b8d587-a4fd-4759-bf46-9895cdbedc2e","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c597798f-bbb4-4f21-9269-deb3067ab39b","type":"HoverTool"},{"id":"9a835c62-54ac-4ab8-a434-4eb99acde370","type":"SaveTool"},{"id":"093d0968-915a-47bc-87d2-db08a3a9a535","type":"PanTool"},{"id":"cc3f52dc-eae2-4b1c-92c0-666bbd69e9ec","type":"BoxZoomTool"},{"id":"dc776e9b-f14f-42ea-b480-b9065e364282","type":"WheelZoomTool"}]},"id":"da59800e-cb6d-49c3-9684-489376372537","type":"Toolbar"},{"attributes":{"overlay":{"id":"407c9ba8-6e72-4a83-bb51-a19d1f388fd4","type":"BoxAnnotation"},"plot":{"id":"ff384582-7eef-4d9e-a284-b659c6cb304b","subtype":"Figure","type":"Plot"}},"id":"cc3f52dc-eae2-4b1c-92c0-666bbd69e9ec","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"ff384582-7eef-4d9e-a284-b659c6cb304b","subtype":"Figure","type":"Plot"}},"id":"9a835c62-54ac-4ab8-a434-4eb99acde370","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["month","rate","year"],"data":{"month":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"rate":[4.0,4.7,4.5,4.0,3.4,3.9,3.9,3.6,3.4,2.9,3.3,3.6,5.0,5.8,5.6,5.4,5.7,6.4,7.0,6.3,5.9,6.1,5.7,6.0,7.6,7.9,7.1,6.0,5.3,5.6,5.3,4.1,4.0,3.3,3.8,3.9,4.4,4.2,3.8,3.2,2.9,3.4,3.3,2.9,3.0,2.8,3.2,2.9,3.7,3.8,3.3,3.0,2.9,3.2,3.3,3.1,2.7,2.4,2.5,2.5,3.4,3.2,2.9,2.8,2.5,2.7,2.7,2.4,2.6,2.5,3.2,4.2,5.7,6.3,6.4,6.1,5.7,5.7,5.7,5.4,5.3,4.6,4.9,4.8,5.8,5.7,5.2,4.9,4.2,4.4,4.0,3.8,3.5,3.4,3.8,3.9,4.7,4.8,4.7,4.1,4.2,4.7,4.4,3.7,3.4,3.1,3.9,4.0,4.9,4.7,4.3,4.0,3.9,4.6,4.1,3.7,3.7,3.6,4.6,5.0,6.8,7.7,7.7,7.5,7.1,7.6,7.4,6.7,6.0,5.5,5.6,6.0,7.0,7.0,6.4,5.2,4.9,5.4,5.2,4.8,4.7,4.7,5.3,5.1,6.1,5.7,6.1,5.2,4.8,5.8,5.5,5.2,4.7,5.0,5.6,6.4,7.7,8.1,7.7,7.0,6.6,7.3,6.9,6.2,5.8,5.5,5.6,5.8,6.7,6.5,6.2,5.5,5.1,5.9,5.3,5.3,4.9,4.5,5.3,5.3,6.6,6.9,6.3,5.6,5.5,6.2,5.6,5.2,4.8,4.7,5.3,5.3,6.4,6.2,5.9,5.3,4.8,5.9,4.9,4.8,4.5,4.4,4.5,4.7,5.5,5.7,5.1,4.7,4.3,5.3,4.5,4.2,3.8,3.6,3.9,3.7,4.4,4.2,4.0,3.6,3.7,4.6,3.9,3.6,3.3,3.2,3.4,3.5,4.2,4.2,3.9,3.5,3.2,4.6,4.1,3.7,3.7,3.8,3.7,3.5,4.0,4.2,3.8,3.2,2.9,4.5,4.0,3.5,3.3,3.2,3.3,3.1,3.7,3.7,3.5,3.2,2.9,4.1,3.8,3.5,3.7,3.5,3.3,3.2,4.2,4.7,4.6,4.3,4.1,5.6,5.3,5.0,5.2,5.1,5.5,5.6,6.6,6.6,6.3,5.7,5.3,6.5,6.2,5.9,5.8,5.4,5.7,5.5,6.5,6.4,6.1,5.5,5.1,6.2,5.9,5.5,5.4,5.1,4.9,4.8,5.5,5.6,5.2,4.8,4.4,5.4,5.0,4.7,4.7,4.2,4.6,4.6,5.7,5.8,5.3,4.8,4.6,5.8,5.7,5.3,5.7,5.5,6.2,6.7,9.0,9.1,9.1,8.6,8.3,9.1,8.7,8.2,8.1,7.8,7.8,7.8,8.8,8.7,8.1,7.4,6.8,8.0,7.8,7.6,7.4,7.2,7.4,7.4,8.3,8.5,7.9,6.9,6.4,7.5,7.0,6.8,6.6,6.4,6.5,6.0,7.1,6.9,6.6,5.8,5.5,6.2,6.3,5.9,5.8,5.4,5.6,5.7,6.4,6.4,6.1,5.5,5.2,6.0,5.9,5.9,5.7,5.6,5.6,5.7,6.9,6.8,6.6,6.7,7.1,7.8,7.9,7.6,7.2,7.1,7.1,6.9,8.2,8.0,7.7,7.0,7.1,7.7,7.3,7.2,7.3,7.5,7.9,8.3,9.4,9.6,9.5,9.2,9.1,9.8,9.8,9.6,9.7,9.9,10.4,10.5,11.4,11.3,10.8,10.0,9.8,10.2,9.4,9.2,8.8,8.4,8.1,8.0,8.8,8.4,8.1,7.6,7.2,7.4,7.5,7.3,7.1,7.0,6.9,7.0,8.0,7.8,7.5,7.1,7.0,7.5,7.4,6.9,6.9,6.8,6.7,6.7,7.3,7.8,7.5,7.0,7.0,7.3,7.0,6.7,6.8,6.6,6.6,6.3,7.3,7.2,6.9,6.2,6.1,6.3,6.1,5.8,5.7,5.7,5.6,5.4,6.3,6.2,5.9,5.3,5.4,5.5,5.5,5.4,5.2,5.0,5.2,5.0,6.0,5.6,5.2,5.1,5.0,5.5,5.3,5.1,5.1,5.0,5.2,5.1,6.0,5.9,5.5,5.3,5.2,5.4,5.6,5.5,5.6,5.5,5.9,6.0,7.1,7.3,7.2,6.5,6.7,7.0,6.8,6.6,6.5,6.5,6.7,6.9,8.1,8.2,7.8,7.2,7.3,8.0,7.7,7.4,7.3,6.9,7.1,7.1,8.0,7.8,7.4,6.9,6.8,7.2,7.0,6.6,6.4,6.4,6.2,6.1,7.3,7.1,6.8,6.2,5.9,6.2,6.2,5.9,5.6,5.4,5.3,5.1,6.2,5.9,5.7,5.6,5.5,5.8,5.9,5.6,5.4,5.2,5.3,5.2,6.3,6.0,5.8,5.4,5.4,5.5,5.6,5.1,5.0,4.9,5.0,5.0,5.9,5.7,5.5,4.8,4.7,5.2,5.0,4.8,4.7,4.4,4.3,4.4,5.2,5.0,5.0,4.1,4.2,4.7,4.7,4.5,4.4,4.2,4.1,4.0,4.8,4.7,4.4,4.1,4.0,4.5,4.5,4.2,4.1,3.8,3.8,3.7,4.5,4.4,4.3,3.7,3.8,4.1,4.2,4.1,3.8,3.6,3.7,3.7,4.7,4.6,4.5,4.2,4.1,4.7,4.7,4.9,4.7,5.0,5.3,5.4,6.3,6.1,6.1,5.7,5.5,6.0,5.9,5.7,5.4,5.3,5.6,5.7,6.5,6.4,6.2,5.8,5.8,6.5,6.3,6.0,5.8,5.6,5.6,5.4,6.3,6.0,6.0,5.4,5.3,5.8,5.7,5.4,5.1,5.1,5.2,5.1,5.7,5.8,5.4,4.9,4.9,5.2,5.2,4.9,4.8,4.6,4.8,4.6,5.1,5.1,4.8,4.5,4.4,4.8,5.0,4.6,4.4,4.1,4.3,4.3,5.0,4.9,4.5,4.3,4.3,4.7,4.9,4.6,4.5,4.4,4.5,4.8,5.4,5.2,5.2,4.8,5.2,5.7,6.0,6.1,6.0,6.1,6.5,7.1,8.5,8.9,9.0,8.6,9.1,9.7,9.7,9.6,9.5,9.5,9.4,9.7,10.6,10.4,10.2,9.5,9.3,9.6,9.7,9.5,9.2,9.0,9.3,9.1,9.8,9.5,9.2,8.7,8.7,9.3,9.3,9.1,8.8,8.5,8.2,8.3,8.8,8.7,8.4,7.7,7.9,8.4,8.6,8.2,7.6,7.5,7.4,7.6,8.5,8.1,7.6,7.1,7.3,7.8,7.7,7.3,7.0,7.0,6.6,6.5],"year":["1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013"]}},"id":"b7b26d68-879f-4865-aeb7-c25f29e031c3","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"US Unemployment (1948 - 2013)"},"id":"d3cbe6bf-186e-4f55-9b55-53d75ae4f774","type":"Title"}],"root_ids":["ff384582-7eef-4d9e-a284-b659c6cb304b"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"7336126f-086b-4680-b432-44d1fa8633ce","elementid":"324bc81e-032e-491b-993a-b974744aa5b4","modelid":"ff384582-7eef-4d9e-a284-b659c6cb304b"}];
                
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