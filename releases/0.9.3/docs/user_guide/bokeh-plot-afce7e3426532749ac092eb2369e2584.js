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

  var elt = document.getElementById("d80b37c7-7e99-4ece-bda2-fa5e17d71518");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd80b37c7-7e99-4ece-bda2-fa5e17d71518' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "73f7d822-7202-48b7-873f-74a6406c74f2", "tags": []}, "id": "73f7d822-7202-48b7-873f-74a6406c74f2"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "id": "23894224-19b5-4089-861e-0a6e81a3f9c5", "tags": [], "doc": null}, "id": "23894224-19b5-4089-861e-0a6e81a3f9c5"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "9d31f9b0-eca0-4fd4-8a01-46167c440ac3", "tags": []}, "id": "9d31f9b0-eca0-4fd4-8a01-46167c440ac3"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "59cf981d-3c67-4a82-90f4-ed358e7e000c"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "73f7d822-7202-48b7-873f-74a6406c74f2"}, "plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "id": "4c6d7887-bc35-497c-9850-cbf1a04f46b6"}, "id": "4c6d7887-bc35-497c-9850-cbf1a04f46b6"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "id": "4caccbb3-9140-489e-8c1e-24fe5d57586d", "tags": [], "doc": null}, "id": "4caccbb3-9140-489e-8c1e-24fe5d57586d"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "4e3ba7df-b1fc-4fa4-bf85-3e898c0028f4"}, "id": "4e3ba7df-b1fc-4fa4-bf85-3e898c0028f4"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "id": "43b6b346-e133-478a-9105-a069c53397dc", "tags": [], "doc": null}, "id": "43b6b346-e133-478a-9105-a069c53397dc"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "0b9ca395-f6d4-40f1-adf9-bee4a49d1dd9"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "daefc756-5a70-4c44-b279-b85cad36b105"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "4c6d7887-bc35-497c-9850-cbf1a04f46b6"}, {"type": "Grid", "id": "50e86bca-d8e2-4935-8a76-a1b4dfb93753"}, {"type": "LinearAxis", "id": "569ae37c-6c72-4f06-97b8-a746593a6f09"}, {"type": "Grid", "id": "bf304640-4454-4587-87b6-0cba20832dbd"}, {"type": "GlyphRenderer", "id": "af164c98-e642-4630-9b5c-f2c345a409b8"}], "below": [{"type": "LinearAxis", "id": "4c6d7887-bc35-497c-9850-cbf1a04f46b6"}], "left": [{"type": "LinearAxis", "id": "569ae37c-6c72-4f06-97b8-a746593a6f09"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "4a57adf8-8584-45cb-ad9d-a1ef5f3d8e7e"}, {"type": "WheelZoomTool", "id": "821aec72-72f0-4e79-a8bc-60147fe8df38"}, {"type": "BoxZoomTool", "id": "6f178bdd-ad95-4ecb-8883-9bf7796bd932"}, {"type": "PreviewSaveTool", "id": "43b6b346-e133-478a-9105-a069c53397dc"}, {"type": "ResizeTool", "id": "4caccbb3-9140-489e-8c1e-24fe5d57586d"}, {"type": "ResetTool", "id": "23894224-19b5-4089-861e-0a6e81a3f9c5"}, {"type": "HelpTool", "id": "1cc9fc7f-5553-40ea-8097-80f1a1a0e260"}], "x_range": {"type": "DataRange1d", "id": "053d420a-993d-4104-aa50-48778336210c"}, "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b"}, "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "32f703d4-61c1-4747-b228-e7032c6dd434"}, "tags": [], "glyph": {"type": "Patch", "id": "d9302d74-f63e-4254-96df-7e5954c2dfe6"}, "doc": null, "nonselection_glyph": {"type": "Patch", "id": "fb24431f-cf2d-4519-94ec-4f6c19bafbf7"}, "selection_glyph": null, "id": "af164c98-e642-4630-9b5c-f2c345a409b8"}, "id": "af164c98-e642-4630-9b5c-f2c345a409b8"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "id": "6f178bdd-ad95-4ecb-8883-9bf7796bd932"}, "id": "6f178bdd-ad95-4ecb-8883-9bf7796bd932"}, {"type": "Patch", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "fb24431f-cf2d-4519-94ec-4f6c19bafbf7", "line_alpha": {"value": 0.1}}, "id": "fb24431f-cf2d-4519-94ec-4f6c19bafbf7"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "id": "821aec72-72f0-4e79-a8bc-60147fe8df38"}, "id": "821aec72-72f0-4e79-a8bc-60147fe8df38"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "daefc756-5a70-4c44-b279-b85cad36b105", "tags": [], "geometries": []}, "id": "daefc756-5a70-4c44-b279-b85cad36b105"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "0b9ca395-f6d4-40f1-adf9-bee4a49d1dd9", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "0b9ca395-f6d4-40f1-adf9-bee4a49d1dd9"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "4e3ba7df-b1fc-4fa4-bf85-3e898c0028f4"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "dimension": 1, "id": "bf304640-4454-4587-87b6-0cba20832dbd"}, "id": "bf304640-4454-4587-87b6-0cba20832dbd"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "id": "1cc9fc7f-5553-40ea-8097-80f1a1a0e260", "tags": [], "doc": null}, "id": "1cc9fc7f-5553-40ea-8097-80f1a1a0e260"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "59cf981d-3c67-4a82-90f4-ed358e7e000c"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "dimension": 0, "id": "50e86bca-d8e2-4935-8a76-a1b4dfb93753"}, "id": "50e86bca-d8e2-4935-8a76-a1b4dfb93753"}, {"type": "Patch", "attributes": {"fill_alpha": {"value": 0.5}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "d9302d74-f63e-4254-96df-7e5954c2dfe6", "line_alpha": {"value": 0.5}}, "id": "d9302d74-f63e-4254-96df-7e5954c2dfe6"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [6, 7, 8, 7, 3], "x": [1, 2, 3, 4, 5]}, "doc": null, "id": "32f703d4-61c1-4747-b228-e7032c6dd434", "column_names": ["y", "x"]}, "id": "32f703d4-61c1-4747-b228-e7032c6dd434"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "id": "4a57adf8-8584-45cb-ad9d-a1ef5f3d8e7e"}, "id": "4a57adf8-8584-45cb-ad9d-a1ef5f3d8e7e"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "59cf981d-3c67-4a82-90f4-ed358e7e000c"}, "id": "59cf981d-3c67-4a82-90f4-ed358e7e000c"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "053d420a-993d-4104-aa50-48778336210c", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "053d420a-993d-4104-aa50-48778336210c"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "4e3ba7df-b1fc-4fa4-bf85-3e898c0028f4"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "9d31f9b0-eca0-4fd4-8a01-46167c440ac3"}, "plot": {"type": "Plot", "id": "31ffa8b1-e40a-4c46-b765-ac78ab6db08b", "subtype": "Figure"}, "id": "569ae37c-6c72-4f06-97b8-a746593a6f09"}, "id": "569ae37c-6c72-4f06-97b8-a746593a6f09"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("d80b37c7-7e99-4ece-bda2-fa5e17d71518", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("d80b37c7-7e99-4ece-bda2-fa5e17d71518", all_models);
    });
  }

}(this));