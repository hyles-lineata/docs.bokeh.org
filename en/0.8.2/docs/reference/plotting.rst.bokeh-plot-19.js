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

  var elt = document.getElementById("5574fa40-ab1e-4070-97ff-91e6a56a4bba");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5574fa40-ab1e-4070-97ff-91e6a56a4bba' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "9afd0052-d508-462e-ad97-a7e57d4a4dfb", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "9afd0052-d508-462e-ad97-a7e57d4a4dfb", "plot": {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "19bdfc4c-5a3a-40c0-96a5-854995370340", "type": "Grid", "attributes": {"id": "19bdfc4c-5a3a-40c0-96a5-854995370340", "plot": {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "9b68baf3-0d75-46d4-8c45-4a4d9527ad4d", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "f22ca249-a7b3-40ea-ad2d-3a841cd163b8", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "9eb4651d-d2e3-41f1-9583-e59e5c17ee3d", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "f22ca249-a7b3-40ea-ad2d-3a841cd163b8", "doc": null, "tags": []}}, {"id": "2dfba7b0-b85a-4639-a73a-ae487c9467de", "type": "LinearAxis", "attributes": {"id": "2dfba7b0-b85a-4639-a73a-ae487c9467de", "formatter": {"id": "b07e63fe-ca59-4326-a579-3e2dd19ce5bd", "type": "BasicTickFormatter"}, "plot": {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "9b68baf3-0d75-46d4-8c45-4a4d9527ad4d", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "b53f3f16-7c47-406a-83f1-568bee9b85da", "type": "ResizeTool", "attributes": {"plot": {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "b53f3f16-7c47-406a-83f1-568bee9b85da"}}, {"id": "b72012f7-d8e7-4fd6-8b52-452930b35c07", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "b72012f7-d8e7-4fd6-8b52-452930b35c07", "plot": {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "0d184bc6-b6ab-4f82-ac25-f5de5df4b724", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "0d184bc6-b6ab-4f82-ac25-f5de5df4b724", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "24e27ccc-c371-4a36-80c8-6e31aadc107d", "type": "LinearAxis", "attributes": {"id": "24e27ccc-c371-4a36-80c8-6e31aadc107d", "formatter": {"id": "59fe718b-10a3-4889-8752-207e21fef4ca", "type": "BasicTickFormatter"}, "plot": {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "0d184bc6-b6ab-4f82-ac25-f5de5df4b724", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "4d2cb87e-7fad-4c52-bd5b-f401866737d1", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "4d2cb87e-7fad-4c52-bd5b-f401866737d1", "plot": {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "f912d219-14b4-43c6-954c-9ab481d57629", "type": "ToolEvents", "attributes": {"geometries": [], "id": "f912d219-14b4-43c6-954c-9ab481d57629", "doc": null, "tags": []}}, {"id": "9eb4651d-d2e3-41f1-9583-e59e5c17ee3d", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [1, 2, 3], "x": [1, 2, 3], "size": [10, 20, 25]}, "column_names": ["size", "x", "y"], "id": "9eb4651d-d2e3-41f1-9583-e59e5c17ee3d", "doc": null, "tags": []}}, {"id": "88d12b5f-ab66-41e2-a06d-4b527d920bdc", "type": "SquareCross", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.1, "units": "data"}, "doc": null, "x": {"field": "x", "units": "data"}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1, "units": "data"}, "id": "88d12b5f-ab66-41e2-a06d-4b527d920bdc", "line_color": {"value": "#1f77b4"}, "size": {"field": "size", "units": "screen"}, "tags": [], "line_width": {"value": 2, "units": "data"}}}, {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "f912d219-14b4-43c6-954c-9ab481d57629", "type": "ToolEvents"}, "above": [], "extra_y_ranges": {}, "renderers": [{"id": "2dfba7b0-b85a-4639-a73a-ae487c9467de", "type": "LinearAxis"}, {"id": "19bdfc4c-5a3a-40c0-96a5-854995370340", "type": "Grid"}, {"id": "24e27ccc-c371-4a36-80c8-6e31aadc107d", "type": "LinearAxis"}, {"id": "deae5729-3381-44fb-9f55-f4abea333b3e", "type": "Grid"}, {"id": "466738fb-ce98-44ad-826f-9773a721b1e1", "type": "GlyphRenderer"}], "id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "extra_x_ranges": {}, "doc": null, "below": [{"id": "2dfba7b0-b85a-4639-a73a-ae487c9467de", "type": "LinearAxis"}], "right": [], "x_range": {"id": "2c00e12f-7d34-43b1-9207-86e23a5f8a7c", "type": "DataRange1d"}, "left": [{"id": "24e27ccc-c371-4a36-80c8-6e31aadc107d", "type": "LinearAxis"}], "tools": [{"id": "9afd0052-d508-462e-ad97-a7e57d4a4dfb", "type": "PanTool"}, {"id": "b72012f7-d8e7-4fd6-8b52-452930b35c07", "type": "WheelZoomTool"}, {"id": "4d2cb87e-7fad-4c52-bd5b-f401866737d1", "type": "BoxZoomTool"}, {"id": "76ca70b0-408b-425c-abc9-0a25148805e4", "type": "PreviewSaveTool"}, {"id": "b53f3f16-7c47-406a-83f1-568bee9b85da", "type": "ResizeTool"}, {"id": "2813fd73-1e46-4848-903a-f0ecf9bab133", "type": "ResetTool"}], "plot_width": 300, "plot_height": 300, "y_range": {"id": "f22ca249-a7b3-40ea-ad2d-3a841cd163b8", "type": "DataRange1d"}, "tags": []}}, {"id": "466738fb-ce98-44ad-826f-9773a721b1e1", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "88d12b5f-ab66-41e2-a06d-4b527d920bdc", "type": "SquareCross"}, "name": null, "data_source": {"id": "9eb4651d-d2e3-41f1-9583-e59e5c17ee3d", "type": "ColumnDataSource"}, "id": "466738fb-ce98-44ad-826f-9773a721b1e1", "glyph": {"id": "6b5ee662-24ea-48d7-b242-2b8e6d392995", "type": "SquareCross"}, "tags": [], "doc": null}}, {"id": "6b5ee662-24ea-48d7-b242-2b8e6d392995", "type": "SquareCross", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "line_width": {"value": 2, "units": "data"}, "doc": null, "x": {"field": "x", "units": "data"}, "line_alpha": {"value": 1.0, "units": "data"}, "fill_color": null, "id": "6b5ee662-24ea-48d7-b242-2b8e6d392995", "line_color": {"value": "#7FC97F"}, "tags": [], "size": {"field": "size", "units": "screen"}}}, {"id": "9b68baf3-0d75-46d4-8c45-4a4d9527ad4d", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "9b68baf3-0d75-46d4-8c45-4a4d9527ad4d", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "b07e63fe-ca59-4326-a579-3e2dd19ce5bd", "type": "BasicTickFormatter", "attributes": {"id": "b07e63fe-ca59-4326-a579-3e2dd19ce5bd", "doc": null, "tags": []}}, {"id": "deae5729-3381-44fb-9f55-f4abea333b3e", "type": "Grid", "attributes": {"id": "deae5729-3381-44fb-9f55-f4abea333b3e", "plot": {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "0d184bc6-b6ab-4f82-ac25-f5de5df4b724", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "59fe718b-10a3-4889-8752-207e21fef4ca", "type": "BasicTickFormatter", "attributes": {"id": "59fe718b-10a3-4889-8752-207e21fef4ca", "doc": null, "tags": []}}, {"id": "2c00e12f-7d34-43b1-9207-86e23a5f8a7c", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "9eb4651d-d2e3-41f1-9583-e59e5c17ee3d", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "2c00e12f-7d34-43b1-9207-86e23a5f8a7c", "doc": null, "tags": []}}, {"id": "76ca70b0-408b-425c-abc9-0a25148805e4", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "76ca70b0-408b-425c-abc9-0a25148805e4"}}, {"id": "2813fd73-1e46-4848-903a-f0ecf9bab133", "type": "ResetTool", "attributes": {"plot": {"id": "9bd9eeb2-efa7-4d54-9d78-123b480a5d6e", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "2813fd73-1e46-4848-903a-f0ecf9bab133"}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("5574fa40-ab1e-4070-97ff-91e6a56a4bba", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("5574fa40-ab1e-4070-97ff-91e6a56a4bba", all_models);
    });
  }

}(this));