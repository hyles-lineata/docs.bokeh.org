(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_lib(url, callback){
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading){
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = true;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = function(){
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.js"

  var elt = document.getElementById("0cdad30e-8165-4ea6-b8ae-851c0b4a5fe7");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0cdad30e-8165-4ea6-b8ae-851c0b4a5fe7' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "ToolEvents", "attributes": {"doc": null, "id": "da87e4a0-cfe6-45dd-9282-1a47b2387807", "tags": [], "geometries": []}, "id": "da87e4a0-cfe6-45dd-9282-1a47b2387807"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "id": "2944d86d-e438-4af4-ae12-9bfd15939858"}, "id": "2944d86d-e438-4af4-ae12-9bfd15939858"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "id": "a7b8fbb1-5113-4e5b-bc9a-db25e2bbc2ac", "tags": [], "doc": null}, "id": "a7b8fbb1-5113-4e5b-bc9a-db25e2bbc2ac"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "ec1d5380-3c3e-4fe9-b5bc-fec59b4f25d8"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "a6f4f9c5-df95-4150-ab68-69134ce78e0b"}, "plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "id": "dabb231e-31e0-4bc6-b2d0-e7e7df1f71b8"}, "id": "dabb231e-31e0-4bc6-b2d0-e7e7df1f71b8"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "ec1d5380-3c3e-4fe9-b5bc-fec59b4f25d8"}, "id": "ec1d5380-3c3e-4fe9-b5bc-fec59b4f25d8"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "id": "0e266157-163b-47bd-bdeb-8b2034dd8a5f"}, "id": "0e266157-163b-47bd-bdeb-8b2034dd8a5f"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "d0cea550-c469-4912-afbd-5d6cef6af292", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "d0cea550-c469-4912-afbd-5d6cef6af292"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "5e770d3e-9852-4e06-8230-a836450d8234"}, "tags": [], "glyph": {"type": "Quad", "id": "fc3eaeae-b3ab-47cb-a976-8cbb40bb5800"}, "doc": null, "nonselection_glyph": {"type": "Quad", "id": "3477ef05-b7eb-41ae-9082-6eacc63e7e69"}, "selection_glyph": null, "id": "720a7656-802b-432d-8846-fb6beaefdf65"}, "id": "720a7656-802b-432d-8846-fb6beaefdf65"}, {"type": "Plot", "attributes": {"plot_height": 300, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "818a96c8-8c2e-455d-b125-61aee05aba1c"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "da87e4a0-cfe6-45dd-9282-1a47b2387807"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "dabb231e-31e0-4bc6-b2d0-e7e7df1f71b8"}, {"type": "Grid", "id": "78eca26d-424e-45fc-91e9-6ce7a83c8f77"}, {"type": "LinearAxis", "id": "99da7eba-1925-4a03-b57a-d0c368057e00"}, {"type": "Grid", "id": "69f7d83f-dd1c-4623-b493-257ed33bc1ba"}, {"type": "GlyphRenderer", "id": "720a7656-802b-432d-8846-fb6beaefdf65"}], "below": [{"type": "LinearAxis", "id": "dabb231e-31e0-4bc6-b2d0-e7e7df1f71b8"}], "left": [{"type": "LinearAxis", "id": "99da7eba-1925-4a03-b57a-d0c368057e00"}], "above": [], "tags": [], "plot_width": 300, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "2944d86d-e438-4af4-ae12-9bfd15939858"}, {"type": "WheelZoomTool", "id": "539d6898-6e60-4eeb-bbdd-ebc2413ddc13"}, {"type": "BoxZoomTool", "id": "0e266157-163b-47bd-bdeb-8b2034dd8a5f"}, {"type": "PreviewSaveTool", "id": "a7b8fbb1-5113-4e5b-bc9a-db25e2bbc2ac"}, {"type": "ResizeTool", "id": "85b18a33-4a52-4afe-a133-ae164863ae0f"}, {"type": "ResetTool", "id": "1101277f-0b58-4263-97f0-50ffa559506e"}, {"type": "HelpTool", "id": "33f0c5bc-b6bf-4ef2-ad84-75c1549e436c"}], "x_range": {"type": "DataRange1d", "id": "d0cea550-c469-4912-afbd-5d6cef6af292"}, "id": "648690de-6350-4564-9803-9fefe380631b"}, "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "a6f4f9c5-df95-4150-ab68-69134ce78e0b", "tags": []}, "id": "a6f4f9c5-df95-4150-ab68-69134ce78e0b"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "id": "85b18a33-4a52-4afe-a133-ae164863ae0f", "tags": [], "doc": null}, "id": "85b18a33-4a52-4afe-a133-ae164863ae0f"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"right": [1.2, 2.5, 3.7], "left": [1, 2, 3], "bottom": [1, 2, 3], "top": [2, 3, 4]}, "doc": null, "id": "5e770d3e-9852-4e06-8230-a836450d8234", "column_names": ["right", "left", "bottom", "top"]}, "id": "5e770d3e-9852-4e06-8230-a836450d8234"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "818a96c8-8c2e-455d-b125-61aee05aba1c", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "818a96c8-8c2e-455d-b125-61aee05aba1c"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "id": "539d6898-6e60-4eeb-bbdd-ebc2413ddc13"}, "id": "539d6898-6e60-4eeb-bbdd-ebc2413ddc13"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "id": "33f0c5bc-b6bf-4ef2-ad84-75c1549e436c", "tags": [], "doc": null}, "id": "33f0c5bc-b6bf-4ef2-ad84-75c1549e436c"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "f0ff8cf5-de01-4e1b-bee4-2759c50204a5"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "7c637f55-0911-465b-9e1f-d9442b03321c"}, "plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "id": "99da7eba-1925-4a03-b57a-d0c368057e00"}, "id": "99da7eba-1925-4a03-b57a-d0c368057e00"}, {"type": "Quad", "attributes": {"right": {"field": "right"}, "line_color": {"value": "#B3DE69"}, "left": {"field": "left"}, "doc": null, "fill_alpha": {"value": 1.0}, "bottom": {"field": "bottom"}, "fill_color": {"value": "#B3DE69"}, "line_alpha": {"value": 1.0}, "tags": [], "top": {"field": "top"}, "id": "fc3eaeae-b3ab-47cb-a976-8cbb40bb5800"}, "id": "fc3eaeae-b3ab-47cb-a976-8cbb40bb5800"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "7c637f55-0911-465b-9e1f-d9442b03321c", "tags": []}, "id": "7c637f55-0911-465b-9e1f-d9442b03321c"}, {"type": "Quad", "attributes": {"right": {"field": "right"}, "line_color": {"value": "#1f77b4"}, "left": {"field": "left"}, "doc": null, "fill_alpha": {"value": 0.1}, "bottom": {"field": "bottom"}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "tags": [], "top": {"field": "top"}, "id": "3477ef05-b7eb-41ae-9082-6eacc63e7e69"}, "id": "3477ef05-b7eb-41ae-9082-6eacc63e7e69"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "f0ff8cf5-de01-4e1b-bee4-2759c50204a5"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "dimension": 1, "id": "69f7d83f-dd1c-4623-b493-257ed33bc1ba"}, "id": "69f7d83f-dd1c-4623-b493-257ed33bc1ba"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "ec1d5380-3c3e-4fe9-b5bc-fec59b4f25d8"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "dimension": 0, "id": "78eca26d-424e-45fc-91e9-6ce7a83c8f77"}, "id": "78eca26d-424e-45fc-91e9-6ce7a83c8f77"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "648690de-6350-4564-9803-9fefe380631b", "subtype": "Figure"}, "id": "1101277f-0b58-4263-97f0-50ffa559506e", "tags": [], "doc": null}, "id": "1101277f-0b58-4263-97f0-50ffa559506e"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "f0ff8cf5-de01-4e1b-bee4-2759c50204a5"}, "id": "f0ff8cf5-de01-4e1b-bee4-2759c50204a5"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("0cdad30e-8165-4ea6-b8ae-851c0b4a5fe7", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("0cdad30e-8165-4ea6-b8ae-851c0b4a5fe7", all_models);
    });
  }

}(this));