/**
 * Created by Liuwei on 2016/8/9.
 */
/**
 * 动态设置地图dom高度
 */
$("#allmap").height($(window).height() - 170 + 'px');

/**
 * 模拟数据
 */
//var sites = {
//    "siteInfo": [
//        //{
//        //    "SiteNum": "20348100",
//        //    "SiteName": "滨海高速",
//        //    "SiteTypeID": "01",
//        //    "SiteType": "city",
//        //    "ProjNum": "13365268",
//        //    "ProjName": "滨海高速",
//        //    "Coordinates": "117.789627,38.224355",
//        //    "OHDetail": "",
//        //    "gifUrl": "../../../../../images/customs/map/site.png",
//        //    "siteImg": "./images/site0.jpg",
//        //    "towerHeight": "150",
//        //    "power": "200",
//        //    "labelPosition": "50, 0"
//        //},
//        {
//            "SiteNum": "20348100",
//            "SiteName": "承德市",
//            "SiteTypeID": "01",
//            "SiteType": "city",
//            "ProjNum": "13365268",
//            "ProjName": "联通1kW",
//            "Coordinates": "117.969484,40.959152",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/site.png",
//            "siteImg": "./images/site0.jpg",
//            "towerHeight": "150",
//            "power": "200",
//            "labelPosition": "-100, 0"
//        },
//        {
//            "SiteNum": "28852988",
//            "SiteName": "秦皇岛市",
//            "SiteTypeID": "01",
//            "SiteType": "city",
//            "ProjNum": "13365268",
//            "ProjName": "广电3KW",
//            "Coordinates": "119.608609,39.941594",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/site.png",
//            "siteImg": "./images/site1.jpg",
//            "towerHeight": "100",
//            "power": "100",
//            "labelPosition": "50,-0"
//        },
//        {
//            "SiteNum": "43688922",
//            "SiteName": "JK_001",
//            "SiteTypeID": "02",
//            "SiteType": "K2+200",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "117.998296,40.877289",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-70,30",
//            "alarmLevel": "3",
//            "alarmDirection": "left"
//        },
//        {
//            "SiteNum": "43688922",
//            "SiteName": "JK_002",
//            "SiteTypeID": "02",
//            "SiteType": "K6+700",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.066159,40.833412",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-70,30",
//            "alarmLevel": "3",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_003",
//            "SiteTypeID": "02",
//            "SiteType": "K11+400",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.154914,40.776097",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-70,30",
//            "alarmLevel": "1",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_004",
//            "SiteTypeID": "02",
//            "SiteType": "K18+500",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.223301,40.805639",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-70,-35",
//            "alarmLevel": "1",
//            "alarmDirection": "left"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_005",
//            "SiteTypeID": "02",
//            "SiteType": "K22+100",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.337924,40.785677",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-70,35",
//            "alarmLevel": "1",
//            "alarmDirection": "left"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "QD_001",
//            "SiteTypeID": "03",
//            "SiteType": "K22+500",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.350896,40.784939",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/sfz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "25,-35",
//            "alarmLevel": "1",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_006",
//            "SiteTypeID": "02",
//            "SiteType": "K28+150",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.44778,40.78664",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "25, -35",
//            "alarmLevel": "1",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_007",
//            "SiteTypeID": "02",
//            "SiteType": "K35+250",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.547725,40.685781",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "25,-35",
//            "alarmLevel": "1",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_008",
//            "SiteTypeID": "02",
//            "SiteType": "K2+200",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.632956,40.592054",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-75, 30",
//            "alarmLevel": "1",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "QD_002",
//            "SiteTypeID": "03",
//            "SiteType": "K42+000",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.644742,40.584494",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/sfz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "25,-35",
//            "alarmLevel": "2",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "new-001",
//            "SiteTypeID": "02",
//            "SiteType": "K45+500",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.687951,40.516791",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-75, 30",
//            "alarmLevel": "1",
//            "alarmDirection": "left"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_009",
//            "SiteTypeID": "02",
//            "SiteType": "K50+450",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.716391,40.460823",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "25, -35",
//            "alarmLevel": "1",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "new-002",
//            "SiteTypeID": "02",
//            "SiteType": "K53+400",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.849412,40.409697",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-75, 30",
//            "alarmLevel": "1",
//            "alarmDirection": "left"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_010",
//            "SiteTypeID": "02",
//            "SiteType": "K55+550",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "118.916246,40.427714",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "25, -35",
//            "alarmLevel": "1",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_011",
//            "SiteTypeID": "02",
//            "SiteType": "K59+000",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "119.020162,40.405302",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-75, 30",
//            "alarmLevel": "1",
//            "alarmDirection": "left"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_012",
//            "SiteTypeID": "02",
//            "SiteType": "K64+000",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "119.091739,40.362876",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "25, -35",
//            "alarmLevel": "1",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_013",
//            "SiteTypeID": "02",
//            "SiteType": "K69+000",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "119.137517,40.3103",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-75, 30",
//            "alarmLevel": "1",
//            "alarmDirection": "left"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "QD_003",
//            "SiteTypeID": "03",
//            "SiteType": "K69+000",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "119.145566,40.296654",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/sfz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "25,-35",
//            "alarmLevel": "3",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_014",
//            "SiteTypeID": "02",
//            "SiteType": "K74+400",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "119.191774,40.22618",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-75, 30",
//            "alarmLevel": "1",
//            "alarmDirection": "left"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_015",
//            "SiteTypeID": "02",
//            "SiteType": "K69+000",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "119.269675,40.16269",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "25,-35",
//            "alarmLevel": "1",
//            "alarmDirection": "right"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_016",
//            "SiteTypeID": "02",
//            "SiteType": "K83+900",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "119.28218,40.07243",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "-75, 30",
//            "alarmLevel": "1",
//            "alarmDirection": "left"
//        },
//        {
//            "SiteNum": "43688925",
//            "SiteName": "JK_017",
//            "SiteTypeID": "02",
//            "SiteType": "K90+950",
//            "ProjNum": "13365268",
//            "ProjName": "秦承高速",
//            "Coordinates": "119.360943,39.980052",
//            "OHDetail": "",
//            "gifUrl": "../../../../../images/customs/map/jz.png",
//            "siteImg": "./images/site2.jpg",
//            "towerHeight": "50",
//            "power": "110",
//            "labelPosition": "25,-35",
//            "alarmLevel": "1",
//            "alarmDirection": "right"
//        }
//    ],
//    "highWayPoints": [
//        {
//            "highWayName": "秦承高速",
//            "points": "117.979295,40.90632&117.983715,40.901255&117.985117,40.898958&117.986527,40.896048&117.98738,40.894688&117.98835,40.893563&117.989168,40.892752&117.996148,40.887291&117.997432,40.886023&117.998771,40.884127&117.999498,40.882743&118.000208,40.880391&118.00125,40.875857&118.001987,40.872413&118.002014,40.872229&118.002445,40.871063&118.00311,40.869726&118.00434,40.86794&118.007996,40.864332&118.015228,40.857505&118.016836,40.856175&118.025199,40.85054&118.02731,40.84906&118.030346,40.84655&118.033077,40.844073&118.035071,40.842538&118.03667,40.841699&118.066162,40.832093&118.069584,40.83036&118.071839,40.829015&118.073627,40.827644&118.077974,40.823235&118.082142,40.819646&118.096974,40.807087&118.098608,40.805995&118.101573,40.804657&118.10407,40.804036&118.107151,40.80377&118.110412,40.80362&118.112379,40.803265&118.114374,40.802459&118.116557,40.800971&118.117383,40.800008&118.124713,40.788429&118.126276,40.786763&118.128881,40.784687&118.13384,40.782775&118.139068,40.781492&118.147907,40.781615&118.155381,40.780385&118.157465,40.780385&118.160556,40.780809&118.176168,40.785725&118.182007,40.788265&118.187559,40.791829&118.191709,40.794151&118.19735,40.79639&118.223886,40.804814&118.227928,40.805347&118.231522,40.805347&118.238582,40.804254&118.242786,40.802944&118.247853,40.801892&118.254069,40.801251&118.258704,40.800882&118.265082,40.800036&118.268334,40.799408&118.273095,40.79867&118.277677,40.797155&118.282024,40.794752&118.287073,40.792485&118.290774,40.791734&118.294978,40.791543&118.300224,40.79127&118.304608,40.790764&118.31077,40.789057&118.313214,40.788607&118.321173,40.788265&118.329958,40.78944&118.334737,40.789153&118.339049,40.788675&118.34796,40.788784&118.355865,40.787774&118.360878,40.787624&118.364974,40.788279&118.373993,40.790792&118.381736,40.792512&118.386443,40.793372&118.391636,40.793236&118.397618,40.79269&118.41571,40.792389&118.421441,40.79086&118.425915,40.788183&118.428879,40.787077&118.457625,40.785671&118.46147,40.784974&118.465422,40.783527&118.469285,40.781437&118.48267,40.770456&118.488347,40.766973&118.499378,40.760852&118.501031,40.75935&118.50484,40.755101&118.523812,40.734098&118.52516,40.732184&118.525986,40.729861&118.526382,40.726253&118.524208,40.71801&118.524118,40.716629&118.524944,40.706799&118.526094,40.703723&118.541743,40.687354&118.543557,40.683948&118.544491,40.667574&118.545372,40.664496&118.549396,40.657901&118.55369,40.654084&118.557822,40.651019&118.559242,40.64976&118.562332,40.646708&118.565332,40.644669&118.568261,40.642794&118.570973,40.639482&118.572069,40.636621&118.571997,40.634705&118.571441,40.631434&118.571476,40.630092&118.571692,40.628244&118.576705,40.618182&118.578447,40.616252&118.583118,40.613513&118.595785,40.607831&118.599432,40.607749&118.612403,40.610501&118.614811,40.61061&118.617488,40.610398&118.620317,40.609638&118.622976,40.608378&118.625689,40.606003&118.626956,40.60412&118.628447,40.600354&118.628986,40.599375&118.63328,40.595102&118.639882,40.590281&118.645066,40.587945&118.647581,40.586678&118.648803,40.585802&118.650806,40.58348&118.651462,40.58211&118.65174,40.579994&118.651614,40.576891&118.652054,40.575233&118.653528,40.573069&118.656887,40.570561&118.658756,40.568444&118.659591,40.565382&118.659483,40.564286&118.657588,40.558264&118.657417,40.556839&118.657444,40.554762&118.658001,40.552494&118.659412,40.550192&118.661568,40.548198&118.675626,40.53447&118.681582,40.531379&118.683657,40.530111&118.685346,40.528651&118.686576,40.526917&118.687097,40.525594&118.687439,40.524271&118.687484,40.523846&118.687484,40.520932&118.687897,40.518827&118.688777,40.517175&118.690017,40.515667&118.691589,40.51446&118.694275,40.513096&118.696925,40.51241&118.69935,40.511629&118.70138,40.510669&118.704147,40.508214&118.705279,40.506095&118.705863,40.503812&118.706114,40.502111&118.707597,40.494437&118.704426,40.487476&118.704084,40.486131&118.704129,40.477282&118.704444,40.475416&118.705243,40.473866&118.706743,40.471623&118.70739,40.470182&118.708351,40.466655&118.709474,40.464796&118.720424,40.453542&118.722014,40.452239&118.736333,40.443241&118.738121,40.441711&118.742676,40.437565&118.756456,40.430645&118.758908,40.429952&118.763426,40.429245&118.769185,40.429163&118.771161,40.42906&118.784096,40.427817&118.789846,40.426622&118.795002,40.424439&118.800724,40.422764&118.804659,40.422311&118.810614,40.422242&118.818151,40.42205&118.820289,40.421556&118.824844,40.419812&118.827287,40.419249&118.833647,40.418439&118.843807,40.415678&118.85005,40.414298&118.865546,40.414971&118.871618,40.416482&118.880179,40.418748&118.883808,40.419153&118.88715,40.419111&118.889441,40.418789&118.892387,40.418033&118.895172,40.417409&118.898253,40.417381&118.901559,40.418404&118.905916,40.421233&118.911207,40.425037&118.914333,40.426156&118.916614,40.426465&118.918716,40.426437&118.923154,40.425545&118.925858,40.425133&118.939386,40.424597&118.943698,40.425071&118.953256,40.427762&118.958413,40.428133&118.960721,40.428085&118.969776,40.426368&118.975391,40.425943&118.986413,40.42641&118.990159,40.425867&119.004729,40.422249&119.010164,40.419702&119.024537,40.409354&119.029603,40.406731&119.036808,40.403208&119.047264,40.395887&119.061933,40.389244&119.06523,40.386984&119.068473,40.383893&119.06929,40.382835&119.076648,40.371417&119.080241,40.367988&119.084427,40.364697&119.090832,40.35957&119.096886,40.348127&119.099267,40.345233&119.103992,40.341742&119.111915,40.337005&119.114924,40.334524&119.122326,40.325153&119.124806,40.32353&119.130492,40.320085&119.134894,40.316214&119.140948,40.310073&119.14385,40.306428&119.145,40.30378&119.146742,40.298284&119.14879,40.29523&119.151944,40.291852&119.153183,40.288378&119.15303,40.285461&119.152815,40.282895&119.153309,40.28048&119.154495,40.278079&119.158115,40.273407&119.161061,40.269836&119.16222,40.267524&119.1624,40.266061&119.1624,40.265091&119.161816,40.261671&119.161888,40.260342&119.162678,40.25805&119.164241,40.255896&119.169703,40.252716&119.171796,40.251808&119.18872,40.233826&119.191801,40.231954&119.201647,40.227747&119.203848,40.226597&119.205716,40.225096&119.207306,40.223044&119.210872,40.215441&119.214493,40.212066&119.22361,40.206136&119.228362,40.204524&119.243634,40.202079&119.245861,40.201486&119.248439,40.200336&119.251691,40.197753&119.252769,40.196141&119.253847,40.193027&119.253793,40.189851&119.25285,40.180377&119.254368,40.174727&119.258312,40.169579&119.271742,40.127382&119.271526,40.125534&119.265211,40.109775&119.265346,40.106781&119.266199,40.103732&119.272424,40.09653&119.280662,40.088457&119.282117,40.086015&119.285243,40.076029&119.285504,40.073372&119.284902,40.069452&119.283249,40.065553&119.27856,40.058519&119.277922,40.056151&119.277652,40.051871&119.298825,40.029499&119.300182,40.024796&119.301664,40.022607&119.305751,40.019941&119.306874,40.019485&119.308886,40.019002&119.313926,40.018311&119.317789,40.017078&119.323071,40.014619&119.329826,40.011289&119.337444,40.006108&119.342474,40.0013&119.345528,39.996478&119.347469,39.991655&119.349499,39.984814&119.351906,39.980971&119.355751,39.977391&119.360674,39.974696&119.366135,39.973065&119.373502,39.971848&119.377436,39.970328&119.379484,39.968945&119.381173,39.96683&119.383383,39.963277&119.389725,39.957152&119.404295,39.947998&119.406937,39.946214&119.409883,39.944679",
//            "color": "rgb(0,158,229)"
//        }
//        //{
//        //    "highWayName": "沿海高速",
//        //    "points":  "117.55181,38.644344&117.54987,38.638398&117.548756,38.633973&117.548468,38.6236&117.54951,38.618032&117.551199,38.613183&117.552744,38.609955&117.555601,38.605345&117.560452,38.599677&117.563829,38.596716&117.571626,38.58968&117.580232,38.577594&117.582173,38.57349&117.584131,38.567016&117.587706,38.547674&117.588964,38.542919&117.591695,38.53623&117.595575,38.529879&117.599366,38.52477&117.602061,38.520748&117.603265,38.518052&117.603965,38.51568&117.604612,38.511488&117.604486,38.507337&117.603409,38.501647&117.602492,38.496833&117.602187,38.492018&117.602798,38.48651&117.604469,38.480791&117.606211,38.477091&117.610056,38.471427&117.632424,38.450378&117.639107,38.444147&117.645755,38.438014&117.652528,38.431782&117.661942,38.423132&117.667404,38.417422&117.671608,38.411993&117.676602,38.404289&117.6798,38.397375&117.681417,38.392963&117.685675,38.37431&117.687723,38.364479&117.689808,38.354322&117.69155,38.34545&117.692269,38.338347&117.69252,38.32936&117.693006,38.309289&117.693724,38.286946&117.694676,38.281112&117.696437,38.275177&117.705761,38.260233&117.712265,38.25417&117.722362,38.247568&117.731561,38.243246&117.738675,38.240823&117.77202,38.229628&117.779926,38.22753&117.782567,38.226977&117.782998,38.226651&117.782441,38.225943&117.78201,38.225943&117.78165,38.22641&117.781543,38.227317&117.781381,38.229004&117.780195,38.230109&117.779207,38.230364&117.776171,38.230549",
//        //    "color": "#b0d203"
//        //}
//    ]
//};

var PointsArr = [];     //最终数据转换后的站点坐标集合，以用来动态调整地图视野。
var markers = [];       //保存所有站点数据，以便聚合点的使用！

/**
 * 加载百度地图
 * @type {BMap.Map}
 */
// 百度地图API功能
var map = new BMap.Map("allmap", {minZoom: 8, maxZoom: 12});  // 创建Map实例，设置最大、最小缩放等级。
var ArrayMarker = [];
init();     //启动百度地图，预设置。

/**
 * 百度地图启动
 */
function init() {
    MapSetEvent();  //百度地图初始化代码
    addBoundary();      //添加行政边界
    setTimeout(next, 500);    //等待500ms边界加载完后加载站点、多边形标记。
    function next() {
        addHighWay(sites.highWayPoints);
        addCovering(sites.siteInfo);             //执行addCovering方法添加marker点
        map.setViewport(PointsArr);     //执行setViewport方法根据所有站点经纬度动态设置地图缩放等级和视野。
        var markerClusterer = new BMapLib.MarkerClusterer(map, {markers: markers});
    }
}

/**
 * 百度地图初始化设置
 */
function MapSetEvent() {
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT});// 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    //var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
    /*缩放控件type有四种类型:
     BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/

    try {
        map.centerAndZoom(new BMap.Point(112.484736, 37.773064), 8); // 初始化地图，设置行政中心，并设置默认缩放等级
        map.setMapStyle({
            style: 'grayscale'
        });
        map.enableDragging();           //启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();    //启用地图滚轮放大缩小
        map.enableDoubleClickZoom();    //启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();           //启用键盘上下左右键移动地图
        add_control();

        //添加控件和比例尺
        function add_control() {
            map.addControl(top_left_control);
            map.addControl(top_left_navigation);
            //map.addControl(top_right_navigation);
        }

        //移除控件和比例尺
        function delete_control() {
            map.removeControl(top_left_control);
            map.removeControl(top_left_navigation);
            //map.removeControl(top_right_navigation);
        }
    } catch (e) {
        throw e;
    }
}

/**
 * 添加行政区划分 & 行政区域外可调遮罩层
 */
function addBoundary() {
    var bdary = new BMap.Boundary();
    bdary.get("山西省", function (rs) {       //获取行政区域
        map.clearOverlays();        //清除地图覆盖物

        //添加遮罩层
        //思路：利用行政区划点的集合与外围自定义东南西北形成一个环形遮罩层
        //1.获取选中行政区划边框点的集合  rs.boundaries[0]
        var strs = new Array();
        strs = rs.boundaries[0].split(";");
        //定义点集合存储
        var EN = "";    //行政区划东北段点的集合
        var NW = ""; //行政区划西北段点的集合
        var WS = ""; //行政区划西南段点的集合
        var SE = ""; //行政区划东南段点的集合
        var pt_e = strs[0]; //行政区划最东边点的经纬度
        var pt_n = strs[0]; //行政区划最北边点的经纬度
        var pt_w = strs[0]; //行政区划最西边点的经纬度
        var pt_s = strs[0]; //行政区划最南边点的经纬度
        var n1 = ""; //行政区划最东边点在点集合中的索引位置
        var n2 = ""; //行政区划最北边点在点集合中的索引位置
        var n3 = ""; //行政区划最西边点在点集合中的索引位置
        var n4 = ""; //行政区划最南边点在点集合中的索引位置
        //2.循环行政区划边框点集合找出最东南西北四个点的经纬度以及索引位置
        for (var n = 0; n < strs.length; n++) {
            var pt_e_f = parseFloat(pt_e.split(",")[0]);
            var pt_n_f = parseFloat(pt_n.split(",")[1]);
            var pt_w_f = parseFloat(pt_w.split(",")[0]);
            var pt_s_f = parseFloat(pt_s.split(",")[1]);
            var sPt = new Array();
            try {
                sPt = strs[n].split(",");
                var spt_j = parseFloat(sPt[0]);
                var spt_w = parseFloat(sPt[1]);
                if (pt_e_f < spt_j) {   //东
                    pt_e = strs[n];
                    pt_e_f = spt_j;
                    n1 = n;
                }
                if (pt_n_f < spt_w) {  //北
                    pt_n_f = spt_w;
                    pt_n = strs[n];
                    n2 = n;
                }
                if (pt_w_f > spt_j) {   //西
                    pt_w_f = spt_j;
                    pt_w = strs[n];
                    n3 = n;
                }
                if (pt_s_f > spt_w) {   //南
                    pt_s_f = spt_w;
                    pt_s = strs[n];
                    n4 = n;
                }
            }
            catch (err) {
                alert(err);
            }
        }
        //3.得出东北、西北、西南、东南四段行政区划的边框点的集合
        if (n1 < n2) {     //第一种情况 最东边点在索引前面
            for (var o = n1; o <= n2; o++) {
                EN += strs[o] + ";"
            }
            //判断西北
            if (n2 < n3) {
                for (var o = n2; o <= n3; o++) {
                    NW += strs[o] + ";"
                }
            } else {
                for (var o = n2; o < strs.length; o++) {
                    NW += strs[o] + ";"
                }
                for (var o = 0; o <= n3; o++) {
                    NW += strs[o] + ";"
                }
            }
            for (var o = n3; o <= n4; o++) {
                WS += strs[o] + ";"
            }
            //判断东南
            if (n4 < n1) {
                for (var o = n4; o <= n1; o++) {
                    SE += strs[o] + ";"
                }
            } else {
                for (var o = n4; o < strs.length; o++) {
                    SE += strs[o] + ";"
                }
                for (var o = 0; o <= n1; o++) {
                    SE += strs[o] + ";"
                }
            }
        }
        else {   //第二种情况 最东边点在索引后面
            for (var o = n1; o < strs.length; o++) {
                EN += strs[o] + ";"
            }
            for (var o = 0; o <= n2; o++) {
                EN += strs[o] + ";"
            }
            for (var o = n2; o <= n3; o++) {
                NW += strs[o] + ";"
            }
            for (var o = n3; o <= n4; o++) {
                WS += strs[o] + ";"
            }
            for (var o = n4; o <= n1; o++) {
                SE += strs[o] + ";"
            }
        }
        //4.自定义外围边框点的集合
        var E_JW = "170.672126, 39.623555;";            //东
        var EN_JW = "170.672126, 81.291804;";       //东北角
        var N_JW = "105.913641, 81.291804;";        //北
        var NW_JW = "-169.604276,  81.291804;";     //西北角
        var W_JW = "-169.604276, 38.244136;";       //西
        var WS_JW = "-169.604276, -68.045308;";     //西南角
        var S_JW = "114.15563, -68.045308;";            //南
        var SE_JW = "170.672126, -68.045308 ;";         //东南角
        //4.添加环形遮罩层
        var ply1 = new BMap.Polygon(EN + NW + WS + SE + E_JW + SE_JW + S_JW + WS_JW + W_JW + NW_JW + EN_JW + E_JW, {
            strokeColor: "none",
            fillColor: "rgba(70,70,70,0.75)",
            strokeOpacity: 1,
            fillOpacity: 1
        }); //建立多边形覆盖物
        map.addOverlay(ply1);  //遮罩物是半透明的，如果需要纯色可以多添加几层
        //5. 给目标行政区划添加边框，其实就是给目标行政区划添加一个没有填充物的遮罩层
        var count = rs.boundaries.length; //行政区域的点有多少个
        var pointArray = [];
        for (var i = 0; i < count; i++) {
            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#3399CC", fillColor: ""}); //建立多边形覆盖物
            map.addOverlay(ply);  //添加覆盖物
            pointArray = pointArray.concat(ply.getPath());
        }
//            map.setViewport(pointArray, { zoomFactor: 1 });    //调整视野，偏移1个单位
    });
}

/**
 * 添加站点 & 多边形 & 标注主函数 & 站点信息窗口
 */
function addCovering(data) {
    var _data = data;    //获取后台传来的站点信息数据
    //添加站点
    var count = _data.length;
    trogleLabel();      //切换显示隐藏label

    //循环写入站点信息
    for (var i = 0; i < count; i++) {
        var pp = _data[i].OHDetail;     //多边形
        var cc = _data[i].Coordinates.split(",");   //经纬度
        var pointMarker = new BMap.Point(parseFloat(cc[0]), parseFloat(cc[1]));
        PointsArr.push(pointMarker);
        //获取信息窗口中的显示参数值
        var label = _data[i].SiteName;  //站点名称
        var gifUrl = _data[i].gifUrl;   //站点动图图片
        var siteImg = _data[i].siteImg; //站点现场图片
        var towerHeight = _data[i].towerHeight; //塔高
        var Coordinates = _data[i].Coordinates; //经纬度坐标
        var power = _data[i].power; //功率
        var labelPosition = _data[i].labelPosition; //控制站点名称label 调整位置
        var alarmLevel = _data[i].alarmLevel; //站点报警值
        var siteName = _data[i].SiteName; //站点名称
        var siteType = _data[i].SiteType; //站点类型
        var alarmDirection = _data[i].alarmDirection; //报警led朝向

        //根据站点类型添加对应的marker
        if (_data[i].SiteTypeID == "01") {
            addMarker_01(pointMarker, siteName, siteType, gifUrl, siteImg, Coordinates, labelPosition);   //调用自定义方法创建站点，传入相应站点信息
            //addPolygon_01(pp);               //添加[type = city]站点样式多边形
        } else if (_data[i].SiteTypeID == "02") {
            addMarker_02(pointMarker, siteName, siteType, gifUrl, siteImg, Coordinates, labelPosition, alarmLevel, alarmDirection);   //调用自定义方法创建站点，传入相应站点信息
            //addPolygon_02(pp);               //添加[type = 02]站点样式多边形
        } else if (_data[i].SiteTypeID == "03") {
            addMarker_03(pointMarker, siteName, siteType, gifUrl, siteImg, Coordinates, labelPosition, alarmLevel, alarmDirection);   //调用自定义方法创建站点，传入相应站点信息
            //addPolygon_03(pp);               //添加[type = 03]站点样式多边形
        } else {
            console.log("数据错误！")
        }
    }

    /**
     * 编写自定义函数,创建标注marker
     */
    //[type = 01站点]
    function addMarker_01(pointMarker, siteName, siteType, gifUrl, siteImg, Coordinates, labelPosition) {

        var myIcon = new BMap.Icon(gifUrl, new BMap.Size(48, 48), {
            // 图标偏移中心点位置。
            offset: new BMap.Size(48, 48)
        });
        var marker = new BMap.Marker(pointMarker, {icon: myIcon});
        var _labelPosition = labelPosition.split(",");
        var xOffset = _labelPosition[0];    //调整label x坐标位置
        var yOffset = _labelPosition[1];    //调整label y坐标位置

        //站点名称标签
        var LabelStr = "<span class=\"mLabel-city\" href=\"#\">" + label + "</span>";
        var Label = new BMap.Label(LabelStr, {offset: new BMap.Size(xOffset, yOffset)});       //添加站点文字标注
        ArrayMarker.push(Label);
        Label.setStyle({
            width: 'auto',
            border: "none",
            backgroundColor: "transparent"
        });
        marker.setLabel(Label);
        ////编辑站点信息窗口内容
        //var sContent =
        //    "<div class='m-infoWindow'>" +
        //    "<h4>"+ label +"</h4>" +
        //    "<img class='infoWindowImg' src="+ siteImg +" title="+ label +" />" +
        //    "<ul>" +
        //    "<li><strong>经纬度</strong>："+ Coordinates +"</li>" +
        //    "<li><strong>功率</strong>： "+ power +" KW</li>" +
        //    "<li><strong>塔高</strong>： "+ towerHeight +" 米</li>" +
        //    "</ul>" +
        //    "</div>";
        //var opts = {    //信息窗口设置参数
        //    width : 350,     // 信息窗口宽度
        //    height: 120     // 信息窗口高度
        //};
        //var infoWindow = new BMap.InfoWindow(sContent,opts);  // 创建信息窗口对象
        //
        //marker.addEventListener("click", function(){
        //    this.openInfoWindow(infoWindow);
        //    //图片加载完毕重绘infowindow
        //    document.getElementsByClassName('infoWindowImg').onload = function (){
        //        infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        //    }
        //});
        //Label.hide();
        map.addOverlay(marker);
        //marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    }

    //[type = 02站点]
    function addMarker_02(pointMarker, siteName, siteType, gifUrl, siteImg, Coordinates, labelPosition, alarmLevel, alarmDirection) {
        var _labelPosition = labelPosition.split(",");
        var xOffset = _labelPosition[0];    //调整label x坐标位置
        var yOffset = _labelPosition[1];    //调整label y坐标位置
        var LabelStr = "";   //label html字符串

        if (alarmDirection === "left") {
            //站点名称标签,led指示灯朝向左侧
            LabelStr = "<a class=\"mLabel-toll-gate led-left\" href=\"#\"><div class=\"mLabel-name\" >" + siteName + "</div><div class=\"mLabel-type\">" + siteType + "</div><div class=\"mLabel-led-wrap\"><div class=\"mLabel-led\" data-status=" + alarmLevel + "></div></div></a>";

            var Label = new BMap.Label(LabelStr, {offset: new BMap.Size(xOffset, yOffset)});       //添加站点文字标注
            ArrayMarker.push(Label);
            Label.setStyle({
                width: "80px",
                backgroundColor: null,
                border: "0",
                textAlign: "left"
            });
        } else if (alarmDirection === "right") {
            //站点名称标签,led指示灯朝向右侧
            LabelStr = "<a class=\"mLabel-toll-gate led-right\" href=\"#\"><div class=\"mLabel-name\" >" + siteName + "</div><div class=\"mLabel-type\">" + siteType + "</div><div class=\"mLabel-led-wrap\"><div class=\"mLabel-led\" data-status=" + alarmLevel + "></div></div></a>";
            var Label = new BMap.Label(LabelStr, {offset: new BMap.Size(xOffset, yOffset)});       //添加站点文字标注
            ArrayMarker.push(Label);
            Label.setStyle({
                width: "80px",
                backgroundColor: null,
                border: "0",
                textAlign: "right"
            });
        }
        //
        //var polyline = new BMap.Polyline([
        //    pointMarker,
        //    Label.
        //], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});   //创建折线
        ////编辑站点信息窗口内容
        //var sContent =
        //    "<div class='m-infoWindow'>" +
        //    "<h4>"+ label +"</h4>" +
        //    "<img class='infoWindowImg' src="+ siteImg +" title="+ label +" />" +
        //    "<ul>" +
        //    "<li><strong>经纬度</strong>："+ Coordinates +"</li>" +
        //    "<li><strong>功率</strong>： "+ power +" KW</li>" +
        //    "<li><strong>塔高</strong>： "+ towerHeight +" 米</li>" +
        //    "</ul>" +
        //    "</div>";
        //var opts = {    //信息窗口设置参数
        //    width : 350,     // 信息窗口宽度
        //    height: 120     // 信息窗口高度
        //};
        //var infoWindow = new BMap.InfoWindow(sContent,opts);  // 创建信息窗口对象
        //
        //marker.addEventListener("click", function(){
        //    this.openInfoWindow(infoWindow);
        //    //图片加载完毕重绘infowindow
        //    document.getElementsByClassName('infoWindowImg').onload = function (){
        //        infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        //    }
        //});

        var myIcon = new BMap.Icon(gifUrl, new BMap.Size(40, 40), {
            // 图标偏移中心点位置。
            offset: new BMap.Size(40, 40)
        });
        var pt = new BMap.Point(pointMarker.lng, pointMarker.lat);
        var marker = new BMap.Marker(pt, {icon: myIcon});
        marker.setLabel(Label);

        //Label.hide();
        map.addOverlay(marker);
        //marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        //map.addOverlay(polyline);   //增加折线
    }

    //[type = 03站点]
    function addMarker_03(pointMarker, siteName, siteType, gifUrl, siteImg, Coordinates, labelPosition, alarmLevel, alarmDirection) {
        var _labelPosition = labelPosition.split(",");
        var xOffset = _labelPosition[0];    //调整label x坐标位置
        var yOffset = _labelPosition[1];    //调整label y坐标位置
        var LabelStr = "";   //label html字符串

        if (alarmDirection === "left") {
            //站点名称标签,led指示灯朝向左侧
            LabelStr = "<a class=\"mLabel-toll-gate mLabel-station led-left\" href=\"#\"><div class=\"mLabel-name\" >" + siteName + "</div><div class=\"mLabel-type\">" + siteType + "</div><div class=\"mLabel-led-wrap\"><div class=\"mLabel-led\" data-status=" + alarmLevel + "></div></div></a>";

            var Label = new BMap.Label(LabelStr, {offset: new BMap.Size(xOffset, yOffset)});       //添加站点文字标注
            ArrayMarker.push(Label);
            Label.setStyle({
                width: "80px",
                backgroundColor: null,
                border: "0",
                textAlign: "left"
            });
        } else if (alarmDirection === "right") {
            //站点名称标签,led指示灯朝向右侧
            LabelStr = "<a class=\"mLabel-toll-gate mLabel-station led-right\" href=\"#\"><div class=\"mLabel-name\" >" + siteName + "</div><div class=\"mLabel-type\">" + siteType + "</div><div class=\"mLabel-led-wrap\"><div class=\"mLabel-led\" data-status=" + alarmLevel + "></div></div></a>";
            var Label = new BMap.Label(LabelStr, {offset: new BMap.Size(xOffset, yOffset)});       //添加站点文字标注
            ArrayMarker.push(Label);
            Label.setStyle({
                width: "80px",
                backgroundColor: null,
                border: "0",
                textAlign: "right"
            });
        }
        //
        //var polyline = new BMap.Polyline([
        //    pointMarker,
        //    Label.
        //], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});   //创建折线
        ////编辑站点信息窗口内容
        //var sContent =
        //    "<div class='m-infoWindow'>" +
        //    "<h4>"+ label +"</h4>" +
        //    "<img class='infoWindowImg' src="+ siteImg +" title="+ label +" />" +
        //    "<ul>" +
        //    "<li><strong>经纬度</strong>："+ Coordinates +"</li>" +
        //    "<li><strong>功率</strong>： "+ power +" KW</li>" +
        //    "<li><strong>塔高</strong>： "+ towerHeight +" 米</li>" +
        //    "</ul>" +
        //    "</div>";
        //var opts = {    //信息窗口设置参数
        //    width : 350,     // 信息窗口宽度
        //    height: 120     // 信息窗口高度
        //};
        //var infoWindow = new BMap.InfoWindow(sContent,opts);  // 创建信息窗口对象
        //
        //marker.addEventListener("click", function(){
        //    this.openInfoWindow(infoWindow);
        //    //图片加载完毕重绘infowindow
        //    document.getElementsByClassName('infoWindowImg').onload = function (){
        //        infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        //    }
        //});

        var myIcon = new BMap.Icon(gifUrl, new BMap.Size(40, 40), {
            // 图标偏移中心点位置。
            offset: new BMap.Size(40, 40)
        });
        var pt = new BMap.Point(pointMarker.lng, pointMarker.lat);
        var marker = new BMap.Marker(pt, {icon: myIcon});
        marker.setLabel(Label);

        //Label.hide();
        map.addOverlay(marker);
        //marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        //map.addOverlay(polyline);   //增加折线
    }

    /**
     * 隐藏label
     */
    function trogleLabel() {
        var checkBox_showLabel = document.getElementById('showLabel');
        aa();
        checkBox_showLabel.addEventListener('click', function () {
            aa()
        });
        function aa() {
            if (checkBox_showLabel.checked === true) {
                for (i = 0; i < ArrayMarker.length; i++) {
                    if (ArrayMarker[i]) {
                        ArrayMarker[i].show();
                    }
                }
            } else if (checkBox_showLabel.checked === false) {
                for (i = 0; i < ArrayMarker.length; i++) {
                    if (ArrayMarker[i]) {
                        ArrayMarker[i].hide();
                    }
                }
            }
        }
    }
}


/**
 * 编写自定义函数,创建高速公路覆盖
 */
function addHighWay(arrHighwayPoints) {
    var _data = arrHighwayPoints;//获得高速公路数据集合
    var count = _data.length;   //获得高速公路个数
    for (var i = 0; i < count; i++) {
        var _dataLinePoints = _data[i].points;
        var arrPoints = transformPoints(_dataLinePoints);
        var polyline = new BMap.Polyline(arrPoints, {strokeColor: _data[i].color, strokeWeight: 5, strokeOpacity: .95});   //创建折线
        map.addOverlay(polyline);   //增加折线
    }

}

/**
 * 编写自定义函数,创建多边形区域
 */
//01站点多边形
function addPolygon_01(PolygonPoints) {

    var arrPP = PolygonPoints.split("&");

    for (var i = 0; i < arrPP.length; i++) {
        var point = arrPP[i].split(",");
        arrPP[i] = new BMap.Point(parseFloat(point[0]), parseFloat(point[1]))
    }
    var polygon_city = new BMap.Polygon(arrPP, {
        strokeColor: "#FF6633",
        strokeWeight: 2,
        fillColor: "#FF6633",
        fillOpacity: 0.2
    });  //创建多边形
    map.addOverlay(polygon_city);   //增加多边形

}
//02站点多边形
function addPolygon_02(PolygonPoints) {

    var arrPP = PolygonPoints.split("&");

    for (var i = 0; i < arrPP.length; i++) {
        var point = arrPP[i].split(",");
        arrPP[i] = new BMap.Point(parseFloat(point[0]), parseFloat(point[1]))
    }
    var addPolygon_02 = new BMap.Polygon(arrPP, {
        strokeColor: "#3399FF",
        strokeWeight: 2,
        fillColor: "#3399FF",
        fillOpacity: 0.2
    });  //创建多边形
    map.addOverlay(addPolygon_02);   //增加多边形

}
//03站点多边形
function addPolygon_03(PolygonPoints) {

    var arrPP = PolygonPoints.split("&");

    for (var i = 0; i < arrPP.length; i++) {
        var point = arrPP[i].split(",");
        arrPP[i] = new BMap.Point(parseFloat(point[0]), parseFloat(point[1]))
    }
    var polygon_03 = new BMap.Polygon(arrPP, {
        strokeColor: "#FFCC33",
        strokeWeight: 2,
        fillColor: "#FFCC33",
        fillOpacity: 0.2
    });  //创建多边形
    map.addOverlay(polygon_03);   //增加多边形到地图
}

/**
 * 编写自定义方法,计算多边形的点集合，返回转换后的多边形点集合
 * 输入"112.937429,29.838234&114.09186,29.625473&113.88489,28.583306"点集合
 * return 输出转换后的map点集合[
 *  new BMap.Point(parseFloat(x0), parseFloat(y0)) ,
 *  new BMap.Point(parseFloat(xn), parseFloat(yn))
 * ]
 */
function transformPoints(data) {
    var _data = data.split("&");
    var arr = [];
    for (var i = 0; i < _data.length; i++) {
        var x = _data[i].split(",")[0];
        var y = _data[i].split(",")[1];
        arr.push(new BMap.Point(parseFloat(x), parseFloat(y)));
    }
    return arr; //返回转换后的数组对象
}

/**
 * 清除地图上的覆盖物
 */
function remove_overlay() {
    map.removeOverlay(points);
}

var ppArr = "";
//单击获取点击的经纬度
map.addEventListener("click", function (e) {
    ppArr = ppArr + e.point.lng + "," + e.point.lat + "&";
    console.log(ppArr)
});

window.onresize = function () {
    $("#allmap").height($(window).height() - 170 + 'px');
};


jQuery(function ($) {
    $('.easy-pie-chart.percentage').each(function () {
        var $box = $(this).closest('.infobox');
        var barColor = $(this).data('color') || (!$box.hasClass('infobox-dark') ? $box.css('color') : 'rgba(255,255,255,0.95)');
        var trackColor = barColor == 'rgba(255,255,255,0.95)' ? 'rgba(255,255,255,0.25)' : '#E2E2E2';
        var size = parseInt($(this).data('size')) || 50;
        $(this).easyPieChart({
            barColor: barColor,
            trackColor: trackColor,
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: parseInt(size / 10),
            animate: ace.vars['old_ie'] ? false : 1000,
            size: size
        });
    });

    $('.sparkline').each(function () {
        var $box = $(this).closest('.infobox');
        var barColor = !$box.hasClass('infobox-dark') ? $box.css('color') : '#FFF';
        $(this).sparkline('html',
            {
                tagValuesAttribute: 'data-values',
                type: 'bar',
                barColor: barColor,
                chartRangeMin: $(this).data('min') || 0
            });
    });


    //flot chart resize plugin, somehow manipulates default browser resize event to optimize it!
    //but sometimes it brings up errors with normal resize event handlers
    $.resize.throttleWindow = false;

    var placeholder = $('#piechart-placeholder').css({'width': '90%', 'min-height': '150px'});
    var data = [
        {label: "social networks", data: 38.7, color: "#68BC31"},
        {label: "search engines", data: 24.5, color: "#2091CF"},
        {label: "ad campaigns", data: 8.2, color: "#AF4E96"},
        {label: "direct traffic", data: 18.6, color: "#DA5430"},
        {label: "other", data: 10, color: "#FEE074"}
    ];

    function drawPieChart(placeholder, data, position) {
        $.plot(placeholder, data, {
            series: {
                pie: {
                    show: true,
                    tilt: 0.8,
                    highlight: {
                        opacity: 0.25
                    },
                    stroke: {
                        color: '#fff',
                        width: 2
                    },
                    startAngle: 2
                }
            },
            legend: {
                show: true,
                position: position || "ne",
                labelBoxBorderColor: null,
                margin: [-30, 15]
            }
            ,
            grid: {
                hoverable: true,
                clickable: true
            }
        })
    }

    drawPieChart(placeholder, data);

    /**
     we saved the drawing function and the data to redraw with different position later when switching to RTL mode dynamically
     so that's not needed actually.
     */
    placeholder.data('chart', data);
    placeholder.data('draw', drawPieChart);


    //pie chart tooltip example
    var $tooltip = $("<div class='tooltip top in'><div class='tooltip-inner'></div></div>").hide().appendTo('body');
    var previousPoint = null;

    placeholder.on('plothover', function (event, pos, item) {
        if (item) {
            if (previousPoint != item.seriesIndex) {
                previousPoint = item.seriesIndex;
                var tip = item.series['label'] + " : " + item.series['percent'] + '%';
                $tooltip.show().children(0).text(tip);
            }
            $tooltip.css({top: pos.pageY + 10, left: pos.pageX + 10});
        } else {
            $tooltip.hide();
            previousPoint = null;
        }

    });

    /////////////////////////////////////
    $(document).one('ajaxloadstart.page', function (e) {
        $tooltip.remove();
    });


    var d1 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.5) {
        d1.push([i, Math.sin(i)]);
    }

    var d2 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.5) {
        d2.push([i, Math.cos(i)]);
    }

    var d3 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.2) {
        d3.push([i, Math.tan(i)]);
    }


    var sales_charts = $('#sales-charts').css({'width': '100%', 'height': '220px'});
    $.plot("#sales-charts", [
        {label: "Domains", data: d1},
        {label: "Hosting", data: d2},
        {label: "Services", data: d3}
    ], {
        hoverable: true,
        shadowSize: 0,
        series: {
            lines: {show: true},
            points: {show: true}
        },
        xaxis: {
            tickLength: 0
        },
        yaxis: {
            ticks: 10,
            min: -2,
            max: 2,
            tickDecimals: 3
        },
        grid: {
            backgroundColor: {colors: ["#fff", "#fff"]},
            borderWidth: 1,
            borderColor: '#555'
        }
    });


    $('#recent-box [data-rel="tooltip"]').tooltip({placement: tooltip_placement});
    function tooltip_placement(context, source) {
        var $source = $(source);
        var $parent = $source.closest('.tab-content')
        var off1 = $parent.offset();
        var w1 = $parent.width();

        var off2 = $source.offset();
        //var w2 = $source.width();

        if (parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2)) return 'right';
        return 'left';
    }


    $('.dialogs,.comments').ace_scroll({
        size: 300
    });


    //Android's default browser somehow is confused when tapping on label which will lead to dragging the task
    //so disable dragging when clicking on label
    var agent = navigator.userAgent.toLowerCase();
    if (ace.vars['touch'] && ace.vars['android']) {
        $('#tasks').on('touchstart', function (e) {
            var li = $(e.target).closest('#tasks li');
            if (li.length == 0)return;
            var label = li.find('label.inline').get(0);
            if (label == e.target || $.contains(label, e.target)) e.stopImmediatePropagation();
        });
    }

    $('#tasks').sortable({
            opacity: 0.8,
            revert: true,
            forceHelperSize: true,
            placeholder: 'draggable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            stop: function (event, ui) {
                //just for Chrome!!!! so that dropdowns on items don't appear below other items after being moved
                $(ui.item).css('z-index', 'auto');
            }
        }
    );
    $('#tasks').disableSelection();
    $('#tasks input:checkbox').removeAttr('checked').on('click', function () {
        if (this.checked) $(this).closest('li').addClass('selected');
        else $(this).closest('li').removeClass('selected');
    });


    //show the dropdowns on top or bottom depending on window height and menu position
    $('#task-tab .dropdown-hover').on('mouseenter', function (e) {
        var offset = $(this).offset();

        var $w = $(window)
        if (offset.top > $w.scrollTop() + $w.innerHeight() - 100)
            $(this).addClass('dropup');
        else $(this).removeClass('dropup');
    });

})