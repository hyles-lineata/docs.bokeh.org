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

  var elt = document.getElementById("1ef33c14-6ad7-45ea-95b0-de0a1d082a17");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1ef33c14-6ad7-45ea-95b0-de0a1d082a17' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Circle", "attributes": {"y": {"field": "y"}, "fill_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "9c20405e-d7d2-4974-b543-81482d0c89d1"}, "id": "9c20405e-d7d2-4974-b543-81482d0c89d1"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "id": "0283cc0a-3a91-47db-9465-e7ca0f972929"}, "id": "0283cc0a-3a91-47db-9465-e7ca0f972929"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "id": "1d2a5940-a48d-4aeb-8bcd-0309fbf0ea5f"}, "id": "1d2a5940-a48d-4aeb-8bcd-0309fbf0ea5f"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a92bfc54-0f24-4b53-ae68-c322576e51a4"}, "tags": [], "name": "mycircle", "doc": null, "nonselection_glyph": {"type": "Circle", "id": "9c20405e-d7d2-4974-b543-81482d0c89d1"}, "glyph": {"type": "Circle", "id": "4dcb5ac0-baa4-45e0-a817-f927880538f1"}, "selection_glyph": null, "id": "d2e78071-5869-4a80-ba99-7a28eb2f173d"}, "id": "d2e78071-5869-4a80-ba99-7a28eb2f173d"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "4b6aa3ad-7281-4ba5-a477-7cf29b762d31"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "dimension": 0, "id": "d7415a0b-4961-4029-ba75-4142d18caec5"}, "id": "d7415a0b-4961-4029-ba75-4142d18caec5"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "id": "9602eed8-5315-471d-8856-51da03303b0c", "tags": [], "doc": null}, "id": "9602eed8-5315-471d-8856-51da03303b0c"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "ee44f988-af67-49eb-bfa6-523de5433823"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "da3a53ac-d128-42ac-94d4-f7dc9aa43464"}, "plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "id": "3d5d78b3-0619-4430-9a9a-ea38ad6bcb75"}, "id": "3d5d78b3-0619-4430-9a9a-ea38ad6bcb75"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "id": "c357d496-6768-4a46-8b80-934f0c7fef04"}, "id": "c357d496-6768-4a46-8b80-934f0c7fef04"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "id": "13cc241a-5c29-4f74-915b-c62951bdb72b", "tags": [], "doc": null}, "id": "13cc241a-5c29-4f74-915b-c62951bdb72b"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "ee44f988-af67-49eb-bfa6-523de5433823"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "dimension": 1, "id": "7df42ced-eba2-45da-9a97-a6cbc723e88a"}, "id": "7df42ced-eba2-45da-9a97-a6cbc723e88a"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "7949f0af-2566-4009-b225-43322b258379", "tags": [], "geometries": []}, "id": "7949f0af-2566-4009-b225-43322b258379"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "5d38b8fc-ff00-412c-98d6-4587eb6c6502", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "5d38b8fc-ff00-412c-98d6-4587eb6c6502"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "ee44f988-af67-49eb-bfa6-523de5433823"}, "id": "ee44f988-af67-49eb-bfa6-523de5433823"}, {"type": "Circle", "attributes": {"line_dash": [6, 3], "fill_alpha": {"value": 0.2}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 60}, "line_alpha": {"value": 1.0}, "line_color": {"value": "firebrick"}, "doc": null, "id": "4dcb5ac0-baa4-45e0-a817-f927880538f1", "line_width": {"value": 2}}, "id": "4dcb5ac0-baa4-45e0-a817-f927880538f1"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "7aafefbe-d0a8-4ae4-aa73-0516dbb79e77", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "7aafefbe-d0a8-4ae4-aa73-0516dbb79e77"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "da3a53ac-d128-42ac-94d4-f7dc9aa43464", "tags": []}, "id": "da3a53ac-d128-42ac-94d4-f7dc9aa43464"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "34f50720-5fc6-495b-b25a-17a0383ea861", "tags": []}, "id": "34f50720-5fc6-495b-b25a-17a0383ea861"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "doc": null, "id": "a92bfc54-0f24-4b53-ae68-c322576e51a4", "column_names": ["y", "x"]}, "id": "a92bfc54-0f24-4b53-ae68-c322576e51a4"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "id": "4056b66d-917c-4791-9123-118b56e0ebf7", "tags": [], "doc": null}, "id": "4056b66d-917c-4791-9123-118b56e0ebf7"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "7aafefbe-d0a8-4ae4-aa73-0516dbb79e77"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "7949f0af-2566-4009-b225-43322b258379"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "da57a036-0878-4a31-a2f8-3fd6e0adc0a9"}, {"type": "Grid", "id": "d7415a0b-4961-4029-ba75-4142d18caec5"}, {"type": "LinearAxis", "id": "3d5d78b3-0619-4430-9a9a-ea38ad6bcb75"}, {"type": "Grid", "id": "7df42ced-eba2-45da-9a97-a6cbc723e88a"}, {"type": "GlyphRenderer", "id": "d2e78071-5869-4a80-ba99-7a28eb2f173d"}], "below": [{"type": "LinearAxis", "id": "da57a036-0878-4a31-a2f8-3fd6e0adc0a9"}], "left": [{"type": "LinearAxis", "id": "3d5d78b3-0619-4430-9a9a-ea38ad6bcb75"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "0283cc0a-3a91-47db-9465-e7ca0f972929"}, {"type": "WheelZoomTool", "id": "c357d496-6768-4a46-8b80-934f0c7fef04"}, {"type": "BoxZoomTool", "id": "1d2a5940-a48d-4aeb-8bcd-0309fbf0ea5f"}, {"type": "PreviewSaveTool", "id": "13cc241a-5c29-4f74-915b-c62951bdb72b"}, {"type": "ResizeTool", "id": "9602eed8-5315-471d-8856-51da03303b0c"}, {"type": "ResetTool", "id": "4056b66d-917c-4791-9123-118b56e0ebf7"}, {"type": "HelpTool", "id": "fde8f985-dff5-4c9f-ba27-91fba6048770"}], "x_range": {"type": "DataRange1d", "id": "5d38b8fc-ff00-412c-98d6-4587eb6c6502"}, "id": "03992be8-74c8-4ac5-86f5-ee267d434cab"}, "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "4b6aa3ad-7281-4ba5-a477-7cf29b762d31"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "34f50720-5fc6-495b-b25a-17a0383ea861"}, "plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "id": "da57a036-0878-4a31-a2f8-3fd6e0adc0a9"}, "id": "da57a036-0878-4a31-a2f8-3fd6e0adc0a9"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "03992be8-74c8-4ac5-86f5-ee267d434cab", "subtype": "Figure"}, "id": "fde8f985-dff5-4c9f-ba27-91fba6048770", "tags": [], "doc": null}, "id": "fde8f985-dff5-4c9f-ba27-91fba6048770"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "4b6aa3ad-7281-4ba5-a477-7cf29b762d31"}, "id": "4b6aa3ad-7281-4ba5-a477-7cf29b762d31"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("1ef33c14-6ad7-45ea-95b0-de0a1d082a17", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("1ef33c14-6ad7-45ea-95b0-de0a1d082a17", all_models);
    });
  }

}(this));