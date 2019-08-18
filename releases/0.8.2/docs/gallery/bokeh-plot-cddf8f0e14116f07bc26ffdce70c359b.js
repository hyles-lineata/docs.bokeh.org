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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("c60d3f1d-77e2-416e-b8bd-fa6c6f3b8f72");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c60d3f1d-77e2-416e-b8bd-fa6c6f3b8f72' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "9bc3a7ad-9d4b-44d2-b187-f367e4edb33b", "type": "LinearAxis", "attributes": {"id": "9bc3a7ad-9d4b-44d2-b187-f367e4edb33b", "plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "3e13ddf5-dd3d-4eed-be32-878073f11652", "type": "BasicTickFormatter"}, "axis_label": "measures", "ticker": {"id": "fa16709d-5814-47f8-9865-9b8e45a6624f", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "b3d44fa2-a96c-41f7-9fc1-cdb1d27c0bfd", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "b3d44fa2-a96c-41f7-9fc1-cdb1d27c0bfd", "plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "ae08a116-76a9-4f66-a771-ba1d55be1ec7", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "6b788ddf-61ea-4862-a284-d28061d2f100", "type": "ColumnDataSource"}, "id": "ae08a116-76a9-4f66-a771-ba1d55be1ec7", "glyph": {"id": "92c86e50-1a91-49c8-8405-7baf5030f4c3", "type": "Line"}, "tags": [], "doc": null}}, {"id": "13e370f9-6136-4cb6-a9e0-23f408e77983", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "13e370f9-6136-4cb6-a9e0-23f408e77983"}}, {"id": "03f847ea-311e-44a7-b28a-2a4360955a4d", "type": "ResizeTool", "attributes": {"plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "03f847ea-311e-44a7-b28a-2a4360955a4d"}}, {"id": "84639b39-fd09-4d2c-bd85-d0128a32fc16", "type": "Range1d", "attributes": {"end": 293.5, "start": -24.5, "id": "84639b39-fd09-4d2c-bd85-d0128a32fc16", "doc": null, "tags": []}}, {"id": "3aa609d9-660b-4fb9-81a2-cd26788ee475", "type": "Grid", "attributes": {"id": "3aa609d9-660b-4fb9-81a2-cd26788ee475", "plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "dimension": 1, "ticker": {"id": "fa16709d-5814-47f8-9865-9b8e45a6624f", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "a4d02485-e374-41e8-991e-a6b2f5e3eb52", "type": "ResetTool", "attributes": {"plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "a4d02485-e374-41e8-991e-a6b2f5e3eb52"}}, {"id": "9b78bc21-b06f-4fa6-af21-28b39429bb9f", "type": "Grid", "attributes": {"id": "9b78bc21-b06f-4fa6-af21-28b39429bb9f", "plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "dimension": 0, "ticker": {"id": "9c58d3e8-8875-4c2d-b3d3-b02a33e0a6cd", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "cc4a33f1-11ed-4032-a747-1af35909a0d6", "type": "Legend", "attributes": {"legends": [["python", [{"id": "9da33ae3-94e6-4102-b085-84464269a1fd", "type": "GlyphRenderer"}]], ["jython", [{"id": "ae08a116-76a9-4f66-a771-ba1d55be1ec7", "type": "GlyphRenderer"}]], ["pypy", [{"id": "1bda7bbb-acd5-405b-bbe7-233ef67dc187", "type": "GlyphRenderer"}]]], "orientation": "top_left", "id": "cc4a33f1-11ed-4032-a747-1af35909a0d6", "plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "1bda7bbb-acd5-405b-bbe7-233ef67dc187", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "6b788ddf-61ea-4862-a284-d28061d2f100", "type": "ColumnDataSource"}, "id": "1bda7bbb-acd5-405b-bbe7-233ef67dc187", "glyph": {"id": "0e9bdec9-d7ff-4986-8120-738e7b62d467", "type": "Line"}, "tags": [], "doc": null}}, {"id": "0eb884d8-9fdb-450f-8d41-ae39c8a0a538", "type": "BasicTickFormatter", "attributes": {"id": "0eb884d8-9fdb-450f-8d41-ae39c8a0a538", "doc": null, "tags": []}}, {"id": "de3046bf-6b15-4fbf-ad83-38ed0e9ed62a", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "6b788ddf-61ea-4862-a284-d28061d2f100", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "de3046bf-6b15-4fbf-ad83-38ed0e9ed62a", "doc": null, "tags": []}}, {"id": "3e13ddf5-dd3d-4eed-be32-878073f11652", "type": "BasicTickFormatter", "attributes": {"id": "3e13ddf5-dd3d-4eed-be32-878073f11652", "doc": null, "tags": []}}, {"id": "f4e09de6-ab6d-4319-966e-5de9cd9bfb12", "type": "LinearAxis", "attributes": {"id": "f4e09de6-ab6d-4319-966e-5de9cd9bfb12", "plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "0eb884d8-9fdb-450f-8d41-ae39c8a0a538", "type": "BasicTickFormatter"}, "axis_label": null, "ticker": {"id": "9c58d3e8-8875-4c2d-b3d3-b02a33e0a6cd", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "07536caa-8697-4a89-a731-036756f056c5", "type": "Line", "attributes": {"tags": [], "y": {"field": "y_python", "units": "data"}, "id": "07536caa-8697-4a89-a731-036756f056c5", "line_color": {"value": "#f22c40"}, "doc": null, "x": {"field": "x", "units": "data"}}}, {"id": "9da33ae3-94e6-4102-b085-84464269a1fd", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "6b788ddf-61ea-4862-a284-d28061d2f100", "type": "ColumnDataSource"}, "id": "9da33ae3-94e6-4102-b085-84464269a1fd", "glyph": {"id": "07536caa-8697-4a89-a731-036756f056c5", "type": "Line"}, "tags": [], "doc": null}}, {"id": "0e9bdec9-d7ff-4986-8120-738e7b62d467", "type": "Line", "attributes": {"tags": [], "y": {"field": "y_pypy", "units": "data"}, "id": "0e9bdec9-d7ff-4986-8120-738e7b62d467", "line_color": {"value": "#407ee7"}, "doc": null, "x": {"field": "x", "units": "data"}}}, {"id": "92c86e50-1a91-49c8-8405-7baf5030f4c3", "type": "Line", "attributes": {"tags": [], "y": {"field": "y_jython", "units": "data"}, "id": "92c86e50-1a91-49c8-8405-7baf5030f4c3", "line_color": {"value": "#5ab738"}, "doc": null, "x": {"field": "x", "units": "data"}}}, {"id": "26deecf8-1e83-47ed-afa9-44a5a8bb3afb", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "26deecf8-1e83-47ed-afa9-44a5a8bb3afb", "plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "fa16709d-5814-47f8-9865-9b8e45a6624f", "type": "BasicTicker", "attributes": {"id": "fa16709d-5814-47f8-9865-9b8e45a6624f", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "a8805db0-611e-4396-ba7e-49e7f9ed001f", "type": "ToolEvents", "attributes": {"geometries": [], "id": "a8805db0-611e-4396-ba7e-49e7f9ed001f", "doc": null, "tags": []}}, {"id": "199a530d-58ba-4751-aa28-8f643cef2ec3", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "199a530d-58ba-4751-aa28-8f643cef2ec3", "plot": {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "9c58d3e8-8875-4c2d-b3d3-b02a33e0a6cd", "type": "BasicTicker", "attributes": {"id": "9c58d3e8-8875-4c2d-b3d3-b02a33e0a6cd", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "type": "Plot", "subtype": "Chart", "attributes": {"tool_events": {"id": "a8805db0-611e-4396-ba7e-49e7f9ed001f", "type": "ToolEvents"}, "title": "Lines", "extra_y_ranges": {}, "renderers": [{"id": "f4e09de6-ab6d-4319-966e-5de9cd9bfb12", "type": "LinearAxis"}, {"id": "9bc3a7ad-9d4b-44d2-b187-f367e4edb33b", "type": "LinearAxis"}, {"id": "9b78bc21-b06f-4fa6-af21-28b39429bb9f", "type": "Grid"}, {"id": "3aa609d9-660b-4fb9-81a2-cd26788ee475", "type": "Grid"}, {"id": "9da33ae3-94e6-4102-b085-84464269a1fd", "type": "GlyphRenderer"}, {"id": "ae08a116-76a9-4f66-a771-ba1d55be1ec7", "type": "GlyphRenderer"}, {"id": "1bda7bbb-acd5-405b-bbe7-233ef67dc187", "type": "GlyphRenderer"}, {"id": "cc4a33f1-11ed-4032-a747-1af35909a0d6", "type": "Legend"}], "id": "5df7a90f-290b-4faa-b3fa-d835a0b82771", "extra_x_ranges": {}, "doc": null, "below": [{"id": "f4e09de6-ab6d-4319-966e-5de9cd9bfb12", "type": "LinearAxis"}], "right": [], "x_range": {"id": "de3046bf-6b15-4fbf-ad83-38ed0e9ed62a", "type": "DataRange1d"}, "left": [{"id": "9bc3a7ad-9d4b-44d2-b187-f367e4edb33b", "type": "LinearAxis"}], "above": [], "tools": [{"id": "b3d44fa2-a96c-41f7-9fc1-cdb1d27c0bfd", "type": "PanTool"}, {"id": "26deecf8-1e83-47ed-afa9-44a5a8bb3afb", "type": "WheelZoomTool"}, {"id": "199a530d-58ba-4751-aa28-8f643cef2ec3", "type": "BoxZoomTool"}, {"id": "13e370f9-6136-4cb6-a9e0-23f408e77983", "type": "PreviewSaveTool"}, {"id": "03f847ea-311e-44a7-b28a-2a4360955a4d", "type": "ResizeTool"}, {"id": "a4d02485-e374-41e8-991e-a6b2f5e3eb52", "type": "ResetTool"}], "plot_width": 600, "plot_height": 400, "y_range": {"id": "84639b39-fd09-4d2c-bd85-d0128a32fc16", "type": "Range1d"}, "tags": []}}, {"id": "6b788ddf-61ea-4862-a284-d28061d2f100", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y_jython": [22, 43, 10, 25, 26, 101, 114, 203, 194, 215, 201, 227, 139, 160], "y_python": [2, 3, 7, 5, 26, 221, 44, 233, 254, 265, 266, 267, 120, 111], "x": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "y_pypy": [12, 33, 47, 15, 126, 121, 144, 233, 254, 225, 226, 267, 110, 130]}, "column_names": ["y_jython", "y_python", "x", "y_pypy"], "id": "6b788ddf-61ea-4862-a284-d28061d2f100", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c60d3f1d-77e2-416e-b8bd-fa6c6f3b8f72", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c60d3f1d-77e2-416e-b8bd-fa6c6f3b8f72", all_models);
    });
  }

}(this));