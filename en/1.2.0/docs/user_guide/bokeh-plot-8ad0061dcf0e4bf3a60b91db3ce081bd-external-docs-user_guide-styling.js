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
      };var element = document.getElementById("d5a6997a-4ebb-41ff-a50f-f0fdd80b6c46");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd5a6997a-4ebb-41ff-a50f-f0fdd80b6c46' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"8168b4e2-181f-49d3-a362-eec16e525f0b":{"roots":{"references":[{"attributes":{"source":{"id":"35658","type":"ColumnDataSource"}},"id":"35662","type":"CDSView"},{"attributes":{},"id":"35699","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"35641","type":"BasicTicker"}},"id":"35644","type":"Grid"},{"attributes":{},"id":"35756","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35674","type":"Line"},{"attributes":{"data_source":{"id":"35658","type":"ColumnDataSource"},"glyph":{"id":"35659","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35660","type":"Circle"},"selection_glyph":null,"view":{"id":"35662","type":"CDSView"}},"id":"35661","type":"GlyphRenderer"},{"attributes":{},"id":"35700","type":"UnionRenderers"},{"attributes":{},"id":"35684","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35660","type":"Circle"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35673","type":"Line"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"35689","type":"GlyphRenderer"}]},"id":"35702","type":"LegendItem"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}},"selected":{"id":"35699","type":"Selection"},"selection_policy":{"id":"35700","type":"UnionRenderers"}},"id":"35672","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35659","type":"Circle"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAeZ5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+uSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/J7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMfGzMMGMA8AkU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzJJEDPTWsg/aoF44Akr4j/QL7OxiPTtP1+wo+NRofQ/FAQZ9WTz+T8oIVr7ktr+PyVTbtpUoQFAMPGzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8MHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+n710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b846WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9e5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}},"selected":{"id":"35739","type":"Selection"},"selection_policy":{"id":"35740","type":"UnionRenderers"}},"id":"35703","type":"ColumnDataSource"},{"attributes":{},"id":"35645","type":"PanTool"},{"attributes":{},"id":"35683","type":"Selection"},{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"35661","type":"GlyphRenderer"},{"id":"35675","type":"GlyphRenderer"}]},"id":"35671","type":"LegendItem"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35704","type":"Square"},{"attributes":{"items":[{"id":"35671","type":"LegendItem"},{"id":"35702","type":"LegendItem"},{"id":"35721","type":"LegendItem"}],"orientation":"horizontal"},"id":"35670","type":"Legend"},{"attributes":{"overlay":{"id":"35669","type":"BoxAnnotation"}},"id":"35647","type":"BoxZoomTool"},{"attributes":{},"id":"35718","type":"Selection"},{"attributes":{},"id":"35646","type":"WheelZoomTool"},{"attributes":{},"id":"35757","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"35722","type":"ColumnDataSource"},"glyph":{"id":"35723","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35724","type":"Line"},"selection_glyph":null,"view":{"id":"35726","type":"CDSView"}},"id":"35725","type":"GlyphRenderer"},{"attributes":{},"id":"35641","type":"BasicTicker"},{"attributes":{},"id":"35648","type":"SaveTool"},{"attributes":{"line_color":"green","x":{"field":"x"},"y":{"field":"y"}},"id":"35723","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35645","type":"PanTool"},{"id":"35646","type":"WheelZoomTool"},{"id":"35647","type":"BoxZoomTool"},{"id":"35648","type":"SaveTool"},{"id":"35649","type":"ResetTool"},{"id":"35650","type":"HelpTool"}]},"id":"35651","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35724","type":"Line"},{"attributes":{},"id":"35650","type":"HelpTool"},{"attributes":{},"id":"35719","type":"UnionRenderers"},{"attributes":{"below":[{"id":"35635","type":"LinearAxis"}],"center":[{"id":"35639","type":"Grid"},{"id":"35644","type":"Grid"},{"id":"35670","type":"Legend"}],"left":[{"id":"35640","type":"LinearAxis"}],"renderers":[{"id":"35661","type":"GlyphRenderer"},{"id":"35675","type":"GlyphRenderer"},{"id":"35689","type":"GlyphRenderer"},{"id":"35706","type":"GlyphRenderer"},{"id":"35725","type":"GlyphRenderer"}],"title":{"id":"35663","type":"Title"},"toolbar":{"id":"35651","type":"Toolbar"},"x_range":{"id":"35627","type":"DataRange1d"},"x_scale":{"id":"35631","type":"LinearScale"},"y_range":{"id":"35629","type":"DataRange1d"},"y_scale":{"id":"35633","type":"LinearScale"}},"id":"35626","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35649","type":"ResetTool"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"35706","type":"GlyphRenderer"},{"id":"35725","type":"GlyphRenderer"}]},"id":"35721","type":"LegendItem"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTQP5qI2QHPEuA/+5MNU1HJ5z8ZTT7q2B3vP0aFmgwa+fI/ABg/lCAV9j+IQCEcMdb4P3fOhmLzMPs/EyzujrQb/T/9Izwlj47+PxccgYyLg/8/g6xao7j2/z9mZrL8O+b/P7+X94FZUv8/xVNiW3I9/j9RB8Ai+6v8P5FWKYlppPo/oSg6uxkv+D/Th2bxK1b1PyZGRbpaJfI/8qg+VZVT7T/4C4p0qOPlP+UppLIiM9w/3FNHxZdVyD/J23zJpD6wv+3ENsZjOdS/wo12/ecH4r/dgWKM2Kjpv2MTsJELcPC/83ixWvXH87+358MBZM72v5eCD4nhdvm/rExY6Hq2+7+TIxAn7YP9vwSssILL1/6/70I4BJ6s/7/vOc8G+P7/vzTGy1KGzf+/3176khQZ/7/C8a4NiuT9vzGcHq/dNPy/l0FFlgER+r+FGZN4xoH3vx8WPFK3kfS/Cli7+O1M8b+HQNqEwoHrv9kfIiFb+OO/gKyggGI52L8EhrXMjDzAvyGGtcyMPMA/jqyggGI52D/gHyIhW/jjP39A2oTCges/DVi7+O1M8T8bFjxSt5H0P4cZk3jGgfc/lUFFlgER+j8ynB6v3TT8P8Hxrg2K5P0/4F76khQZ/z80xstShs3/P+85zwb4/v8/8EI4BJ6s/z8DrLCCy9f+P5UjECftg/0/p0xY6Hq2+z+Vgg+J4Xb5P7fnwwFkzvY/9nixWvXH8z9dE7CRC3DwP9eBYozYqOk/w412/ecH4j/+xDbGYznUP0/bfMmkPrA/+FNHxZdVyL/UKaSyIjPcv+gLinSo4+W/+Kg+VZVT7b8lRkW6WiXyv8+HZvErVvW/pig6uxkv+L+TVimJaaT6v1EHwCL7q/y/xFNiW3I9/r/Al/eBWVL/v2Zmsvw75v+/g6xao7j2/78YHIGMi4P/v/sjPCWPjv6/EyzujrQb/b94zoZi8zD7v4xAIRwx1vi//Bc/lCAV9r9GhZoMGvnyvx9NPurYHe+/65MNU1HJ57+SiNkBzxLgv/GDAnguNNC/B1wUMyam0bw=","dtype":"float64","shape":[100]}},"selected":{"id":"35718","type":"Selection"},"selection_policy":{"id":"35719","type":"UnionRenderers"}},"id":"35686","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}},"selected":{"id":"35683","type":"Selection"},"selection_policy":{"id":"35684","type":"UnionRenderers"}},"id":"35658","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"35627","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAeZ5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+uSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/J7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMfGzMMGMA8AkU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzJJEDPTWsg/aoF44Akr4j/QL7OxiPTtP1+wo+NRofQ/FAQZ9WTz+T8oIVr7ktr+PyVTbtpUoQFAMPGzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8MHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+n710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b846WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9e5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}},"selected":{"id":"35756","type":"Selection"},"selection_policy":{"id":"35757","type":"UnionRenderers"}},"id":"35722","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35686","type":"ColumnDataSource"},"glyph":{"id":"35687","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35688","type":"Line"},"selection_glyph":null,"view":{"id":"35690","type":"CDSView"}},"id":"35689","type":"GlyphRenderer"},{"attributes":{},"id":"35740","type":"UnionRenderers"},{"attributes":{"source":{"id":"35722","type":"ColumnDataSource"}},"id":"35726","type":"CDSView"},{"attributes":{"data_source":{"id":"35672","type":"ColumnDataSource"},"glyph":{"id":"35673","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35674","type":"Line"},"selection_glyph":null,"view":{"id":"35676","type":"CDSView"}},"id":"35675","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35688","type":"Line"},{"attributes":{"callback":null},"id":"35629","type":"DataRange1d"},{"attributes":{"formatter":{"id":"35665","type":"BasicTickFormatter"},"ticker":{"id":"35641","type":"BasicTicker"}},"id":"35640","type":"LinearAxis"},{"attributes":{"line_color":"orange","line_dash":[4,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35687","type":"Line"},{"attributes":{},"id":"35636","type":"BasicTicker"},{"attributes":{"source":{"id":"35686","type":"ColumnDataSource"}},"id":"35690","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35669","type":"BoxAnnotation"},{"attributes":{},"id":"35631","type":"LinearScale"},{"attributes":{"source":{"id":"35672","type":"ColumnDataSource"}},"id":"35676","type":"CDSView"},{"attributes":{"source":{"id":"35703","type":"ColumnDataSource"}},"id":"35707","type":"CDSView"},{"attributes":{},"id":"35667","type":"BasicTickFormatter"},{"attributes":{},"id":"35633","type":"LinearScale"},{"attributes":{},"id":"35739","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35705","type":"Square"},{"attributes":{},"id":"35665","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"35667","type":"BasicTickFormatter"},"ticker":{"id":"35636","type":"BasicTicker"}},"id":"35635","type":"LinearAxis"},{"attributes":{"ticker":{"id":"35636","type":"BasicTicker"}},"id":"35639","type":"Grid"},{"attributes":{"text":""},"id":"35663","type":"Title"},{"attributes":{"data_source":{"id":"35703","type":"ColumnDataSource"},"glyph":{"id":"35704","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35705","type":"Square"},"selection_glyph":null,"view":{"id":"35707","type":"CDSView"}},"id":"35706","type":"GlyphRenderer"}],"root_ids":["35626"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"8168b4e2-181f-49d3-a362-eec16e525f0b","roots":{"35626":"d5a6997a-4ebb-41ff-a50f-f0fdd80b6c46"}}];
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