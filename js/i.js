/**
 * Created by skua on 2015/8/31.
 */
$Baidu = window.$Baidu || {
        viewport: {w: 0, h: 0, scale: 1, scaleX: 1, scaleY: 1, cur: -1, curH: 1206},
        resizeHandler: function () {
            var _ = $Baidu;
            var ww = window.innerWidth,
                wh = window.innerHeight;
            _.curH = (750 / ww) * wh
            $("#main").css({"height": _.curH, "scale": ww / 750});

            _.viewport.scaleY = wh / 1206;
            _.viewport.scaleX = ww / 750;
            //Share page
            $("#weixinPage").css({"height": _.curH, "scale": ww / 750});
        },
        locked: false,
        mygame: null,
        initCanvas: function () {
            var _ = $Baidu;

            var ww = window.innerWidth,
                wh = window.innerHeight;
            var game = new Phaser.Game(750, (750 / ww) * wh, Phaser.CANVAS, 'myCanvas', {}, true);
            _.mygame = game;
            console.log(_.mygame)
            game.States = {};
            //boot场景，用来做一些游戏启动前的准备

            game.States.boot = function () {
                this.preload = function (){
                    game.load.image('loader_c1', 'img/loader/loader_c1.png');
                    game.load.image('loader_c2', 'img/loader/loader_c2.png');
                    game.load.image('loader_c3', 'img/loader/loader_c3.png');
                    game.load.image('loader_t1', 'img/loader/loader_t1.png');
                    game.load.image('loader_c1_p', 'img/loader/loader_c1_p.png');
                    game.load.image('loader_focus', 'img/loader/loader_focus.png');

                }
                this.create = function () {
                    game.state.start("_preload");
                }
            }
            game.States._preload=function(){
                var loader_c1;
                var loader_c2;
                var loader_c3;
                var loader_t1;
                var loader_focus;
                var _mask;
                var loader_c1_p

                this.loadBrand = function () {
                    for (var i = 0; i < 12; i++) {
                        game.load.image("c" + i, 'img/nav/chin/' + "c" + i + '.png');
                        game.load.image("i" + i, 'img/nav/icon/' + "i" + i + '.png');
                        game.load.image("e" + i, 'img/nav/eng/' + "e" + i + '.png');
                    }
                }
                this.loadTopList = function () {
                    /*
                     所有的榜单数据
                     */

                    var top10Ary =
                        [
                            [//手机
                                {
                                    logo: "apple",
                                    name: "苹果",
                                    value: 36321
                                },
                                {
                                    logo: "xiaomi",
                                    name: "小米",
                                    value: 13801
                                },
                                {
                                    logo: "samsung",
                                    name: "三星",
                                    value: 13669
                                },
                                {
                                    logo: "huawei",
                                    name: "华为",
                                    value: 11295
                                },
                                {
                                    logo: "meizu",
                                    name: "魅族",
                                    value: 7332
                                },
                                {
                                    logo: "vivo",
                                    name: "vivo",
                                    value: 6498
                                },
                                {
                                    logo: "nokia",
                                    name: "诺基亚",
                                    value: 6436
                                },
                                {
                                    logo: "sony",
                                    name: "索尼",
                                    value: 6322
                                },
                                {
                                    logo: "oppo",
                                    name: "OPPO",
                                    value: 4154
                                },
                                {
                                    logo: "coolpad",
                                    name: "酷派",
                                    value: 4102
                                }

                            ],
                            [//naifen
                                {
                                    logo: "yapei",
                                    name: "雅培",
                                    value: 1637
                                },
                                {
                                    logo: "meizanchen",
                                    name: "美赞臣",
                                    value: 1591
                                },
                                {
                                    logo: "huishi",
                                    name: "惠氏",
                                    value: 1318
                                },
                                {
                                    logo: "yili",
                                    name: "伊利",
                                    value: 1295
                                },
                                {
                                    logo: "quechao",
                                    name: "雀巢",
                                    value: 1283
                                },
                                {
                                    logo: "meisujiaer",
                                    name: "美素佳儿",
                                    value: 1161
                                },
                                {
                                    logo: "aitamei",
                                    name: "爱他美",
                                    value: 1063
                                },
                                {
                                    logo: "niulan",
                                    name: "牛栏",
                                    value: 993
                                },
                                {
                                    logo: "beiyinmei",
                                    name: "贝因美",
                                    value: 991
                                },
                                {
                                    logo: "xibao",
                                    name: "喜宝",
                                    value: 744
                                }

                            ],
                            [//canyin
                                {
                                    logo: "kendeji",
                                    name: "肯德基",
                                    value: 9599
                                },
                                {
                                    logo: "maidanglao",
                                    name: "麦当劳",
                                    value: 5907
                                },
                                {
                                    logo: "xingbake",
                                    name: "星巴克",
                                    value: 5635
                                },
                                {
                                    logo: "bishengke",
                                    name: "必胜客",
                                    value: 2952
                                },
                                {
                                    logo: "quanjude",
                                    name: "全聚德",
                                    value: 2519
                                },
                                {
                                    logo: "haidilao",
                                    name: "海底捞",
                                    value: 1530
                                },
                                {
                                    logo: "dekeshi",
                                    name: "德克士",
                                    value: 1012
                                },
                                {
                                    logo: "yonghedawang",
                                    name: "永和大王",
                                    value: 827
                                },
                                {
                                    logo: "jiyejia",
                                    name: "吉野家",
                                    value: 650
                                },
                                {
                                    logo: "zhengongfu",
                                    name: "真功夫",
                                    value: 491
                                }
                            ],
                            [//综合类
                                {
                                    logo: "jingdong",
                                    name: "京东",
                                    value: 43814
                                },
                                {
                                    logo: "tianmao",
                                    name: "天猫",
                                    value: 22491
                                },
                                {
                                    logo: "suningyigou",
                                    name: "苏宁易购",
                                    value: 3922
                                },
                                {
                                    logo: "yamaxun",
                                    name: "亚马逊",
                                    value: 3407
                                },
                                {
                                    logo: "weipinhui",
                                    name: "唯品会",
                                    value: 2765
                                },
                                {
                                    logo: "yihaodian",
                                    name: "1号店",
                                    value: 1424
                                },
                                {
                                    logo: "guomei",
                                    name: "国美",
                                    value: 1215
                                },
                                {
                                    logo: "dangdangwang",
                                    name: "当当网",
                                    value: 976
                                },
                                {
                                    logo: "yintaiwang",
                                    name: "银泰网",
                                    value: 643
                                },
                                {
                                    logo: "yixunwang",
                                    name: "易迅网",
                                    value: 444
                                }

                            ],
                            [//保险
                                {
                                    logo: "pinganbaoxian",
                                    name: "平安保险",
                                    value: 8919
                                },
                                {
                                    logo: "taipingyangbaoxian",
                                    name: "太平洋保险",
                                    value: 4341
                                },
                                {
                                    logo: "zhongguorenbao",
                                    name: "中国人保",
                                    value: 2860
                                },
                                {
                                    logo: "yangguangbaoxian",
                                    name: "阳光保险",
                                    value: 1770
                                },
                                {
                                    logo: "zhongguorenshou",
                                    name: "中国人寿",
                                    value: 1556
                                },
                                {
                                    logo: "taipingbaoxian",
                                    name: "太平保险",
                                    value: 744
                                },
                                {
                                    logo: "xinhuabaoxian",
                                    name: "新华保险",
                                    value: 1330
                                },
                                {
                                    logo: "huataibaoxian",
                                    name: "华泰保险",
                                    value: 1202
                                },
                                {
                                    logo: "shengdachexian",
                                    name: "盛大车险",
                                    value: 976
                                },
                                {
                                    logo: "taikangrenshou",
                                    name: "泰康人寿",
                                    value: 970
                                }


                            ],
                            [//SUV
                                {
                                    logo: "puladuo",
                                    name: "普拉多",
                                    value: 3043
                                },
                                {
                                    logo: "hanlanda",
                                    name: "汉兰达",
                                    value: 2777
                                },
                                {
                                    logo: "yihu",
                                    name: "翼虎",
                                    value: 2705
                                },
                                {
                                    logo: "kayan",
                                    name: "卡宴",
                                    value: 2684
                                },
                                {
                                    logo: "tuguan",
                                    name: "途观",
                                    value: 2221
                                },
                                {
                                    logo: "hafuh6",
                                    name: "哈弗h6",
                                    value: 2172
                                },
                                {
                                    logo: "aodiq5",
                                    name: "奥迪q5",
                                    value: 1941
                                },
                                {
                                    logo: "biyadis6",
                                    name: "比亚迪s6",
                                    value: 1707
                                },
                                {
                                    logo: "qijun",
                                    name: "奇骏",
                                    value: 1532
                                },
                                {
                                    logo: "turui",
                                    name: "途锐",
                                    value: 1521
                                }


                            ],
                            [//星级酒店
                                {
                                    logo: "wanhaojiudian",
                                    name: "万豪酒店",
                                    value: 2106
                                },
                                {
                                    logo: "xilaidengjiudian",
                                    name: "喜来登酒店",
                                    value: 1838
                                },
                                {
                                    logo: "huangguanjiarijiudian",
                                    name: "皇冠假日酒店",
                                    value: 1638
                                },
                                {
                                    logo: "xierdunjiudian",
                                    name: "希尔顿酒店",
                                    value: 1399
                                },
                                {
                                    logo: "xianggelilajiudian",
                                    name: "香格里拉酒店",
                                    value: 1180
                                },
                                {
                                    logo: "zhoujijiudian",
                                    name: "洲际酒店",
                                    value: 1070
                                },
                                {
                                    logo: "wanlijiudian",
                                    name: "万丽酒店",
                                    value: 842
                                },
                                {
                                    logo: "weisitingjiudian",
                                    name: "威斯汀酒店",
                                    value: 804
                                },
                                {
                                    logo: "kaiyuejiudian",
                                    name: "凯悦酒店",
                                    value: 765
                                },
                                {
                                    logo: "kaibinsijijiudian",
                                    name: "凯宾斯基酒店",
                                    value: 761
                                }


                            ],
                            [//旅游目的地
                                {
                                    logo: "beijing",
                                    name: "北京",
                                    value: 25212
                                },
                                {
                                    logo: "shanxi",
                                    name: "陕西",
                                    value: 23081
                                },
                                {
                                    logo: "zhejiang",
                                    name: "浙江",
                                    value: 21605
                                },
                                {
                                    logo: "sichuan",
                                    name: "四川",
                                    value: 18199
                                },
                                {
                                    logo: "anhui",
                                    name: "安徽",
                                    value: 17946
                                },
                                {
                                    logo: "shanghai",
                                    name: "上海",
                                    value: 17597
                                },
                                {
                                    logo: "guangdong",
                                    name: "广东",
                                    value: 16232
                                },
                                {
                                    logo: "jiangsu",
                                    name: "江苏",
                                    value: 16154
                                },
                                {
                                    logo: "fujian",
                                    name: "福建",
                                    value: 14617
                                },
                                {
                                    logo: "shandong",
                                    name: "山东",
                                    value: 13433
                                }


                            ],
                            [//旅游目的地
                                {
                                    logo: "nike",
                                    name: "NIKE",
                                    value: 12191
                                },
                                {
                                    logo: "adidas",
                                    name: "adidas",
                                    value: 6210
                                },
                                {
                                    logo: "newbalance",
                                    name: "New Balance",
                                    value: 6090
                                },
                                {
                                    logo: "converse",
                                    name: "CONVERSE",
                                    value: 2992
                                },
                                {
                                    logo: "anta",
                                    name: "安踏",
                                    value: 2233
                                },
                                {
                                    logo: "columbia",
                                    name: "Columbia",
                                    value: 2232
                                },
                                {
                                    logo: "lining",
                                    name: "李宁",
                                    value: 2185
                                },
                                {
                                    logo: "toread",
                                    name: "TOREAD",
                                    value: 2125
                                },
                                {
                                    logo: "tebu",
                                    name: "特步",
                                    value: 2084
                                },
                                {
                                    logo: "puma",
                                    name: "PUMA",
                                    value: 1794
                                }


                            ],
                            [//奢侈包
                                {
                                    logo: "luyiweideng",
                                    name: "路易威登",
                                    value: 1770
                                },
                                {
                                    logo: "xiangnaier",
                                    name: "香奈儿",
                                    value: 831
                                },
                                {
                                    logo: "pulada",
                                    name: "普拉达",
                                    value: 786
                                },
                                {
                                    logo: "guchi",
                                    name: "古驰",
                                    value: 764
                                },
                                {
                                    logo: "kouchi",
                                    name: "蔻驰",
                                    value: 647
                                },
                                {
                                    logo: "diao",
                                    name: "迪奥",
                                    value: 494
                                },
                                {
                                    logo: "bobaili",
                                    name: "博柏利",
                                    value: 439
                                },
                                {
                                    logo: "aimashi",
                                    name: "爱马仕",
                                    value: 404
                                },
                                {
                                    logo: "fendi",
                                    name: "芬迪",
                                    value: 294
                                },
                                {
                                    logo: "mcm",
                                    name: "MCM",
                                    value: 254
                                }


                            ],
                            [//护肤品
                                {
                                    logo: "yashilandai",
                                    name: "雅诗兰黛",
                                    value: 2698
                                },
                                {
                                    logo: "lankou",
                                    name: "兰蔻",
                                    value: 2613
                                },
                                {
                                    logo: "qianbi",
                                    name: "倩碧",
                                    value: 2014
                                },
                                {
                                    logo: "zishengtang",
                                    name: "资生堂",
                                    value: 1680
                                },
                                {
                                    logo: "diao",
                                    name: "迪奥",
                                    value: 1546
                                },
                                {
                                    logo: "xiangnaier",
                                    name: "香奈儿",
                                    value: 1492
                                },
                                {
                                    logo: "jiaoyunshi",
                                    name: "娇韵诗",
                                    value: 1227
                                },
                                {
                                    logo: "keyanshi",
                                    name: "科颜氏",
                                    value: 1182
                                },
                                {
                                    logo: "biouquan",
                                    name: "碧欧泉",
                                    value: 1078
                                },
                                {
                                    logo: "sk-ii",
                                    name: "SK-II",
                                    value: 1039
                                }


                            ],
                            [//语言
                                {
                                    logo: "xindongfang",
                                    name: "新东方教育科技集团",
                                    value: 3963
                                },
                                {
                                    logo: "yingfujiaoyu",
                                    name: "英孚教育",
                                    value: 673
                                },
                                {
                                    logo: "huanqiuyasi",
                                    name: "环球雅思",
                                    value: 548
                                },
                                {
                                    logo: "huaerjieyingyu",
                                    name: "华尔街英语",
                                    value: 468
                                },
                                {
                                    logo: "weiboguojiyingyu",
                                    name: "韦博国际英语",
                                    value: 341
                                },
                                {
                                    logo: "xinshijiejiaoyu",
                                    name: "新世界教育",
                                    value: 329
                                },
                                {
                                    logo: "xinhangdao",
                                    name: "新航道",
                                    value: 248
                                },
                                {
                                    logo: "daerduoyingyuwang",
                                    name: "大耳朵英语网",
                                    value: 225
                                },
                                {
                                    logo: "dishiniyingyu",
                                    name: "迪士尼英语",
                                    value: 217
                                },
                                {
                                    logo: "puteyingyu",
                                    name: "普特英语",
                                    value: 188
                                }


                            ]
                        ];

                    game.load.bitmapFont('brand_name_font', 'img/font/brand_name_font.png', 'img/font/brand_name_font.xml');
                    game.load.bitmapFont('top_order', 'img/font/top10_number.png', 'img/font/top10_number.xml');
                    game.load.image("list_item_bg", 'img/logo/list_item_bg.png');
                    game.load.image("list_scrollbar_bg_track", 'img/logo/list_scrollbar_bg_track.png');
                    game.load.image("list_scrollbar_bg", 'img/logo/list_scrollbar_bg.png');

                    for (var i = 0; i < top10Ary.length; i++) {
                        var industry = top10Ary[i];
                        for (var j = 0; j < industry.length; j++) {
                            game.load.image(industry[j].logo, 'img/logo/pic/' + industry[j].logo + '.png');
                        }
                    }

                };
                this.fileComplete=function(progress, cacheKey, success, totalLoaded, totalFiles) {
                    console.log("PROGRESSSS"+progress);
                    _mask.beginFill(0xff0000);
                    if(progress>25){
                        loader_c1_p.aphla=1;
                    }
                    _mask.arc(274, 508, 202, 0,game.math.degToRad(-360*progress/100.0),true)
                    _mask.endFill();
                }
                this.loadComplete =function(){
                    game.state.start("load_page1");
                    //alert("FUNFI")

                }
                this.loadStart=function(){

                    loader_c3=game.add.sprite(296,530,'loader_c3');

                    loader_c2=game.add.sprite(274,508,'loader_c2');
                    loader_c1=game.add.sprite(274,508,'loader_c1');
                    loader_t1=game.add.sprite(323,595,'loader_t1');
                    loader_focus=game.add.sprite(306,576,'loader_focus');
                    _mask = game.add.graphics(101, 101);
                    loader_c1_p=game.add.sprite(274,508,'loader_c1_p');
                    loader_c1_p.aphla=0;

                    	//Shapes drawn to the Graphics object must be filled.
                    _mask.beginFill(0xff0000);
                    _mask.arc(274, 508, 101, 0, 2*3.141592653589793);
                    _mask.endFill();
                    loader_c1.mask = _mask;
                    _mask.clear();
                    loader_focus.alpha=0;
                    TweenMax.to(loader_focus,1,{alpha:1,repeat:-1,ease: Elastic.easeIn.config(1, 0.3)});
                }
                this.startLoad= function(){


                    //INFO
                    game.load.image('num_2015', 'img/p1/2015.png');
                    game.load.image('page1_txt', 'img/p1/page1_txt.png');
                    game.load.image('txt_force', 'img/p1/txt_force.png');
                    game.load.image('pro_logo', 'img/p1/pro_logo.png');
                    game.load.image('baidu_logo', 'img/p1/baidu_l.png');
                    //TOP
                    game.load.image('top_c1', 'img/p1/top_c1.png');
                    game.load.image('top_c2', 'img/p1/top_c2.png');
                    game.load.image('top_s1', 'img/p1/top_s1.png');
                    game.load.image('top_s2', 'img/p1/top_s2.png');
                    game.load.image('top_s3', 'img/p1/top_s3.png');

                    this.loadTopList();

                    this.loadBrand();
                    //LEFT
                    game.load.image('left_l1', 'img/p1/left_l1.png');
                    game.load.image('left_s1', 'img/p1/left_s1.png');
                    game.load.image('left_s2', 'img/p1/left_s2.png');
                    game.load.image('left_s3', 'img/p1/left_s3.png');
                    game.load.image('left_t1', 'img/p1/left_t1.png');
                    game.load.image('left_t2', 'img/p1/left_t2.png');
                    game.load.image('left_t3', 'img/p1/left_t3.png');
                    game.load.image('left_t4', 'img/p1/left_t4.png');
                    game.load.image('left_t5', 'img/p1/left_t5.png');
                    game.load.image('left_t6', 'img/p1/left_t6.png');
                    game.load.image('left_t7', 'img/p1/left_t7.png');
                    game.load.image('left_t8', 'img/p1/left_t8.png');
                    game.load.image('left_t9', 'img/p1/left_t9.png');
                    //CENTER
                    game.load.image('center_c1', 'img/p1/center_c1.png');
                    game.load.image('center_c2', 'img/p1/center_c2.png');
                    game.load.image('center_c3', 'img/p1/center_c3.png');
                    game.load.image('center_c4', 'img/p1/center_c4.png');
                    game.load.image('center_c5', 'img/p1/center_c5.png');
                    game.load.image('center_c6', 'img/p1/center_c6.png');
                    game.load.image('center_l1', 'img/p1/center_l1.png');
                    game.load.image('center_l2', 'img/p1/center_l2.png');
                    game.load.image('center_l3', 'img/p1/center_l3.png');
                    game.load.image('center_l4', 'img/p1/center_l4.png');
                    game.load.image('center_s1', 'img/p1/center_s1.png');
                    game.load.image('center_s2', 'img/p1/center_s2.png');
                    game.load.image('center_s3', 'img/p1/center_s3.png');
                    game.load.image('center_s4', 'img/p1/center_s4.png');
                    game.load.image('center_s4', 'img/p1/center_s4.png');
                    game.load.image('center_s5', 'img/p1/center_s5.png');
                    game.load.image('center_s6', 'img/p1/center_s6.png');
                    game.load.image('center_s7', 'img/p1/center_s7.png');
                    game.load.image('center_s8', 'img/p1/center_s8.png');
                    game.load.image('center_t1', 'img/p1/center_t1.png');
                    game.load.image('center_t2', 'img/p1/center_t2.png');
                    game.load.image('center_t3', 'img/p1/center_t3.png');
                    game.load.image('center_t4', 'img/p1/center_t4.png');
                    game.load.image('center_t5', 'img/p1/center_t5.png');

                    game.load.image('right_c1', 'img/p1/right_c1.png');
                    game.load.image('right_c2', 'img/p1/right_c2.png');
                    game.load.image('right_circle', 'img/p1/right_circle.png');
                    game.load.image('right_circle_1', 'img/p1/right_circle_1.png');
                    game.load.image('right_l1', 'img/p1/right_l1.png');
                    game.load.image('right_t1', 'img/p1/right_t1.png');
                    game.load.image('right_t2', 'img/p1/right_t2.png');
                    game.load.image('right_t3', 'img/p1/right_t3.png');


                    //Bottom
                    game.load.image('button_next', 'img/p1/button_next.png');
                    game.load.image('bottom_c1', 'img/p1/bottom_c1.png');
                    game.load.image('bottom_c2', 'img/p1/bottom_c2.png');
                    game.load.image('bottom_c3', 'img/p1/bottom_c3.png');

                    game.load.image('bottom_t1', 'img/p1/bottom_t1.png');
                    game.load.image('bottom_t2', 'img/p1/bottom_t2.png');

                    //MENU
                    game.load.image('menu_bg', 'img/p2/menu_bg.jpg');
                    game.load.image("menu_item_bg", 'img/p2/menu_item_bg.png');
                    game.load.image("menu_scrollbar_bg", 'img/p2/menu_scrollbar_bg.png');
                    game.load.image("menu_scrollbar_bg_track", 'img/p2/menu_scrollbar_bg_track.png');
                    game.load.bitmapFont('FZLanTingHeiS-R-GB', 'img/font/industry_name.png', 'img/font/industry_name.xml');
                    game.load.image("button_all", 'img/p2/button_all.png');
                    game.load.image("button_anim", 'img/p2/button_anim.png');
                    game.load.image("button_share", 'img/p2/button_share.png');
                    game.load.image("button_weixin", 'img/p2/button_weixin.png');


                    //Share

                    game.load.image("share_l1", 'img/p2/share_l1.png');
                    game.load.image("share_l2", 'img/p2/share_l2.png');
                    game.load.image("share_l3", 'img/p2/share_l3.png');
                    game.load.image("share_t1", 'img/p2/share_t1.png');
                    game.load.image("mask_bg", 'img/p2/mask_bg.png');
                    game.load.image("column", 'img/p2/column.png');


                    game.load.image('top_bg', 'img/p2/top_bg.png');
                    game.load.image('list_bg', 'img/logo/list_bg.png');

                    game.load.image("progress_bar", 'img/logo/progress_bar.png');
                    game.load.image("progress_bar_bg", 'img/logo/progress_bar_bg.png');
                    game.load.spritesheet('menu_button', 'img/p2/menu_button.png', 92, 92, 2);

                    game.load.image('brand_graphic1', 'img/p2/brand_graphic1.png');
                    game.load.image('txt1_1', 'img/p2/txt1_1.png');
                    game.load.image('txt2_1', 'img/p2/txt2_1.png');
                    game.load.image('line1', 'img/p2/line1.png');
                    game.load.image('line2', 'img/p2/line2.png');
                    game.load.image('line3', 'img/p2/line3.png');
                    game.load.image('side_circle', 'img/p2/side_circle.png');
                    game.load.image('txt_top_10', 'img/p2/Top-10.png');


                    game.load.bitmapFont('Eclectic', 'img/font/digit.png', 'img/font/digit.xml');

                    game.load.start();

                }
                this.preload =
                    function () {
                        //game.load.image('center_circle', 'img/p1/center_circle.png');
                    };
                this.create = function () {
                    console.log("PreLoader");


                    game.load.onLoadStart.add(this.loadStart, this);
                    game.load.onFileComplete.add(this.fileComplete, this);
                    game.load.onLoadComplete.add(this.loadComplete, this);
                    //game.load.onLoadComplete.remove();
                    this.startLoad();



                }
            }
            game.States.load_page1 = function () {
                this.drawMask = function (p_x, p_y, w, h, obj) {
                    //MASK
                    var _mask = game.add.graphics(0, 0);
                    _mask.beginFill(0xffffff);
                    _mask.drawRect(p_x, p_y, w, h);
                    //line1mask.x=406;
                    obj.mask = _mask;
                    return _mask;
                };

                this.preload =
                    function () {

                    };
                this.create = function () {
                    console.log("p1");
                    var p1_frame;
                    p1_frame = game.add.sprite(0, 0);
                    //info
                    var num_2015;
                    var page1_txt;
                    var txt_force;
                    var baidu_logo;
                    var pro_logo;

                    baidu_logo = p1_frame.addChild(game.make.sprite(32, 54, "baidu_logo"));

                    //top
                    var top_c1;
                    var top_c2;
                    var top_s1;
                    var top_s2;
                    var top_s3;

                    top_c1 = p1_frame.addChild(game.make.sprite(504, -80, "top_c1"));
                    top_c2 = p1_frame.addChild(game.make.sprite(-578, -309, "top_c2"));
                    top_s1 = p1_frame.addChild(game.make.sprite(8, 18, "top_s1"));
                    top_s2 = p1_frame.addChild(game.make.sprite(8, 260, "top_s2"));
                    var top_s2_mask = this.drawMask(141, 159, 133, 101, top_s2);
                    top_s3 = p1_frame.addChild(game.make.sprite(227, 252, "top_s3"));
                    //top_c1.anchor.setTo(0.5);
                    top_c1.alpha = 0;
                    top_c2.alpha = 0;
                    top_s1.alpha = 0;
                    //top_s3.alpha=0;


                    var top_s_mask_timeline = new TimelineMax();
                    top_s_mask_timeline.append(new TweenMax(top_s1, 0.8, {alpha: 1}));
                    top_s_mask_timeline.append(new TweenMax(top_s2_mask, 1.6, {x: -133, y: 101}));
                    top_s_mask_timeline.append(new TweenMax(top_s2_mask, 1.6, {x: 0, y: 0}));
                    top_s_mask_timeline.append(new TweenMax(top_s1, 1, {alpha: 0}));
                    top_s_mask_timeline.repeatDelay(0.2);
                    top_s_mask_timeline.repeat(-1);


                    TweenMax.to(top_s3, 2, {alpha: 0, repeat: -1, ease: Bounce.easeOut});


                    var top_timeline = new TimelineMax();
                    top_timeline.append(new TweenMax(top_c1, 0.2, {alpha: 1}));
                    top_timeline.append(new TweenMax(top_c2, 0.2, {alpha: 1}));

                    //left
                    var left_l1;
                    var left_s1;
                    var left_s2;
                    var left_s3;
                    var left_t1_0;
                    var left_t2;
                    var left_t3;
                    var left_t4;
                    var left_t5;
                    var left_t2_1;
                    var left_t6;
                    var left_t7;
                    var left_t8;
                    var left_l1_1;
                    var left_t2_2;
                    var left_t3_1;
                    left_l1 = p1_frame.addChild(game.make.sprite(0, 1083, "left_l1"));
                    left_s1 = p1_frame.addChild(game.make.sprite(102, 1112, "left_s1"));
                    left_s2 = p1_frame.addChild(game.make.sprite(32, 1185, "left_s2"));
                    left_s3 = p1_frame.addChild(game.make.sprite(391, 906, "left_s3"));

                    left_t1_0 = p1_frame.addChild(game.make.sprite(87, 373, "left_t1"));
                    left_t1_0.alpha = 0;
                    var left_t1_1 = p1_frame.addChild(game.make.sprite(95, 373, "left_t1"));
                    left_t1_1.alpha = 0;
                    var left_t1_2 = p1_frame.addChild(game.make.sprite(102, 373, "left_t1"));
                    left_t1_2.alpha = 0;
                    var left_t1_3 = p1_frame.addChild(game.make.sprite(96, 380, "left_t1"));
                    left_t1_3.alpha = 0;
                    var left_t1_4 = p1_frame.addChild(game.make.sprite(103, 380, "left_t1"));
                    left_t1_4.alpha = 0;

                    var left_t1_10 = p1_frame.addChild(game.make.sprite(87, 389, "left_t1"));
                    var left_t1_11 = p1_frame.addChild(game.make.sprite(95, 389, "left_t1"));
                    var left_t1_12 = p1_frame.addChild(game.make.sprite(102, 389, "left_t1"));
                    var left_t1_13 = p1_frame.addChild(game.make.sprite(96, 397, "left_t1"));
                    var left_t1_14 = p1_frame.addChild(game.make.sprite(103, 397, "left_t1"));

                    var left_t23_f = p1_frame.addChild(game.make.sprite(54, 1048 + 19));
                    var left_t2_3 = left_t23_f.addChild(game.make.sprite(0, 0, "left_t2"));
                    left_t3 = left_t23_f.addChild(game.make.sprite(45 - 54, 1062 - 1048, "left_t3"));
                    var left_t23_f_m = this.drawMask(45, 1048, 19, 25, left_t23_f);
                    left_t2 = p1_frame.addChild(game.make.sprite(54, 1112, "left_t2"));

                    left_t4 = p1_frame.addChild(game.make.sprite(0, 977, "left_t4"));
                    left_t2_1 = p1_frame.addChild(game.make.sprite(56, 904, "left_t2"));
                    left_t5 = p1_frame.addChild(game.make.sprite(19 - 88, 884, "left_t5"));
                    var left_t5_mask = this.drawMask(19, 884, 88, 12, left_t5);
                    left_t6 = p1_frame.addChild(game.make.sprite(101, 904, "left_t6"));
                    left_l1_1 = p1_frame.addChild(game.make.sprite(0, 874, "left_l1"));
                    left_t7 = p1_frame.addChild(game.make.sprite(95, 824, "left_t7"));
                    var left_t7_mask = this.drawMask(95 - 12, 824 - 40, 12, 40, left_t7);

                    left_t2_2 = p1_frame.addChild(game.make.sprite(56, 839, "left_t2"));
                    left_t3_1 = p1_frame.addChild(game.make.sprite(46, 853, "left_t3"));
                    var left_t7_1 = p1_frame.addChild(game.make.sprite(35, 824, "center_t4"));
                    left_t8 = p1_frame.addChild(game.make.sprite(24, 711, "left_t8"));
                    var left_t8_1 = p1_frame.addChild(game.make.sprite(25, 576, "left_t8"));
                    var left_t9 = p1_frame.addChild(game.make.sprite(0, 452, "left_t9"));
                    var left_t9_mask = this.drawMask(0, 452 + 161, 102, 161, left_t9);

                    var left_t10 = p1_frame.addChild(game.make.sprite(147, 373, "left_t2"));
                    var left_t11 = p1_frame.addChild(game.make.sprite(147, 389, "left_t2"));
                    var left_t12 = p1_frame.addChild(game.make.sprite(13, 373, "left_t2"));
                    var left_t13 = p1_frame.addChild(game.make.sprite(13, 389, "left_t2"));

                    var left_t2_timeline = new TimelineMax();
                    left_t2_timeline.append(new TweenMax(left_t7_1, 1.5, {y: 824 - 11, alpha: 0}));
                    left_t2_timeline.append(new TweenMax(left_t2_2, 1.5, {y: 839 - 11, alpha: 0}));
                    left_t2_timeline.append(new TweenMax(left_t3_1, 1.5, {y: 853 - 11, alpha: 0}));
                    left_t2_timeline.yoyo(true);
                    left_t2_timeline.repeat(-1);
                    left_t2_timeline.repeatDelay(1.5);

                    TweenMax.to(left_s1, 0.3, {alpha: 0, repeat: -1, repeatDelay: 0.3});
                    TweenMax.to(left_t23_f, 2.3, {y: 1019, repeat: -1});
                    TweenMax.to(left_t6, 1.3, {alpha: 0, repeat: -1, yoyo: true, ease: Bounce.easeInOut});
                    TweenMax.to(left_t5, 3, {x: 19 + 88, repeat: -1});
                    TweenMax.to(left_t7_mask, 1.5, {x: 12, y: 40, repeat: -1, yoyo: true});
                    TweenMax.to(left_t9_mask, 1.5, {y: -161 - 161, repeat: -1});
                    TweenMax.to(left_t8, 1.5, {alpha: 0, repeat: -1, yoyo: true});
                    TweenMax.to(left_t8_1, 1.5, {alpha: 0, repeat: -1, yoyo: true, delay: 1});
                    TweenMax.to(left_t2_1, 1.7, {x: 80, alpha: 0, repeat: -1});


                    var left_t1_timeline = new TimelineMax();
                    left_t1_timeline.append(new TweenMax(left_t1_0, 0.5, {alpha: 1}));
                    left_t1_timeline.append(new TweenMax(left_t1_1, 0.5, {alpha: 1}));
                    left_t1_timeline.append(new TweenMax(left_t1_2, 0.5, {alpha: 1}));
                    left_t1_timeline.append(new TweenMax(left_t1_3, 0.5, {alpha: 1}));
                    left_t1_timeline.append(new TweenMax(left_t1_4, 0.5, {alpha: 1}));
                    left_t1_timeline.repeatDelay(0.5);
                    left_t1_timeline.repeat(-1);

                    var left_t1_1_timeline = new TimelineMax();
                    left_t1_1_timeline.append(new TweenMax(left_t1_10, 0.7, {alpha: 0}));
                    left_t1_1_timeline.append(new TweenMax(left_t1_11, 0.4, {alpha: 0}));
                    left_t1_1_timeline.append(new TweenMax(left_t1_12, 0.4, {alpha: 0}));
                    left_t1_1_timeline.append(new TweenMax(left_t1_13, 0.4, {alpha: 0}));
                    left_t1_1_timeline.append(new TweenMax(left_t1_14, 0.4, {alpha: 0}));
                    left_t1_1_timeline.repeat(-1);


                    //center
                    var center_frame;
                    var center_c1;
                    var center_c2;
                    var center_c3;
                    var center_c4;
                    var center_c5;
                    var center_c6;
                    var center_l1;
                    var center_l2;
                    var center_l3;
                    var center_l4;
                    var center_s1;
                    var center_s2;
                    var center_s3;
                    var center_s4;
                    var center_s5;
                    var center_s6_1;
                    var center_s6_2;
                    var center_s6_3;
                    var center_s6_4;
                    var center_s7_1;
                    var center_s7_2;
                    var center_s7_3;
                    var center_s7_4;

                    var center_s8;
                    var center_t1_1;
                    var center_t1_2;
                    var center_t2;
                    var center_t3;
                    var center_t4;
                    var center_t5;

                    var right_c1;
                    var right_c2;
                    var right_circle_1;
                    var right_circle_2;
                    var right_circle_3;
                    var right_l1;
                    var right_t1;
                    var right_t2;
                    var right_t3;

                    if (window.innerHeight > 960) {
                        center_frame = p1_frame.addChild(game.make.sprite(104, 335));
                        bottom_frame = p1_frame.addChild(game.make.sprite(274, 950));
                    } else {
                        center_frame = p1_frame.addChild(game.make.sprite(104, 250));
                        bottom_frame = p1_frame.addChild(game.make.sprite(274, 685));
                    }


                    center_c1 = center_frame.addChild(game.make.sprite(0, 0, "center_c1"));
                    center_c2 = center_frame.addChild(game.make.sprite(221 - 104, 454 - 335, "center_c2"));
                    center_c3 = center_frame.addChild(game.make.sprite(218 - 104, 500 - 335, "center_c3"));
                    center_c4 = center_frame.addChild(game.make.sprite(205 - 104 + 344 / 2, 437 - 335 + 344 / 2, "center_c4"));
                    center_c5 = center_frame.addChild(game.make.sprite(226 - 104 + 298 / 2, 460 - 335 + 298 / 2, "center_c5"));
                    center_c6 = center_frame.addChild(game.make.sprite(0 + 546 / 2, 0 + 546 / 2, "center_c6"));

                    center_c1.alpha = 0;
                    center_c2.alpha = 0;
                    center_c3.alpha = 0;
                    center_c4.alpha = 0;
                    center_c4.anchor.setTo(0.5, 0.5);
                    center_c5.scale.setTo(0);
                    center_c6.scale.setTo(0);
                    center_c5.anchor.setTo(0.5);
                    center_c6.anchor.setTo(0.5);


                    TweenMax.to(center_c4, 13, {angle: -360, yoyo: true, repeat: -1, ease: Bounce.easeInOut});
                    TweenMax.to(center_c5, 16, {angle: 360, repeat: -1, ease: Linear.easeOut});
                    TweenMax.to(center_c6, 7.4, {angle: 720, repeat: -1, ease: Linear.ease});


                    center_l1 = center_frame.addChild(game.make.sprite(218 - 104, 438 - 335, "center_l1"));
                    center_l1.alpha = 0;
                    center_l2 = center_frame.addChild(game.make.sprite(167 - 104, 316 - 335, "center_l2"));
                    var center_l2_mask = this.drawMask(167, 316 + 113, 3, 113, center_l2);
                    center_l3 = center_frame.addChild(game.make.sprite(168 - 104, 316 - 335, "center_l3"));
                    var center_l3_mask = this.drawMask(168 - 304, 316, 304, 5, center_l3);
                    center_l4 = center_frame.addChild(game.make.sprite(469 - 104, 317 - 335, "center_l4"))
                    var center_l4_mask = this.drawMask(469, 317 - 35, 4, 35, center_l4);


                    TweenMax.to(center_l1, 1.5, {alpha: 1, ease: Bounce.easeInOut});
                    TweenMax.to(center_c5, 16, {angle: 360, repeat: -1, ease: Linear.easeOut});
                    TweenMax.to(center_c6, 7.4, {angle: 720, repeat: -1, ease: Linear.ease});

                    center_s1 = center_frame.addChild(game.make.sprite(541 - 104, 729 - 335, "center_s1"));
                    center_s2 = center_frame.addChild(game.make.sprite(556 - 104, 674 - 335, "center_s2"));
                    center_s3 = center_frame.addChild(game.make.sprite(600 - 104, 363 - 335, "center_s3"));
                    center_s3.alpha = 0;
                    center_s4 = center_frame.addChild(game.make.sprite(185 - 104, 284 - 335, "center_s4"));
                    center_s4.alpha = 0;


                    center_s5 = center_frame.addChild(game.make.sprite(358 - 104, 289 - 335, "center_s5"));
                    center_s6_1 = center_frame.addChild(game.make.sprite(287 - 104, 290 - 335, "center_s6"));
                    center_s6_2 = center_frame.addChild(game.make.sprite(308 - 104, 290 - 335, "center_s6"));
                    center_s7_1 = center_frame.addChild(game.make.sprite(322 - 104, 288 - 335, "center_s7"));
                    center_s7_2 = center_frame.addChild(game.make.sprite(340 - 104, 288 - 335, "center_s7"));
                    center_s7_3 = center_frame.addChild(game.make.sprite(400 - 104, 289 - 335, "center_s7"));
                    center_s7_4 = center_frame.addChild(game.make.sprite(418 - 104, 289 - 335, "center_s7"));
                    center_s6_3 = center_frame.addChild(game.make.sprite(432 - 104, 289 - 335, "center_s6"));
                    center_s6_4 = center_frame.addChild(game.make.sprite(452 - 104, 289 - 335, "center_s6"));

                    center_s8 = center_frame.addChild(game.make.sprite(472 - 104, 318 - 335, "center_s8"));
                    center_s8.alpha = 0;
                    var center_l_timeline = new TimelineMax();
                    //center_l_timeline.append(new TweenMax(line, 0.5, {alpha: 1}));
                    center_l_timeline.append(new TweenMax(center_l2_mask, 0.5, {y: -113}));
                    center_l_timeline.append(new TweenMax(center_s4, 0.3, {alpha: 1, repeat: 1, ease: Bounce.easeIn}));
                    center_l_timeline.append(new TweenMax(center_l3_mask, 1, {x: 304}));
                    center_l_timeline.append(new TweenMax(center_s8, 0.6, {alpha: 1}));
                    center_l_timeline.append(new TweenMax(center_l4_mask, 0.3, {y: 35}));
                    center_l_timeline.yoyo(true);
                    center_l_timeline.repeat(-1);
                    center_l_timeline.delay(1.8);
                    center_t1_1 = center_frame.addChild(game.make.sprite(377 - 104, 382 - 335, "center_t1"));
                    center_t1_2 = center_frame.addChild(game.make.sprite(377 - 104, 411 - 335, "center_t1"));

                    center_t2 = center_frame.addChild(game.make.sprite(581 - 104, 568 - 335, "center_t2"));
                    center_t3 = center_frame.addChild(game.make.sprite(534 - 104, 320 - 335, "center_t3"));
                    center_t3.alpha = 0;
                    center_t4 = center_frame.addChild(game.make.sprite(546 - 104, 327 - 335, "center_t4"));
                    center_t4.alpha = 0;
                    center_t5 = center_frame.addChild(game.make.sprite(615 - 104, 320 - 335, "center_t5"));
                    center_t5.alpha = 0;

                    var center_s_timeline = new TimelineMax();
                    center_s_timeline.append(new TweenMax(center_s3, 0.8, {alpha: 1}));
                    center_s_timeline.append(new TweenMax(center_t5, 0.4, {alpha: 1}));
                    center_s_timeline.append(new TweenMax(center_t4, 0.5, {alpha: 1}));
                    center_s_timeline.append(new TweenMax(center_t3, 0.5, {alpha: 1}));
                    center_s_timeline.repeat(-1);
                    center_s_timeline.repeatDelay(4);
                    center_s_timeline.yoyo(true);

                    right_c1 = center_frame.addChild(game.make.sprite(588 - 104, 465 - 335, "right_c1"));
                    right_c1.alpha = 0;
                    right_c2 = center_frame.addChild(game.make.sprite(388 - 104, 410 - 335, "right_c2"));
                    right_c2.alpha = 0;
                    right_circle_1 = center_frame.addChild(game.make.sprite(605 - 104 + 53 / 2, 566 - 335 + 53 / 2, "right_circle_1"));
                    right_circle_1.alpha = 0;
                    right_circle_1.anchor.setTo(0.5);
                    right_circle_2 = center_frame.addChild(game.make.sprite(666 - 104 + 53 / 2, 566 - 335 + 53 / 2, "right_circle"));
                    right_circle_2.alpha = 0;
                    right_circle_2.anchor.setTo(0.5);
                    right_circle_3 = center_frame.addChild(game.make.sprite(726 - 104 + 53 / 2, 566 - 335 + 53 / 2, "right_circle"));
                    right_circle_3.alpha = 0;
                    right_circle_3.anchor.setTo(0.5);
                    right_l1 = center_frame.addChild(game.make.sprite(622 - 104, 802 - 335, "right_l1"));
                    right_t1 = center_frame.addChild(game.make.sprite(687 - 104, 853 - 335, "right_t1"));
                    right_t2 = center_frame.addChild(game.make.sprite(576 - 104, 888 - 335, "right_t2"));
                    right_t2.alpha = 0.1;
                    right_t3 = center_frame.addChild(game.make.sprite(658 - 104, 633 - 335 + 75, "right_t3"));
                    var right_t3_m = this.drawMask(658, 633, 68, 75, right_t3);
                    var right_timeline = new TimelineMax();
                    right_timeline.append(new TweenMax(right_c2, 0.2, {alpha: 1}));
                    right_timeline.append(new TweenMax(right_c1, 0.2, {alpha: 1}));
                    right_timeline.append(new TweenMax(right_circle_1, 0.1, {alpha: 1}));
                    right_timeline.append(new TweenMax(right_circle_2, 0.2, {alpha: 1}));
                    right_timeline.append(new TweenMax(right_circle_3, 0.2, {alpha: 1}));
                    TweenMax.to(right_circle_2, 0.3, {angle: 7, repeat: -1, yoyo: true});
                    TweenMax.to(right_circle_1, 0.8, {angle: -5, repeat: -1, yoyo: true});
                    TweenMax.to(right_circle_3, 0.7, {angle: -6, repeat: -1, yoyo: true});
                    TweenMax.to(right_circle_2, 0.3, {angle: 7, repeat: -1, yoyo: true});
                    TweenMax.to(right_circle_1, 0.8, {angle: -5, repeat: -1, yoyo: true});
                    TweenMax.to(right_t3, 5, {y: 223, repeat: -1});
                    TweenMax.to(right_t2, 5.3, {alpha: 1, repeat: -1, yoyo: true, repeatDelay: 2.1});


                    num_2015 = center_frame.addChild(game.make.sprite(210, 164, "num_2015"));
                    page1_txt = center_frame.addChild(game.make.sprite(135, 266, "page1_txt"));
                    txt_force = center_frame.addChild(game.make.sprite(175 - 104, 585 - 335, "txt_force"));
                    pro_logo = center_frame.addChild(game.make.sprite(186, -176, "pro_logo"));
                    num_2015.alpha = 0;
                    page1_txt.alpha = 0;
                    txt_force.alpha = 0;
                    pro_logo.y = -450;
                    TweenMax.to(txt_force, 0.7, {alpha: 1, repeat: -1, delay: 2});

                    var center_timeline = new TimelineMax();
                    center_timeline.append(new TweenMax(center_c1, 0.1, {alpha: 1}));
                    center_timeline.append(new TweenMax(center_c2, 0.2, {alpha: 1}));
                    center_timeline.append(new TweenMax(center_c3, 0.3, {alpha: 1}));
                    center_timeline.append(new TweenMax(center_c4, 0.3, {alpha: 1}));
                    center_timeline.append(new TweenMax(center_c5.scale, 0.3, {x: 1, y: 1}));
                    center_timeline.append(new TweenMax(center_c6.scale, 0.3, {x: 1, y: 1}));
                    center_timeline.append(new TweenMax(center_l1, 0.3, {alpha: 1}));
                    center_timeline.append(new TweenMax(pro_logo, 0.3, {y: -176, ease: Bounce.easeOut}));
                    center_timeline.append(new TweenMax(num_2015, 0.3, {alpha: 1}));

                    center_timeline.append(new TweenMax(page1_txt, 0.2, {alpha: 1, repeat: 2}));


                    //button
                    var button_next;
                    var bottom_c1;
                    var bottom_c2;
                    var bottom_c3
                    var bottom_t1;
                    var bottom_t2;
                    var bottom_frame;


                    bottom_c1 = bottom_frame.addChild(game.make.sprite(354 - 274, 1031 - 950, "bottom_c1"));
                    bottom_c1.alpha = 0;
                    bottom_c2 = bottom_frame.addChild(game.make.sprite(279 - 274 + 96, 956 - 950 + 96, "bottom_c2"));
                    bottom_c2.scale.setTo(0);
                    bottom_c2.anchor.setTo(0.5);
                    bottom_c3 = bottom_frame.addChild(game.make.sprite(203 / 2, 203 / 2, "bottom_c3"));
                    bottom_c3.anchor.setTo(0.5);
                    bottom_c3.scale.setTo(0);
                    bottom_t1 = bottom_frame.addChild(game.make.sprite(563 - 274, 1104 - 950, "bottom_t1"));
                    bottom_t1.alpha = 0;
                    bottom_t2 = bottom_frame.addChild(game.make.sprite(563 - 274, 1133 - 950, "bottom_t2"));
                    bottom_t2.alpha = 0;


                    button_next = bottom_frame.addChild(game.make.button(348 - 274, 1038 - 950, "button_next", function () {
                        game.add.tween(p1_frame).to({alpha: 0}, 600, null, true, 300, 0, false);
                        game.add.tween(game).to({transparent: false}, 600, null, true, 300, 0, false);
                        p1_frame.destroy();

                        game.state.start('load_page2');
                    }, this));
                    button_next.alpha = 0;

                    var bottom_timeline = new TimelineMax();
                    bottom_timeline.append(new TweenMax(bottom_c1, 0.3, {alpha: 1}));
                    bottom_timeline.append(new TweenMax(bottom_c2.scale, 0.3, {x: 1, y: 1}));
                    bottom_timeline.append(new TweenMax(bottom_c3.scale, 0.3, {x: 1, y: 1}));
                    bottom_timeline.append(new TweenMax(button_next, 0.3, {alpha: 1}));

                    TweenMax.to(bottom_c2, 3.6, {angle: -180, repeat: -1, yoyo: true});
                    TweenMax.to(bottom_c3, 8, {angle: 360, repeat: -1, ease: Bounce.easeInOut});
                    TweenMax.to(bottom_t1, 3, {alpha: 1, repeat: -1, ease: Bounce.easeInOut});
                    TweenMax.to(bottom_t2, 4, {alpha: 1, repeat: -1, ease: Bounce.easeInOut});
                    TweenMax.to(button_next, 1, {y: 96, repeat: -1, yoyo: true, ease: Bounce.easeOut});

                    var first_timeline = new TimelineMax();
                    first_timeline
                        .append(center_timeline)
                        .append(top_timeline)
                        .append(bottom_timeline)
                        .append(right_timeline)
                    first_timeline.play();

                }
            }
            game.States.load_page2 = function () {
                var top10Ary =
                    [
                        [//手机
                            {
                                logo: "apple",
                                name: "苹果",
                                value: 36321
                            },
                            {
                                logo: "xiaomi",
                                name: "小米",
                                value: 13801
                            },
                            {
                                logo: "samsung",
                                name: "三星",
                                value: 13669
                            },
                            {
                                logo: "huawei",
                                name: "华为",
                                value: 11295
                            },
                            {
                                logo: "meizu",
                                name: "魅族",
                                value: 7332
                            },
                            {
                                logo: "vivo",
                                name: "vivo",
                                value: 6498
                            },
                            {
                                logo: "nokia",
                                name: "诺基亚",
                                value: 6436
                            },
                            {
                                logo: "sony",
                                name: "索尼",
                                value: 6322
                            },
                            {
                                logo: "oppo",
                                name: "OPPO",
                                value: 4154
                            },
                            {
                                logo: "coolpad",
                                name: "酷派",
                                value: 4102
                            }

                        ],
                        [//naifen
                            {
                                logo: "yapei",
                                name: "雅培",
                                value: 1637
                            },
                            {
                                logo: "meizanchen",
                                name: "美赞臣",
                                value: 1591
                            },
                            {
                                logo: "huishi",
                                name: "惠氏",
                                value: 1318
                            },
                            {
                                logo: "yili",
                                name: "伊利",
                                value: 1295
                            },
                            {
                                logo: "quechao",
                                name: "雀巢",
                                value: 1283
                            },
                            {
                                logo: "meisujiaer",
                                name: "美素佳儿",
                                value: 1161
                            },
                            {
                                logo: "aitamei",
                                name: "爱他美",
                                value: 1063
                            },
                            {
                                logo: "niulan",
                                name: "牛栏",
                                value: 993
                            },
                            {
                                logo: "beiyinmei",
                                name: "贝因美",
                                value: 991
                            },
                            {
                                logo: "xibao",
                                name: "喜宝",
                                value: 744
                            }

                        ],
                        [//canyin
                            {
                                logo: "kendeji",
                                name: "肯德基",
                                value: 9599
                            },
                            {
                                logo: "maidanglao",
                                name: "麦当劳",
                                value: 5907
                            },
                            {
                                logo: "xingbake",
                                name: "星巴克",
                                value: 5635
                            },
                            {
                                logo: "bishengke",
                                name: "必胜客",
                                value: 2952
                            },
                            {
                                logo: "quanjude",
                                name: "全聚德",
                                value: 2519
                            },
                            {
                                logo: "haidilao",
                                name: "海底捞",
                                value: 1530
                            },
                            {
                                logo: "dekeshi",
                                name: "德克士",
                                value: 1012
                            },
                            {
                                logo: "yonghedawang",
                                name: "永和大王",
                                value: 827
                            },
                            {
                                logo: "jiyejia",
                                name: "吉野家",
                                value: 650
                            },
                            {
                                logo: "zhengongfu",
                                name: "真功夫",
                                value: 491
                            }
                        ],
                        [//综合类
                            {
                                logo: "jingdong",
                                name: "京东",
                                value: 43814
                            },
                            {
                                logo: "tianmao",
                                name: "天猫",
                                value: 22491
                            },
                            {
                                logo: "suningyigou",
                                name: "苏宁易购",
                                value: 3922
                            },
                            {
                                logo: "yamaxun",
                                name: "亚马逊",
                                value: 3407
                            },
                            {
                                logo: "weipinhui",
                                name: "唯品会",
                                value: 2765
                            },
                            {
                                logo: "yihaodian",
                                name: "1号店",
                                value: 1424
                            },
                            {
                                logo: "guomei",
                                name: "国美",
                                value: 1215
                            },
                            {
                                logo: "dangdangwang",
                                name: "当当网",
                                value: 976
                            },
                            {
                                logo: "yintaiwang",
                                name: "银泰网",
                                value: 643
                            },
                            {
                                logo: "yixunwang",
                                name: "易迅网",
                                value: 444
                            }

                        ],
                        [//保险
                            {
                                logo: "pinganbaoxian",
                                name: "平安保险",
                                value: 8919
                            },
                            {
                                logo: "taipingyangbaoxian",
                                name: "太平洋保险",
                                value: 4341
                            },
                            {
                                logo: "zhongguorenbao",
                                name: "中国人保",
                                value: 2860
                            },
                            {
                                logo: "yangguangbaoxian",
                                name: "阳光保险",
                                value: 1770
                            },
                            {
                                logo: "zhongguorenshou",
                                name: "中国人寿",
                                value: 1556
                            },
                            {
                                logo: "taipingbaoxian",
                                name: "太平保险",
                                value: 744
                            },
                            {
                                logo: "xinhuabaoxian",
                                name: "新华保险",
                                value: 1330
                            },
                            {
                                logo: "huataibaoxian",
                                name: "华泰保险",
                                value: 1202
                            },
                            {
                                logo: "shengdachexian",
                                name: "盛大车险",
                                value: 976
                            },
                            {
                                logo: "taikangrenshou",
                                name: "泰康人寿",
                                value: 970
                            }


                        ],
                        [//SUV
                            {
                                logo: "puladuo",
                                name: "普拉多",
                                value: 3043
                            },
                            {
                                logo: "hanlanda",
                                name: "汉兰达",
                                value: 2777
                            },
                            {
                                logo: "yihu",
                                name: "翼虎",
                                value: 2705
                            },
                            {
                                logo: "kayan",
                                name: "卡宴",
                                value: 2684
                            },
                            {
                                logo: "tuguan",
                                name: "途观",
                                value: 2221
                            },
                            {
                                logo: "hafuh6",
                                name: "哈弗h6",
                                value: 2172
                            },
                            {
                                logo: "aodiq5",
                                name: "奥迪q5",
                                value: 1941
                            },
                            {
                                logo: "biyadis6",
                                name: "比亚迪s6",
                                value: 1707
                            },
                            {
                                logo: "qijun",
                                name: "奇骏",
                                value: 1532
                            },
                            {
                                logo: "turui",
                                name: "途锐",
                                value: 1521
                            }


                        ],
                        [//星级酒店
                            {
                                logo: "wanhaojiudian",
                                name: "万豪酒店",
                                value: 2106
                            },
                            {
                                logo: "xilaidengjiudian",
                                name: "喜来登酒店",
                                value: 1838
                            },
                            {
                                logo: "huangguanjiarijiudian",
                                name: "皇冠假日酒店",
                                value: 1638
                            },
                            {
                                logo: "xierdunjiudian",
                                name: "希尔顿酒店",
                                value: 1399
                            },
                            {
                                logo: "xianggelilajiudian",
                                name: "香格里拉酒店",
                                value: 1180
                            },
                            {
                                logo: "zhoujijiudian",
                                name: "洲际酒店",
                                value: 1070
                            },
                            {
                                logo: "wanlijiudian",
                                name: "万丽酒店",
                                value: 842
                            },
                            {
                                logo: "weisitingjiudian",
                                name: "威斯汀酒店",
                                value: 804
                            },
                            {
                                logo: "kaiyuejiudian",
                                name: "凯悦酒店",
                                value: 765
                            },
                            {
                                logo: "kaibinsijijiudian",
                                name: "凯宾斯基酒店",
                                value: 761
                            }


                        ],
                        [//旅游目的地
                            {
                                logo: "beijing",
                                name: "北京",
                                value: 25212
                            },
                            {
                                logo: "shanxi",
                                name: "陕西",
                                value: 23081
                            },
                            {
                                logo: "zhejiang",
                                name: "浙江",
                                value: 21605
                            },
                            {
                                logo: "sichuan",
                                name: "四川",
                                value: 18199
                            },
                            {
                                logo: "anhui",
                                name: "安徽",
                                value: 17946
                            },
                            {
                                logo: "shanghai",
                                name: "上海",
                                value: 17597
                            },
                            {
                                logo: "guangdong",
                                name: "广东",
                                value: 16232
                            },
                            {
                                logo: "jiangsu",
                                name: "江苏",
                                value: 16154
                            },
                            {
                                logo: "fujian",
                                name: "福建",
                                value: 14617
                            },
                            {
                                logo: "shandong",
                                name: "山东",
                                value: 13433
                            }


                        ],
                        [//旅游目的地
                            {
                                logo: "nike",
                                name: "NIKE",
                                value: 12191
                            },
                            {
                                logo: "adidas",
                                name: "adidas",
                                value: 6210
                            },
                            {
                                logo: "newbalance",
                                name: "New Balance",
                                value: 6090
                            },
                            {
                                logo: "converse",
                                name: "CONVERSE",
                                value: 2992
                            },
                            {
                                logo: "anta",
                                name: "安踏",
                                value: 2233
                            },
                            {
                                logo: "columbia",
                                name: "Columbia",
                                value: 2232
                            },
                            {
                                logo: "lining",
                                name: "李宁",
                                value: 2185
                            },
                            {
                                logo: "toread",
                                name: "TOREAD",
                                value: 2125
                            },
                            {
                                logo: "tebu",
                                name: "特步",
                                value: 2084
                            },
                            {
                                logo: "puma",
                                name: "PUMA",
                                value: 1794
                            }


                        ],
                        [//奢侈包
                            {
                                logo: "luyiweideng",
                                name: "路易威登",
                                value: 1770
                            },
                            {
                                logo: "xiangnaier",
                                name: "香奈儿",
                                value: 831
                            },
                            {
                                logo: "pulada",
                                name: "普拉达",
                                value: 786
                            },
                            {
                                logo: "guchi",
                                name: "古驰",
                                value: 764
                            },
                            {
                                logo: "kouchi",
                                name: "蔻驰",
                                value: 647
                            },
                            {
                                logo: "diao",
                                name: "迪奥",
                                value: 494
                            },
                            {
                                logo: "bobaili",
                                name: "博柏利",
                                value: 439
                            },
                            {
                                logo: "aimashi",
                                name: "爱马仕",
                                value: 404
                            },
                            {
                                logo: "fendi",
                                name: "芬迪",
                                value: 294
                            },
                            {
                                logo: "mcm",
                                name: "MCM",
                                value: 254
                            }


                        ],
                        [//护肤品
                            {
                                logo: "yashilandai",
                                name: "雅诗兰黛",
                                value: 2698
                            },
                            {
                                logo: "lankou",
                                name: "兰蔻",
                                value: 2613
                            },
                            {
                                logo: "qianbi",
                                name: "倩碧",
                                value: 2014
                            },
                            {
                                logo: "zishengtang",
                                name: "资生堂",
                                value: 1680
                            },
                            {
                                logo: "diao",
                                name: "迪奥",
                                value: 1546
                            },
                            {
                                logo: "xiangnaier",
                                name: "香奈儿",
                                value: 1492
                            },
                            {
                                logo: "jiaoyunshi",
                                name: "娇韵诗",
                                value: 1227
                            },
                            {
                                logo: "keyanshi",
                                name: "科颜氏",
                                value: 1182
                            },
                            {
                                logo: "biouquan",
                                name: "碧欧泉",
                                value: 1078
                            },
                            {
                                logo: "sk-ii",
                                name: "SK-II",
                                value: 1039
                            }


                        ],
                        [//语言
                            {
                                logo: "xindongfang",
                                name: "新东方教育科技集团",
                                value: 3963
                            },
                            {
                                logo: "yingfujiaoyu",
                                name: "英孚教育",
                                value: 673
                            },
                            {
                                logo: "huanqiuyasi",
                                name: "环球雅思",
                                value: 548
                            },
                            {
                                logo: "huaerjieyingyu",
                                name: "华尔街英语",
                                value: 468
                            },
                            {
                                logo: "weiboguojiyingyu",
                                name: "韦博国际英语",
                                value: 341
                            },
                            {
                                logo: "xinshijiejiaoyu",
                                name: "新世界教育",
                                value: 329
                            },
                            {
                                logo: "xinhangdao",
                                name: "新航道",
                                value: 248
                            },
                            {
                                logo: "daerduoyingyuwang",
                                name: "大耳朵英语网",
                                value: 225
                            },
                            {
                                logo: "dishiniyingyu",
                                name: "迪士尼英语",
                                value: 217
                            },
                            {
                                logo: "puteyingyu",
                                name: "普特英语",
                                value: 188
                            }


                        ]
                    ];
                var p2_frame;
                var line1mask;
                //top
                var top_frame;
                var menu_button;
                var menu_frame;
                var graphic_frame;
                var txt1_frame;
                var txt2_frame;
                var top_bg;
                var txt_top_10;
                var line1;
                var line2;
                var line3;
                var side_circle;
                //list
                var listItem_brand_frame;
                var listItem_num_frame;

                var menuList;
                var topList;

                //counter
                var _timer;
                var text, counter = 0;

                var button_all;
                var button_anim;
                var button_share;
                var button_weixin;

                //Share
                var share_timeline;

                var menu_Click;
                var brand_timeline;

                var selected=0;
                var listframe;


                this.drawMask = function (p_x, p_y, w, h, obj) {
                    //MASK
                    var _mask = game.add.graphics(0, 0);
                    _mask.beginFill(0xffffff);
                    _mask.drawRect(p_x, p_y, w, h);
                    //line1mask.x=406;
                    obj.mask = _mask;
                    return _mask;
                };
                this.menuBt = function () {
                    console.log(menu_Click);
                    if (!menu_Click) {
                        this.initMenuAct();
                        menu_button.setFrames(1);
                        TweenMax.to(game.camera, 3, {x: 478, ease: Expo.easeOut});

                        menu_Click = !menu_Click;
                    }
                    else {
                        this.initTopListAct();
                        menu_button.setFrames(0);
                        TweenMax.to(game.camera, 3, {x: -478, ease: Expo.easeOut});
                        menu_button.inputEnabled = true;
                        menu_Click = !menu_Click;
                    }
                };
                this.shareBt = function () {
                    TweenMax.to("#sharePage", 1, {alpha: 1, display: "block"});
                    share_timeline.restart();
                };
                this.allBt = function () {
                    window.location.href = "http://zichan.baidu.com";
                };
                this.weixinBt = function () {
                    TweenMax.to("#weixinPage", 1, {display: "block", alpha: 1});
                    game.paused = false;
                };
                this.animBt = function () {
                    console.log("button_anim")
                };
                this.renderBrand = function (g_x, g_y, g_n, t1_x, t1_y, t1_n, t2_x, t2_y, t2_n) {
                    graphic_frame.removeChildren();
                    txt1_frame.removeChildren();
                    txt2_frame.removeChildren();
                    console.log("PASS" + g_n)
                    var brand_graphic = graphic_frame.addChild(game.make.sprite(g_x, g_y, g_n));
                    brand_graphic.alpha = 0;
                    var t1 = txt1_frame.addChild(game.make.sprite(t1_x, t1_y, t1_n));
                    t1.alpha = 0;
                    t1.x = -300;
                    var t2 = txt2_frame.addChild(game.make.sprite(t2_x, t2_y, t2_n));
                    t2.alpha = 0;
                    brand_timeline = new TimelineMax();
                    brand_timeline.append(new TweenMax(t1, 0.3, {alpha: 1, x: 0}));
                    brand_timeline.append(new TweenMax(t2, 0.2, {alpha: 1}));
                    brand_timeline.append(new TweenMax(brand_graphic, 0.4, {alpha: 1}));
                    brand_timeline.play();


                };
                this.renderList = function (title) {


                };

                this.initMenuAct = function () {
                    var MenuRect = new Phaser.Rectangle(272, 189, 478, 571);
                    var shareBtRect = new Phaser.Rectangle(327, 1045, 178, 77);
                    var animBtRect = new Phaser.Rectangle(331, 814, 368, 87);
                    var weixinBtRect = new Phaser.Rectangle(516, 1045, 178, 77);
                    var allBtRect = new Phaser.Rectangle(327, 908, 361, 80);
                    menuList.timeTouchStart = (new Date()).getTime();
                    var _thiz = this;
                    game.input.touch.start();
                    game.input.touch.onTouchStart = function (e) {
                        e.preventDefault();
                        var touches = e.changedTouches;
                        console.log("onTouchStart x:" + touches[0].clientX + ",y:" + touches[0].clientY);
                        var menuBRect = new Phaser.Rectangle(622 - 478, 31, 92, 92);
                        if (menuBRect.contains(touches[0].clientX, touches[0].clientY)) {

                            _thiz.menuBt();

                        }
                        if (animBtRect.contains(touches[0].clientX, touches[0].clientY)) {
                            //alert("animation")
                            _thiz.animBt();

                        }
                        if (allBtRect.contains(touches[0].clientX, touches[0].clientY)) {
                            //alert("ALL");

                            _thiz.allBt();

                        }
                        if (shareBtRect.contains(touches[0].clientX, touches[0].clientY)) {

                            _thiz.shareBt();

                        }
                        if (weixinBtRect.contains(touches[0].clientX, touches[0].clientY)) {
                            _thiz.weixinBt();

                        }

                        if (MenuRect.contains(touches[0].clientX, touches[0].clientY)) {
                            menuList.startDrag = true;
                            menuList.startPoint = {x: touches[0].clientX, y: touches[0].clientY};
                            menuList.timeTouchStart = (new Date()).getTime();
                        }

                    }

                    game.input.touch.onTouchEnd = function (e) {
                        e.preventDefault();
                        //console.log("onTouchEnd");
                        var touches = e.changedTouches;
                        if (menuList.startDrag && touches.length > 0) {
                            var timeElapsed = (new Date()).getTime() - menuList.timeTouchStart;
                            if (timeElapsed < 300 && MenuRect.contains(touches[0].clientX, touches[0].clientY)) //小于20ms
                            {
                                for (var i = 0; i < menuList.menuItems.length; i++) {
                                    var yPosition = touches[0].clientY - menuList.y;
                                    var _item = menuList.menuItems[i];
                                    if (yPosition > _item.y && yPosition < _item.y + _item.height) {
                                        console.log(_item.title)

                                        //_thiz.renderList(_item.title)
                                        switch (_item.title) {
                                            case "手机品牌":
                                                selected = 0;
                                                break;
                                            case "奶粉品牌":
                                                selected = 1;
                                                break;
                                            case "餐饮品牌":
                                                selected = 2;
                                                break;
                                            case "综合类电商品牌":
                                                selected = 3;
                                                break;
                                            case "保险品牌":
                                                selected = 4;
                                                break;
                                            case "SUV汽车品牌":
                                                selected = 5;
                                                break;
                                            case "高端酒店品牌":
                                                selected = 6;
                                                break;
                                            case "旅游目的地-省份品牌":
                                                selected = 7;
                                                break;
                                            case "运动服饰品牌":
                                                selected = 8;
                                                break;
                                            case "奢侈品箱包品牌":
                                                selected = 9;
                                                break;
                                            case "高端护肤品牌":
                                                selected = 10;
                                                break;
                                            case "语言培训品牌":
                                                selected = 11;
                                                break;
                                            default :
                                                selected = 0;

                                        };

                                        console.log("myClick" + selected);
                                        _thiz.renderBrand(0, 0, "i" + selected, 0, 0, "c" + selected, 0, 0, "e" + selected);
                                        listframe.removeChildren()
                                        topList = new TopListView(game, 0, 365, 750, _.curH - 365, top10Ary, selected);
                                        _thiz.initTopListAct();

                                        listframe.addChild(topList);
                                        menu_button.setFrames(0);
                                        TweenMax.to(game.camera, 3, {x: -478, ease: Expo.easeOut});
                                        menu_button.inputEnabled = true;
                                        menu_Click = !menu_Click;
                                        break;
                                    }
                                }
                            }
                        }

                        menuList.timeTouchStart = (new Date()).getTime();
                        menuList.startDrag = false;

                    }

                    game.input.touch.onTouchMove = function (e) {
                        var touches = e.changedTouches;
                        if (menuList.startDrag) {

                            var newY = menuList.y + (touches[0].clientY - menuList.startPoint.y);

                            if (newY <= menuList.origY && newY >= (menuList.origY - menuList.boundHeight + MenuRect.height)) {
                                menuList.y += (touches[0].clientY - menuList.startPoint.y);
                            }
                            console.log("THIS Y:" + _thiz.y + " , onTouchMove x:" + touches[0].clientX + ",y:" + touches[0].clientY);
                            menuList.scrollBarTrack.y = menuList.origY - (menuList.scrollBar.height - menuList.scrollBarTrack.height) * ((menuList.y - menuList.origY) / (menuList.boundHeight - MenuRect.height));
                            menuList.startPoint = {x: touches[0].clientX, y: touches[0].clientY};
                        }
                    }


                    game.input.touch.onTouchCancel = function (e) {
                        //console.log("onTouchCancel");
                        menuList.startDrag = false;
                    }

                    this.game.input.touch.onTouchLeave = function (e) {
                        //console.log("onTouchLeave");
                        menuList.startDrag = false;
                    }
                };
                this.initTopListAct = function () {

                    var ListRect = new Phaser.Rectangle(0, 365, 750, _.curH - 365);
                    var menuBRect = new Phaser.Rectangle(622, 31, 92, 92);

                    var _thiz = this;
                    game.input.touch.start();
                    game.input.touch.onTouchStart = function (e) {
                        var touches = e.changedTouches;
                        console.log("onTouchStart x:" + touches[0].clientX + ",y:" + touches[0].clientY);
                        console.log("onTouchStart :" + ListRect);

                        if (menuBRect.contains(touches[0].clientX, touches[0].clientY)) {
                            _thiz.menuBt();

                        }

                        if (ListRect.contains(touches[0].clientX, touches[0].clientY)) {
                            topList.startDrag = true;
                            topList.startPoint = {x: touches[0].clientX, y: touches[0].clientY};

                        }
                        else {
                            console.log("not start");

                        }
                    }
                    this.game.input.touch.onTouchEnd = function (e) {

                        if(topList.dragTopTimer>0 && (new Date()).getTime()-topList.dragTopTimer>200)
                        {
                            if(selected>0){
                                selected--;
                                _thiz.renderBrand(0, 0, "i" + selected, 0, 0, "c" + selected, 0, 0, "e" + selected);
                                listframe.removeChildren();
                                //console.log("NOWWWW"+selected)
                                topList = new TopListView(game, 0, 365, 750, _.curH - 365, top10Ary, selected);
                                _thiz.initTopListAct();
                                listframe.addChild(topList);
                            }else{
                                //alert("置顶");
                            }


                        }

                        if(topList.dragBottomTimer>0 && (new Date()).getTime()-topList.dragBottomTimer>200)
                        {
                            if(selected<11){
                                selected++;
                                _thiz.renderBrand(0, 0, "i" + selected, 0, 0, "c" + selected, 0, 0, "e" + selected);
                                listframe.removeChildren();

                                topList = new TopListView(game, 0, 365, 750, _.curH - 365, top10Ary, selected);
                                _thiz.initTopListAct();
                                listframe.addChild(topList);
                            }else{
                                //alert("置底");
                            }
                        }
                        topList.startDrag = false;
                        topList.dragTopTimer = 0;
                        topList.dragBottomTimer = 0;
                    }
                    this.game.input.touch.onTouchMove = function (e) {
                        var touches = e.changedTouches;
                        console.log("onTouchMove");
                        if (topList.startDrag) {
                            //console.log("onTouchMove222");
                            var newY = topList.y + (touches[0].clientY - topList.startPoint.y);

                            if (newY <= topList.origY && newY >= (topList.origY - topList.boundHeight + topList.MenuRect.height)) {
                                topList.y += (touches[0].clientY - topList.startPoint.y);
                            }
                            if(topList.dragTopTimer==0 && Math.abs(Math.floor(topList.y)-Math.floor(topList.origY))<3)
                            {
                                topList.dragTopTimer = (new Date()).getTime();
                                console.log("set top timer");
                            }

                            if(topList.dragBottomTimer==0 && Math.abs(Math.floor(topList.y)-Math.floor(topList.origY-topList.boundHeight+topList.MenuRect.height))<3)
                            {
                                topList.dragBottomTimer = (new Date()).getTime();
                                console.log("set bottom timer");
                            }
                            topList.scrollBarTrack.y = topList.origY - (topList.scrollBar.height - topList.scrollBarTrack.height) * ((topList.y - topList.origY) / (topList.boundHeight - topList.MenuRect.height));
                            topList.startPoint = {x: touches[0].clientX, y: touches[0].clientY};
                        }
                    }


                    this.game.input.touch.onTouchCancel = function (e) {
                        console.log("onTouchCancel");
                        topList.startDrag = false;
                        topList.dragTopTimer = 0;
                        topList.dragBottomTimer = 0;
                    }

                    this.game.input.touch.onTouchLeave = function (e) {
                        console.log("onTouchLeave");
                        topList.startDrag = false;
                        topList.dragTopTimer = 0;
                        topList.dragBottomTimer = 0;
                    }
                    return this;
                }
                this.create = function () {
                    console.log("p2");

                    p2_frame = game.add.sprite(0, 0);
                    p2_frame.alpha = 0;
                    menu_Click = false;
                    //top
                    top_frame = p2_frame.addChild(game.make.sprite(0, 0, "top_bg"));
                    graphic_frame = top_frame.addChild(game.make.sprite(194, 0));

                    var top_column=top_frame.addChild(game.make.sprite(109, 210, "column"));
                    var top_column_m=this.drawMask(109-162,210,162,6,top_column)
                    side_circle = top_frame.addChild(game.make.sprite(146, 245, "side_circle"));
                    side_circle.anchor.setTo(0.5);
                    side_circle.scale.setTo(0);
                    line1 = top_frame.addChild(game.make.sprite(479, 197, "line1"));
                    line1.scale.setTo(0, 1);
                    line2 = top_frame.addChild(game.make.sprite(69, 248, "line2"));
                    line2.scale.setTo(0, 1);
                    line3 = top_frame.addChild(game.make.sprite(92, 216, "line3"));
                    txt_top_10 = top_frame.addChild(game.make.sprite(562, 198, "txt_top_10"));
                    txt_top_10.alpha = 0;
                    line3.x = -300;
                    line3.alpha = 0;
                    //MASK
                    line1mask = game.add.graphics(0, 0);
                    line1mask.beginFill(0xffffff);
                    line1mask.drawRect(400, 197, 73, 17);
                    //line1mask.x=406;
                    line1.mask = line1mask;

                    txt1_frame = top_frame.addChild(game.make.sprite(60, 142));
                    txt2_frame = top_frame.addChild(game.make.sprite(160, 237));


                    menu_button = top_frame.addChild(game.make.button(622, 31, "menu_button"));
                    var num = 0;
                    topList = new TopListView(game, 0, 365, 750, _.curH - 365, top10Ary, num);
                    listframe = p2_frame.addChild(game.make.sprite(0, 0, "list_bg"));
                    this.initTopListAct();
                    topList.alpha = 0;
                    listframe.addChild(topList);
                    //game.add.existing(topList);

                    var aryMenu = ["手机品牌", "奶粉品牌", "餐饮品牌", "综合类电商品牌", "保险品牌", "SUV汽车品牌", "高端酒店品牌", "旅游目的地-省份品牌", "运动服饰品牌", "奢侈品箱包品牌", "高端护肤品牌", "语言培训品牌"];

                    //menu

                    menu_frame = game.add.sprite(750, 0, "menu_bg");

                    button_all = menu_frame.addChild(game.add.button(327 + 478 - 750, 908, "button_all"));
                    button_anim = menu_frame.addChild(game.add.button(331 + 478 - 750, 814, "button_anim"));
                    button_share = menu_frame.addChild(game.add.button(327 + 478 - 750, 1045, "button_share"));
                    button_weixin = menu_frame.addChild(game.add.button(516 + 478 - 750, 1045, "button_weixin"));


                    game.world.setBounds(0, 0, 1228, _.curH);
                    menuList = new MenuListView(game, 750, 192, 478, 571, aryMenu);
                    //console.log(menuList)
                    game.add.existing(menuList);

                    //SharePage

                    TweenMax.to(".share_c1", 0.5, {rotation: 360, repeat: -1, ease: Linear.easeOut});
                    TweenMax.to(".share_l4", 2, {
                        width: 160, repeat: -1, delay: 0.8, yoyo: true,
                        ease: RoughEase.ease.config({
                            template: Power0.easeNone,
                            strength: 1,
                            points: 15,
                            taper: "none",
                            randomize: true,
                            clamp: false
                        })
                    });
                    share_timeline = new TimelineMax();
                    share_timeline.stop();
                    share_timeline.append(new TweenMax(".share_c1", 0.2, {alpha: 1, ease: Linear.easeInOut}));
                    share_timeline.append(new TweenMax(".share_t1", 0.6, {alpha: 1, ease: Bounce.easeOut}));
                    share_timeline.append(new TweenMax(".share_column", 0.2, {alpha: 1}));
                    share_timeline.append(new TweenMax(".share_l3", 0.6, { width: 275}));
                    share_timeline.append(new TweenMax(".share_l1", 0.3, {alpha: 1, x: 300, ease: Elastic.easeOut}));
                    share_timeline.append(new TweenMax(".share_l2", 0.2, {alpha: 1, y: -200, ease: Elastic.easeOut}));


                    var menu_logo = menu_frame.addChild(game.make.sprite(444 + 478 - 750, 54, "baidu_logo"));
                    this.renderBrand(0, 0, "i0", 0, 0, "c0", 0, 0, "e0");
                    TweenMax.to(line1mask, 2, {x: 500, repeat: -1});
                    TweenMax.to(side_circle, 0.8, {angle: 360, repeat: -1});
                    TweenMax.to(top_column_m, 2, {
                        x: 152, repeat: -1, delay: 0.8, yoyo: true,
                        ease: RoughEase.ease.config({
                            template: Power0.easeNone,
                            strength: 1,
                            points: 15,
                            taper: "none",
                            randomize: true,
                            clamp: false
                        })})

                    var p2_timeline = new TimelineMax();
                    p2_timeline.append(new TweenMax(p2_frame, 0.3, {alpha: 1}));
                    p2_timeline.append(new TweenMax(topList, 0.1, {alpha: 1}));
                    p2_timeline.append(new TweenMax(line3, 0.2, {x: 92, alpha: 1}));
                    p2_timeline.append(new TweenMax(line1.scale, 0.1, {x: 1}));
                    p2_timeline.append(new TweenMax(line2.scale, 0.2, {x: 1}));
                    p2_timeline.append(new TweenMax(side_circle.scale, 0.3, {x: 1, y: 1}));
                    p2_timeline.append(new TweenMax(txt_top_10, 0.1, {alpha: 1}));
                    p2_timeline.append(brand_timeline);


                    p2_timeline.play();
                }


            }

            //把定义好的场景添加到游戏中
            game.state.add('boot', game.States.boot);
            game.state.add('_preload', game.States._preload);
            game.state.add('load_page1', game.States.load_page1);
            game.state.add('load_page2', game.States.load_page2);

            game.state.start('boot');


        },
        init: function () {
            var _ = this;
            window.scrollTo(0, 0);
            _.cssInit().eventInit().pageEventInit();
            return _;
        }

        ,
        cssInit: function () {
            var _ = this;
            _.viewport.w = window.innerWidth;
            _.viewport.h = window.innerHeight;
            _.viewport.deg = Math.asin((_.viewport.w * 0.5 + 110) / 600) * 180 / Math.PI;
            //初始化 resize
            //手机端 不需要触发resize事件
            _.resizeHandler();

            //横竖屏幕
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
                if (window.orientation != 0) {
                    //_.renderShuping();
                } else {
                    //_.closeShuping();
                }
            }, false);

            return _;
        }
        ,
        eventPos: {}
        ,
        wrapperPos: {}
        ,
        eventInit: function () {
            var _ = this;
            document.addEventListener('touchstart', function (e) {
            }, false);
            document.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, false);
            //禁止弹出选择菜单
            document.documentElement.style.webkitTouchCallout = "none";
            return _;
        }
        ,
//加载界面元素事件
        pageEventInit: function () {
            var _ = this;
            $("#button_back1").on("click", function () {
                TweenMax.to("#weixinPage", 1, {alpha: 0, display: "none"});
               ;
            })
            $("#button_back2").on("click", function () {
                TweenMax.to("#sharePage", 1, {alpha: 0, display: "none"});

            })
            _.initCanvas();
            return _;
        }
    }
;

window.onload = function () {
    $Baidu.init();
}