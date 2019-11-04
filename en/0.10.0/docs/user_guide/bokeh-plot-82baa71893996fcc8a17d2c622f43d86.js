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

  var elt = document.getElementById("eb8cb793-49a3-4a34-819a-2e5fc5d0ca8a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'eb8cb793-49a3-4a34-819a-2e5fc5d0ca8a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"line_color": {"value": "olive"}, "line_alpha": {"value": 0.5}, "fill_color": {"value": "olive"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "4afd4214-93c9-47f4-b31a-7de1dd22adb5", "size": {"units": "screen", "value": 20}}, "type": "Square", "id": "4afd4214-93c9-47f4-b31a-7de1dd22adb5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "tags": [], "doc": null, "id": "c10c8764-6cd3-4435-b071-3e9348cf0160"}, "type": "ResizeTool", "id": "c10c8764-6cd3-4435-b071-3e9348cf0160"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "2bbd5454-8385-4fb9-a013-d4e0e94cc4ed"}, "type": "ToolEvents", "id": "2bbd5454-8385-4fb9-a013-d4e0e94cc4ed"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "247fea22-0820-4b57-8135-5e702362d051"}, "type": "WheelZoomTool", "id": "247fea22-0820-4b57-8135-5e702362d051"}, {"attributes": {"nonselection_glyph": {"type": "Square", "id": "abf05a4c-22ce-4c47-8da5-cc196804bd0a"}, "data_source": {"type": "ColumnDataSource", "id": "ab60a34b-2585-42af-bc9b-0b613e292fd0"}, "tags": [], "doc": null, "selection_glyph": null, "id": "48abb967-db37-41b9-bb9e-53420ece7785", "glyph": {"type": "Square", "id": "4afd4214-93c9-47f4-b31a-7de1dd22adb5"}}, "type": "GlyphRenderer", "id": "48abb967-db37-41b9-bb9e-53420ece7785"}, {"attributes": {"doc": null, "id": "50e91d3f-0030-42f9-aef2-6f57ce4393a3", "tags": []}, "type": "BasicTickFormatter", "id": "50e91d3f-0030-42f9-aef2-6f57ce4393a3"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "50e91d3f-0030-42f9-aef2-6f57ce4393a3"}, "ticker": {"type": "BasicTicker", "id": "c55e3e18-6685-4c7d-8a03-7e17e6bc7f49"}, "id": "f7b67411-42fa-4254-b475-dd57339dbe2d"}, "type": "LinearAxis", "id": "f7b67411-42fa-4254-b475-dd57339dbe2d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "tags": [], "doc": null, "id": "ec406658-1f98-491d-bc70-dcd0c78cf6bc"}, "type": "PreviewSaveTool", "id": "ec406658-1f98-491d-bc70-dcd0c78cf6bc"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "c55e3e18-6685-4c7d-8a03-7e17e6bc7f49"}, "id": "a8135e67-798b-4070-9e65-d21740ef8952"}, "type": "Grid", "id": "a8135e67-798b-4070-9e65-d21740ef8952"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "a82bd272-e011-40b7-bb43-3454765360b0"}, "id": "0539befd-fed6-460f-88db-c4bfbb9e02bb"}, "type": "Grid", "id": "0539befd-fed6-460f-88db-c4bfbb9e02bb"}, {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42", "attributes": {"x_range": {"type": "DataRange1d", "id": "6a76ac4e-11a8-4a8d-b2c5-5a848e7b0a57"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "37b9f5a0-6868-44b5-bee4-404eb0f2b831"}, {"type": "WheelZoomTool", "id": "247fea22-0820-4b57-8135-5e702362d051"}, {"type": "BoxZoomTool", "id": "328dd34d-0c20-4051-b9e4-f6f5170acc05"}, {"type": "PreviewSaveTool", "id": "ec406658-1f98-491d-bc70-dcd0c78cf6bc"}, {"type": "ResizeTool", "id": "c10c8764-6cd3-4435-b071-3e9348cf0160"}, {"type": "ResetTool", "id": "5cc1484e-8dc5-4ea6-8fd6-88e3ba4c5623"}, {"type": "HelpTool", "id": "9663c903-7135-461e-96c9-a32c5d16f41c"}], "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "930c1c22-526a-48e9-9656-5b44e6c0526e"}, {"type": "Grid", "id": "0539befd-fed6-460f-88db-c4bfbb9e02bb"}, {"type": "LinearAxis", "id": "f7b67411-42fa-4254-b475-dd57339dbe2d"}, {"type": "Grid", "id": "a8135e67-798b-4070-9e65-d21740ef8952"}, {"type": "GlyphRenderer", "id": "48abb967-db37-41b9-bb9e-53420ece7785"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "2bbd5454-8385-4fb9-a013-d4e0e94cc4ed"}, "above": [], "doc": null, "id": "9fe631c0-a626-463f-ba34-d3f322c79b42", "y_range": {"type": "DataRange1d", "id": "7b8e874c-cf99-4c45-b681-48e9d999087e"}, "below": [{"type": "LinearAxis", "id": "930c1c22-526a-48e9-9656-5b44e6c0526e"}], "left": [{"type": "LinearAxis", "id": "f7b67411-42fa-4254-b475-dd57339dbe2d"}]}}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [6, 7, 2, 4, 5], "x": [1, 2, 3, 4, 5]}, "id": "ab60a34b-2585-42af-bc9b-0b613e292fd0"}, "type": "ColumnDataSource", "id": "ab60a34b-2585-42af-bc9b-0b613e292fd0"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "abf05a4c-22ce-4c47-8da5-cc196804bd0a", "size": {"units": "screen", "value": 20}}, "type": "Square", "id": "abf05a4c-22ce-4c47-8da5-cc196804bd0a"}, {"attributes": {"doc": null, "id": "becc0c09-dacc-4f20-b485-940f20be4d4a", "tags": []}, "type": "BasicTickFormatter", "id": "becc0c09-dacc-4f20-b485-940f20be4d4a"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "6a76ac4e-11a8-4a8d-b2c5-5a848e7b0a57"}, "type": "DataRange1d", "id": "6a76ac4e-11a8-4a8d-b2c5-5a848e7b0a57"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "a82bd272-e011-40b7-bb43-3454765360b0", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "a82bd272-e011-40b7-bb43-3454765360b0"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "c55e3e18-6685-4c7d-8a03-7e17e6bc7f49", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "c55e3e18-6685-4c7d-8a03-7e17e6bc7f49"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "tags": [], "doc": null, "id": "9663c903-7135-461e-96c9-a32c5d16f41c"}, "type": "HelpTool", "id": "9663c903-7135-461e-96c9-a32c5d16f41c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "becc0c09-dacc-4f20-b485-940f20be4d4a"}, "ticker": {"type": "BasicTicker", "id": "a82bd272-e011-40b7-bb43-3454765360b0"}, "id": "930c1c22-526a-48e9-9656-5b44e6c0526e"}, "type": "LinearAxis", "id": "930c1c22-526a-48e9-9656-5b44e6c0526e"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "328dd34d-0c20-4051-b9e4-f6f5170acc05"}, "type": "BoxZoomTool", "id": "328dd34d-0c20-4051-b9e4-f6f5170acc05"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "7b8e874c-cf99-4c45-b681-48e9d999087e"}, "type": "DataRange1d", "id": "7b8e874c-cf99-4c45-b681-48e9d999087e"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "tags": [], "doc": null, "id": "5cc1484e-8dc5-4ea6-8fd6-88e3ba4c5623"}, "type": "ResetTool", "id": "5cc1484e-8dc5-4ea6-8fd6-88e3ba4c5623"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9fe631c0-a626-463f-ba34-d3f322c79b42"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "37b9f5a0-6868-44b5-bee4-404eb0f2b831"}, "type": "PanTool", "id": "37b9f5a0-6868-44b5-bee4-404eb0f2b831"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("eb8cb793-49a3-4a34-819a-2e5fc5d0ca8a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("eb8cb793-49a3-4a34-819a-2e5fc5d0ca8a", all_models);
    });
  }

}(this));