/**
 * Created by yangzhao.lyz on 15/11/10.
 */

Object.defineProperties(Object.prototype,{
    clone:{
        enumerable:false,
        writable:false,
        value:function clone(obj){
            if (obj==null) obj=this;
            var o;
            switch(typeof obj){
                case 'undefined': break;
                case 'string'   : o = obj + '';break;
                case 'number'   : o = obj - 0;break;
                case 'boolean'  : o = obj;break;
                case 'object'   :
                    if(obj === null){
                        o = null;
                    }else{
                        if(obj instanceof Array){
                            o = [];
                            for(var i = 0, len = obj.length; i < len; i++){
                                o.push(clone(obj[i]));
                            }
                        }else{
                            o = {};
                            for(var k in obj){
                                o[k] = clone(obj[k]);
                            }
                        }
                    }
                    break;
                default:
                    o = obj;break;
            }
            return o;
        }
    },
    forEach:{
        enumerable:false,
        value:function(func){
            for (var i in this){
                func(this[i],i,this);
            }
        }
    }
});