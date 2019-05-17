/**
 * Created by daimons on 15/9/3.
 */

/*
进度条
bg 进度条背景
bar 进度条纹理id
percent 百分比
*/

ProgressBar = function(game,x,y,bg,bar,percent)
{
    Phaser.Sprite.call(this, game,x,y,bg);
    //game.add.sprite(x,y,bg);
    this.percent = percent;
    this.anchor.set(0);
    this.curPercent = 0;
    this.barSprite = game.make.sprite(0,0,bar);
    this.barSprite.anchor.set(0);
    this.addChild(this.barSprite);

    this._mask = game.make.graphics(0, 0);
    this._mask.beginFill(0xff0000);
    this._mask.drawRect(0, 0, 0, this.barSprite.height);
    this.addChild(this._mask);
    //this._mask.anchor.set(0,0);
    //this._mask.scale.set({x:0,y:1});
    this.barSprite.mask = this._mask;
}





ProgressBar.prototype = Object.create(Phaser.Sprite.prototype);
ProgressBar.prototype.constructor = ProgressBar;
ProgressBar.prototype.update = function () {

}

ProgressBar.prototype.Start = function () {
    var thiz = this;
    var anim  = this.game.add.tween(this).to({curPercent:thiz.percent}, 1000, Phaser.Easing.Quadratic.In, false);
    anim.onUpdateCallback(function(){
        thiz._mask.clear();
        thiz._mask.beginFill(0x0000f);
        thiz._mask.drawRect(0 , 0, thiz.width*thiz.curPercent,thiz.height);
    },thiz).onComplete.add(function(){
            thiz._mask.clear();
            thiz._mask.beginFill(0x0000f);
            thiz._mask.drawRect(0 , 0, thiz.width*thiz.percent,thiz.height);
        }, thiz);
    anim.start();
}


/*
 spriteName：logo
 title:标题
 percent:所占百分比
 nIndex:索引
 */
myListItem = function (game,x,y,spriteName,title,value,percent,order){
    Phaser.Sprite.call(this, game,x,y);
    var list_bg = game.make.sprite(36,0,"list_item_bg");  //背景
    this.addChild(list_bg);

    this._order = order;
    this.logo = game.make.sprite(59,46,spriteName);
    this.addChild(this.logo);
    //this.title = title;
    this.value = value;
    this.currentNum = 0;
    this.title = new Phaser.BitmapText(game,239, 63, 'brand_name_font',title ,34, 'right');
    this.addChild(  this.title);

    this.number = new Phaser.BitmapText(game, 673, 70, 'Eclectic', '0', 40, 'right');
    this.number.anchor.set(1,0);
    this.addChild(this.number);


    var orderTxt = order>=10?order+"":"0"+order;


    this.orderNumber = new Phaser.BitmapText(game, 190, 81, 'top_order', orderTxt, 24, 'right');
    this.addChild(this.orderNumber);

    var progressBarBg = game.make.sprite(190,119,"progress_bar_bg");
    this.addChild(progressBarBg);

    this.progressBar = new ProgressBar(game,190,119,"progress_bar_bg","progress_bar",percent);
    this.addChild(this.progressBar);

}


myListItem.prototype = Object.create(Phaser.Sprite.prototype);
myListItem.prototype.constructor = myListItem;
myListItem.prototype.Start = function () {
    var thiz = this;
    var _anim  = this.game.add.tween(this).to({currentNum:this.value}, 1000, Phaser.Easing.Quadratic.In, false);
    _anim.onUpdateCallback(function(){
        thiz.number.setText(Math.floor(thiz.currentNum));
    },this).onComplete.add(function(){
            thiz.number.setText(Math.floor(thiz.value));
        }, this);
    _anim.start();
    thiz.progressBar.Start();
}
myListItem.prototype.update = function () {

}



/*
 排行榜
 */

TopListView = function (_game,x,y,width,height,listObjAry,num) {
    Phaser.Sprite.call(this, _game,x,y);
    this.anchor.set(0);
    var _mask = _game.add.graphics(0, 0);
    _mask.beginFill(0xff0000);
    _mask.drawRect(x, y, width, height);
    this.mask = _mask;
    this.origY = y;
    this.game = _game;

    this.startDrag = false;
    this.startPoint = {};
    this.MenuRect = new Phaser.Rectangle(x, y, width, height);

    var _thiz = this;

    //滚动条
    this.scrollBar = _game.add.sprite(x+width-8, y, 'list_scrollbar_bg');
    var ww = window.innerWidth,
        wh = window.innerHeight;
   var curH = (750 / ww) * wh-365;
    this.scrollBar.height=curH;
    this.scrollBarTrack = _game.add.sprite(x+width-8, y, 'list_scrollbar_bg_track');

    this.boundHeight = 0;
        var industry = listObjAry[num];
        for(var j=0;j<industry.length;j++) {
            var industryObj = industry[j];

            var _item = new myListItem(_game,0,this.boundHeight,industryObj.logo,industryObj.name,industryObj.value,industryObj.value/industry[0].value,j+1);
            this.addChild(_item);
            _item.Start();
            this.boundHeight+=191;
        }


    return this;
}


TopListView.prototype = Object.create(Phaser.Sprite.prototype);
TopListView.prototype.constructor = TopListView;

TopListView.prototype.update = function () {


}
