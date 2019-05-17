/**
 * Created by daimons on 15/9/2.
 */

/*
 单个商标
 */
MenuItem = function (_game, x, y, spriteName, title,graphic_frame,txt1_frame,txt2_frame) {
    Phaser.Sprite.call(this, _game, x, y, spriteName);

    this.title = title;
    var _text = new Phaser.BitmapText(_game, this.width / 2, this.height / 2, 'FZLanTingHeiS-R-GB', title, 24, 'center');
    _text.anchor.set(0.5, 0.5);
    this.addChild(_text);
}


MenuItem.prototype = Object.create(Phaser.Sprite.prototype);
MenuItem.prototype.constructor = MenuItem;


MenuItem.prototype.update = function () {

}


/*
 菜单项
 */

MenuListView = function (_game, x, y, width, height, menuTitles) {
    Phaser.Sprite.call(this, _game, x, y);
    this.anchor.set(0);
    var _mask = _game.add.graphics(0, 0);
    _mask.beginFill(0xff0000);
    _mask.drawRect(x, y, width, height);
    this.mask = _mask;
    this.origX = x;
    this.origY = y;
    this.game = _game;


    this.startDrag = false;
    this.startPoint = {};
    //var MenuRect = new Phaser.Rectangle(x, y, width, height);
    this.boundHeight = menuTitles.length * 81;
    var _thiz = this;


    //滚动条
    this.scrollBar = _game.add.sprite(x + width - 8, y, 'menu_scrollbar_bg');
    this.scrollBarTrack = _game.add.sprite(x + width - 8, y, 'menu_scrollbar_bg_track');
    this.menuItems = [];
    for (var i = 0; i < menuTitles.length; i++) {
        var _item = new MenuItem(_game, 0, i * 81, "menu_item_bg", menuTitles[i]);
        this.addChild(_item);
        this.menuItems[i] = _item;
    }


    //在主函数中重写menutouch方法
    //this.game.input.touch.start();
    //
    //this.game.input.touch.onTouchStart = function(e){
    //    var touches = e.changedTouches;
    //    console.log("onTouchStart x:"+touches[0].clientX+",y:"+touches[0].clientY);
    //
    //    if(MenuRect.contains(touches[0].clientX,touches[0].clientY))
    //    {
    //        _thiz.startDrag = true;
    //        _thiz.startPoint = {x:touches[0].clientX,y:touches[0].clientY};
    //    }
    //
    //}
    //
    //this.game.input.touch.onTouchEnd = function(e){
    //    console.log("onTouchEnd jsjsjs");
    //    _thiz.startDrag = false;
    //}
    //
    //this.game.input.touch.onTouchMove = function(e){
    //    var touches = e.changedTouches;
    //    if(_thiz.startDrag) {
    //
    //        var newY = _thiz.y + (touches[0].clientY - _thiz.startPoint.y);
    //
    //        if(newY<=_thiz.origY && newY>=(_thiz.origY-_thiz.boundHeight+MenuRect.height)) {
    //            _thiz.y += (touches[0].clientY - _thiz.startPoint.y);
    //        }
    //        //console.log("THIS Y:"+_thiz.y +" , onTouchMove x:" + touches[0].clientX + ",y:" + touches[0].clientY);
    //        _thiz.scrollBarTrack.y = _thiz.origY-(_thiz.scrollBar.height-_thiz.scrollBarTrack.height)*((_thiz.y-_thiz.origY)/(_thiz.boundHeight-MenuRect.height));
    //        _thiz.startPoint = {x:touches[0].clientX,y:touches[0].clientY};
    //    }
    //}
    //
    //
    //this.game.input.touch.onTouchCancel = function(e){
    //    console.log("onTouchCancel");
    //    _thiz.startDrag = false;
    //}
    //
    //this.game.input.touch.onTouchLeave = function(e){
    //    console.log("onTouchLeave");
    //    _thiz.startDrag = false;
    //}


    return this;
}

MenuListView.prototype = Object.create(Phaser.Sprite.prototype);
MenuListView.prototype.constructor = MenuListView;






