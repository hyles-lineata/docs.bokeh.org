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

  var elt = document.getElementById("1b15b84a-41a1-4daf-b5c6-f1244b6d5d3a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1b15b84a-41a1-4daf-b5c6-f1244b6d5d3a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"column_names": ["outer_radius", "start_angle", "y", "x", "end_angle"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "outer_radius": [92.23339948031361, 139.7867850155062, 154.38766386903586, 91.62507700950238, 168.47495629784697, 91.62507700950238, 113.85069566245176, 168.47495629784697, 91.39201867367399, 290.0, 168.47495629784697, 220.2583199527764, 246.45224684191624, 290.0, 253.12378014254972, 253.12378014254972], "end_angle": [1.3331968824057525, 0.9635977466893062, 0.5939986109728601, 0.2243994752564139, -0.1451996604600324, -0.5147987961764788, -0.8843979318929249, -1.2539970676093715, -1.6235962033258176, -1.9931953390422634, -2.3627944747587097, -2.732393610475156, -3.101992746191602, -3.471591881908048, -3.8411910176244954, -4.210790153340941], "start_angle": [1.2803970058748317, 0.9107978701583854, 0.5411987344419392, 0.17159959872549302, -0.1979995369909533, -0.5675986727073996, -0.9371978084238457, -1.3067969441402922, -1.6763960798567383, -2.045995215573184, -2.4155943512896307, -2.785193487006077, -3.154792622722523, -3.524391758438969, -3.8939908941554164, -4.263590029871862]}, "id": "792e6bf0-27b0-4fe4-b804-80b1259ab150"}, "type": "ColumnDataSource", "id": "792e6bf0-27b0-4fe4-b804-80b1259ab150"}, {"attributes": {"column_names": ["start_angle", "y", "x", "end_angle"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "end_angle": [1.0163976232202272, 0.6467984875037809, 0.27719935178733474, -0.09239978392911147, -0.4619989196455578, -0.8315980553620042, -1.2011971910784502, -1.5707963267948968, -1.9403954625113429, -2.3099945982277887, -2.6795937339442353, -3.0491928696606814, -3.4187920053771275, -3.7883911410935736, -4.157990276810021, -4.527589412526466], "start_angle": [1.0163976232202272, 0.6467984875037809, 0.27719935178733474, -0.09239978392911147, -0.4619989196455578, -0.8315980553620042, -1.2011971910784502, -1.5707963267948968, -1.9403954625113429, -2.3099945982277887, -2.6795937339442353, -3.0491928696606814, -3.4187920053771275, -3.7883911410935736, -4.157990276810021, -4.527589412526466]}, "id": "df9a92a7-ea95-450e-a012-3f84ae0b2b54"}, "type": "ColumnDataSource", "id": "df9a92a7-ea95-450e-a012-3f84ae0b2b54"}, {"attributes": {"column_names": ["outer_radius", "start_angle", "y", "x", "end_angle"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "outer_radius": [159.49517010860004, 202.64889203801422, 201.03749361799578, 168.47495629784697, 227.18192696067584, 180.8815241029378, 201.03749361799578, 243.8781742537954, 162.35069204091852, 246.45224684191624, 201.03749361799578, 290.0, 290.0, 139.7867850155062, 123.8914127986476, 139.7867850155062], "end_angle": [1.121997376282069, 0.7523982405656227, 0.3827991048491765, 0.013199969132730319, -0.356399166583716, -0.7259983023001624, -1.0955974380166085, -1.465196573733055, -1.834795709449501, -2.2043948451659467, -2.5739939808823933, -2.9435931165988394, -3.3131922523152855, -3.6827913880317316, -4.052390523748179, -4.421989659464624], "start_angle": [1.0691974997511482, 0.6995983640347018, 0.3299992283182556, -0.039599907398190574, -0.4091990431146369, -0.7787981788310833, -1.1483973145475292, -1.5179964502639758, -1.8875955859804219, -2.2571947216968677, -2.6267938574133143, -2.9963929931297604, -3.3659921288462065, -3.7355912645626526, -4.1051904002791, -4.474789535995545]}, "id": "5d89d234-3325-4386-9edb-69827ed3fbcc"}, "type": "ColumnDataSource", "id": "5d89d234-3325-4386-9edb-69827ed3fbcc"}, {"attributes": {"line_color": {"value": "black"}, "line_alpha": {"value": 1.0}, "inner_radius": {"units": "data", "value": 80}, "tags": [], "doc": null, "start_angle": {"units": "rad", "field": "start_angle"}, "fill_alpha": {"value": 1.0}, "end_angle": {"units": "rad", "field": "end_angle"}, "outer_radius": {"units": "data", "value": 300}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "9199c992-a0c1-4fd5-b7f6-afa5d926faf7", "fill_color": {"value": "black"}}, "type": "AnnularWedge", "id": "9199c992-a0c1-4fd5-b7f6-afa5d926faf7"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "24016a91-5512-43c7-8919-bec08070f2b7"}, "type": "ToolEvents", "id": "24016a91-5512-43c7-8919-bec08070f2b7"}, {"attributes": {"tags": [], "text": {"field": "text"}, "text_font_size": {"value": "9pt"}, "text_align": "left", "text_alpha": {"value": 0.1}, "text_color": {"value": "black"}, "y": {"field": "y"}, "doc": null, "text_baseline": "middle", "x": {"field": "x"}, "id": "391e8322-8d65-46d8-bccf-52d93a74947b"}, "type": "Text", "id": "391e8322-8d65-46d8-bccf-52d93a74947b"}, {"attributes": {"line_color": {"value": "#0d3362"}, "line_alpha": {"value": 1.0}, "inner_radius": {"units": "data", "value": 90}, "tags": [], "doc": null, "start_angle": {"units": "rad", "field": "start_angle"}, "fill_alpha": {"value": 1.0}, "end_angle": {"units": "rad", "field": "end_angle"}, "outer_radius": {"units": "data", "field": "outer_radius"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "5c41112c-207b-42fa-95ef-3a16e4cd28a2", "fill_color": {"value": "#0d3362"}}, "type": "AnnularWedge", "id": "5c41112c-207b-42fa-95ef-3a16e4cd28a2"}, {"attributes": {"line_color": {"value": "#c64737"}, "line_alpha": {"value": 1.0}, "inner_radius": {"units": "data", "value": 90}, "tags": [], "doc": null, "start_angle": {"units": "rad", "field": "start_angle"}, "fill_alpha": {"value": 1.0}, "end_angle": {"units": "rad", "field": "end_angle"}, "outer_radius": {"units": "data", "field": "outer_radius"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "998957fd-e61c-4324-a751-6e71e1caba3c", "fill_color": {"value": "#c64737"}}, "type": "AnnularWedge", "id": "998957fd-e61c-4324-a751-6e71e1caba3c"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "inner_radius": {"units": "data", "value": 90}, "tags": [], "doc": null, "start_angle": {"units": "rad", "field": "start_angle"}, "fill_alpha": {"value": 0.1}, "end_angle": {"units": "rad", "field": "end_angle"}, "outer_radius": {"units": "data", "field": "outer_radius"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "cd732f7d-3627-47e4-812a-149d7f06f750", "fill_color": {"value": "#1f77b4"}}, "type": "AnnularWedge", "id": "cd732f7d-3627-47e4-812a-149d7f06f750"}, {"attributes": {"nonselection_glyph": {"type": "AnnularWedge", "id": "cd732f7d-3627-47e4-812a-149d7f06f750"}, "data_source": {"type": "ColumnDataSource", "id": "792e6bf0-27b0-4fe4-b804-80b1259ab150"}, "tags": [], "doc": null, "selection_glyph": null, "id": "03c826f3-bd88-4784-a26d-65f3d3e19b9a", "glyph": {"type": "AnnularWedge", "id": "5c41112c-207b-42fa-95ef-3a16e4cd28a2"}}, "type": "GlyphRenderer", "id": "03c826f3-bd88-4784-a26d-65f3d3e19b9a"}, {"attributes": {"column_names": ["y", "x", "radius"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "radius": [290.0, 239.66267873058516, 201.03749361799578, 168.47495629784697, 139.7867850155062, 113.85069566245176, 90.0]}, "id": "7d930bcf-cb40-4b32-a142-0ec4eb31a865"}, "type": "ColumnDataSource", "id": "7d930bcf-cb40-4b32-a142-0ec4eb31a865"}, {"subtype": "Figure", "type": "Plot", "id": "1f89cdb1-da08-4ebe-af39-ecae6fbd1ec4", "attributes": {"x_range": {"type": "Range1d", "id": "ebcc88fe-4356-4afc-b4a3-092cb716894d"}, "right": [], "tags": [], "outline_line_color": {"value": "black"}, "plot_width": 800, "renderers": [{"type": "GlyphRenderer", "id": "6fa0d4f6-0347-45eb-b36f-e646263d8315"}, {"type": "GlyphRenderer", "id": "e3c62973-43d6-4c1c-8122-a5693c0b80d7"}, {"type": "GlyphRenderer", "id": "03c826f3-bd88-4784-a26d-65f3d3e19b9a"}, {"type": "GlyphRenderer", "id": "8ee8ac90-221c-4452-b65c-fdd6e0483a0d"}, {"type": "GlyphRenderer", "id": "657c63fb-d590-4ca2-82cb-c283864a35cc"}, {"type": "GlyphRenderer", "id": "a3024011-ec01-45e5-8b9e-1164394730b5"}, {"type": "GlyphRenderer", "id": "5ddc2dd6-0746-4eca-8849-419f101cf47f"}, {"type": "GlyphRenderer", "id": "2b2b0c75-8a39-4a0b-956c-17ad8e003e6c"}, {"type": "GlyphRenderer", "id": "96c01180-0aee-4502-8311-616400852019"}, {"type": "GlyphRenderer", "id": "9eedadec-77c6-41c8-b51f-bde7622d6b84"}, {"type": "GlyphRenderer", "id": "c92f5d48-30e3-4e0f-99cd-07e83b31caf5"}, {"type": "GlyphRenderer", "id": "e1384bd7-55b7-498f-839f-c254f6ca8002"}, {"type": "GlyphRenderer", "id": "58106182-ce1e-4330-8669-fe5b8bc45a1d"}], "plot_height": 800, "tool_events": {"type": "ToolEvents", "id": "24016a91-5512-43c7-8919-bec08070f2b7"}, "tools": [{"type": "PanTool", "id": "f00b3462-7655-43a1-af4d-bd6174cfaaf7"}, {"type": "WheelZoomTool", "id": "fdcf3fa6-afb7-4439-8d88-8b2a1681c241"}, {"type": "BoxZoomTool", "id": "6e22886b-8b21-4baf-8088-0ecd324b6b3f"}, {"type": "PreviewSaveTool", "id": "1577666a-63e0-4651-bbaf-0d40fcf66000"}, {"type": "ResizeTool", "id": "8c3320c7-8f3d-4dda-8268-d88a6907d9af"}, {"type": "ResetTool", "id": "0b2ac3b6-e050-4f50-9439-ff812acf5922"}, {"type": "HelpTool", "id": "2b75a71b-8a14-4160-ab98-390c16d4d1fd"}], "min_border": 0, "title": "", "y_range": {"type": "Range1d", "id": "7a38a88a-363b-4f51-b2dc-94fa9f246da1"}, "background_fill": "#f0e1d2", "border_fill": "#f0e1d2", "id": "1f89cdb1-da08-4ebe-af39-ecae6fbd1ec4", "below": [], "extra_x_ranges": {}, "above": [], "doc": null, "left": [], "extra_y_ranges": {}}}, {"attributes": {"column_names": ["y", "angle", "text", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [270.4169465272632, 214.31258599399115, 129.2641231751961, 26.757824244357604, -79.36226712090402, -174.76404454998436, -246.56296936158805, -285.06219890833154, -285.06219890833154, -246.56296936158816, -174.76404454998436, -79.3622671209041, 26.75782424435747, 129.26412317519595, 214.31258599399118, 270.4169465272632], "text": ["Mycobacterium tuberculosis", "Salmonella schottmuelleri", "Proteus vulgaris", "Klebsiella pneumoniae", "Brucella abortus", "Pseudomonas aeruginosa", "Escherichia coli", "Salmonella (Eberthella) typhosa", "Aerobacter aerogenes", "Brucella antracis", "Streptococcus fecalis", "Staphylococcus aureus", "Staphylococcus albus", "Streptococcus hemolyticus", "Streptococcus viridans", "Diplococcus pneumoniae"], "angle": [1.2011971910784505, 0.831598055362004, 0.46199891964555784, 0.09239978392911166, -0.2771993517873347, -0.646798487503781, -1.016397623220227, -1.3859967589366735, 1.3859967589366735, 1.0163976232202274, 0.6467984875037809, 0.2771993517873348, -0.0923997839291113, -0.4619989196455574, -0.8315980553620044, -1.2011971910784505], "x": [104.76008319427433, 195.3717366575016, 259.59735449296807, 288.76291112556, 278.9294365201175, 231.42499591126946, 152.66532723443325, 53.28736016680539, -53.28736016680535, -152.6653272344331, -231.42499591126946, -278.9294365201175, -288.76291112556004, -259.5973544929681, -195.37173665750157, -104.76008319427436]}, "id": "25669cdf-a6fa-4259-b875-faa108738725"}, "type": "ColumnDataSource", "id": "25669cdf-a6fa-4259-b875-faa108738725"}, {"attributes": {"angle": {"units": "rad", "field": "angle"}, "tags": [], "text": {"field": "text"}, "text_font_size": {"value": "9pt"}, "text_align": "center", "text_alpha": {"value": 1.0}, "text_color": {"value": "black"}, "y": {"field": "y"}, "doc": null, "text_baseline": "middle", "x": {"field": "x"}, "id": "400b60b7-313d-46a8-b934-a648e1ea67d0"}, "type": "Text", "id": "400b60b7-313d-46a8-b934-a648e1ea67d0"}, {"attributes": {"angle": {"units": "rad", "field": "angle"}, "tags": [], "text": {"field": "text"}, "text_font_size": {"value": "9pt"}, "text_align": "center", "text_alpha": {"value": 0.1}, "text_color": {"value": "black"}, "y": {"field": "y"}, "doc": null, "text_baseline": "middle", "x": {"field": "x"}, "id": "b25c3c34-8034-4630-b443-d492ef3eb496"}, "type": "Text", "id": "b25c3c34-8034-4630-b443-d492ef3eb496"}, {"attributes": {"column_names": ["outer_radius", "start_angle", "y", "x", "end_angle"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "outer_radius": [148.09389702866355, 171.43725698767838, 201.03749361799578, 166.08111883679086, 159.49517010860004, 159.49517010860004, 180.8815241029378, 180.8815241029378, 168.47495629784697, 239.66267873058516, 168.47495629784697, 220.2583199527764, 201.03749361799578, 135.84452353427264, 139.7867850155062, 138.66430573015015], "end_angle": [1.2275971293439107, 0.8579979936274644, 0.48839885791101834, 0.1187997221945721, -0.2507994135218742, -0.6203985492383206, -0.9899976849547667, -1.3595968206712132, -1.7291959563876593, -2.098795092104105, -2.4683942278205517, -2.837993363536998, -3.207592499253444, -3.57719163496989, -3.9467907706863374, -4.316389906402782], "start_angle": [1.17479725281299, 0.8051981170965435, 0.43559898138009745, 0.06599984566365122, -0.30359929005279507, -0.6731984257692415, -1.0427975614856875, -1.412396697202134, -1.78199583291858, -2.151594968635026, -2.5211941043514727, -2.890793240067919, -3.260392375784365, -3.629991511500811, -3.9995906472172584, -4.369189782933703]}, "id": "6789643a-3550-4419-864d-c57da17f29b8"}, "type": "ColumnDataSource", "id": "6789643a-3550-4419-864d-c57da17f29b8"}, {"attributes": {"column_names": ["y", "x", "text"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [18, 0, -18], "x": [-15, -15, -15], "text": ["Penicillin", "Streptomycin", "Neomycin"]}, "id": "aa1efafd-5cf1-4eab-9d04-fd1f97674906"}, "type": "ColumnDataSource", "id": "aa1efafd-5cf1-4eab-9d04-fd1f97674906"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "inner_radius": {"units": "data", "value": 90}, "tags": [], "doc": null, "start_angle": {"units": "rad", "field": "start_angle"}, "fill_alpha": {"value": 0.1}, "end_angle": {"units": "rad", "field": "end_angle"}, "outer_radius": {"units": "data", "field": "outer_radius"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "823186a2-7065-42e1-9dce-d2313b9abca8", "fill_color": {"value": "#1f77b4"}}, "type": "AnnularWedge", "id": "823186a2-7065-42e1-9dce-d2313b9abca8"}, {"attributes": {"column_names": ["y", "x", "text"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [-370, -390], "x": [-30, -30], "text": ["Gram-positive", "Gram-negative"]}, "id": "a2619279-230a-41e8-90b5-f0e2f8dc8568"}, "type": "ColumnDataSource", "id": "a2619279-230a-41e8-90b5-f0e2f8dc8568"}, {"attributes": {"nonselection_glyph": {"type": "AnnularWedge", "id": "e0e2cde1-75ce-4eda-9286-ba0d8130b5d9"}, "data_source": {"type": "ColumnDataSource", "id": "df9a92a7-ea95-450e-a012-3f84ae0b2b54"}, "tags": [], "doc": null, "selection_glyph": null, "id": "2b2b0c75-8a39-4a0b-956c-17ad8e003e6c", "glyph": {"type": "AnnularWedge", "id": "9199c992-a0c1-4fd5-b7f6-afa5d926faf7"}}, "type": "GlyphRenderer", "id": "2b2b0c75-8a39-4a0b-956c-17ad8e003e6c"}, {"attributes": {"end": 420, "callback": null, "doc": null, "tags": [], "start": -420, "id": "ebcc88fe-4356-4afc-b4a3-092cb716894d"}, "type": "Range1d", "id": "ebcc88fe-4356-4afc-b4a3-092cb716894d"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "radius": {"units": "data", "value": 5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "b05b99c0-28b6-452b-9164-bb00507cacd4"}, "type": "Circle", "id": "b05b99c0-28b6-452b-9164-bb00507cacd4"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "b05b99c0-28b6-452b-9164-bb00507cacd4"}, "data_source": {"type": "ColumnDataSource", "id": "dbefbb2b-d65b-400d-b010-b51561b38c81"}, "tags": [], "doc": null, "selection_glyph": null, "id": "9eedadec-77c6-41c8-b51f-bde7622d6b84", "glyph": {"type": "Circle", "id": "76ec3948-5cf1-4ea7-917c-84258528d393"}}, "type": "GlyphRenderer", "id": "9eedadec-77c6-41c8-b51f-bde7622d6b84"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1f89cdb1-da08-4ebe-af39-ecae6fbd1ec4"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "f00b3462-7655-43a1-af4d-bd6174cfaaf7"}, "type": "PanTool", "id": "f00b3462-7655-43a1-af4d-bd6174cfaaf7"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "inner_radius": {"units": "data", "value": 80}, "tags": [], "doc": null, "start_angle": {"units": "rad", "field": "start_angle"}, "fill_alpha": {"value": 0.1}, "end_angle": {"units": "rad", "field": "end_angle"}, "outer_radius": {"units": "data", "value": 300}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "e0e2cde1-75ce-4eda-9286-ba0d8130b5d9", "fill_color": {"value": "#1f77b4"}}, "type": "AnnularWedge", "id": "e0e2cde1-75ce-4eda-9286-ba0d8130b5d9"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0}, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "3122ea12-c90b-49a1-80aa-cf13d06d95cc"}, "type": "Line", "id": "3122ea12-c90b-49a1-80aa-cf13d06d95cc"}, {"attributes": {"line_color": {"field": "line_color"}, "line_alpha": {"value": 1.0}, "fill_color": {"field": "fill_color"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "radius": {"units": "data", "value": 5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "76ec3948-5cf1-4ea7-917c-84258528d393"}, "type": "Circle", "id": "76ec3948-5cf1-4ea7-917c-84258528d393"}, {"attributes": {"column_names": ["y", "x", "line_color", "fill_color"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [-370, -390], "x": [-40, -40], "fill_color": ["#aeaeb8", "#e69584"], "line_color": ["#aeaeb8", "#e69584"]}, "id": "dbefbb2b-d65b-400d-b010-b51561b38c81"}, "type": "ColumnDataSource", "id": "dbefbb2b-d65b-400d-b010-b51561b38c81"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1f89cdb1-da08-4ebe-af39-ecae6fbd1ec4"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "fdcf3fa6-afb7-4439-8d88-8b2a1681c241"}, "type": "WheelZoomTool", "id": "fdcf3fa6-afb7-4439-8d88-8b2a1681c241"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1f89cdb1-da08-4ebe-af39-ecae6fbd1ec4"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "6e22886b-8b21-4baf-8088-0ecd324b6b3f"}, "type": "BoxZoomTool", "id": "6e22886b-8b21-4baf-8088-0ecd324b6b3f"}, {"attributes": {"nonselection_glyph": {"type": "AnnularWedge", "id": "823186a2-7065-42e1-9dce-d2313b9abca8"}, "data_source": {"type": "ColumnDataSource", "id": "6789643a-3550-4419-864d-c57da17f29b8"}, "tags": [], "doc": null, "selection_glyph": null, "id": "8ee8ac90-221c-4452-b65c-fdd6e0483a0d", "glyph": {"type": "AnnularWedge", "id": "998957fd-e61c-4324-a751-6e71e1caba3c"}}, "type": "GlyphRenderer", "id": "8ee8ac90-221c-4452-b65c-fdd6e0483a0d"}, {"attributes": {"line_color": {"field": "line_color"}, "line_alpha": {"value": 1.0}, "fill_color": {"field": "fill_color"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "height": {"units": "data", "value": 13}, "width": {"units": "data", "value": 30}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "0ed8c03f-b37b-4877-aeb9-270c9c2336a8"}, "type": "Rect", "id": "0ed8c03f-b37b-4877-aeb9-270c9c2336a8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1f89cdb1-da08-4ebe-af39-ecae6fbd1ec4"}, "tags": [], "doc": null, "id": "1577666a-63e0-4651-bbaf-0d40fcf66000"}, "type": "PreviewSaveTool", "id": "1577666a-63e0-4651-bbaf-0d40fcf66000"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1f89cdb1-da08-4ebe-af39-ecae6fbd1ec4"}, "tags": [], "doc": null, "id": "8c3320c7-8f3d-4dda-8268-d88a6907d9af"}, "type": "ResizeTool", "id": "8c3320c7-8f3d-4dda-8268-d88a6907d9af"}, {"attributes": {"tags": [], "text": {"field": "text"}, "text_font_size": {"value": "7pt"}, "text_align": "left", "text_alpha": {"value": 1.0}, "text_color": {"value": "black"}, "y": {"field": "y"}, "doc": null, "text_baseline": "middle", "x": {"field": "x"}, "id": "23bf48b5-5460-49c1-bbb5-4280fe8723ae"}, "type": "Text", "id": "23bf48b5-5460-49c1-bbb5-4280fe8723ae"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1f89cdb1-da08-4ebe-af39-ecae6fbd1ec4"}, "tags": [], "doc": null, "id": "0b2ac3b6-e050-4f50-9439-ff812acf5922"}, "type": "ResetTool", "id": "0b2ac3b6-e050-4f50-9439-ff812acf5922"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1f89cdb1-da08-4ebe-af39-ecae6fbd1ec4"}, "tags": [], "doc": null, "id": "2b75a71b-8a14-4160-ab98-390c16d4d1fd"}, "type": "HelpTool", "id": "2b75a71b-8a14-4160-ab98-390c16d4d1fd"}, {"attributes": {"nonselection_glyph": {"type": "Text", "id": "391e8322-8d65-46d8-bccf-52d93a74947b"}, "data_source": {"type": "ColumnDataSource", "id": "aa1efafd-5cf1-4eab-9d04-fd1f97674906"}, "tags": [], "doc": null, "selection_glyph": null, "id": "58106182-ce1e-4330-8669-fe5b8bc45a1d", "glyph": {"type": "Text", "id": "198748a7-3ecc-4935-8ded-0b3855199c6a"}}, "type": "GlyphRenderer", "id": "58106182-ce1e-4330-8669-fe5b8bc45a1d"}, {"attributes": {"line_color": {"value": "black"}, "line_alpha": {"value": 1.0}, "inner_radius": {"units": "data", "value": 90}, "tags": [], "doc": null, "start_angle": {"units": "rad", "field": "start_angle"}, "fill_alpha": {"value": 1.0}, "end_angle": {"units": "rad", "field": "end_angle"}, "outer_radius": {"units": "data", "field": "outer_radius"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "183e3bf4-2349-444c-aa8e-3bd4c408a6bf", "fill_color": {"value": "black"}}, "type": "AnnularWedge", "id": "183e3bf4-2349-444c-aa8e-3bd4c408a6bf"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], "x": [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]}, "id": "37369dc7-3012-4c6c-919d-c79240578061"}, "type": "ColumnDataSource", "id": "37369dc7-3012-4c6c-919d-c79240578061"}, {"attributes": {"nonselection_glyph": {"type": "Rect", "id": "81fb683a-f116-4f86-a8be-6055c2f733cb"}, "data_source": {"type": "ColumnDataSource", "id": "edee5407-e012-4322-a4c8-552c4b76cff5"}, "tags": [], "doc": null, "selection_glyph": null, "id": "e1384bd7-55b7-498f-839f-c254f6ca8002", "glyph": {"type": "Rect", "id": "0ed8c03f-b37b-4877-aeb9-270c9c2336a8"}}, "type": "GlyphRenderer", "id": "e1384bd7-55b7-498f-839f-c254f6ca8002"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "e7cad608-3927-46c3-b510-a635e33f0dea"}, "type": "Line", "id": "e7cad608-3927-46c3-b510-a635e33f0dea"}, {"attributes": {"nonselection_glyph": {"type": "Text", "id": "a0a54288-9df8-4b35-82ae-c2f7089290f6"}, "data_source": {"type": "ColumnDataSource", "id": "a2619279-230a-41e8-90b5-f0e2f8dc8568"}, "tags": [], "doc": null, "selection_glyph": null, "id": "c92f5d48-30e3-4e0f-99cd-07e83b31caf5", "glyph": {"type": "Text", "id": "23bf48b5-5460-49c1-bbb5-4280fe8723ae"}}, "type": "GlyphRenderer", "id": "c92f5d48-30e3-4e0f-99cd-07e83b31caf5"}, {"attributes": {"tags": [], "text": {"field": "text"}, "text_font_size": {"value": "9pt"}, "text_align": "left", "text_alpha": {"value": 1.0}, "text_color": {"value": "black"}, "y": {"field": "y"}, "doc": null, "text_baseline": "middle", "x": {"field": "x"}, "id": "198748a7-3ecc-4935-8ded-0b3855199c6a"}, "type": "Text", "id": "198748a7-3ecc-4935-8ded-0b3855199c6a"}, {"attributes": {"column_names": ["y", "x", "line_color", "fill_color"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [18, 0, -18], "x": [-40, -40, -40], "fill_color": ["#0d3362", "#c64737", "black"], "line_color": ["#0d3362", "#c64737", "black"]}, "id": "edee5407-e012-4322-a4c8-552c4b76cff5"}, "type": "ColumnDataSource", "id": "edee5407-e012-4322-a4c8-552c4b76cff5"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "e7cad608-3927-46c3-b510-a635e33f0dea"}, "data_source": {"type": "ColumnDataSource", "id": "37369dc7-3012-4c6c-919d-c79240578061"}, "tags": [], "doc": null, "selection_glyph": null, "id": "6fa0d4f6-0347-45eb-b36f-e646263d8315", "glyph": {"type": "Line", "id": "3122ea12-c90b-49a1-80aa-cf13d06d95cc"}}, "type": "GlyphRenderer", "id": "6fa0d4f6-0347-45eb-b36f-e646263d8315"}, {"attributes": {"line_color": {"value": "white"}, "line_alpha": {"value": 1.0}, "fill_color": null, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "radius": {"units": "data", "field": "radius"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "144faf3f-f092-492f-86c0-2e8871c20da6"}, "type": "Circle", "id": "144faf3f-f092-492f-86c0-2e8871c20da6"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "height": {"units": "data", "value": 13}, "width": {"units": "data", "value": 30}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "81fb683a-f116-4f86-a8be-6055c2f733cb"}, "type": "Rect", "id": "81fb683a-f116-4f86-a8be-6055c2f733cb"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "radius": {"units": "data", "field": "radius"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "3f21591c-3438-4c4b-82b8-809d5b9612a6"}, "type": "Circle", "id": "3f21591c-3438-4c4b-82b8-809d5b9612a6"}, {"attributes": {"nonselection_glyph": {"type": "Text", "id": "7ef476b3-78f7-4437-a3a1-26afecc3a7be"}, "data_source": {"type": "ColumnDataSource", "id": "6ea51bd1-ebfe-471d-aa0c-92f4760deab5"}, "tags": [], "doc": null, "selection_glyph": null, "id": "5ddc2dd6-0746-4eca-8849-419f101cf47f", "glyph": {"type": "Text", "id": "b38fe39c-f384-4c19-8198-9be63faf7482"}}, "type": "GlyphRenderer", "id": "5ddc2dd6-0746-4eca-8849-419f101cf47f"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "3f21591c-3438-4c4b-82b8-809d5b9612a6"}, "data_source": {"type": "ColumnDataSource", "id": "7d930bcf-cb40-4b32-a142-0ec4eb31a865"}, "tags": [], "doc": null, "selection_glyph": null, "id": "a3024011-ec01-45e5-8b9e-1164394730b5", "glyph": {"type": "Circle", "id": "144faf3f-f092-492f-86c0-2e8871c20da6"}}, "type": "GlyphRenderer", "id": "a3024011-ec01-45e5-8b9e-1164394730b5"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "inner_radius": {"units": "data", "value": 90}, "tags": [], "doc": null, "start_angle": {"units": "rad", "field": "start_angle"}, "fill_alpha": {"value": 0.1}, "end_angle": {"units": "rad", "field": "end_angle"}, "outer_radius": {"units": "data", "field": "outer_radius"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "fd811cfd-ef60-44d4-befc-3f1620544fff", "fill_color": {"value": "#1f77b4"}}, "type": "AnnularWedge", "id": "fd811cfd-ef60-44d4-befc-3f1620544fff"}, {"attributes": {"column_names": ["start_angle", "y", "x", "end_angle", "line_color", "fill_color"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"line_color": ["#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8"], "fill_color": ["#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8"], "start_angle": [1.0163976232202272, 0.6467984875037809, 0.27719935178733474, -0.09239978392911147, -0.4619989196455578, -0.8315980553620042, -1.2011971910784502, -1.5707963267948968, -1.9403954625113429, -2.3099945982277887, -2.6795937339442353, -3.0491928696606814, -3.4187920053771275, -3.7883911410935736, -4.157990276810021, -4.527589412526466], "end_angle": [1.3859967589366735, 1.0163976232202272, 0.646798487503781, 0.2771993517873348, -0.09239978392911152, -0.46199891964555784, -0.8315980553620039, -1.2011971910784505, -1.5707963267948966, -1.9403954625113427, -2.309994598227789, -2.6795937339442353, -3.0491928696606814, -3.4187920053771275, -3.7883911410935744, -4.15799027681002], "y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, "id": "6d230cef-6457-4a4e-82fc-b1bdf5b5efb2"}, "type": "ColumnDataSource", "id": "6d230cef-6457-4a4e-82fc-b1bdf5b5efb2"}, {"attributes": {"tags": [], "text": {"field": "text"}, "text_font_size": {"value": "8pt"}, "text_align": "center", "text_alpha": {"value": 0.1}, "text_color": {"value": "black"}, "y": {"field": "y"}, "doc": null, "text_baseline": "middle", "x": {"field": "x"}, "id": "7ef476b3-78f7-4437-a3a1-26afecc3a7be"}, "type": "Text", "id": "7ef476b3-78f7-4437-a3a1-26afecc3a7be"}, {"attributes": {"line_color": {"field": "line_color"}, "line_alpha": {"value": 1.0}, "inner_radius": {"units": "data", "value": 90}, "tags": [], "doc": null, "start_angle": {"units": "rad", "field": "start_angle"}, "fill_alpha": {"value": 1.0}, "end_angle": {"units": "rad", "field": "end_angle"}, "outer_radius": {"units": "data", "value": 290}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "d9f1ad4c-0ba0-4f4e-9163-a69aee4d257a", "fill_color": {"field": "fill_color"}}, "type": "AnnularWedge", "id": "d9f1ad4c-0ba0-4f4e-9163-a69aee4d257a"}, {"attributes": {"tags": [], "text": {"field": "text"}, "text_font_size": {"value": "7pt"}, "text_align": "left", "text_alpha": {"value": 0.1}, "text_color": {"value": "black"}, "y": {"field": "y"}, "doc": null, "text_baseline": "middle", "x": {"field": "x"}, "id": "a0a54288-9df8-4b35-82ae-c2f7089290f6"}, "type": "Text", "id": "a0a54288-9df8-4b35-82ae-c2f7089290f6"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "inner_radius": {"units": "data", "value": 90}, "tags": [], "doc": null, "start_angle": {"units": "rad", "field": "start_angle"}, "fill_alpha": {"value": 0.1}, "end_angle": {"units": "rad", "field": "end_angle"}, "outer_radius": {"units": "data", "value": 290}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "ffc2f0c9-2667-41bc-9fd5-5869932d426e", "fill_color": {"value": "#1f77b4"}}, "type": "AnnularWedge", "id": "ffc2f0c9-2667-41bc-9fd5-5869932d426e"}, {"attributes": {"tags": [], "text": {"field": "text"}, "text_font_size": {"value": "8pt"}, "text_align": "center", "text_alpha": {"value": 1.0}, "text_color": {"value": "black"}, "y": {"field": "y"}, "doc": null, "text_baseline": "middle", "x": {"field": "x"}, "id": "b38fe39c-f384-4c19-8198-9be63faf7482"}, "type": "Text", "id": "b38fe39c-f384-4c19-8198-9be63faf7482"}, {"attributes": {"nonselection_glyph": {"type": "AnnularWedge", "id": "ffc2f0c9-2667-41bc-9fd5-5869932d426e"}, "data_source": {"type": "ColumnDataSource", "id": "6d230cef-6457-4a4e-82fc-b1bdf5b5efb2"}, "tags": [], "doc": null, "selection_glyph": null, "id": "e3c62973-43d6-4c1c-8122-a5693c0b80d7", "glyph": {"type": "AnnularWedge", "id": "d9f1ad4c-0ba0-4f4e-9163-a69aee4d257a"}}, "type": "GlyphRenderer", "id": "e3c62973-43d6-4c1c-8122-a5693c0b80d7"}, {"attributes": {"column_names": ["y", "text", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [290.0, 239.66267873058516, 201.03749361799578, 168.47495629784697, 139.7867850155062, 113.85069566245176], "text": ["0.001", "0.01", "0.1", "1.0", "10.0", "100.0"], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, "id": "6ea51bd1-ebfe-471d-aa0c-92f4760deab5"}, "type": "ColumnDataSource", "id": "6ea51bd1-ebfe-471d-aa0c-92f4760deab5"}, {"attributes": {"end": 420, "callback": null, "doc": null, "tags": [], "start": -420, "id": "7a38a88a-363b-4f51-b2dc-94fa9f246da1"}, "type": "Range1d", "id": "7a38a88a-363b-4f51-b2dc-94fa9f246da1"}, {"attributes": {"nonselection_glyph": {"type": "Text", "id": "b25c3c34-8034-4630-b443-d492ef3eb496"}, "data_source": {"type": "ColumnDataSource", "id": "25669cdf-a6fa-4259-b875-faa108738725"}, "tags": [], "doc": null, "selection_glyph": null, "id": "96c01180-0aee-4502-8311-616400852019", "glyph": {"type": "Text", "id": "400b60b7-313d-46a8-b934-a648e1ea67d0"}}, "type": "GlyphRenderer", "id": "96c01180-0aee-4502-8311-616400852019"}, {"attributes": {"nonselection_glyph": {"type": "AnnularWedge", "id": "fd811cfd-ef60-44d4-befc-3f1620544fff"}, "data_source": {"type": "ColumnDataSource", "id": "5d89d234-3325-4386-9edb-69827ed3fbcc"}, "tags": [], "doc": null, "selection_glyph": null, "id": "657c63fb-d590-4ca2-82cb-c283864a35cc", "glyph": {"type": "AnnularWedge", "id": "183e3bf4-2349-444c-aa8e-3bd4c408a6bf"}}, "type": "GlyphRenderer", "id": "657c63fb-d590-4ca2-82cb-c283864a35cc"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("1b15b84a-41a1-4daf-b5c6-f1244b6d5d3a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("1b15b84a-41a1-4daf-b5c6-f1244b6d5d3a", all_models);
    });
  }

}(this));