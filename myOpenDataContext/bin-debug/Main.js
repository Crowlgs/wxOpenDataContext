var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.scrollView = new egret.ScrollView();
        /**
         * 便于演示数据，这里使用家数据
         * 有关获取还有的接口参考：https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/open-data.html?t=2018323
         */
        _this.gameData = [
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 100, time: 1000 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 101, time: 100 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 102, time: 1700 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 103, time: 1800 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 104, time: 1900 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 105, time: 1070 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 106, time: 1030 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 107, time: 1010 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 108, time: 1020 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 109, time: 1030 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 111, time: 1040 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 112, time: 1050 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 123, time: 1060 }] },
            { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 167, time: 1080 }] }
        ];
        wx.onMessage(function (data) {
            console.log(data);
            if (data.isDisplay) {
                //获取小游戏开放数据接口 --- 开始
                wx.getFriendCloudStorage({
                    // keyList: [''],
                    success: function (res) {
                        console.log(res);
                        _this.runGame();
                    },
                    fail: function (err) {
                        console.log(err);
                    },
                    complete: function () {
                    }
                });
                //监听消息 isDisplay
            }
            else {
                _this.cancelGame();
            }
        });
        //获取小游戏开放数据接口 --- 结束        
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            _this.bgtexture = new egret.Texture();
            _this.bgtexture._setBitmapData(imageLoader.data);
        }, _this);
        imageLoader.load("resource/assets/panel_shop_01.png");
        var imageLoader1 = new egret.ImageLoader();
        imageLoader1.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            _this.panel_01 = new egret.Texture();
            _this.panel_01._setBitmapData(imageLoader.data);
        }, _this);
        imageLoader1.load("resource/assets/panel_bg.png");
        return _this;
    }
    Main.prototype.runGame = function () {
        var _this = this;
        var bitmap = new egret.Bitmap(this.panel_01);
        bitmap.x = (640 - 480) >> 1;
        bitmap.y = (1136 - 800) >> 1;
        this.addChild(bitmap);
        var listContainer = new egret.DisplayObjectContainer();
        this.scrollView.setContent(listContainer);
        this.scrollView.x = bitmap.x;
        this.scrollView.y = bitmap.y;
        this.scrollView.width = bitmap.width;
        this.scrollView.height = bitmap.height;
        this.addChild(this.scrollView);
        this.gameData.forEach(function (value, index) {
            var item = new egret.DisplayObjectContainer();
            item.y = index * 130;
            listContainer.addChild(item);
            var bitmap = new egret.Bitmap(_this.bgtexture);
            bitmap.width = 460;
            item.addChild(bitmap);
            var nicktxt = new egret.TextField();
            nicktxt.y = 50;
            nicktxt.text = '名字:' + value.nickName;
            item.addChild(nicktxt);
            var numtxt = new egret.TextField();
            numtxt.x = 260;
            numtxt.y = 50;
            numtxt.text = '得分:' + value.data[0].score;
            item.addChild(numtxt);
        }, this);
    };
    Main.prototype.cancelGame = function () {
        for (var i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
        console.log('停止开放数据域');
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
