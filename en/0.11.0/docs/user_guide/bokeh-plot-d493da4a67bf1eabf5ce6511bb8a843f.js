
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
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
  };var element = document.getElementById("2203a44c-b994-432b-aa8f-52f6cad283b6");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2203a44c-b994-432b-aa8f-52f6cad283b6' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"768e21cf-6ba5-461a-b2a7-b21a965260f9": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BoxAnnotation", "id": "d327e70a-66b2-4e7a-80f1-79937560d3fb", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ColumnDataSource", "id": "65294bd9-5e4f-4d6d-9397-0b7452714947", "attributes": {"data": {"color": ["DimGrey"], "line_color": ["black"], "cyl": [8], "y": [13.5], "width": [0.8], "height": [1.0], "x": ["8"], "line_alpha": [1.0], "chart_index": [{"cyl": 8}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "GlyphRenderer", "id": "561f233f-a983-43c1-b13d-e7bc07aa023b", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e22e25bd-7163-47b1-ae50-77f46138f494"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Square", "id": "cba3a573-9931-4b88-b307-cd1c5411ebc9"}}}, {"type": "Rect", "id": "40c17b99-770c-42af-a1c9-c9c6c99fb90f", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "GlyphRenderer", "id": "103b14f8-5a8c-4d5a-8fb8-e0e503390fea", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0f6d1904-08c0-403f-9bbb-998e7f5ffd7b"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "97018d60-d9fd-4f36-bebe-e89116627d10"}}}, {"type": "GlyphRenderer", "id": "b8353897-1705-4d34-8695-da9403383e07", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "08e1a1d4-0a31-43ce-8361-77d301be8dd4"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "3fc693af-c22b-4e6a-acfd-d27aab61c48b"}}}, {"type": "Grid", "id": "9b2227b6-dcae-48b1-94a5-05f418e571c7", "attributes": {"ticker": {"type": "BasicTicker", "id": "6f534439-4b7d-4ba1-ba04-189767f74e3a"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "9d5e449b-6834-4747-8070-52dcde51eead"}}}, {"type": "Square", "id": "6d66f889-d33b-4ca5-a704-19eba0557bdc", "attributes": {"line_color": {"value": "red"}, "y": {"field": "y_values"}, "x": {"field": "x_values"}, "size": {"value": 5, "units": "screen"}, "fill_color": {"value": "red"}, "fill_alpha": {"value": 0.7}}}, {"type": "ColumnDataSource", "id": "ef72dea9-0a27-4d77-85c5-2770c2497f38", "attributes": {"data": {"x_values": ["6:0.5", "6:0.5", "6:0.5", "6:0.5", "6:0.5"], "cyl": [6, 6, 6, 6, 6], "y_values": [26.8, 28.8, 32.7, 38.0, 30.7], "chart_index": [{"cyl": 6}, {"cyl": 6}, {"cyl": 6}, {"cyl": 6}, {"cyl": 6}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "PanTool", "id": "a02362a0-7bb2-479b-9477-77c8cea35f45", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "9d5e449b-6834-4747-8070-52dcde51eead"}}}, {"type": "ColumnDataSource", "id": "2a901334-06f4-4bf3-9eb9-60ebd6c28d2c", "attributes": {"data": {"cyl": [8, 8, 8, 8], "y1s": [13.0, 8.5, 20.5, 20.5], "x1s": ["8:0.5", "8:0.35", "8:0.5", "8:0.35"], "y0s": [8.5, 8.5, 16.0, 20.5], "chart_index": [{"cyl": 8}, {"cyl": 8}, {"cyl": 8}, {"cyl": 8}], "x0s": ["8:0.5", "8:0.65", "8:0.5", "8:0.65"]}, "column_names": ["y1s", "x1s", "y0s", "x0s"], "callback": null}}, {"type": "CategoricalTicker", "id": "c7b93c61-7b64-4750-9128-f9e2fd839cc3", "attributes": {}}, {"type": "ResizeTool", "id": "db58edc7-ff43-439a-9752-d64364bad06a", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "9d5e449b-6834-4747-8070-52dcde51eead"}}}, {"type": "ColumnDataSource", "id": "52440464-b82a-45ed-9db1-9f3ce832a543", "attributes": {"data": {"color": ["DimGrey"], "line_color": ["black"], "cyl": [6], "y": [18.5], "width": [0.8], "height": [1.0], "x": ["6"], "line_alpha": [1.0], "chart_index": [{"cyl": 6}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "FactorRange", "id": "2a94c69a-0e17-4d60-8fa7-b95ca0b12dbb", "attributes": {"factors": ["3", "4", "5", "6", "8"], "callback": null}}, {"type": "GlyphRenderer", "id": "4946f35c-c50d-4fb8-ad77-37f58afe09e1", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6fca7fd1-ae03-4857-90a4-0569a48b9acb"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "053f1294-5b80-4ade-9303-f17426cd60fe"}}}, {"type": "GlyphRenderer", "id": "61ed3b59-224f-4763-abdb-f5067e32a42a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d0d7506a-bef0-44f7-b438-dc3c5b26bac9"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "79052f4b-86bb-4eaa-87e3-16344265304b"}}}, {"type": "ColumnDataSource", "id": "0f6d1904-08c0-403f-9bbb-998e7f5ffd7b", "attributes": {"data": {"color": ["DimGrey"], "line_color": ["black"], "cyl": [3], "y": [19.5], "width": [0.8], "height": [1.5], "x": ["3"], "line_alpha": [1.0], "chart_index": [{"cyl": 3}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "Square", "id": "cba3a573-9931-4b88-b307-cd1c5411ebc9", "attributes": {"line_color": {"value": "red"}, "y": {"field": "y_values"}, "x": {"field": "x_values"}, "size": {"value": 5, "units": "screen"}, "fill_color": {"value": "red"}, "fill_alpha": {"value": 0.7}}}, {"type": "GlyphRenderer", "id": "04560a8d-e80c-48f1-af97-612308bde4d2", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "25f65022-c189-434a-a29d-623b2d08f405"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "60f92a42-b986-4323-b539-e334cebc3c2b"}}}, {"type": "Rect", "id": "2cf1f72c-8146-47a6-a189-4a16509d52b1", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "Rect", "id": "79052f4b-86bb-4eaa-87e3-16344265304b", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "Segment", "id": "60f92a42-b986-4323-b539-e334cebc3c2b", "attributes": {"line_width": {"value": 2}, "x1": {"field": "x1s"}, "y0": {"field": "y0s"}, "x0": {"field": "x0s"}, "y1": {"field": "y1s"}}}, {"type": "Square", "id": "c0c962aa-5bee-4fd6-b718-4febc2ed32c9", "attributes": {"line_color": {"value": "red"}, "y": {"field": "y_values"}, "x": {"field": "x_values"}, "size": {"value": 5, "units": "screen"}, "fill_color": {"value": "red"}, "fill_alpha": {"value": 0.7}}}, {"type": "CategoricalAxis", "id": "c00c5586-82fa-4576-b175-0ac1dc2d2f41", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "c7b93c61-7b64-4750-9128-f9e2fd839cc3"}, "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "06ff0e4a-f0fe-49ae-a46a-0704b7bb1f3d"}, "axis_label": "Cyl", "plot": {"type": "Plot", "subtype": "Chart", "id": "9d5e449b-6834-4747-8070-52dcde51eead"}}}, {"type": "LinearAxis", "id": "cf9f42c4-d3fd-430c-a7a1-782cc0b73401", "attributes": {"ticker": {"type": "BasicTicker", "id": "6f534439-4b7d-4ba1-ba04-189767f74e3a"}, "formatter": {"type": "BasicTickFormatter", "id": "31f5c39f-ac55-42bb-918d-6a420e745293"}, "axis_label": "Mpg", "plot": {"type": "Plot", "subtype": "Chart", "id": "9d5e449b-6834-4747-8070-52dcde51eead"}}}, {"type": "ColumnDataSource", "id": "22db7ae3-38d1-4d4b-9562-4e491f506c63", "attributes": {"data": {"color": ["DimGrey"], "line_color": ["black"], "cyl": [8], "y": [15.0], "width": [0.8], "height": [2.0], "x": ["8"], "line_alpha": [1.0], "chart_index": [{"cyl": 8}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "Segment", "id": "ddbc1a44-683b-4432-9f74-0f937aeaaf13", "attributes": {"line_width": {"value": 2}, "x1": {"field": "x1s"}, "y0": {"field": "y0s"}, "x0": {"field": "x0s"}, "y1": {"field": "y1s"}}}, {"type": "ColumnDataSource", "id": "25f65022-c189-434a-a29d-623b2d08f405", "attributes": {"data": {"cyl": [5, 5, 5, 5], "y1s": [22.85, 10.775000000000006, 42.974999999999994, 42.974999999999994], "x1s": ["5:0.5", "5:0.35", "5:0.5", "5:0.35"], "y0s": [10.775000000000006, 10.775000000000006, 30.9, 42.974999999999994], "chart_index": [{"cyl": 5}, {"cyl": 5}, {"cyl": 5}, {"cyl": 5}], "x0s": ["5:0.5", "5:0.65", "5:0.5", "5:0.65"]}, "column_names": ["y1s", "x1s", "y0s", "x0s"], "callback": null}}, {"type": "Rect", "id": "97018d60-d9fd-4f36-bebe-e89116627d10", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "ColumnDataSource", "id": "1eef2aca-06fd-4beb-af17-73c653870773", "attributes": {"data": {"color": ["DimGrey"], "line_color": ["black"], "cyl": [4], "y": [26.7], "width": [0.8], "height": [3.3999999999999986], "x": ["4"], "line_alpha": [1.0], "chart_index": [{"cyl": 4}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "CategoricalTickFormatter", "id": "06ff0e4a-f0fe-49ae-a46a-0704b7bb1f3d", "attributes": {}}, {"type": "Segment", "id": "29c51d33-9312-4139-aa30-fb4b44e7f3a1", "attributes": {"line_width": {"value": 2}, "x1": {"field": "x1s"}, "y0": {"field": "y0s"}, "x0": {"field": "x0s"}, "y1": {"field": "y1s"}}}, {"type": "ColumnDataSource", "id": "cf2aad7d-3069-41c7-805b-6a63c8e2b452", "attributes": {"data": {"color": ["DimGrey"], "line_color": ["black"], "cyl": [3], "y": [21.15], "width": [0.8], "height": [1.8000000000000007], "x": ["3"], "line_alpha": [1.0], "chart_index": [{"cyl": 3}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "BasicTicker", "id": "6f534439-4b7d-4ba1-ba04-189767f74e3a", "attributes": {}}, {"type": "ColumnDataSource", "id": "e6c1fec5-4986-4054-9725-0007bf19cbe5", "attributes": {"data": {"color": ["DimGrey"], "line_color": ["black"], "cyl": [5], "y": [24.125], "width": [0.8], "height": [2.549999999999997], "x": ["5"], "line_alpha": [1.0], "chart_index": [{"cyl": 5}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "HelpTool", "id": "d9a50dfd-475d-42b6-848a-a77e196e871d", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "9d5e449b-6834-4747-8070-52dcde51eead"}}}, {"type": "GlyphRenderer", "id": "9693603f-3646-4e8d-a538-2c7b977f361a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1eef2aca-06fd-4beb-af17-73c653870773"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "edc5dddf-d74d-4f6e-831b-8673e684a8af"}}}, {"type": "Rect", "id": "d8263fe2-b9e5-47b3-9f02-6ff965233760", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "GlyphRenderer", "id": "ca9548d8-bb06-4124-af80-ef2d87595fdd", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "def34462-b231-43ba-afba-2b76ddd7d346"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "ddbc1a44-683b-4432-9f74-0f937aeaaf13"}}}, {"type": "GlyphRenderer", "id": "f934e137-7597-4bf6-9543-3ec2bf1fca07", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "65294bd9-5e4f-4d6d-9397-0b7452714947"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "b58f7c3a-ae9e-4a9b-82ae-4b293d14722e"}}}, {"type": "ToolEvents", "id": "ec73d7d3-93d7-473f-a184-2f4d477b4bcb", "attributes": {}}, {"type": "ResetTool", "id": "7b79c4f7-e071-4200-9ed8-29571fa81b67", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "9d5e449b-6834-4747-8070-52dcde51eead"}}}, {"type": "Rect", "id": "b58f7c3a-ae9e-4a9b-82ae-4b293d14722e", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "ColumnDataSource", "id": "ac25d6b8-8f1a-42a3-9c5f-f6c80c964edf", "attributes": {"data": {"cyl": [6, 6, 6, 6], "y1s": [18.0, 13.5, 25.5, 25.5], "x1s": ["6:0.5", "6:0.35", "6:0.5", "6:0.35"], "y0s": [13.5, 13.5, 21.0, 25.5], "chart_index": [{"cyl": 6}, {"cyl": 6}, {"cyl": 6}, {"cyl": 6}], "x0s": ["6:0.5", "6:0.65", "6:0.5", "6:0.65"]}, "column_names": ["y1s", "x1s", "y0s", "x0s"], "callback": null}}, {"type": "GlyphRenderer", "id": "622c18db-e378-4471-821c-622bd65c6b52", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "22db7ae3-38d1-4d4b-9562-4e491f506c63"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "240b978b-c2ea-44dd-a232-5583d01783ac"}}}, {"type": "Segment", "id": "053f1294-5b80-4ade-9303-f17426cd60fe", "attributes": {"line_width": {"value": 2}, "x1": {"field": "x1s"}, "y0": {"field": "y0s"}, "x0": {"field": "x0s"}, "y1": {"field": "y1s"}}}, {"type": "ColumnDataSource", "id": "08e1a1d4-0a31-43ce-8361-77d301be8dd4", "attributes": {"data": {"color": ["DimGrey"], "line_color": ["black"], "cyl": [5], "y": [28.15], "width": [0.8], "height": [5.5], "x": ["5"], "line_alpha": [1.0], "chart_index": [{"cyl": 5}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "GlyphRenderer", "id": "dad9465c-65c8-4756-83a3-14a03951c25a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0d4a9d2d-3bab-4fcf-aebe-0638bf82030c"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Square", "id": "c0c962aa-5bee-4fd6-b718-4febc2ed32c9"}}}, {"type": "GlyphRenderer", "id": "a1f4887e-6811-49b4-96aa-62a166210171", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ac25d6b8-8f1a-42a3-9c5f-f6c80c964edf"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "29c51d33-9312-4139-aa30-fb4b44e7f3a1"}}}, {"type": "Rect", "id": "0e564196-ad04-47fe-8fb0-e376f55fcc2a", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "Segment", "id": "984ea348-202b-4bc1-8f22-4c8669639508", "attributes": {"line_width": {"value": 2}, "x1": {"field": "x1s"}, "y0": {"field": "y0s"}, "x0": {"field": "x0s"}, "y1": {"field": "y1s"}}}, {"type": "GlyphRenderer", "id": "339758ef-8b79-47ac-8d6e-0387a815c47e", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "cf2aad7d-3069-41c7-805b-6a63c8e2b452"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "0e564196-ad04-47fe-8fb0-e376f55fcc2a"}}}, {"type": "BoxZoomTool", "id": "b93ee4bd-541d-452a-9321-6c6cd4ca9438", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "d327e70a-66b2-4e7a-80f1-79937560d3fb"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "9d5e449b-6834-4747-8070-52dcde51eead"}}}, {"type": "BasicTickFormatter", "id": "31f5c39f-ac55-42bb-918d-6a420e745293", "attributes": {}}, {"type": "GlyphRenderer", "id": "8448c5e1-6288-472b-b6d8-6cf304cf2022", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e6c1fec5-4986-4054-9725-0007bf19cbe5"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "d8263fe2-b9e5-47b3-9f02-6ff965233760"}}}, {"type": "ColumnDataSource", "id": "e22e25bd-7163-47b1-ae50-77f46138f494", "attributes": {"data": {"x_values": ["8:0.5", "8:0.5", "8:0.5"], "cyl": [8, 8, 8], "y_values": [26.6, 23.0, 23.9], "chart_index": [{"cyl": 8}, {"cyl": 8}, {"cyl": 8}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "ColumnDataSource", "id": "0d4a9d2d-3bab-4fcf-aebe-0638bf82030c", "attributes": {"data": {"x_values": ["4:0.5"], "cyl": [4], "y_values": [46.6], "chart_index": [{"cyl": 4}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "Rect", "id": "3fc693af-c22b-4e6a-acfd-d27aab61c48b", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "Range1d", "id": "fe5bd3f7-2eeb-4594-87c9-dcb0b278b755", "attributes": {"end": 49.355000000000004, "callback": null}}, {"type": "Rect", "id": "edc5dddf-d74d-4f6e-831b-8673e684a8af", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "ColumnDataSource", "id": "d0d7506a-bef0-44f7-b438-dc3c5b26bac9", "attributes": {"data": {"color": ["DimGrey"], "line_color": ["black"], "cyl": [6], "y": [20.0], "width": [0.8], "height": [2.0], "x": ["6"], "line_alpha": [1.0], "chart_index": [{"cyl": 6}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "GlyphRenderer", "id": "7b33f4c5-80db-4554-8ef6-469661f6922c", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "f627fe02-94dd-46c1-aba0-3ea7c171ee10"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "40c17b99-770c-42af-a1c9-c9c6c99fb90f"}}}, {"type": "ColumnDataSource", "id": "def34462-b231-43ba-afba-2b76ddd7d346", "attributes": {"data": {"cyl": [4, 4, 4, 4], "y1s": [25.0, 13.074999999999996, 44.87500000000001, 44.87500000000001], "x1s": ["4:0.5", "4:0.35", "4:0.5", "4:0.35"], "y0s": [13.074999999999996, 13.074999999999996, 32.95, 44.87500000000001], "chart_index": [{"cyl": 4}, {"cyl": 4}, {"cyl": 4}, {"cyl": 4}], "x0s": ["4:0.5", "4:0.65", "4:0.5", "4:0.65"]}, "column_names": ["y1s", "x1s", "y0s", "x0s"], "callback": null}}, {"type": "Plot", "id": "9d5e449b-6834-4747-8070-52dcde51eead", "attributes": {"y_range": {"type": "Range1d", "id": "fe5bd3f7-2eeb-4594-87c9-dcb0b278b755"}, "width": 400, "legend": null, "yscale": "auto", "tools": [{"type": "PanTool", "id": "a02362a0-7bb2-479b-9477-77c8cea35f45"}, {"type": "WheelZoomTool", "id": "006d58ba-88f7-4fbf-b89c-99e096fc11c5"}, {"type": "BoxZoomTool", "id": "b93ee4bd-541d-452a-9321-6c6cd4ca9438"}, {"type": "PreviewSaveTool", "id": "86e6c96b-1b46-47b9-88e4-677ce42aa1e7"}, {"type": "ResizeTool", "id": "db58edc7-ff43-439a-9752-d64364bad06a"}, {"type": "ResetTool", "id": "7b79c4f7-e071-4200-9ed8-29571fa81b67"}, {"type": "HelpTool", "id": "d9a50dfd-475d-42b6-848a-a77e196e871d"}], "xgrid": false, "title": "MPG Summary (grouped by CYL, square marker)", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "cf9f42c4-d3fd-430c-a7a1-782cc0b73401"}], "x_range": {"type": "FactorRange", "id": "2a94c69a-0e17-4d60-8fa7-b95ca0b12dbb"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "CategoricalAxis", "id": "c00c5586-82fa-4576-b175-0ac1dc2d2f41"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "ec73d7d3-93d7-473f-a184-2f4d477b4bcb"}, "renderers": [{"type": "BoxAnnotation", "id": "d327e70a-66b2-4e7a-80f1-79937560d3fb"}, {"type": "GlyphRenderer", "id": "103b14f8-5a8c-4d5a-8fb8-e0e503390fea"}, {"type": "GlyphRenderer", "id": "339758ef-8b79-47ac-8d6e-0387a815c47e"}, {"type": "GlyphRenderer", "id": "4946f35c-c50d-4fb8-ad77-37f58afe09e1"}, {"type": "GlyphRenderer", "id": "9693603f-3646-4e8d-a538-2c7b977f361a"}, {"type": "GlyphRenderer", "id": "7b33f4c5-80db-4554-8ef6-469661f6922c"}, {"type": "GlyphRenderer", "id": "dad9465c-65c8-4756-83a3-14a03951c25a"}, {"type": "GlyphRenderer", "id": "ca9548d8-bb06-4124-af80-ef2d87595fdd"}, {"type": "GlyphRenderer", "id": "8448c5e1-6288-472b-b6d8-6cf304cf2022"}, {"type": "GlyphRenderer", "id": "b8353897-1705-4d34-8695-da9403383e07"}, {"type": "GlyphRenderer", "id": "04560a8d-e80c-48f1-af97-612308bde4d2"}, {"type": "GlyphRenderer", "id": "c0c6168e-c331-4c36-866c-7124d3027370"}, {"type": "GlyphRenderer", "id": "61ed3b59-224f-4763-abdb-f5067e32a42a"}, {"type": "GlyphRenderer", "id": "8b2aa4ed-8386-43c2-ac78-e0c7a5c78d30"}, {"type": "GlyphRenderer", "id": "a1f4887e-6811-49b4-96aa-62a166210171"}, {"type": "GlyphRenderer", "id": "f934e137-7597-4bf6-9543-3ec2bf1fca07"}, {"type": "GlyphRenderer", "id": "622c18db-e378-4471-821c-622bd65c6b52"}, {"type": "GlyphRenderer", "id": "561f233f-a983-43c1-b13d-e7bc07aa023b"}, {"type": "GlyphRenderer", "id": "eb152e38-bef2-46bf-9e6e-0f58f21aeafd"}, {"type": "CategoricalAxis", "id": "c00c5586-82fa-4576-b175-0ac1dc2d2f41"}, {"type": "LinearAxis", "id": "cf9f42c4-d3fd-430c-a7a1-782cc0b73401"}, {"type": "Grid", "id": "9b2227b6-dcae-48b1-94a5-05f418e571c7"}]}, "subtype": "Chart"}, {"type": "WheelZoomTool", "id": "006d58ba-88f7-4fbf-b89c-99e096fc11c5", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "9d5e449b-6834-4747-8070-52dcde51eead"}}}, {"type": "ColumnDataSource", "id": "6fca7fd1-ae03-4857-90a4-0569a48b9acb", "attributes": {"data": {"cyl": [3, 3, 3, 3], "y1s": [18.75, 13.799999999999999, 27.0, 27.0], "x1s": ["3:0.5", "3:0.35", "3:0.5", "3:0.35"], "y0s": [13.799999999999999, 13.799999999999999, 22.05, 27.0], "chart_index": [{"cyl": 3}, {"cyl": 3}, {"cyl": 3}, {"cyl": 3}], "x0s": ["3:0.5", "3:0.65", "3:0.5", "3:0.65"]}, "column_names": ["y1s", "x1s", "y0s", "x0s"], "callback": null}}, {"type": "GlyphRenderer", "id": "8b2aa4ed-8386-43c2-ac78-e0c7a5c78d30", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ef72dea9-0a27-4d77-85c5-2770c2497f38"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Square", "id": "6d66f889-d33b-4ca5-a704-19eba0557bdc"}}}, {"type": "Rect", "id": "240b978b-c2ea-44dd-a232-5583d01783ac", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "GlyphRenderer", "id": "eb152e38-bef2-46bf-9e6e-0f58f21aeafd", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "2a901334-06f4-4bf3-9eb9-60ebd6c28d2c"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "984ea348-202b-4bc1-8f22-4c8669639508"}}}, {"type": "ColumnDataSource", "id": "f627fe02-94dd-46c1-aba0-3ea7c171ee10", "attributes": {"data": {"color": ["DimGrey"], "line_color": ["black"], "cyl": [4], "y": [30.675], "width": [0.8], "height": [4.550000000000004], "x": ["4"], "line_alpha": [1.0], "chart_index": [{"cyl": 4}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "PreviewSaveTool", "id": "86e6c96b-1b46-47b9-88e4-677ce42aa1e7", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "9d5e449b-6834-4747-8070-52dcde51eead"}}}, {"type": "GlyphRenderer", "id": "c0c6168e-c331-4c36-866c-7124d3027370", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "52440464-b82a-45ed-9db1-9f3ce832a543"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "2cf1f72c-8146-47a6-a189-4a16509d52b1"}}}], "root_ids": ["9d5e449b-6834-4747-8070-52dcde51eead"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "768e21cf-6ba5-461a-b2a7-b21a965260f9", "modelid": "9d5e449b-6834-4747-8070-52dcde51eead", "elementid": "2203a44c-b994-432b-aa8f-52f6cad283b6"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
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