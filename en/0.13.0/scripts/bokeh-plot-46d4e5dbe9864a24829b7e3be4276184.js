(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("71e2cd0b-d8a3-48e8-b54e-8cd2c044e131");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71e2cd0b-d8a3-48e8-b54e-8cd2c044e131' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"98449151-4e50-42ea-8fc0-03b5360b83f2":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3e724ca7-afb0-458f-982d-c469fbc99581","type":"WheelZoomTool"},{"id":"9a6d7294-1390-4ace-b011-3753b546ee0b","type":"ResetTool"}]},"id":"9d834930-3816-4ece-b0af-410dfa084cbf","type":"Toolbar"},{"attributes":{"fill_color":{"field":"counts","transform":{"id":"e3dcf0ce-1936-4e24-aa65-8a358d25a3ea","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.1},"id":"951a8d7f-369c-4418-b6d0-7344467d7de5","type":"HexTile"},{"attributes":{"high":227,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"e3dcf0ce-1936-4e24-aa65-8a358d25a3ea","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"6eb14057-7e8a-4bb3-a089-dc300e17cc1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"896d1d46-cdc3-4f73-be47-e63f6e68bdc7","type":"BasicTicker"},"visible":false},"id":"cf3e9ce0-9692-4541-b55f-8ac827496274","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"16f36d78-0966-49c4-b282-6ca57a82d20b","type":"Title"},{"attributes":{},"id":"104ae3b3-4a2c-487d-b166-1a31222c4117","type":"BasicTickFormatter"},{"attributes":{},"id":"ea960d6f-e48a-42e2-86f5-a325fd10fe73","type":"BasicTicker"},{"attributes":{},"id":"9a6d7294-1390-4ace-b011-3753b546ee0b","type":"ResetTool"},{"attributes":{},"id":"3e724ca7-afb0-458f-982d-c469fbc99581","type":"WheelZoomTool"},{"attributes":{},"id":"896d1d46-cdc3-4f73-be47-e63f6e68bdc7","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c98dd0d9-d263-4ba3-9253-bda76367a226","type":"ColumnDataSource"},"glyph":{"id":"951a8d7f-369c-4418-b6d0-7344467d7de5","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"482a6cf7-8e11-4d4d-ad38-ae52f73f99a2","type":"HexTile"},"selection_glyph":null,"view":{"id":"823a8229-65dc-4787-a9c8-613f1cb7a008","type":"CDSView"}},"id":"e6b335d5-0a22-4d35-a139-55265854d13b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"408cbe7c-f5bf-4e9b-ad11-8ef0c1702e45","type":"DataRange1d"},{"attributes":{"formatter":{"id":"104ae3b3-4a2c-487d-b166-1a31222c4117","type":"BasicTickFormatter"},"plot":{"id":"6eb14057-7e8a-4bb3-a089-dc300e17cc1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea960d6f-e48a-42e2-86f5-a325fd10fe73","type":"BasicTicker"}},"id":"e30f56c2-f49c-4aa9-81de-fab2445782e3","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"6eb14057-7e8a-4bb3-a089-dc300e17cc1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea960d6f-e48a-42e2-86f5-a325fd10fe73","type":"BasicTicker"},"visible":false},"id":"0db5a798-69fb-420a-9bae-417af66172f6","type":"Grid"},{"attributes":{"callback":null,"data":{"counts":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,2,1,3,1,3,2,2,1,1,1,1,1,1,3,1,5,2,4,2,3,1,4,3,2,1,1,1,1,1,1,2,3,4,3,3,3,2,4,3,3,1,2,1,1,1,1,1,2,2,1,1,7,5,2,6,4,6,7,3,6,3,6,7,8,5,5,3,2,1,2,1,4,1,2,4,9,9,8,10,9,5,10,11,5,4,8,8,4,6,1,2,1,2,1,1,1,3,5,7,4,6,6,6,7,9,8,11,13,10,13,7,9,8,11,4,3,1,1,3,1,1,1,1,1,1,3,3,6,7,7,5,13,10,12,9,13,13,21,14,19,11,12,17,10,10,3,5,5,2,1,5,1,2,1,2,4,5,9,11,7,14,12,14,24,25,18,30,24,20,26,13,21,11,18,12,13,9,3,1,3,1,1,1,1,1,1,5,3,3,11,10,17,8,11,16,28,35,34,31,39,38,32,20,37,21,23,23,11,11,7,5,6,1,1,7,1,2,1,1,1,4,1,3,4,16,14,13,19,18,34,33,34,44,39,41,49,37,23,29,29,22,15,17,12,12,6,4,2,2,1,1,2,1,1,1,5,3,2,10,9,13,20,25,32,33,32,44,54,54,67,58,47,47,42,47,26,33,13,22,13,13,7,7,4,4,1,1,2,2,4,6,3,9,20,20,34,40,39,53,53,54,69,61,56,71,73,53,61,43,32,37,34,19,14,15,4,6,4,5,2,1,1,1,1,1,1,3,3,4,7,17,19,25,24,39,58,59,50,64,68,79,81,82,80,83,74,56,52,38,47,35,20,10,12,7,5,4,1,1,1,1,2,2,2,5,9,9,11,26,30,38,59,60,81,83,94,101,90,116,83,94,116,84,71,69,42,43,25,27,12,13,4,9,7,3,1,1,1,2,3,7,6,14,20,26,38,47,51,58,66,92,103,98,102,123,114,105,102,98,98,70,68,62,47,40,20,17,4,6,7,1,4,1,1,2,2,8,7,8,21,19,32,52,61,69,83,92,128,111,137,151,123,152,122,116,113,89,82,70,58,32,22,27,16,11,8,4,2,1,1,1,3,6,5,11,22,22,24,48,64,69,94,109,101,152,140,151,153,154,150,140,138,113,100,80,60,38,40,37,27,16,7,5,4,5,2,1,1,1,3,7,10,9,19,26,35,54,67,87,96,105,136,160,166,151,168,166,137,168,126,109,96,84,66,47,34,30,12,16,7,5,3,2,2,1,1,1,1,5,7,10,6,15,31,28,43,63,62,92,120,126,167,162,148,172,199,184,149,147,150,122,102,85,42,46,38,26,12,8,10,6,2,2,1,1,1,1,2,3,5,5,7,8,18,27,33,39,59,64,105,104,129,145,162,205,194,179,188,190,187,145,128,146,96,82,59,41,26,10,16,9,7,2,3,2,2,1,2,1,3,6,10,17,21,33,40,41,66,99,97,137,142,169,173,189,210,216,200,192,150,136,130,109,80,65,44,33,27,10,12,12,6,2,1,3,1,1,2,2,7,3,5,11,19,20,23,34,57,68,95,130,154,172,193,198,215,222,211,198,184,166,156,115,91,77,63,41,26,22,14,6,6,4,5,2,1,1,1,4,1,9,3,11,18,33,37,45,73,84,111,140,146,169,191,197,210,194,206,173,189,128,123,113,82,58,62,31,29,27,18,7,2,2,2,3,1,1,1,2,6,7,11,14,26,34,31,50,72,85,107,135,166,187,193,192,192,183,227,166,159,137,92,86,79,68,42,34,26,13,15,8,3,1,2,1,1,2,1,1,2,7,8,17,25,23,34,44,65,75,108,107,133,142,187,164,184,186,193,185,165,142,121,92,73,58,40,39,23,15,6,6,4,3,1,1,1,1,1,6,4,10,18,21,28,27,36,51,62,76,96,103,127,131,180,157,179,185,172,147,132,113,104,66,69,62,35,33,24,11,5,10,5,2,1,1,3,1,2,2,4,6,8,21,21,31,56,46,87,90,98,115,133,151,148,151,159,144,125,127,120,80,86,62,57,27,24,29,11,13,5,2,3,2,2,1,1,1,1,1,3,4,10,10,10,28,29,32,61,63,84,77,111,129,115,122,130,127,130,125,103,84,94,65,46,40,39,26,15,10,7,3,2,5,3,1,2,1,3,3,2,5,11,19,29,30,42,43,63,62,63,94,130,92,112,119,129,113,92,89,77,64,40,54,32,21,16,12,11,4,2,1,1,1,2,3,3,1,5,10,7,11,23,28,37,50,50,78,61,92,115,79,97,101,117,76,82,75,53,51,42,28,20,15,13,7,6,4,1,2,1,1,2,2,5,2,7,10,10,20,35,37,58,60,65,81,78,103,90,76,101,76,76,51,65,45,34,38,26,11,9,9,7,4,2,1,2,1,1,1,6,7,9,15,19,18,23,31,28,51,50,60,74,69,79,77,69,46,58,59,48,33,37,16,15,12,12,4,3,1,1,1,2,2,1,1,3,8,5,15,17,26,24,37,37,36,43,51,52,67,62,39,34,43,26,24,27,30,14,4,5,5,4,3,1,1,1,1,4,1,1,5,3,4,15,12,14,28,22,27,41,39,36,37,37,34,47,40,32,28,20,23,21,9,6,4,5,4,4,1,1,1,2,2,3,6,6,10,12,13,21,25,20,22,20,26,23,33,25,26,22,24,19,17,10,16,5,3,5,3,3,3,2,1,1,1,6,4,3,7,13,19,19,13,14,26,18,17,19,26,19,20,16,10,14,6,9,4,8,2,5,1,1,1,1,1,5,5,4,7,3,10,9,10,19,13,16,13,18,16,10,16,6,7,4,2,7,5,3,1,1,2,1,1,1,1,1,3,4,3,5,10,4,12,11,10,16,11,15,13,14,14,10,6,6,3,2,4,3,1,1,1,1,2,2,1,3,7,2,4,7,3,9,11,8,11,8,9,6,10,6,2,4,7,2,1,1,2,1,1,1,1,1,1,1,2,3,2,1,4,1,3,3,5,7,4,5,4,7,5,3,6,5,2,3,5,1,2,1,1,1,1,2,2,5,3,7,4,3,1,2,4,4,1,5,4,5,1,1,1,1,1,1,1,2,2,2,2,1,2,1,4,4,6,3,1,1,3,2,1,1,1,2,2,2,2,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2,2,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443,1444,1445],"q":[-27,-26,-26,-25,-25,-25,-24,-24,-24,-24,-24,-24,-23,-23,-23,-23,-23,-23,-23,-22,-22,-22,-22,-22,-22,-22,-22,-22,-21,-21,-21,-21,-21,-21,-21,-21,-21,-21,-21,-21,-21,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-19,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-18,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-17,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-16,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-14,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-13,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-4,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,24,24,24,26,26],"r":[15,9,12,7,18,20,-3,3,8,9,16,20,2,5,8,13,14,17,18,3,5,6,7,9,17,18,19,20,-1,3,6,8,11,12,13,14,15,17,21,23,24,-2,1,4,6,7,8,9,10,11,12,13,14,16,17,18,19,-3,0,1,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,20,-7,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,20,23,-4,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,-6,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,-9,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,25,-12,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,-14,-10,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,30,-17,-14,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,-16,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,-17,-16,-14,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,-19,-15,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,24,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,22,-18,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,24,-19,-17,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,26,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,22,-21,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,-21,-20,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,-23,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,-23,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,-23,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,-25,-22,-21,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,14,-24,-23,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,14,-23,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,9,10,12,-26,-24,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,12,13,15,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,12,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,-23,-22,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,8,10,-28,-22,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,9,-26,-24,-20,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,2,3,4,5,6,7,-25,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,9,-32,-24,-23,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,0,1,2,3,-22,-20,-19,-18,-17,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-3,-2,3,4,8,-25,-22,-21,-20,-19,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-5,-4,-3,0,3,-20,-19,-18,-17,-15,-12,-11,-10,-9,-7,-6,-4,1,-19,-18,-16,-12,-11,-10,-8,-5,-4,-3,-2,0,-19,-17,-14,-6,-5,-4,-15,-11,-9,-17,-10]},"selected":{"id":"8ff94367-5668-4661-9a91-226325ecbc17","type":"Selection"},"selection_policy":{"id":"b8e46b55-ad0b-4ac0-82a8-8e067a9c9235","type":"UnionRenderers"}},"id":"c98dd0d9-d263-4ba3-9253-bda76367a226","type":"ColumnDataSource"},{"attributes":{},"id":"f2c5f88d-4928-4fc6-807b-b6ba8770d098","type":"LinearScale"},{"attributes":{},"id":"117be3b8-6c60-437d-b456-d063fd0ff009","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.1},"id":"482a6cf7-8e11-4d4d-ad38-ae52f73f99a2","type":"HexTile"},{"attributes":{},"id":"5b47d14c-c285-4c1e-8829-622866b9156e","type":"BasicTickFormatter"},{"attributes":{},"id":"b8e46b55-ad0b-4ac0-82a8-8e067a9c9235","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"bf6bb14f-961e-4a20-b691-f6d9d02e5838","type":"DataRange1d"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"cc68b238-81e2-494f-9494-7a8d99e1fca6","type":"LinearAxis"}],"left":[{"id":"e30f56c2-f49c-4aa9-81de-fab2445782e3","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"cc68b238-81e2-494f-9494-7a8d99e1fca6","type":"LinearAxis"},{"id":"cf3e9ce0-9692-4541-b55f-8ac827496274","type":"Grid"},{"id":"e30f56c2-f49c-4aa9-81de-fab2445782e3","type":"LinearAxis"},{"id":"0db5a798-69fb-420a-9bae-417af66172f6","type":"Grid"},{"id":"e6b335d5-0a22-4d35-a139-55265854d13b","type":"GlyphRenderer"}],"title":{"id":"16f36d78-0966-49c4-b282-6ca57a82d20b","type":"Title"},"toolbar":{"id":"9d834930-3816-4ece-b0af-410dfa084cbf","type":"Toolbar"},"x_range":{"id":"408cbe7c-f5bf-4e9b-ad11-8ef0c1702e45","type":"DataRange1d"},"x_scale":{"id":"117be3b8-6c60-437d-b456-d063fd0ff009","type":"LinearScale"},"y_range":{"id":"bf6bb14f-961e-4a20-b691-f6d9d02e5838","type":"DataRange1d"},"y_scale":{"id":"f2c5f88d-4928-4fc6-807b-b6ba8770d098","type":"LinearScale"}},"id":"6eb14057-7e8a-4bb3-a089-dc300e17cc1c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8ff94367-5668-4661-9a91-226325ecbc17","type":"Selection"},{"attributes":{"source":{"id":"c98dd0d9-d263-4ba3-9253-bda76367a226","type":"ColumnDataSource"}},"id":"823a8229-65dc-4787-a9c8-613f1cb7a008","type":"CDSView"},{"attributes":{"formatter":{"id":"5b47d14c-c285-4c1e-8829-622866b9156e","type":"BasicTickFormatter"},"plot":{"id":"6eb14057-7e8a-4bb3-a089-dc300e17cc1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"896d1d46-cdc3-4f73-be47-e63f6e68bdc7","type":"BasicTicker"}},"id":"cc68b238-81e2-494f-9494-7a8d99e1fca6","type":"LinearAxis"}],"root_ids":["6eb14057-7e8a-4bb3-a089-dc300e17cc1c"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"98449151-4e50-42ea-8fc0-03b5360b83f2","roots":{"6eb14057-7e8a-4bb3-a089-dc300e17cc1c":"71e2cd0b-d8a3-48e8-b54e-8cd2c044e131"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();