
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
  };var element = document.getElementById("e0d40601-7960-47b1-9bfb-15f8ddbae6f1");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e0d40601-7960-47b1-9bfb-15f8ddbae6f1' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7877abb5-1522-466a-bf99-685b0918964b": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "bc570fe2-7ba3-4401-ac05-14b03609a7bd", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "width": [0.8], "sample": ["1st"], "y": [-1.0], "line_alpha": [1.0], "height": [-2.0], "x": ["python"], "interpreter": ["python"], "chart_index": [{"interpreter": "python", "sample": "1st"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "ColumnDataSource", "id": "e19a2dbd-6b86-4f51-9202-1425bff14c0a", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "width": [0.8], "sample": ["1st"], "y": [11.0], "line_alpha": [1.0], "height": [22.0], "x": ["jython"], "interpreter": ["jython"], "chart_index": [{"interpreter": "jython", "sample": "1st"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "ColumnDataSource", "id": "a1fefe75-18f0-43f4-92f9-6b60907d292a", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "width": [0.8], "sample": ["2nd"], "y": [20.0], "line_alpha": [1.0], "height": [40.0], "x": ["('pypy', '2nd')"], "interpreter": ["pypy"], "chart_index": [{"interpreter": "pypy", "sample": "2nd"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "ToolEvents", "id": "fd9c5217-7249-4fa8-9983-887c55f653c2", "attributes": {}}, {"type": "ColumnDataSource", "id": "324ddcf3-731f-489f-af66-49ba1fa23328", "attributes": {"data": {"color": ["#5ab738"], "line_color": ["white"], "width": [0.8], "sample": ["2nd"], "y": [32.0], "line_alpha": [1.0], "height": [40.0], "x": ["pypy"], "interpreter": ["pypy"], "chart_index": [{"interpreter": "pypy", "sample": "2nd"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "GlyphRenderer", "id": "890ab2cb-c940-4d9c-9d4f-a479c40c66ed", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "bc570fe2-7ba3-4401-ac05-14b03609a7bd"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "75367ef2-4ef9-45db-8439-8c855e080429"}}}, {"type": "Rect", "id": "72013e35-a24a-4d31-bef5-ce4fee0ceac3", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "PanTool", "id": "09ca3684-ffbf-4f70-9db5-ff11724afe30", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}}}, {"type": "ResetTool", "id": "e76bee90-4552-43b9-ab9f-9476c30a755e", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}}}, {"type": "PreviewSaveTool", "id": "e6992e9d-5e38-46d4-8882-dcac1af0ea1f", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}}}, {"type": "GlyphRenderer", "id": "65cd107f-ea94-4ccf-844d-2632b23c4db1", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "3f4d6fed-ff22-4b0a-90a0-f212d8a65dbf"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "74ef2cc7-eef9-45e0-b3db-880fa9f9833d"}}}, {"type": "Plot", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb", "attributes": {"y_range": {"type": "Range1d", "id": "f3359775-8912-4514-8c0e-dc5714181594"}, "width": 400, "legend": "top_right", "yscale": "auto", "tools": [{"type": "PanTool", "id": "18b081e1-5e93-4c9d-884e-965ebbdc54c8"}, {"type": "WheelZoomTool", "id": "852f1b45-a90e-47e7-b13d-484fce22b01a"}, {"type": "BoxZoomTool", "id": "93cce1de-db27-40b7-bbd9-a713b57506f5"}, {"type": "PreviewSaveTool", "id": "9d385ebd-5af8-421f-929a-17b82781c043"}, {"type": "ResizeTool", "id": "91657758-f5a5-49b6-bff1-2455b4dbe816"}, {"type": "ResetTool", "id": "e876e5ac-1200-4c2b-94a0-60a266f7f832"}, {"type": "HelpTool", "id": "db678418-d6e0-4fc2-9733-0e8a5682a81c"}], "xgrid": false, "title": "Python Interpreter Sampling", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "3e36fad3-47ab-4833-85d1-c9fb55cce1bd"}], "x_range": {"type": "FactorRange", "id": "61e465c0-bf91-48c7-93e2-85f447e8d4bb"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "CategoricalAxis", "id": "b0643bfd-ec3c-481a-ad39-f0bbf6d25c60"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "5fecab5d-5fd5-4976-bdd6-5f17a3ca9e6b"}, "renderers": [{"type": "BoxAnnotation", "id": "d9f652f4-3908-48f1-b9a3-6a48388a7e7a"}, {"type": "GlyphRenderer", "id": "890ab2cb-c940-4d9c-9d4f-a479c40c66ed"}, {"type": "GlyphRenderer", "id": "3b1fdf89-5638-4724-8ebd-8b7b475f6a29"}, {"type": "GlyphRenderer", "id": "7bc6c3e9-b062-442c-a39f-d38bb25e4668"}, {"type": "GlyphRenderer", "id": "160d33b7-d154-451a-bfae-93f9ee2e44b1"}, {"type": "GlyphRenderer", "id": "3333c406-63f3-475d-9f07-53b3438382f3"}, {"type": "GlyphRenderer", "id": "56686702-3318-420e-b86e-b27995ab06f2"}, {"type": "Legend", "id": "8e503524-cf8a-437e-a88a-836ed084f2a0"}, {"type": "CategoricalAxis", "id": "b0643bfd-ec3c-481a-ad39-f0bbf6d25c60"}, {"type": "LinearAxis", "id": "3e36fad3-47ab-4833-85d1-c9fb55cce1bd"}, {"type": "Grid", "id": "07147d66-56f0-44db-91fe-972b1c190f7e"}]}, "subtype": "Chart"}, {"type": "Grid", "id": "07147d66-56f0-44db-91fe-972b1c190f7e", "attributes": {"ticker": {"type": "BasicTicker", "id": "74843f94-95c8-4656-b6a0-1f6d29bf689b"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "BasicTicker", "id": "d7adb40b-29c8-4fa0-9cc7-d9407a619c8c", "attributes": {}}, {"type": "Rect", "id": "efc5df94-000c-459c-9ca3-2c7b375fb1b1", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "ColumnDataSource", "id": "f231f3bd-755c-4cd8-a146-d0e2d39c12d8", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "width": [0.8], "sample": ["1st"], "y": [-1.0], "line_alpha": [1.0], "height": [-2.0], "x": ["('python', '1st')"], "interpreter": ["python"], "chart_index": [{"interpreter": "python", "sample": "1st"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "GlyphRenderer", "id": "f3087325-e7a7-4eff-9346-d83fa21bae27", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "868e2a74-f352-4812-aecd-7129561dae0e"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "b914bffd-3f39-4275-98be-de693d4851ff"}}}, {"type": "WheelZoomTool", "id": "852f1b45-a90e-47e7-b13d-484fce22b01a", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "CategoricalAxis", "id": "b0643bfd-ec3c-481a-ad39-f0bbf6d25c60", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "177b1281-6f03-403e-afc0-6c24565a365b"}, "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "dbe40b0d-e651-4ca4-ae0e-b4939f3db0c9"}, "axis_label": "Interpreter", "plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "GlyphRenderer", "id": "3333c406-63f3-475d-9f07-53b3438382f3", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e19a2dbd-6b86-4f51-9202-1425bff14c0a"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "6c70fdb8-7644-4437-bf02-b48661e40b34"}}}, {"type": "GlyphRenderer", "id": "932eb39a-9680-4d87-947a-942ccc008e4b", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a1fefe75-18f0-43f4-92f9-6b60907d292a"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "b410582d-8f95-464c-b210-fe05ae91fb4d"}}}, {"type": "BasicTickFormatter", "id": "fe64a392-652c-41a1-9a3a-ddfe32b2f745", "attributes": {}}, {"type": "Rect", "id": "e143490a-4ab3-43a0-a8b2-d22a851b0830", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "HelpTool", "id": "d3626c5c-9759-40ca-b7dd-fa974280771a", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}}}, {"type": "CategoricalTicker", "id": "6b6c8c6d-071b-4920-8fb4-889af820ebee", "attributes": {}}, {"type": "Plot", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a", "attributes": {"y_range": {"type": "Range1d", "id": "7f486a57-4d77-4dc6-bfc8-89a282edc335"}, "width": 400, "legend": null, "yscale": "auto", "tools": [{"type": "PanTool", "id": "09ca3684-ffbf-4f70-9db5-ff11724afe30"}, {"type": "WheelZoomTool", "id": "e33426cd-e50b-40c4-a244-4510673d2415"}, {"type": "BoxZoomTool", "id": "4adc7fb2-89e2-43c6-8a4f-6c623d7761fc"}, {"type": "PreviewSaveTool", "id": "e6992e9d-5e38-46d4-8882-dcac1af0ea1f"}, {"type": "ResizeTool", "id": "fd07d71c-64c1-4de3-a4e4-eaa8054d69b1"}, {"type": "ResetTool", "id": "e76bee90-4552-43b9-ab9f-9476c30a755e"}, {"type": "HelpTool", "id": "d3626c5c-9759-40ca-b7dd-fa974280771a"}], "xgrid": false, "title": "Python Interpreters", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "e729f56c-f7b0-4ff9-b31b-8ef3ee236566"}], "x_range": {"type": "FactorRange", "id": "ff823aa2-5e18-4571-8e7a-04077ad7181a"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "CategoricalAxis", "id": "eb288a18-766b-4a14-97d3-2790e7389bae"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "fd9c5217-7249-4fa8-9983-887c55f653c2"}, "renderers": [{"type": "BoxAnnotation", "id": "67748d67-816d-4c64-b277-db6ec75856ac"}, {"type": "GlyphRenderer", "id": "d66183e2-25fc-4b0f-9d98-7c8c6500dda6"}, {"type": "GlyphRenderer", "id": "f3087325-e7a7-4eff-9346-d83fa21bae27"}, {"type": "GlyphRenderer", "id": "753be257-de01-4f6f-97b8-631d9890cf5f"}, {"type": "GlyphRenderer", "id": "932eb39a-9680-4d87-947a-942ccc008e4b"}, {"type": "GlyphRenderer", "id": "65cd107f-ea94-4ccf-844d-2632b23c4db1"}, {"type": "GlyphRenderer", "id": "627edc0a-119e-420f-8ba7-f37bb17abdca"}, {"type": "CategoricalAxis", "id": "eb288a18-766b-4a14-97d3-2790e7389bae"}, {"type": "LinearAxis", "id": "e729f56c-f7b0-4ff9-b31b-8ef3ee236566"}, {"type": "Grid", "id": "2b203bdd-da8f-456d-84ec-687cf6064c8a"}]}, "subtype": "Chart"}, {"type": "GlyphRenderer", "id": "627edc0a-119e-420f-8ba7-f37bb17abdca", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ebdb5703-13d6-46dd-90eb-9f44a8744dd6"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "72013e35-a24a-4d31-bef5-ce4fee0ceac3"}}}, {"type": "ResizeTool", "id": "fd07d71c-64c1-4de3-a4e4-eaa8054d69b1", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}}}, {"type": "LinearAxis", "id": "e729f56c-f7b0-4ff9-b31b-8ef3ee236566", "attributes": {"ticker": {"type": "BasicTicker", "id": "d7adb40b-29c8-4fa0-9cc7-d9407a619c8c"}, "formatter": {"type": "BasicTickFormatter", "id": "741b1902-4a6e-45bc-96a5-ec54734ab81c"}, "axis_label": "Mean( Timing )", "plot": {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}}}, {"type": "Range1d", "id": "f3359775-8912-4514-8c0e-dc5714181594", "attributes": {"start": -4.5, "end": 54.5, "callback": null}}, {"type": "ColumnDataSource", "id": "3f4d6fed-ff22-4b0a-90a0-f212d8a65dbf", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "width": [0.8], "sample": ["1st"], "y": [11.0], "line_alpha": [1.0], "height": [22.0], "x": ["('jython', '1st')"], "interpreter": ["jython"], "chart_index": [{"interpreter": "jython", "sample": "1st"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "CategoricalTickFormatter", "id": "188740a5-7c35-4fa6-b647-0367ebf10c26", "attributes": {}}, {"type": "Rect", "id": "fc8b33e6-e4b4-4b46-aaae-8369ee1d2b96", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "ToolEvents", "id": "5fecab5d-5fd5-4976-bdd6-5f17a3ca9e6b", "attributes": {}}, {"type": "CategoricalTicker", "id": "177b1281-6f03-403e-afc0-6c24565a365b", "attributes": {}}, {"type": "ColumnDataSource", "id": "79d787f5-6096-4fbd-8228-29b8828f8ce7", "attributes": {"data": {"color": ["#5ab738"], "line_color": ["white"], "width": [0.8], "sample": ["2nd"], "y": [37.0], "line_alpha": [1.0], "height": [30.0], "x": ["jython"], "interpreter": ["jython"], "chart_index": [{"interpreter": "jython", "sample": "2nd"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "BoxZoomTool", "id": "93cce1de-db27-40b7-bbd9-a713b57506f5", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "d9f652f4-3908-48f1-b9a3-6a48388a7e7a"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "ResetTool", "id": "e876e5ac-1200-4c2b-94a0-60a266f7f832", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "FactorRange", "id": "ff823aa2-5e18-4571-8e7a-04077ad7181a", "attributes": {"factors": ["('jython', '1st')", "('jython', '2nd')", "('pypy', '1st')", "('pypy', '2nd')", "('python', '1st')", "('python', '2nd')"], "callback": null}}, {"type": "BasicTicker", "id": "74843f94-95c8-4656-b6a0-1f6d29bf689b", "attributes": {}}, {"type": "Grid", "id": "2b203bdd-da8f-456d-84ec-687cf6064c8a", "attributes": {"ticker": {"type": "BasicTicker", "id": "d7adb40b-29c8-4fa0-9cc7-d9407a619c8c"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}}}, {"type": "ColumnDataSource", "id": "ebdb5703-13d6-46dd-90eb-9f44a8744dd6", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "width": [0.8], "sample": ["2nd"], "y": [15.0], "line_alpha": [1.0], "height": [30.0], "x": ["('jython', '2nd')"], "interpreter": ["jython"], "chart_index": [{"interpreter": "jython", "sample": "2nd"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "GlyphRenderer", "id": "7bc6c3e9-b062-442c-a39f-d38bb25e4668", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "f4afd0e4-1f63-4cfb-84f5-679ced286271"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "ab27eb17-6537-4351-8ad9-64e655b48524"}}}, {"type": "Rect", "id": "b410582d-8f95-464c-b210-fe05ae91fb4d", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "ColumnDataSource", "id": "f4afd0e4-1f63-4cfb-84f5-679ced286271", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "width": [0.8], "sample": ["1st"], "y": [6.0], "line_alpha": [1.0], "height": [12.0], "x": ["pypy"], "interpreter": ["pypy"], "chart_index": [{"interpreter": "pypy", "sample": "1st"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "Legend", "id": "8e503524-cf8a-437e-a88a-836ed084f2a0", "attributes": {"legends": [["1st", [{"type": "GlyphRenderer", "id": "890ab2cb-c940-4d9c-9d4f-a479c40c66ed"}]], ["2nd", [{"type": "GlyphRenderer", "id": "3b1fdf89-5638-4724-8ebd-8b7b475f6a29"}]]], "plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "CategoricalTickFormatter", "id": "dbe40b0d-e651-4ca4-ae0e-b4939f3db0c9", "attributes": {}}, {"type": "Rect", "id": "0f44f737-9443-4c8c-aecf-f85b5506383e", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "Rect", "id": "83e6c8ec-6bf5-4a57-bc2c-c34c62a8dcca", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "Rect", "id": "74ef2cc7-eef9-45e0-b3db-880fa9f9833d", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "GlyphRenderer", "id": "160d33b7-d154-451a-bfae-93f9ee2e44b1", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "324ddcf3-731f-489f-af66-49ba1fa23328"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "83e6c8ec-6bf5-4a57-bc2c-c34c62a8dcca"}}}, {"type": "ColumnDataSource", "id": "6719275b-23c1-4947-97ef-7a32a58fc739", "attributes": {"data": {"color": ["#5ab738"], "line_color": ["white"], "width": [0.8], "sample": ["2nd"], "y": [2.5], "line_alpha": [1.0], "height": [5.0], "x": ["python"], "interpreter": ["python"], "chart_index": [{"interpreter": "python", "sample": "2nd"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "Rect", "id": "75367ef2-4ef9-45db-8439-8c855e080429", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "PanTool", "id": "18b081e1-5e93-4c9d-884e-965ebbdc54c8", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "ColumnDataSource", "id": "868e2a74-f352-4812-aecd-7129561dae0e", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "width": [0.8], "sample": ["2nd"], "y": [2.5], "line_alpha": [1.0], "height": [5.0], "x": ["('python', '2nd')"], "interpreter": ["python"], "chart_index": [{"interpreter": "python", "sample": "2nd"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "GlyphRenderer", "id": "753be257-de01-4f6f-97b8-631d9890cf5f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e30fae75-a682-48b6-8c36-85e38ac7a4bb"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "fc8b33e6-e4b4-4b46-aaae-8369ee1d2b96"}}}, {"type": "GlyphRenderer", "id": "3b1fdf89-5638-4724-8ebd-8b7b475f6a29", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6719275b-23c1-4947-97ef-7a32a58fc739"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "efc5df94-000c-459c-9ca3-2c7b375fb1b1"}}}, {"type": "HelpTool", "id": "db678418-d6e0-4fc2-9733-0e8a5682a81c", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "ColumnDataSource", "id": "e30fae75-a682-48b6-8c36-85e38ac7a4bb", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "width": [0.8], "sample": ["1st"], "y": [6.0], "line_alpha": [1.0], "height": [12.0], "x": ["('pypy', '1st')"], "interpreter": ["pypy"], "chart_index": [{"interpreter": "pypy", "sample": "1st"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "WheelZoomTool", "id": "e33426cd-e50b-40c4-a244-4510673d2415", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}}}, {"type": "CategoricalAxis", "id": "eb288a18-766b-4a14-97d3-2790e7389bae", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "6b6c8c6d-071b-4920-8fb4-889af820ebee"}, "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "188740a5-7c35-4fa6-b647-0367ebf10c26"}, "axis_label": "Interpreter, Sample", "plot": {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}}}, {"type": "GlyphRenderer", "id": "56686702-3318-420e-b86e-b27995ab06f2", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "79d787f5-6096-4fbd-8228-29b8828f8ce7"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "0f44f737-9443-4c8c-aecf-f85b5506383e"}}}, {"type": "LinearAxis", "id": "3e36fad3-47ab-4833-85d1-c9fb55cce1bd", "attributes": {"ticker": {"type": "BasicTicker", "id": "74843f94-95c8-4656-b6a0-1f6d29bf689b"}, "formatter": {"type": "BasicTickFormatter", "id": "fe64a392-652c-41a1-9a3a-ddfe32b2f745"}, "axis_label": "Mean( Timing )", "plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "BoxAnnotation", "id": "d9f652f4-3908-48f1-b9a3-6a48388a7e7a", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BoxAnnotation", "id": "67748d67-816d-4c64-b277-db6ec75856ac", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ResizeTool", "id": "91657758-f5a5-49b6-bff1-2455b4dbe816", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "HBox", "id": "31f0c6d9-eafe-40ce-8fbf-1bd7acdcadd5", "attributes": {"children": [{"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}, {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}]}}, {"type": "Rect", "id": "b914bffd-3f39-4275-98be-de693d4851ff", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "FactorRange", "id": "61e465c0-bf91-48c7-93e2-85f447e8d4bb", "attributes": {"factors": ["jython", "pypy", "python"], "callback": null}}, {"type": "GlyphRenderer", "id": "d66183e2-25fc-4b0f-9d98-7c8c6500dda6", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "f231f3bd-755c-4cd8-a146-d0e2d39c12d8"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "e143490a-4ab3-43a0-a8b2-d22a851b0830"}}}, {"type": "Range1d", "id": "7f486a57-4d77-4dc6-bfc8-89a282edc335", "attributes": {"start": -3.9000000000000004, "end": 41.9, "callback": null}}, {"type": "PreviewSaveTool", "id": "9d385ebd-5af8-421f-929a-17b82781c043", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "970386a1-5d6f-45e7-85f9-05d4fb76bccb"}}}, {"type": "Rect", "id": "ab27eb17-6537-4351-8ad9-64e655b48524", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "BasicTickFormatter", "id": "741b1902-4a6e-45bc-96a5-ec54734ab81c", "attributes": {}}, {"type": "BoxZoomTool", "id": "4adc7fb2-89e2-43c6-8a4f-6c623d7761fc", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "67748d67-816d-4c64-b277-db6ec75856ac"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "92b58d60-7aaa-4135-88cf-90c68a7f6c7a"}}}, {"type": "Rect", "id": "6c70fdb8-7644-4437-bf02-b48661e40b34", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}], "root_ids": ["31f0c6d9-eafe-40ce-8fbf-1bd7acdcadd5"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "7877abb5-1522-466a-bf99-685b0918964b", "modelid": "31f0c6d9-eafe-40ce-8fbf-1bd7acdcadd5", "elementid": "e0d40601-7960-47b1-9bfb-15f8ddbae6f1"}];
          
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