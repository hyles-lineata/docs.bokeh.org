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

  var elt = document.getElementById("ba51d00f-dcb7-4b55-9bf4-e98971e8d233");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ba51d00f-dcb7-4b55-9bf4-e98971e8d233' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "9a7dc727-ee57-423c-8e5e-7e9ef49b163e", "tags": []}, "id": "9a7dc727-ee57-423c-8e5e-7e9ef49b163e"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "53667db7-a19f-4104-99fa-5bfbfb304b4f", "tags": []}, "id": "53667db7-a19f-4104-99fa-5bfbfb304b4f"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "a7e05dbb-7e36-435e-b38c-8b1eae3f5184"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "dimension": 1, "id": "de99debe-e9f3-48b5-88d7-e95dd217428d"}, "id": "de99debe-e9f3-48b5-88d7-e95dd217428d"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "id": "806401c2-d99d-41fa-8c1d-7516e517fa83", "tags": [], "doc": null}, "id": "806401c2-d99d-41fa-8c1d-7516e517fa83"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "a7e05dbb-7e36-435e-b38c-8b1eae3f5184"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "53667db7-a19f-4104-99fa-5bfbfb304b4f"}, "plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "id": "5ac7b52c-f84a-45cd-9daa-681be2840ccb"}, "id": "5ac7b52c-f84a-45cd-9daa-681be2840ccb"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "52e26e3e-4006-42ce-b721-4ac2fb692a95", "tags": [], "geometries": []}, "id": "52e26e3e-4006-42ce-b721-4ac2fb692a95"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "e5165826-57dc-42e0-b69d-079ba4d95933"}, "id": "e5165826-57dc-42e0-b69d-079ba4d95933"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "id": "27fc5cef-8884-40a5-a2f1-e9fdb8b114af", "tags": [], "doc": null}, "id": "27fc5cef-8884-40a5-a2f1-e9fdb8b114af"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "id": "df17b75d-7539-4c63-a959-3ec109faf9a9", "tags": [], "doc": null}, "id": "df17b75d-7539-4c63-a959-3ec109faf9a9"}, {"type": "ImageRGBA", "attributes": {"y": {"field": "y"}, "doc": null, "image": {"field": "image"}, "id": "f1ca5e8a-98c4-40a6-b9f1-14312586db76", "tags": [], "dh": {"units": "data", "field": "dh"}, "x": {"field": "x"}, "dw": {"units": "data", "field": "dw"}}, "id": "f1ca5e8a-98c4-40a6-b9f1-14312586db76"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "id": "6dd47e27-f739-4c30-91a9-dd7dad27a145"}, "id": "6dd47e27-f739-4c30-91a9-dd7dad27a145"}, {"type": "Range1d", "attributes": {"callback": null, "id": "c40aa16c-3599-485c-b536-04703175efbd", "tags": [], "doc": null, "end": 10, "start": 0}, "id": "c40aa16c-3599-485c-b536-04703175efbd"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [0], "x": [0], "image": [[[4278230528, 4279016960, 4279868928, 4280720896, 4281572864, 4282359296, 4283211264, 4284063232, 4284915200, 4285701632, 4286553600, 4287405568, 4288257536, 4289043968, 4289895936, 4290747904, 4291599872, 4292386304, 4293238272, 4294090240], [4278230540, 4279016972, 4279868940, 4280720908, 4281572876, 4282359308, 4283211276, 4284063244, 4284915212, 4285701644, 4286553612, 4287405580, 4288257548, 4289043980, 4289895948, 4290747916, 4291599884, 4292386316, 4293238284, 4294090252], [4278230553, 4279016985, 4279868953, 4280720921, 4281572889, 4282359321, 4283211289, 4284063257, 4284915225, 4285701657, 4286553625, 4287405593, 4288257561, 4289043993, 4289895961, 4290747929, 4291599897, 4292386329, 4293238297, 4294090265], [4278230566, 4279016998, 4279868966, 4280720934, 4281572902, 4282359334, 4283211302, 4284063270, 4284915238, 4285701670, 4286553638, 4287405606, 4288257574, 4289044006, 4289895974, 4290747942, 4291599910, 4292386342, 4293238310, 4294090278], [4278230579, 4279017011, 4279868979, 4280720947, 4281572915, 4282359347, 4283211315, 4284063283, 4284915251, 4285701683, 4286553651, 4287405619, 4288257587, 4289044019, 4289895987, 4290747955, 4291599923, 4292386355, 4293238323, 4294090291], [4278230591, 4279017023, 4279868991, 4280720959, 4281572927, 4282359359, 4283211327, 4284063295, 4284915263, 4285701695, 4286553663, 4287405631, 4288257599, 4289044031, 4289895999, 4290747967, 4291599935, 4292386367, 4293238335, 4294090303], [4278230604, 4279017036, 4279869004, 4280720972, 4281572940, 4282359372, 4283211340, 4284063308, 4284915276, 4285701708, 4286553676, 4287405644, 4288257612, 4289044044, 4289896012, 4290747980, 4291599948, 4292386380, 4293238348, 4294090316], [4278230617, 4279017049, 4279869017, 4280720985, 4281572953, 4282359385, 4283211353, 4284063321, 4284915289, 4285701721, 4286553689, 4287405657, 4288257625, 4289044057, 4289896025, 4290747993, 4291599961, 4292386393, 4293238361, 4294090329], [4278230630, 4279017062, 4279869030, 4280720998, 4281572966, 4282359398, 4283211366, 4284063334, 4284915302, 4285701734, 4286553702, 4287405670, 4288257638, 4289044070, 4289896038, 4290748006, 4291599974, 4292386406, 4293238374, 4294090342], [4278230642, 4279017074, 4279869042, 4280721010, 4281572978, 4282359410, 4283211378, 4284063346, 4284915314, 4285701746, 4286553714, 4287405682, 4288257650, 4289044082, 4289896050, 4290748018, 4291599986, 4292386418, 4293238386, 4294090354], [4278230655, 4279017087, 4279869055, 4280721023, 4281572991, 4282359423, 4283211391, 4284063359, 4284915327, 4285701759, 4286553727, 4287405695, 4288257663, 4289044095, 4289896063, 4290748031, 4291599999, 4292386431, 4293238399, 4294090367], [4278230668, 4279017100, 4279869068, 4280721036, 4281573004, 4282359436, 4283211404, 4284063372, 4284915340, 4285701772, 4286553740, 4287405708, 4288257676, 4289044108, 4289896076, 4290748044, 4291600012, 4292386444, 4293238412, 4294090380], [4278230681, 4279017113, 4279869081, 4280721049, 4281573017, 4282359449, 4283211417, 4284063385, 4284915353, 4285701785, 4286553753, 4287405721, 4288257689, 4289044121, 4289896089, 4290748057, 4291600025, 4292386457, 4293238425, 4294090393], [4278230693, 4279017125, 4279869093, 4280721061, 4281573029, 4282359461, 4283211429, 4284063397, 4284915365, 4285701797, 4286553765, 4287405733, 4288257701, 4289044133, 4289896101, 4290748069, 4291600037, 4292386469, 4293238437, 4294090405], [4278230706, 4279017138, 4279869106, 4280721074, 4281573042, 4282359474, 4283211442, 4284063410, 4284915378, 4285701810, 4286553778, 4287405746, 4288257714, 4289044146, 4289896114, 4290748082, 4291600050, 4292386482, 4293238450, 4294090418], [4278230719, 4279017151, 4279869119, 4280721087, 4281573055, 4282359487, 4283211455, 4284063423, 4284915391, 4285701823, 4286553791, 4287405759, 4288257727, 4289044159, 4289896127, 4290748095, 4291600063, 4292386495, 4293238463, 4294090431], [4278230732, 4279017164, 4279869132, 4280721100, 4281573068, 4282359500, 4283211468, 4284063436, 4284915404, 4285701836, 4286553804, 4287405772, 4288257740, 4289044172, 4289896140, 4290748108, 4291600076, 4292386508, 4293238476, 4294090444], [4278230744, 4279017176, 4279869144, 4280721112, 4281573080, 4282359512, 4283211480, 4284063448, 4284915416, 4285701848, 4286553816, 4287405784, 4288257752, 4289044184, 4289896152, 4290748120, 4291600088, 4292386520, 4293238488, 4294090456], [4278230757, 4279017189, 4279869157, 4280721125, 4281573093, 4282359525, 4283211493, 4284063461, 4284915429, 4285701861, 4286553829, 4287405797, 4288257765, 4289044197, 4289896165, 4290748133, 4291600101, 4292386533, 4293238501, 4294090469], [4278230770, 4279017202, 4279869170, 4280721138, 4281573106, 4282359538, 4283211506, 4284063474, 4284915442, 4285701874, 4286553842, 4287405810, 4288257778, 4289044210, 4289896178, 4290748146, 4291600114, 4292386546, 4293238514, 4294090482]]], "dw": [10], "dh": [10]}, "doc": null, "id": "f7da373b-6254-4eb1-93e0-3010f11f3fe2", "column_names": ["y", "x", "image", "dw", "dh"]}, "id": "f7da373b-6254-4eb1-93e0-3010f11f3fe2"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "id": "ba8f921f-803e-4d09-85cc-790275611507"}, "id": "ba8f921f-803e-4d09-85cc-790275611507"}, {"type": "ImageRGBA", "attributes": {"y": {"field": "y"}, "doc": null, "image": {"field": "image"}, "id": "53905880-9751-4d01-b4e0-752792015cb7", "tags": [], "dh": {"units": "data", "field": "dh"}, "x": {"field": "x"}, "dw": {"units": "data", "field": "dw"}}, "id": "53905880-9751-4d01-b4e0-752792015cb7"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "e5165826-57dc-42e0-b69d-079ba4d95933"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "dimension": 0, "id": "89857fd6-f024-452f-9e4e-72d0a6a28f96"}, "id": "89857fd6-f024-452f-9e4e-72d0a6a28f96"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "a7e05dbb-7e36-435e-b38c-8b1eae3f5184"}, "id": "a7e05dbb-7e36-435e-b38c-8b1eae3f5184"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "e5165826-57dc-42e0-b69d-079ba4d95933"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "9a7dc727-ee57-423c-8e5e-7e9ef49b163e"}, "plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "id": "1576ed4d-8918-4fff-b9f9-fb99b0ea0af8"}, "id": "1576ed4d-8918-4fff-b9f9-fb99b0ea0af8"}, {"type": "Range1d", "attributes": {"callback": null, "id": "1c9c019a-ef77-487a-9be0-e6ce4eb6027c", "tags": [], "doc": null, "end": 10, "start": 0}, "id": "1c9c019a-ef77-487a-9be0-e6ce4eb6027c"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "id": "e9d9c11d-e2ba-48e5-b486-e4708a7e44ee"}, "id": "e9d9c11d-e2ba-48e5-b486-e4708a7e44ee"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, "id": "bbe019c8-0a72-4627-af70-6dbc59614638", "tags": [], "doc": null}, "id": "bbe019c8-0a72-4627-af70-6dbc59614638"}, {"type": "Plot", "attributes": {"right": [], "extra_x_ranges": {}, "y_range": {"type": "Range1d", "id": "c40aa16c-3599-485c-b536-04703175efbd"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "52e26e3e-4006-42ce-b721-4ac2fb692a95"}, "renderers": [{"type": "LinearAxis", "id": "1576ed4d-8918-4fff-b9f9-fb99b0ea0af8"}, {"type": "Grid", "id": "89857fd6-f024-452f-9e4e-72d0a6a28f96"}, {"type": "LinearAxis", "id": "5ac7b52c-f84a-45cd-9daa-681be2840ccb"}, {"type": "Grid", "id": "de99debe-e9f3-48b5-88d7-e95dd217428d"}, {"type": "GlyphRenderer", "id": "6fbb1831-d288-4af7-af9a-a6ed25e4b3d3"}], "below": [{"type": "LinearAxis", "id": "1576ed4d-8918-4fff-b9f9-fb99b0ea0af8"}], "left": [{"type": "LinearAxis", "id": "5ac7b52c-f84a-45cd-9daa-681be2840ccb"}], "above": [], "tags": [], "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "ba8f921f-803e-4d09-85cc-790275611507"}, {"type": "WheelZoomTool", "id": "6dd47e27-f739-4c30-91a9-dd7dad27a145"}, {"type": "BoxZoomTool", "id": "e9d9c11d-e2ba-48e5-b486-e4708a7e44ee"}, {"type": "PreviewSaveTool", "id": "806401c2-d99d-41fa-8c1d-7516e517fa83"}, {"type": "ResizeTool", "id": "bbe019c8-0a72-4627-af70-6dbc59614638"}, {"type": "ResetTool", "id": "df17b75d-7539-4c63-a959-3ec109faf9a9"}, {"type": "HelpTool", "id": "27fc5cef-8884-40a5-a2f1-e9fdb8b114af"}], "x_range": {"type": "Range1d", "id": "1c9c019a-ef77-487a-9be0-e6ce4eb6027c"}, "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077"}, "id": "e6d6813e-71ca-426f-99c8-2d18cb4cd077", "subtype": "Figure"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "f7da373b-6254-4eb1-93e0-3010f11f3fe2"}, "tags": [], "glyph": {"type": "ImageRGBA", "id": "f1ca5e8a-98c4-40a6-b9f1-14312586db76"}, "doc": null, "nonselection_glyph": {"type": "ImageRGBA", "id": "53905880-9751-4d01-b4e0-752792015cb7"}, "selection_glyph": null, "id": "6fbb1831-d288-4af7-af9a-a6ed25e4b3d3"}, "id": "6fbb1831-d288-4af7-af9a-a6ed25e4b3d3"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("ba51d00f-dcb7-4b55-9bf4-e98971e8d233", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("ba51d00f-dcb7-4b55-9bf4-e98971e8d233", all_models);
    });
  }

}(this));