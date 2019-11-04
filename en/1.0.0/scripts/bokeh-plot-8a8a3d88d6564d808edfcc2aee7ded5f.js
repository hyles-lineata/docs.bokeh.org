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
      };var element = document.getElementById("b6e2b474-017b-46ac-b76b-3ea2f3ce2005");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b6e2b474-017b-46ac-b76b-3ea2f3ce2005' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"65b19fd6-10f1-4d42-b303-b0bdbb8026b4":{"roots":{"references":[{"attributes":{},"id":"5791","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"5796","type":"PolyAnnotation"},{"attributes":{},"id":"5781","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5795","type":"LassoSelectTool"}]},"id":"5798","type":"Toolbar"},{"attributes":{},"id":"5818","type":"Selection"},{"attributes":{"callback":null},"id":"5779","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"color"},"line_alpha":{"value":0.4},"line_color":{"field":"color"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"5801","type":"Circle"},{"attributes":{"callback":{"id":"5811","type":"CustomJS"},"data":{"color":["navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy"],"x":[0.702960901509787,0.38223707600192913,0.9765069491507262,0.012167073321975086,0.9633833377345263,0.7166211151319216,0.6362392320596488,0.4403305600581632,0.2624703476812532,0.1078175843543171,0.5911386246432245,0.46769107463949966,0.8620347939617495,0.41485603317467123,0.9736537644345565,0.6715458025424343,0.8683356764720862,0.13959286276214822,0.3502763481710338,0.6076897206322787,0.9388415593374303,0.4356766226287574,0.7097458007560351,0.715500449471915,0.4255510188518379,0.6831705789277944,0.4260256304105434,0.42153431311689027,0.7607166927286335,0.8026772475878288,0.22997146156685644,0.08928063906578831,0.6168596768987646,0.3237442847816344,0.42822137803245053,0.657738677081174,0.39365388066084706,0.4594391393413474,0.569390046696827,0.21333381706399768,0.24766935904380127,0.8032957598994053,0.002573895308178753,0.6551052754093417,0.47601937351114487,0.07673691569206298,0.33092831837261416,0.9147378537901627,0.7991458324966666,0.3307416055007786,0.4748917310392631,0.8086475276524856,0.5444615449588894,0.32157381474429436,0.532613110902752,0.8357716601737639,0.5540248150023808,0.5545017576242725,0.02576486185249005,0.04451168466901878,0.04088176218325568,0.8693089656352965,0.22689946683233275,0.1564080287401759,0.8904432219949678,0.3398834445309088,0.08918740588610075,0.22048455438505665,0.7204105535043884,0.12210966773936782,0.410033464447625,0.029928015049999646,0.8645553578772266,0.9445327020062366,0.8856623484140951,0.17473969285460844,0.8473549959981096,0.5955341039777572,0.592815105719783,0.4515079950589712,0.8641715455393466,0.42699687495437233,0.39453330018592736,0.9957640814433347,0.9113822645726257,0.2148337281737368,0.772817035604153,0.4248379291629536,0.7648023261683727,0.6969112770814874,0.7095907800941711,0.09987636369832031,0.10369129950084854,0.8201308459380113,0.4244158015373135,0.4397413437040114,0.6585429238990468,0.39842965270382014,0.14656480480973189,0.2589455744348165,0.7491217019889985,0.007342957853916698,0.5053956465236933,0.8903843954340426,0.9028328234298707,0.25414206251833094,0.3802396496553807,0.641399868578702,0.8665682065939212,0.08698272048071998,0.8795930908441166,0.3471045822132117,0.8946470657117289,0.13318782850349142,0.03703743069235166,0.8126770712757732,0.9416476774978516,0.39074961093704264,0.2618883570616505,0.9611404036557011,0.9125183724462298,0.993256991264872,0.7142058410134886,0.1128292121971457,0.5063136089296969,0.6903023034769045,0.5801373020401803,0.9664551803693967,0.5080052705679251,0.3976317031151926,0.941271865297907,0.3584423982701752,0.8652665416293907,0.5942518048215418,0.5285419000675192,0.7357767036162909,0.3574939837738441,0.19963744639800896,0.27041531524472895,0.7672062525647781,0.45260025238490764,0.08636025944311387,0.5070845492936116,0.9086245428390106,0.438533216768176,0.9531824485161204,0.832353131663195,0.5456056152783395,0.7665136564324595,0.5007457482782027,0.7332295874705287,0.5276283215582844,0.9299712095248163,0.4686701180797006,0.9494408876725839,0.8747058707303633,0.4905179752573353,0.7501953712588912,0.9778641477733496,0.5528130928482357,0.8094880062046762,0.38215127774530566,0.027004889269242938,0.7814174633930187,0.14660911187850667,0.5573814848560208,0.12217202978518138,0.6243466571921902,0.9281143819113898,0.931793209090449,0.6908591550325219,0.10289460670332662,0.5717665540575775,0.8510217058992013,0.7997651713113736,0.12322506279299783,0.8526445671433398,0.23122481993603594,0.49212589588713385,0.7473404766004758,0.9524119424654858,0.5251322379555463,0.19530766099503838,0.9372662317227269,0.061806033413365435,0.02089843347856979,0.37354770957942385,0.2950647821807977,0.11914651656686281,0.9801382044860388,0.20374629576389702,0.8743473569333137,0.6545720681185722,0.28609785457882086,0.964052951991173,0.30043399586114083,0.9697996485076772,0.9702856179942083,0.7219596383192645,0.36231192432238435,0.5344436166534856,0.6778084298767378,0.027658636645263135,0.6470400850738198,0.269810681868878,0.15094630698488887,0.4781211024318537,0.7161047854169742,0.803239156059445,0.4303561797672024,0.7591320466827242,0.4608935410134841,0.6142128923138238,0.46932454855440886,0.5062967672464536,0.8240749007743021,0.10108411597190192,0.7132692509816201,0.8512721149182259,0.7882924202311566,0.617997075828014,0.47692987605129933,0.8099408161421318,0.7120642789333421,0.7821240209435293,0.879258763948523,0.5764329750525974,0.053241650486379744,0.9059223122523233,0.36232180845792106,0.8039517337746585,0.4782647128118793,0.6796222824502084,0.5320985031096808,0.6665757821911914,0.7231525928723297,0.5462932252135986,0.7492426320268826,0.4027343015037117,0.0822798279651108,0.34007390738360577,0.8850847704684469,0.026803417168276278,0.5660608471740332,0.2706109593864404,0.03698613516207727,0.03813979501167264,0.6610554622951789,0.36599444836063166,0.7894952703448352,0.9451080205679303,0.35906653632236796,0.5378713725900931,0.7506501556255147,0.02865461766679367,0.7623753474231156,0.0605474857317988,0.05102454106996013,0.4856968086787319,0.13461171480249523,0.9739746187717835,0.14183342309705205,0.29949685542906923,0.8722025219372537,0.22800057746592362,0.3264067482066656,0.9482689398300862,0.9992868243097379,0.5880427659841249,0.4978282229708717,0.33148850653308626,0.2517652890975669,0.5867506191940073,0.9602220393129228,0.877853302393325,0.20322111112746466,0.9923233795964351,0.8869121704740102,0.24877807501730764,0.6541521217449292,0.3802436054154714,0.14641862762721813,0.665630540270942,0.9853580671704754,0.9803813235686923,0.7090793094596,0.8428580075810846,0.6135570677927465,0.543456485453052,0.9916273093484792,0.1821564583919315,0.13732898970830154,0.5801532558842003,0.5041910432151393,0.5859636284558579,0.04648225712606102,0.09083814136861001,0.11921809336959988,0.6785146435024566,0.15635594942638908,0.40973309610184994,0.5164971386895254,0.7972691380837954,0.3197733767105535,0.5812654062612399,0.4558217788882659,0.6071611294703628,0.403886974349951,0.4501432915278444,0.06086032251801021,0.13197164819836316,0.9768370616932519,0.2060202275980696,0.3988449122447655,0.14703947760690417,0.9841516099546397,0.0648335806179614,0.3868961966692597,0.8778593242358961,0.1870744407260445,0.422915435541358,0.3624971137210069,0.6046642593206777,0.6020653930212687,0.27802933397739327,0.8457535051710621,0.963040399688183,0.7228781015253504,0.3963402138890785,0.7401553098379983,0.9491174807594044,0.38755961456735233,0.3698316597205571,0.47798315758412646,0.8271253399450089,0.4594882892567047,0.13518099926315574,0.4321225812872216,0.5490839736944682,0.7569558399464874,0.2919215673374399,0.9912363195339909,0.09268085375243951,0.44510379477380657,0.5340653662274675,0.022298265463621125,0.5062051601886185,0.8102076470356994,0.1967497370261,0.9506930658596405,0.13537703188294636,0.04732589009149024,0.5753725789800515,0.5816040746946437,0.6381240882168395,0.9780559298312526,0.77013342286106,0.8993661106604678,0.1138750475200816,0.41717564925017037,0.3843871293991802,0.7658084216605016,0.7684738589189234,0.2498305683813653,0.5020630515070723,0.42011000130380793,0.9126550771376489,0.43978847165698076,0.48673219709840243,0.5958364097136839,0.05976434044221879,0.17773689663717984,0.11759424038027244,0.08766607294601947,0.1930026991934083,0.049663575655952474,0.5955815032420988,0.0626033639181307,0.2052204362230745,0.8948902931890726,0.29559169950894726,0.22914532147265554,0.35896481341213415,0.9577913644690271,0.8120697282770766,0.9738890881575435,0.2606027760937354,0.22938645087224085,0.32710225280723504,0.3203683105498717,0.4462758459192314,0.659355370629717,0.7609399893416113,0.47284664201344706,0.283915767903698,0.843048114141732,0.13364044148749943,0.5576893738932007,0.1475031082029723,0.9412912369078,0.5815201625513233,0.8615446389017144,0.842361162928945,0.4096258422617409,0.5058771490534792,0.4103880379638386,0.7176040162475219,0.14827077299304603,0.08580011804796406,0.9299119828153304,0.7087135414299568,0.28360391143515185,0.6594125724867034,0.2184744458228427,0.8656095998881387,0.6623533117433245,0.599277215690327,0.6550897996966814,0.7879727993078727,0.2799108300595533,0.395943782708983,0.8954948135795562,0.5025464740008792,0.22472637009061913,0.39637687716284276,0.074886615278272,0.27804775268470905,0.9045297672784786,0.34941659646131895,0.7259537532310036,0.9277929529630757,0.9698716102259733,0.8725174151524022,0.4747142635361601,0.13979889469909834,0.2586478912655299,0.08683176049544639,0.5868662102722451,0.7502546211012088,0.32656015567859853,0.08867625984652383,0.09797168621381502,0.601940792343178,0.28447088821887156,0.7987555556023003,0.5170744623963067,0.9298341656239483,0.9912697816763193,0.02627075818413016,0.14091806514583083,0.02208772603893927,0.42532753002652024,0.9316036114084382,0.9488087309665808,0.26864436445290996,0.8429764091873894,0.785015655949871,0.012798523862488365,0.05864106247204981,0.324894585678142,0.04064027703847928,0.5198659449341408,0.41894098389157564,0.231480247706907,0.4460271693129767,0.004678669353668341,0.4481662121782698,0.1795860327163079,0.2279476319057545,0.6420198893072322,0.01706876906382382,0.17987848887190183,0.2006216489159799,0.6772787306661587,0.5047880411674678,0.10473884756570473,0.7579387876635795,0.8855453953229812,0.6166098574944275,0.4308161396346982,0.9991904747126938,0.7146395381192582,0.6763307347668683,0.8566272428634016,0.31743245734498016,0.10489365025730979,0.6500208022153242,0.6711481495828816,0.06437573694050602,0.024050102059342215,0.14329864802225512,0.7423653493019359,0.5601589525902645,0.39781899291300593,0.8465625652906448,0.4744529196858238,0.669808704373075,0.14572599074747106,0.9593911736770888,0.3709644804384348],"y":[0.37897094475792903,0.9555932686849351,0.4836060095920275,0.5198784726877091,0.35952397614450216,0.44634364691505113,0.18380327436017418,0.6123940011209378,0.9113707070953285,0.8797665373559235,0.5461688664577589,0.758094376611225,0.5312777374713585,0.004125747784274769,0.387624603828836,0.1671780940803782,0.9538190212658167,0.5279286863024469,0.4178197573065823,0.30732190926301506,0.6580236526139405,0.19704160211128652,0.30799270689562463,0.18259047215355328,0.41533106697125066,0.4899322345588646,0.821528727121116,0.9393783453519078,0.8730909315361469,0.19199236858295843,0.7237477556610642,0.9770377244376061,0.0357828577033944,0.5151815324498038,0.15644170322335083,0.5237971689286938,0.5117467942924554,0.7951255762643153,0.06017774264240383,0.39306384606229405,0.492329373175291,0.13727514374086958,0.6295562587898864,0.2347046525944746,0.48634813907153607,0.9588680834262494,0.6796061095850792,0.14335619567198732,0.8623112252607097,0.9089520075571111,0.3638779458691175,0.010722379905251933,0.12766665172275393,0.749187720201973,0.954544285092917,0.15402724786644006,0.9004406017361121,0.7368837864633377,0.928514290818796,0.8604765178780075,0.5619991050560862,0.9195445421922142,0.5066735375460053,0.9550685018345585,0.14734872984778602,0.7050100729738884,0.572181483911554,0.35481360204600265,0.8748545149240443,0.9885864483497856,0.7284320616117418,0.4056376045944077,0.5093351265284345,0.026137009496481678,0.8545392863952606,0.09395239954112289,0.3550103976115435,0.24109891767055613,0.8248976705152269,0.9729833400871867,0.5637587437520802,0.774550959064932,0.3674202128663938,0.2448019188025241,0.6556860968003589,0.21602894844424358,0.7307719957096563,0.18591732090495783,0.9758301606441588,0.8721041937716856,0.41668254338010313,0.783375612338629,0.26341783696152166,0.8206283348528352,0.3299345333167988,0.3012736863074088,0.6508220920129967,0.882223866735336,0.8930713563488207,0.15174216192281764,0.24138617324469702,0.40725707340524653,0.9888640245382111,0.7485223772098454,0.4902973002897204,0.007614467152759152,0.7201219618554764,0.6145697696757786,0.5213490486417993,0.7786446195416916,0.12102136674520392,0.23222824240232787,0.6061753724997708,0.2576078505696314,0.9434253244806057,0.4145834051469446,0.07424848801474138,0.7333336797791066,0.815212150863074,0.20737350294855028,0.0362698511734294,0.2414246919794314,0.305269777240873,0.08125414132617026,0.5694910704419154,0.3758016399170768,0.031140386530620012,0.3801098955362744,0.4134615180478648,0.46091700610399977,0.38110817005192854,0.1543058740471881,0.425804791074312,0.3163716057484416,0.00804729116436187,0.49436163860210125,0.42995500584790003,0.8792801396037228,0.6188411778496556,0.9800008948893937,0.23832698174734712,0.3394298098564177,0.35026809346442755,0.09416398215693833,0.17556298829531136,0.7522230846760684,0.556698213379123,0.9343391767921511,0.7036551926399429,0.1966609151411216,0.6353184813699723,0.6666110365358947,0.2773450973949271,0.30327871428711384,0.9659433197851347,0.2764727124473495,0.582717235024847,0.28836967696273763,0.0884444381051761,0.22813868420283656,0.9353764524048074,0.8379030866492376,0.7235489981651835,0.1634348785524654,0.546526995192453,0.8014491349406848,0.8254232971905464,0.6919610590921158,0.649445394412081,0.3738727433439606,0.5508296858320291,0.03414846076386413,0.7577352450103935,0.779803033576886,0.8662553528267739,0.6512293291084624,0.5533547181360594,0.5308782855291679,0.691240772066819,0.18442667789750666,0.29909880209387296,0.9678752731638101,0.08309383301406648,0.553178157361684,0.8868557771056405,0.7307803017625972,0.5774419058429794,0.35830252059584977,0.14497989426936064,0.48808746221182,0.47496405883890336,0.4350682296296704,0.026622419828861155,0.7233979369926943,0.5777501938826344,0.4311424759410337,0.7536448225079748,0.9960613203148562,0.1855230519114276,0.5037209636443641,0.3299015345851669,0.25760689313737606,0.5888292303872696,0.6830766689355141,0.8625546891226435,0.18324772505218279,0.6024749123251067,0.368976705268268,0.6325349599810481,0.787267047269216,0.0698671550766583,0.673594238133549,0.03821944810622513,0.39061111495877987,0.20804453724768912,0.43622260141838065,0.2865638179031962,0.4646883737059929,0.36714518480267644,0.9994443173813399,0.7109834227897665,0.017443895568433065,0.6644406898788663,0.9121519319103917,0.4911506236515818,0.43022050176816795,0.8571463216985967,0.4365676366349147,0.6314137724473133,0.6308848686275259,0.9390668972656067,0.9883954910908934,0.12057235326162963,0.7751438799314722,0.6631874257670948,0.7314337653056091,0.12845439238016654,0.9358622608555067,0.814920100430291,0.01631605120908719,0.7546403628838309,0.6125020221321475,0.9183885306833602,0.8347252059545742,0.4042845241806715,0.23638426278699565,0.7472810196220799,0.9753498352959925,0.7929206043870377,0.9227840008834814,0.34480080386539835,0.04818054200583566,0.8749751165473807,0.6197615718900075,0.9786910950119669,0.30824804501264114,0.18260744792898953,0.0072334684614429046,0.3232141081930008,0.3315412790839636,0.6602779791006657,0.1317085366215489,0.3168648640885996,0.2738581123725359,0.9500115164332832,0.49864752886520514,0.741082288135568,0.07086548966753903,0.9007907803030336,0.38542389077994144,0.9014525078026179,0.6898332654991404,0.6274126309519197,0.8654002499447093,0.6641882447087311,0.043876586595142486,0.892374934467521,0.9599956028555684,0.8202474231074242,0.535157332504324,0.860586955773034,0.047362885365487384,0.8433096523560747,0.936335966487708,0.8833700262812468,0.796804968741552,0.02822818395154647,0.16812223443651741,0.9568884763951122,0.20978282101648893,0.48584961973604124,0.23627930507086425,0.8160584058996377,0.7924483241506606,0.3150337166802758,0.9600700822488969,0.07129825069651874,0.0055300097490995626,0.9529092671823681,0.873928031956564,0.8525145158099912,0.8942292709984564,0.3469309390639779,0.34649142938910393,0.8569308992624726,0.3881792598942656,0.9433299374857339,0.061587688268844754,0.44295426540884897,0.4908733513267598,0.1734938727697568,0.8910180866861489,0.01395743953393458,0.5455613011445729,0.8583370623456369,0.21272105052226487,0.3457779301713425,0.6290596753697706,0.342561801727602,0.13183196713264256,0.9837923881170774,0.9295349087044922,0.5087502135467127,0.6560649173579025,0.9926657068868262,0.38380577771052615,0.7484090357758312,0.8774042989649529,0.7731755693499275,0.286545267477068,0.22624834507952352,0.15606707162705602,0.7338144628287795,0.937606599440641,0.05965890858076173,0.333978531499166,0.27689364185260634,0.7239194973627823,0.37492289509271914,0.9206423590500862,0.9670123268751273,0.41439234191735375,0.4200326887834971,0.5622713857903993,0.1613608646589103,0.9607802092178329,0.7351289951892164,0.9967779182389562,0.5984300882987679,0.24032413764883842,0.7662314339816748,0.6138819161185765,0.06863950018128884,0.041553189919809164,0.3186571799396235,0.37013054559540204,0.13914288681373066,0.5182436795655517,0.5312813302093888,0.2207409776706457,0.16592615853710924,0.4160317827868144,0.7127807962108027,0.9081649089452245,0.09231245216886863,0.7684908671279737,0.45257811227665956,0.424318241498715,0.789482268852015,0.43409153360773645,0.25220532841621557,0.20999691611220617,0.5577838635746051,0.4614390121595563,0.20662840366643198,0.438551152444857,0.8290000925075118,0.2865315702064295,0.5852781448917056,0.337625274185407,0.6975736117157515,0.7811460088022983,0.268402716956741,0.7118337390982071,0.8742101403122404,0.8750779628770168,0.90839159894629,0.16523667498959016,0.9277236748354986,0.7882611270997272,0.9904622353857016,0.35842043246528466,0.5904989283980336,0.1566820711011031,0.8005851495554404,0.7515761885003109,0.5053007033208325,0.678018194050904,0.5810065599169643,0.8296361491623726,0.8430335344687152,0.5914512462692574,0.9876643340779359,0.9833730107279388,0.08782558792377526,0.8700694267906671,0.1556328637447023,0.9446916361167317,0.07799214290268819,0.8995817134295604,0.6569944532825619,0.965332744969912,0.40889448952883833,0.7298095289945327,0.6860875211243024,0.29015129244208904,0.06894895029817694,0.30517220167356995,0.45995610765630124,0.40558153411159714,0.4562015869417745,0.5707920061788535,0.5725416664636107,0.7063333501816594,0.07133723455452079,0.7879242550285722,0.8158558145594975,0.9753073283511506,0.039970264996622706,0.16569628554580063,0.5372862254116262,0.33392647501521455,0.021743211839297283,0.6603227986077297,0.9987412907436215,0.9728390647420084,0.7105435394641101,0.29805160214190696,0.8542249959565652,0.11341172309862324,0.6586230484203419,0.27973525178048386,0.7690452879305522,0.661374835134982,0.5957195568857016,0.5956385745357046,0.9572064048368459,0.08021704437881894,0.8260806166633903,0.3506433346976763,0.5929832119362266,0.8753358639448056,0.5752520127654853,0.5123393296970677,0.8359888438304036,0.9692207202562889,0.43079512609536375,0.6209774294713457,0.9945863607995931,0.8792899612830924,0.11937106310527024,0.11628630051634958,0.493132472952883,0.1116446533247889,0.3196813700941731,0.11624334747947063,0.3353210251258255,0.02334008944608912,0.6992065277892643,0.2211622808355297,0.5557098244192487,0.1299165853489308,0.9023727096889348,0.697972407985635,0.8351777791257775,0.606924096674915,0.31099546429669334,0.5625066442703743,0.7270547446886483,0.6979839855749949,0.7066650876558965,0.2394779720315945,0.10134941943496079,0.819765544167984,0.2070210544348875,0.7980335249193764,0.21920549015240698,0.6560316340606787,0.027545722886079704,0.8743025853381674,0.4725226321771674,0.006966031998118738,0.9040728421887858,0.8146960393427163,0.4844468659926344,0.5373172712426798,0.011823976264814795,0.5784971503794424,0.716137755531132,0.8138056814149439]},"selected":{"id":"5818","type":"Selection"},"selection_policy":{"id":"5819","type":"UnionRenderers"}},"id":"5773","type":"ColumnDataSource"},{"attributes":{},"id":"5786","type":"BasicTicker"},{"attributes":{"plot":{"id":"5775","subtype":"Figure","type":"Plot"},"ticker":{"id":"5786","type":"BasicTicker"}},"id":"5789","type":"Grid"},{"attributes":{"callback":null},"id":"5777","type":"DataRange1d"},{"attributes":{},"id":"5820","type":"Selection"},{"attributes":{},"id":"5819","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"5808","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"5802","type":"Circle"},{"attributes":{"line_alpha":0.6,"line_color":"orange","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"5807","type":"Line"},{"attributes":{"source":{"id":"5805","type":"ColumnDataSource"}},"id":"5810","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"5775","subtype":"Figure","type":"Plot"},"ticker":{"id":"5791","type":"BasicTicker"}},"id":"5794","type":"Grid"},{"attributes":{},"id":"5783","type":"LinearScale"},{"attributes":{"data_source":{"id":"5773","type":"ColumnDataSource"},"glyph":{"id":"5801","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5802","type":"Circle"},"selection_glyph":null,"view":{"id":"5804","type":"CDSView"}},"id":"5803","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"5814","type":"BasicTickFormatter"},"plot":{"id":"5775","subtype":"Figure","type":"Plot"},"ticker":{"id":"5786","type":"BasicTicker"}},"id":"5785","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5805","type":"ColumnDataSource"},"glyph":{"id":"5807","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5808","type":"Line"},"selection_glyph":null,"view":{"id":"5810","type":"CDSView"}},"id":"5809","type":"GlyphRenderer"},{"attributes":{},"id":"5821","type":"UnionRenderers"},{"attributes":{"args":{"s2":{"id":"5805","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected.indices;\\n        var d = cb_obj.data;\\n        var ym = 0\\n\\n        if (inds.length == 0)\\n            return;\\n\\n        for (var i = 0; i &lt; d[&#x27;color&#x27;].length; i++) {\\n            d[&#x27;color&#x27;][i] = \\"navy\\"\\n        }\\n        for (var i = 0; i &lt; inds.length; i++) {\\n            d[&#x27;color&#x27;][inds[i]] = \\"firebrick\\"\\n            ym += d[&#x27;y&#x27;][inds[i]]\\n        }\\n\\n        ym /= inds.length\\n        s2.data[&#x27;ym&#x27;] = [ym, ym]\\n\\n        cb_obj.change.emit();\\n        s2.change.emit();\\n    "},"id":"5811","type":"CustomJS"},{"attributes":{},"id":"5814","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"5816","type":"BasicTickFormatter"},"plot":{"id":"5775","subtype":"Figure","type":"Plot"},"ticker":{"id":"5791","type":"BasicTicker"}},"id":"5790","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"5796","type":"PolyAnnotation"}},"id":"5795","type":"LassoSelectTool"},{"attributes":{"callback":null,"data":{"x":[0,1],"ym":[0.5,0.5]},"selected":{"id":"5820","type":"Selection"},"selection_policy":{"id":"5821","type":"UnionRenderers"}},"id":"5805","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"5785","type":"LinearAxis"}],"left":[{"id":"5790","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5785","type":"LinearAxis"},{"id":"5789","type":"Grid"},{"id":"5790","type":"LinearAxis"},{"id":"5794","type":"Grid"},{"id":"5796","type":"PolyAnnotation"},{"id":"5803","type":"GlyphRenderer"},{"id":"5809","type":"GlyphRenderer"}],"title":{"id":"5774","type":"Title"},"toolbar":{"id":"5798","type":"Toolbar"},"x_range":{"id":"5777","type":"DataRange1d"},"x_scale":{"id":"5781","type":"LinearScale"},"y_range":{"id":"5779","type":"DataRange1d"},"y_scale":{"id":"5783","type":"LinearScale"}},"id":"5775","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5816","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Select Here"},"id":"5774","type":"Title"},{"attributes":{"source":{"id":"5773","type":"ColumnDataSource"}},"id":"5804","type":"CDSView"}],"root_ids":["5775"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"65b19fd6-10f1-4d42-b303-b0bdbb8026b4","roots":{"5775":"b6e2b474-017b-46ac-b76b-3ea2f3ce2005"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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