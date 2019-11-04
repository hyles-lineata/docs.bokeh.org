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

  var elt = document.getElementById("76050db2-4d9c-4e2a-b39c-5351f37ff116");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '76050db2-4d9c-4e2a-b39c-5351f37ff116' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [6401.0], "width": [0.8], "y": [3200.5], "x": ["78"]}, "id": "b37d0b81-3df7-4397-99e5-e82670f1c3c5"}, "type": "ColumnDataSource", "id": "b37d0b81-3df7-4397-99e5-e82670f1c3c5"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "bece0735-2273-4264-8df7-ce1bbd9671db"}, "tags": [], "doc": null, "selection_glyph": null, "id": "3238f9a7-616c-4f7b-ac8f-719a8cf0d52b", "glyph": {"type": "Rect", "id": "c0cd8e14-d301-4d5d-b016-7b81b43af0b5"}}, "type": "GlyphRenderer", "id": "3238f9a7-616c-4f7b-ac8f-719a8cf0d52b"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "9bbf55c5-b1c3-4540-a595-9cbd13991ffa"}, "type": "BoxZoomTool", "id": "9bbf55c5-b1c3-4540-a595-9cbd13991ffa"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "a30d818c-497c-4bb9-b007-a3c48108ddc7"}, "tags": [], "doc": null, "selection_glyph": null, "id": "fc0763aa-43c8-48ba-8db6-e8da175cc809", "glyph": {"type": "Rect", "id": "c58f7638-580a-4124-b6c0-2f31181ef78b"}}, "type": "GlyphRenderer", "id": "fc0763aa-43c8-48ba-8db6-e8da175cc809"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "33cf9349-97d5-4d52-884b-9d7124bd71a8"}, "tags": [], "doc": null, "selection_glyph": null, "id": "ded3f387-5a57-407a-9a23-49bf441ce9a6", "glyph": {"type": "Rect", "id": "1fc3c489-901b-44d6-a721-ac1dbb07e4a7"}}, "type": "GlyphRenderer", "id": "ded3f387-5a57-407a-9a23-49bf441ce9a6"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [3824.0], "width": [0.8], "y": [1912.0], "x": ["81"]}, "id": "a30d818c-497c-4bb9-b007-a3c48108ddc7"}, "type": "ColumnDataSource", "id": "a30d818c-497c-4bb9-b007-a3c48108ddc7"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240"}, "tags": [], "doc": null, "id": "913a6e8b-fcb0-441c-9a19-e57e575b77eb"}, "type": "HelpTool", "id": "913a6e8b-fcb0-441c-9a19-e57e575b77eb"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240"}, "tags": [], "doc": null, "id": "6be777e8-767e-4bf1-946c-0fd5f56ff03f"}, "type": "ResizeTool", "id": "6be777e8-767e-4bf1-946c-0fd5f56ff03f"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "ddea8278-80a0-44db-b943-dfc7e294f014"}, "tags": [], "doc": null, "selection_glyph": null, "id": "8b3d24f7-eea0-4771-8c9d-3afc0f75fa92", "glyph": {"type": "Rect", "id": "39235d98-571a-4870-8a37-07e1fb70502b"}}, "type": "GlyphRenderer", "id": "8b3d24f7-eea0-4771-8c9d-3afc0f75fa92"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240"}, "tags": [], "doc": null, "id": "2cb8704b-abb4-4a54-a588-dcba3eb4e392"}, "type": "PreviewSaveTool", "id": "2cb8704b-abb4-4a54-a588-dcba3eb4e392"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "7af0e60b-adc1-4b0a-9dc6-3c30be3c255d"}, "tags": [], "doc": null, "selection_glyph": null, "id": "b8dff527-1023-4bdc-8e0c-55dd3a001b20", "glyph": {"type": "Rect", "id": "feba4a00-b778-4261-a241-fdddc9ddda54"}}, "type": "GlyphRenderer", "id": "b8dff527-1023-4bdc-8e0c-55dd3a001b20"}, {"attributes": {"end": 11302.5, "callback": null, "doc": null, "tags": [], "start": 0.0, "id": "e745da91-c01f-4a9b-83db-d7f68cc41bfe"}, "type": "Range1d", "id": "e745da91-c01f-4a9b-83db-d7f68cc41bfe"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "fb575a8f-737a-421c-9339-72abc2bf8fbc"}, "type": "WheelZoomTool", "id": "fb575a8f-737a-421c-9339-72abc2bf8fbc"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [4437.0], "width": [0.8], "y": [2218.5], "x": ["74"]}, "id": "ddea8278-80a0-44db-b943-dfc7e294f014"}, "type": "ColumnDataSource", "id": "ddea8278-80a0-44db-b943-dfc7e294f014"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [3134.0], "width": [0.8], "y": [1567.0], "x": ["80"]}, "id": "bece0735-2273-4264-8df7-ce1bbd9671db"}, "type": "ColumnDataSource", "id": "bece0735-2273-4264-8df7-ce1bbd9671db"}, {"attributes": {"doc": null, "id": "28e6b289-4e82-45aa-a01b-1c1e9b2f18f1", "tags": []}, "type": "CategoricalTicker", "id": "28e6b289-4e82-45aa-a01b-1c1e9b2f18f1"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "feba4a00-b778-4261-a241-fdddc9ddda54"}, "type": "Rect", "id": "feba4a00-b778-4261-a241-fdddc9ddda54"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "c58f7638-580a-4124-b6c0-2f31181ef78b"}, "type": "Rect", "id": "c58f7638-580a-4124-b6c0-2f31181ef78b"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "0e1f52f5-a397-4303-bc87-8abc17f927dc"}, "type": "Rect", "id": "0e1f52f5-a397-4303-bc87-8abc17f927dc"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "1fc3c489-901b-44d6-a721-ac1dbb07e4a7"}, "type": "Rect", "id": "1fc3c489-901b-44d6-a721-ac1dbb07e4a7"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [5775.0], "width": [0.8], "y": [2887.5], "x": ["71"]}, "id": "f0aa2965-e46a-4e99-b1c4-c597351aa728"}, "type": "ColumnDataSource", "id": "f0aa2965-e46a-4e99-b1c4-c597351aa728"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "5a347092-b6fe-4203-9ddc-7068723d19a9"}, "type": "Rect", "id": "5a347092-b6fe-4203-9ddc-7068723d19a9"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "546a0f6d-6ee3-48c3-86a9-934b1a04ea8d"}, "id": "de6d1625-6b8d-43b5-b6e0-0aaab8b3c358"}, "type": "Grid", "id": "de6d1625-6b8d-43b5-b6e0-0aaab8b3c358"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "f0aa2965-e46a-4e99-b1c4-c597351aa728"}, "tags": [], "doc": null, "selection_glyph": null, "id": "a763dd78-70b8-4c2d-a24a-2dfba7934eb3", "glyph": {"type": "Rect", "id": "95e2a63e-7f85-484e-9cb3-393d99cb8411"}}, "type": "GlyphRenderer", "id": "a763dd78-70b8-4c2d-a24a-2dfba7934eb3"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [5994.0], "width": [0.8], "y": [2997.0], "x": ["79"]}, "id": "4230a811-0538-43db-920a-0ca6201dedf4"}, "type": "ColumnDataSource", "id": "4230a811-0538-43db-920a-0ca6201dedf4"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240"}, "tags": [], "doc": null, "id": "9c16d0f7-ec3c-4e07-a47b-5e5f781ceb7d"}, "type": "ResetTool", "id": "9c16d0f7-ec3c-4e07-a47b-5e5f781ceb7d"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "14188d4f-2dd8-4da2-8548-345601fc5d50"}, "type": "Rect", "id": "14188d4f-2dd8-4da2-8548-345601fc5d50"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [6114.5], "width": [0.8], "y": [3057.25], "x": ["72"]}, "id": "7af0e60b-adc1-4b0a-9dc6-3c30be3c255d"}, "type": "ColumnDataSource", "id": "7af0e60b-adc1-4b0a-9dc6-3c30be3c255d"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "24c95dc2-ab6a-4c21-a9d3-3563f13cbd00"}, "type": "PanTool", "id": "24c95dc2-ab6a-4c21-a9d3-3563f13cbd00"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [6166.0], "width": [0.8], "y": [3083.0], "x": ["75"]}, "id": "e6964981-a4fe-4010-bace-a8e7d01f6eb2"}, "type": "ColumnDataSource", "id": "e6964981-a4fe-4010-bace-a8e7d01f6eb2"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240"}, "tags": [], "doc": null, "axis_label": "Sum( Displ )", "formatter": {"type": "BasicTickFormatter", "id": "3d1a1f35-ddde-4c0a-840c-86233d7d2c8a"}, "ticker": {"type": "BasicTicker", "id": "546a0f6d-6ee3-48c3-86a9-934b1a04ea8d"}, "id": "64b02024-5b8b-4362-8a22-8d4385b22ddf"}, "type": "LinearAxis", "id": "64b02024-5b8b-4362-8a22-8d4385b22ddf"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "b37d0b81-3df7-4397-99e5-e82670f1c3c5"}, "tags": [], "doc": null, "selection_glyph": null, "id": "a894dcdd-44c0-4aa5-9440-808cccd2c0cc", "glyph": {"type": "Rect", "id": "5a347092-b6fe-4203-9ddc-7068723d19a9"}}, "type": "GlyphRenderer", "id": "a894dcdd-44c0-4aa5-9440-808cccd2c0cc"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [6725.0], "width": [0.8], "y": [3362.5], "x": ["76"]}, "id": "33cf9349-97d5-4d52-884b-9d7124bd71a8"}, "type": "ColumnDataSource", "id": "33cf9349-97d5-4d52-884b-9d7124bd71a8"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "652f8e69-4544-4966-b1b8-8f843dab65cb"}, "tags": [], "doc": null, "selection_glyph": null, "id": "684de4a1-5ee6-4bcc-bdaf-aae4f76c750b", "glyph": {"type": "Rect", "id": "dee9422b-db3e-4946-8ac0-047a7b9b61ab"}}, "type": "GlyphRenderer", "id": "684de4a1-5ee6-4bcc-bdaf-aae4f76c750b"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "e17f6fb1-751f-4f7f-b68c-d81a65dbbc92"}, "tags": [], "doc": null, "selection_glyph": null, "id": "3013ff97-7f62-43eb-b123-1bc8b244c69f", "glyph": {"type": "Rect", "id": "ac9b7bec-139e-4656-9a08-2a4464a180d1"}}, "type": "GlyphRenderer", "id": "3013ff97-7f62-43eb-b123-1bc8b244c69f"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [3844.0], "width": [0.8], "y": [1922.0], "x": ["82"]}, "id": "e17f6fb1-751f-4f7f-b68c-d81a65dbbc92"}, "type": "ColumnDataSource", "id": "e17f6fb1-751f-4f7f-b68c-d81a65dbbc92"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "ac9b7bec-139e-4656-9a08-2a4464a180d1"}, "type": "Rect", "id": "ac9b7bec-139e-4656-9a08-2a4464a180d1"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "5ee101b0-c884-4ad6-bb33-a61010720cf1"}, "type": "ToolEvents", "id": "5ee101b0-c884-4ad6-bb33-a61010720cf1"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240"}, "tags": [], "doc": null, "major_label_orientation": 0.7853981633974483, "axis_label": "Yr", "formatter": {"type": "CategoricalTickFormatter", "id": "4b942c9c-5c41-471a-a811-0c6d0e9ec8fc"}, "ticker": {"type": "CategoricalTicker", "id": "28e6b289-4e82-45aa-a01b-1c1e9b2f18f1"}, "id": "9cb7bf33-0093-4bd2-8530-892414e9bb6d"}, "type": "CategoricalAxis", "id": "9cb7bf33-0093-4bd2-8530-892414e9bb6d"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "4230a811-0538-43db-920a-0ca6201dedf4"}, "tags": [], "doc": null, "selection_glyph": null, "id": "cbcf60cb-5774-4080-b3db-22f08a235d3c", "glyph": {"type": "Rect", "id": "14188d4f-2dd8-4da2-8548-345601fc5d50"}}, "type": "GlyphRenderer", "id": "cbcf60cb-5774-4080-b3db-22f08a235d3c"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "546a0f6d-6ee3-48c3-86a9-934b1a04ea8d"}, "type": "BasicTicker", "id": "546a0f6d-6ee3-48c3-86a9-934b1a04ea8d"}, {"attributes": {"doc": null, "id": "4b942c9c-5c41-471a-a811-0c6d0e9ec8fc", "tags": []}, "type": "CategoricalTickFormatter", "id": "4b942c9c-5c41-471a-a811-0c6d0e9ec8fc"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "b3f2a6ad-cc69-444b-b51a-2b13b14d37ba"}, "type": "Rect", "id": "b3f2a6ad-cc69-444b-b51a-2b13b14d37ba"}, {"subtype": "Chart", "type": "Plot", "id": "3eb4048e-da2e-4000-a66d-a365ab392240", "attributes": {"x_range": {"type": "FactorRange", "id": "34e84823-b5e9-41af-ab9d-c322d18c1871"}, "title_text_font_style": "bold", "title_text_font_size": {"value": "12pt"}, "tags": [], "plot_width": 550, "renderers": [{"type": "GlyphRenderer", "id": "f46b51e8-1721-41b9-a0a2-24df09c6d958"}, {"type": "GlyphRenderer", "id": "a763dd78-70b8-4c2d-a24a-2dfba7934eb3"}, {"type": "GlyphRenderer", "id": "b8dff527-1023-4bdc-8e0c-55dd3a001b20"}, {"type": "GlyphRenderer", "id": "684de4a1-5ee6-4bcc-bdaf-aae4f76c750b"}, {"type": "GlyphRenderer", "id": "8b3d24f7-eea0-4771-8c9d-3afc0f75fa92"}, {"type": "GlyphRenderer", "id": "6a5655ca-361c-40a5-b3b6-b8dfd3870261"}, {"type": "GlyphRenderer", "id": "ded3f387-5a57-407a-9a23-49bf441ce9a6"}, {"type": "GlyphRenderer", "id": "dd026b7b-511a-4def-88c6-8fa1b72ad32c"}, {"type": "GlyphRenderer", "id": "a894dcdd-44c0-4aa5-9440-808cccd2c0cc"}, {"type": "GlyphRenderer", "id": "cbcf60cb-5774-4080-b3db-22f08a235d3c"}, {"type": "GlyphRenderer", "id": "3238f9a7-616c-4f7b-ac8f-719a8cf0d52b"}, {"type": "GlyphRenderer", "id": "fc0763aa-43c8-48ba-8db6-e8da175cc809"}, {"type": "GlyphRenderer", "id": "3013ff97-7f62-43eb-b123-1bc8b244c69f"}, {"type": "CategoricalAxis", "id": "9cb7bf33-0093-4bd2-8530-892414e9bb6d"}, {"type": "LinearAxis", "id": "64b02024-5b8b-4362-8a22-8d4385b22ddf"}, {"type": "Grid", "id": "de6d1625-6b8d-43b5-b6e0-0aaab8b3c358"}], "plot_height": 350, "right": [], "tool_events": {"type": "ToolEvents", "id": "5ee101b0-c884-4ad6-bb33-a61010720cf1"}, "responsive": false, "tools": [{"type": "PanTool", "id": "24c95dc2-ab6a-4c21-a9d3-3563f13cbd00"}, {"type": "WheelZoomTool", "id": "fb575a8f-737a-421c-9339-72abc2bf8fbc"}, {"type": "BoxZoomTool", "id": "9bbf55c5-b1c3-4540-a595-9cbd13991ffa"}, {"type": "PreviewSaveTool", "id": "2cb8704b-abb4-4a54-a588-dcba3eb4e392"}, {"type": "ResizeTool", "id": "6be777e8-767e-4bf1-946c-0fd5f56ff03f"}, {"type": "ResetTool", "id": "9c16d0f7-ec3c-4e07-a47b-5e5f781ceb7d"}, {"type": "HelpTool", "id": "913a6e8b-fcb0-441c-9a19-e57e575b77eb"}], "id": "3eb4048e-da2e-4000-a66d-a365ab392240", "title": "Total DISPL by YR", "y_range": {"type": "Range1d", "id": "e745da91-c01f-4a9b-83db-d7f68cc41bfe"}, "extra_y_ranges": {}, "below": [{"type": "CategoricalAxis", "id": "9cb7bf33-0093-4bd2-8530-892414e9bb6d"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "64b02024-5b8b-4362-8a22-8d4385b22ddf"}]}}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "5e7b8de0-d5a9-4a01-a1be-8ef0f156fb8f"}, "tags": [], "doc": null, "selection_glyph": null, "id": "f46b51e8-1721-41b9-a0a2-24df09c6d958", "glyph": {"type": "Rect", "id": "b3f2a6ad-cc69-444b-b51a-2b13b14d37ba"}}, "type": "GlyphRenderer", "id": "f46b51e8-1721-41b9-a0a2-24df09c6d958"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "32361290-439b-4812-9628-212fc47df65d"}, "type": "Rect", "id": "32361290-439b-4812-9628-212fc47df65d"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "dee9422b-db3e-4946-8ac0-047a7b9b61ab"}, "type": "Rect", "id": "dee9422b-db3e-4946-8ac0-047a7b9b61ab"}, {"attributes": {"doc": null, "id": "3d1a1f35-ddde-4c0a-840c-86233d7d2c8a", "tags": []}, "type": "BasicTickFormatter", "id": "3d1a1f35-ddde-4c0a-840c-86233d7d2c8a"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "e6964981-a4fe-4010-bace-a8e7d01f6eb2"}, "tags": [], "doc": null, "selection_glyph": null, "id": "6a5655ca-361c-40a5-b3b6-b8dfd3870261", "glyph": {"type": "Rect", "id": "32361290-439b-4812-9628-212fc47df65d"}}, "type": "GlyphRenderer", "id": "6a5655ca-361c-40a5-b3b6-b8dfd3870261"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [8161.0], "width": [0.8], "y": [4080.5], "x": ["70"]}, "id": "5e7b8de0-d5a9-4a01-a1be-8ef0f156fb8f"}, "type": "ColumnDataSource", "id": "5e7b8de0-d5a9-4a01-a1be-8ef0f156fb8f"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "95e2a63e-7f85-484e-9cb3-393d99cb8411"}, "type": "Rect", "id": "95e2a63e-7f85-484e-9cb3-393d99cb8411"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "c0cd8e14-d301-4d5d-b016-7b81b43af0b5"}, "type": "Rect", "id": "c0cd8e14-d301-4d5d-b016-7b81b43af0b5"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "110fa159-b010-4008-ba36-8e5539df6952"}, "tags": [], "doc": null, "selection_glyph": null, "id": "dd026b7b-511a-4def-88c6-8fa1b72ad32c", "glyph": {"type": "Rect", "id": "0e1f52f5-a397-4303-bc87-8abc17f927dc"}}, "type": "GlyphRenderer", "id": "dd026b7b-511a-4def-88c6-8fa1b72ad32c"}, {"attributes": {"callback": null, "factors": ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82"], "doc": null, "tags": [], "id": "34e84823-b5e9-41af-ab9d-c322d18c1871"}, "type": "FactorRange", "id": "34e84823-b5e9-41af-ab9d-c322d18c1871"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [5359.0], "width": [0.8], "y": [2679.5], "x": ["77"]}, "id": "110fa159-b010-4008-ba36-8e5539df6952"}, "type": "ColumnDataSource", "id": "110fa159-b010-4008-ba36-8e5539df6952"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["wheat"], "fill_alpha": [0.8], "height": [10275.0], "width": [0.8], "y": [5137.5], "x": ["73"]}, "id": "652f8e69-4544-4966-b1b8-8f843dab65cb"}, "type": "ColumnDataSource", "id": "652f8e69-4544-4966-b1b8-8f843dab65cb"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "39235d98-571a-4870-8a37-07e1fb70502b"}, "type": "Rect", "id": "39235d98-571a-4870-8a37-07e1fb70502b"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("76050db2-4d9c-4e2a-b39c-5351f37ff116", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("76050db2-4d9c-4e2a-b39c-5351f37ff116", all_models);
    });
  }

}(this));