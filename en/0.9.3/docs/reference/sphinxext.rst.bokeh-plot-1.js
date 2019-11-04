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

  var elt = document.getElementById("98376fc4-d30a-4b03-be53-e5562c1906b1");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '98376fc4-d30a-4b03-be53-e5562c1906b1' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "id": "d49d6cb1-c1d5-469b-9f7a-f6a174800f38", "tags": [], "doc": null}, "id": "d49d6cb1-c1d5-469b-9f7a-f6a174800f38"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "50620cf8-44e5-4b03-8639-d0426b5dc293"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "8b491c2c-6f7e-480c-a3cf-1ee4952da839"}, "plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "id": "ed365ab5-95e0-4ede-a0b1-1175baea38b4"}, "id": "ed365ab5-95e0-4ede-a0b1-1175baea38b4"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "50620cf8-44e5-4b03-8639-d0426b5dc293"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "dimension": 0, "id": "0fec305d-addc-4f60-a127-cc668676b9f1"}, "id": "0fec305d-addc-4f60-a127-cc668676b9f1"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c92be328-a008-43d5-b4fa-346932c6a60e"}, "tags": [], "glyph": {"type": "Circle", "id": "b8592280-af5d-4810-96e7-979b6b9f31c5"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "4f5cd4b8-0c6d-4d40-b9e4-5efe50b2fd15"}, "selection_glyph": null, "id": "cbb7f83a-8b17-41e3-afa5-af64a083d1ac"}, "id": "cbb7f83a-8b17-41e3-afa5-af64a083d1ac"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "id": "3839c0cf-a527-419e-8ef9-efdd0a3d0407"}, "id": "3839c0cf-a527-419e-8ef9-efdd0a3d0407"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [6, 7, 6, 4, 5], "x": [1, 2, 3, 4, 5]}, "doc": null, "id": "6a57bbda-b3d4-406d-9a87-d8ba4cba03ed", "column_names": ["y", "x"]}, "id": "6a57bbda-b3d4-406d-9a87-d8ba4cba03ed"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "9c76943c-68cf-4490-815d-5044d6ed530b"}, "id": "9c76943c-68cf-4490-815d-5044d6ed530b"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "50620cf8-44e5-4b03-8639-d0426b5dc293"}, "id": "50620cf8-44e5-4b03-8639-d0426b5dc293"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "1912b977-f235-4796-8357-b6ad6e77e979", "tags": [], "geometries": []}, "id": "1912b977-f235-4796-8357-b6ad6e77e979"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "id": "83ee4684-7296-41d2-aff1-1ded150b3de1", "tags": [], "doc": null}, "id": "83ee4684-7296-41d2-aff1-1ded150b3de1"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "id": "935cfc8c-6629-42df-aeed-4f282dd5dd3c"}, "id": "935cfc8c-6629-42df-aeed-4f282dd5dd3c"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "56f59b64-2654-48b9-bc06-4c8c128dddeb", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "56f59b64-2654-48b9-bc06-4c8c128dddeb"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "9c76943c-68cf-4490-815d-5044d6ed530b"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "dimension": 1, "id": "d37a1865-7029-4772-ac63-70f7b891306d"}, "id": "d37a1865-7029-4772-ac63-70f7b891306d"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "doc": null, "line_width": {"value": 2}, "tags": [], "x": {"field": "x"}, "line_color": {"value": "#1f77b4"}, "id": "5a028cb8-4df4-4169-896a-bfc2b31ff43b", "line_alpha": {"value": 1.0}}, "id": "5a028cb8-4df4-4169-896a-bfc2b31ff43b"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "white"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "b8592280-af5d-4810-96e7-979b6b9f31c5"}, "id": "b8592280-af5d-4810-96e7-979b6b9f31c5"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "doc": null, "line_width": {"value": 2}, "tags": [], "x": {"field": "x"}, "line_color": {"value": "#1f77b4"}, "id": "447f3ab3-368d-4a3e-b590-3ca4f5b869e3", "line_alpha": {"value": 0.1}}, "id": "447f3ab3-368d-4a3e-b590-3ca4f5b869e3"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "id": "60dcb428-4c4d-4638-a8d7-c5a4af952340"}, "id": "60dcb428-4c4d-4638-a8d7-c5a4af952340"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "3c12bf4f-c6e2-42df-acd9-d9e46eb836be", "tags": []}, "id": "3c12bf4f-c6e2-42df-acd9-d9e46eb836be"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "4f5cd4b8-0c6d-4d40-b9e4-5efe50b2fd15"}, "id": "4f5cd4b8-0c6d-4d40-b9e4-5efe50b2fd15"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "8b491c2c-6f7e-480c-a3cf-1ee4952da839", "tags": []}, "id": "8b491c2c-6f7e-480c-a3cf-1ee4952da839"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6a57bbda-b3d4-406d-9a87-d8ba4cba03ed"}, "tags": [], "glyph": {"type": "Line", "id": "5a028cb8-4df4-4169-896a-bfc2b31ff43b"}, "doc": null, "nonselection_glyph": {"type": "Line", "id": "447f3ab3-368d-4a3e-b590-3ca4f5b869e3"}, "selection_glyph": null, "id": "df8c2392-626d-4c0f-acc0-0ccc86db6684"}, "id": "df8c2392-626d-4c0f-acc0-0ccc86db6684"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "13c8d311-90ba-4bb6-a1ab-c2d3e9a71018", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "13c8d311-90ba-4bb6-a1ab-c2d3e9a71018"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "id": "26b2a542-09c3-49ab-915c-ed29469e5e3f", "tags": [], "doc": null}, "id": "26b2a542-09c3-49ab-915c-ed29469e5e3f"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "9c76943c-68cf-4490-815d-5044d6ed530b"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "3c12bf4f-c6e2-42df-acd9-d9e46eb836be"}, "plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "id": "5622260c-2f24-49c4-bbb6-e0547e54fe11"}, "id": "5622260c-2f24-49c4-bbb6-e0547e54fe11"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [6, 7, 6, 4, 5], "x": [1, 2, 3, 4, 5]}, "doc": null, "id": "c92be328-a008-43d5-b4fa-346932c6a60e", "column_names": ["y", "x"]}, "id": "c92be328-a008-43d5-b4fa-346932c6a60e"}, {"type": "Plot", "attributes": {"plot_height": 300, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "56f59b64-2654-48b9-bc06-4c8c128dddeb"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "1912b977-f235-4796-8357-b6ad6e77e979"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "ed365ab5-95e0-4ede-a0b1-1175baea38b4"}, {"type": "Grid", "id": "0fec305d-addc-4f60-a127-cc668676b9f1"}, {"type": "LinearAxis", "id": "5622260c-2f24-49c4-bbb6-e0547e54fe11"}, {"type": "Grid", "id": "d37a1865-7029-4772-ac63-70f7b891306d"}, {"type": "GlyphRenderer", "id": "df8c2392-626d-4c0f-acc0-0ccc86db6684"}, {"type": "GlyphRenderer", "id": "cbb7f83a-8b17-41e3-afa5-af64a083d1ac"}], "below": [{"type": "LinearAxis", "id": "ed365ab5-95e0-4ede-a0b1-1175baea38b4"}], "left": [{"type": "LinearAxis", "id": "5622260c-2f24-49c4-bbb6-e0547e54fe11"}], "above": [], "tags": [], "plot_width": 300, "extra_y_ranges": {}, "title": "example", "tools": [{"type": "PanTool", "id": "3839c0cf-a527-419e-8ef9-efdd0a3d0407"}, {"type": "WheelZoomTool", "id": "60dcb428-4c4d-4638-a8d7-c5a4af952340"}, {"type": "BoxZoomTool", "id": "935cfc8c-6629-42df-aeed-4f282dd5dd3c"}, {"type": "PreviewSaveTool", "id": "1afdc62d-1676-4031-90f7-91c544bcff6a"}, {"type": "ResizeTool", "id": "26b2a542-09c3-49ab-915c-ed29469e5e3f"}, {"type": "ResetTool", "id": "83ee4684-7296-41d2-aff1-1ded150b3de1"}, {"type": "HelpTool", "id": "d49d6cb1-c1d5-469b-9f7a-f6a174800f38"}], "x_range": {"type": "DataRange1d", "id": "13c8d311-90ba-4bb6-a1ab-c2d3e9a71018"}, "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd"}, "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "6c0434d2-4160-4ae0-a4ae-fe65f6eee1cd", "subtype": "Figure"}, "id": "1afdc62d-1676-4031-90f7-91c544bcff6a", "tags": [], "doc": null}, "id": "1afdc62d-1676-4031-90f7-91c544bcff6a"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("98376fc4-d30a-4b03-be53-e5562c1906b1", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("98376fc4-d30a-4b03-be53-e5562c1906b1", all_models);
    });
  }

}(this));