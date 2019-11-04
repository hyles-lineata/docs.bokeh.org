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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.js"

  var elt = document.getElementById("62057b51-a7fe-45d4-948a-414b5f2420da");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '62057b51-a7fe-45d4-948a-414b5f2420da' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"geometries": [], "tags": [], "doc": null, "id": "23b5df17-3371-466f-8729-3b14f095444b"}, "type": "ToolEvents", "id": "23b5df17-3371-466f-8729-3b14f095444b"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "a2143743-49c9-472e-84ac-b8c32a5ae919", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "a2143743-49c9-472e-84ac-b8c32a5ae919"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "1b2bed43-798e-47d3-ba42-3cdc62ac11cb", "size": {"units": "screen", "value": 20}}, "type": "Asterisk", "id": "1b2bed43-798e-47d3-ba42-3cdc62ac11cb"}, {"attributes": {"line_color": {"value": "#F0027F"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#F0027F"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "edf2983f-8289-4be0-9844-42a5cdad2fc8", "size": {"units": "screen", "value": 20}}, "type": "Asterisk", "id": "edf2983f-8289-4be0-9844-42a5cdad2fc8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "46495a2a-2095-4503-8ef4-5467236ae715"}, "type": "WheelZoomTool", "id": "46495a2a-2095-4503-8ef4-5467236ae715"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "tags": [], "doc": null, "id": "1cf931b7-8a03-4e64-996c-e143dc7da317"}, "type": "HelpTool", "id": "1cf931b7-8a03-4e64-996c-e143dc7da317"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "a2143743-49c9-472e-84ac-b8c32a5ae919"}, "id": "9b2b50aa-bccb-4495-850e-732dab35c726"}, "type": "Grid", "id": "9b2b50aa-bccb-4495-850e-732dab35c726"}, {"attributes": {"nonselection_glyph": {"type": "Asterisk", "id": "1b2bed43-798e-47d3-ba42-3cdc62ac11cb"}, "data_source": {"type": "ColumnDataSource", "id": "dc92ce3f-acb0-437b-ad61-de4de15f06ab"}, "tags": [], "doc": null, "selection_glyph": null, "id": "7bf238ee-9b07-410c-bbcf-a6c6629f3b67", "glyph": {"type": "Asterisk", "id": "edf2983f-8289-4be0-9844-42a5cdad2fc8"}}, "type": "GlyphRenderer", "id": "7bf238ee-9b07-410c-bbcf-a6c6629f3b67"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "tags": [], "doc": null, "id": "96e58a23-ae52-47c8-97d4-89950d1e83b4"}, "type": "ResizeTool", "id": "96e58a23-ae52-47c8-97d4-89950d1e83b4"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "a927e24c-7b10-4740-ad74-9b451e73fdc3"}, "type": "DataRange1d", "id": "a927e24c-7b10-4740-ad74-9b451e73fdc3"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "tags": [], "doc": null, "id": "ec69bf14-c030-4ba9-a974-525c9990672e"}, "type": "PreviewSaveTool", "id": "ec69bf14-c030-4ba9-a974-525c9990672e"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "tags": [], "doc": null, "id": "5c623950-6a32-4738-98a4-8899e6f55019"}, "type": "ResetTool", "id": "5c623950-6a32-4738-98a4-8899e6f55019"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "fb8f4dc3-6773-4e90-9994-126420056052"}, "id": "51ca1a31-19b9-4682-8162-84f655376fc9"}, "type": "Grid", "id": "51ca1a31-19b9-4682-8162-84f655376fc9"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "fb8f4dc3-6773-4e90-9994-126420056052", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "fb8f4dc3-6773-4e90-9994-126420056052"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "9e516d65-5af6-4dd9-81b7-3ddc655e8460"}, "type": "PanTool", "id": "9e516d65-5af6-4dd9-81b7-3ddc655e8460"}, {"attributes": {"doc": null, "id": "c98d42cd-5cbe-4af9-810d-b73380ff2533", "tags": []}, "type": "BasicTickFormatter", "id": "c98d42cd-5cbe-4af9-810d-b73380ff2533"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "c98d42cd-5cbe-4af9-810d-b73380ff2533"}, "ticker": {"type": "BasicTicker", "id": "fb8f4dc3-6773-4e90-9994-126420056052"}, "id": "1ae76118-8e70-4e51-8fce-913ca296c076"}, "type": "LinearAxis", "id": "1ae76118-8e70-4e51-8fce-913ca296c076"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c01bad6e-7109-4392-9aee-e381a71e61a3"}, "type": "DataRange1d", "id": "c01bad6e-7109-4392-9aee-e381a71e61a3"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "4342f2a8-0685-4d39-b1c0-32ec491d13ea"}, "ticker": {"type": "BasicTicker", "id": "a2143743-49c9-472e-84ac-b8c32a5ae919"}, "id": "649b7688-40fb-44ea-b05d-bef97722e0e5"}, "type": "LinearAxis", "id": "649b7688-40fb-44ea-b05d-bef97722e0e5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "3e22e01a-c39b-4d90-84c1-333ee5d933ab"}, "type": "BoxZoomTool", "id": "3e22e01a-c39b-4d90-84c1-333ee5d933ab"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [1, 2, 3], "x": [1, 2, 3]}, "id": "dc92ce3f-acb0-437b-ad61-de4de15f06ab"}, "type": "ColumnDataSource", "id": "dc92ce3f-acb0-437b-ad61-de4de15f06ab"}, {"attributes": {"doc": null, "id": "4342f2a8-0685-4d39-b1c0-32ec491d13ea", "tags": []}, "type": "BasicTickFormatter", "id": "4342f2a8-0685-4d39-b1c0-32ec491d13ea"}, {"subtype": "Figure", "type": "Plot", "id": "25969953-69c7-4861-b0e3-4de2acdf2b19", "attributes": {"x_range": {"type": "DataRange1d", "id": "a927e24c-7b10-4740-ad74-9b451e73fdc3"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "9e516d65-5af6-4dd9-81b7-3ddc655e8460"}, {"type": "WheelZoomTool", "id": "46495a2a-2095-4503-8ef4-5467236ae715"}, {"type": "BoxZoomTool", "id": "3e22e01a-c39b-4d90-84c1-333ee5d933ab"}, {"type": "PreviewSaveTool", "id": "ec69bf14-c030-4ba9-a974-525c9990672e"}, {"type": "ResizeTool", "id": "96e58a23-ae52-47c8-97d4-89950d1e83b4"}, {"type": "ResetTool", "id": "5c623950-6a32-4738-98a4-8899e6f55019"}, {"type": "HelpTool", "id": "1cf931b7-8a03-4e64-996c-e143dc7da317"}], "extra_y_ranges": {}, "plot_width": 300, "renderers": [{"type": "LinearAxis", "id": "649b7688-40fb-44ea-b05d-bef97722e0e5"}, {"type": "Grid", "id": "9b2b50aa-bccb-4495-850e-732dab35c726"}, {"type": "LinearAxis", "id": "1ae76118-8e70-4e51-8fce-913ca296c076"}, {"type": "Grid", "id": "51ca1a31-19b9-4682-8162-84f655376fc9"}, {"type": "GlyphRenderer", "id": "7bf238ee-9b07-410c-bbcf-a6c6629f3b67"}], "extra_x_ranges": {}, "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "23b5df17-3371-466f-8729-3b14f095444b"}, "above": [], "doc": null, "id": "25969953-69c7-4861-b0e3-4de2acdf2b19", "y_range": {"type": "DataRange1d", "id": "c01bad6e-7109-4392-9aee-e381a71e61a3"}, "below": [{"type": "LinearAxis", "id": "649b7688-40fb-44ea-b05d-bef97722e0e5"}], "left": [{"type": "LinearAxis", "id": "1ae76118-8e70-4e51-8fce-913ca296c076"}]}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("62057b51-a7fe-45d4-948a-414b5f2420da", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("62057b51-a7fe-45d4-948a-414b5f2420da", all_models);
    });
  }

}(this));