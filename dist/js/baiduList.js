/**
 * Created by skua on 2015/9/1.
 */

var ListItem = (function() {
    var count = 0;
    //构造函数
    var creatItem = function (name, num, graphic) {
        count++;
        this._name = name; //
        this._num = num; //
        this._graphic = graphic; //
        this.index = count; //索引
    }
    //公有方法，存放在原型对象中
    creatItem.prototype = {
        "constructor": creatItem,
        "getName": function () {
            return this._name;
        },

        "setName": function (name) {
            this._name = name;
        },

        "getNum": function () {
            return this._num;
        },

        "setNum": function (num) {
            this._num = num;
        },
        "getGraphic": function () {
            return this._graphic;
        },
        "setGraphic": function (graphic) {
            this._graphic = graphic;
        }
    }
    creatItem.get_count_index = function(){
        return count;
    }
    return creatItem;
})()