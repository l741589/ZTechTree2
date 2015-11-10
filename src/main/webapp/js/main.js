/**
 * Created by yangzhao.lyz on 15/11/10.
 */

var GameData={
    items:[
        {
            id:"item1",
            name:"item1",
            type:"item",
            actions:[
                {
                    id:"craft",
                    paid:[]
                }
            ]
        },
        {
            id:"item2",
            name:"items2",
            type:"item",
            actions:[
                {
                    id:"craft",
                    paid:[
                        {item1:3}
                    ]
                }
            ]
        }
    ]
};

var GameDataNormalizer=function(GameData) {
    this.GameData=GameData;
    $.extend(this,{
        normalize:function(){
            var _this=this;
            var data=this.GameData.clone();
            data.items.forEach(function(x,i){
                x.index=i;
                if (x.name==null) x.name=id;
                if (x.type==null) x.type="item";
                if (x.actions==null) x.actions=[];
                if (typeof x.actions=='object'&&!x.actions instanceof Array) x.actions=[x.actions];
                x.actions.forEach(function(a){
                    if (a.id==null) a.id="craft";
                    _this.normalizeAction(a);
                })
            });
            return this.GameData=data;
        },
        normalizeAction:function(a){
            var s="NA_"+ a.id;
            if (this.hasOwnProperty(s)) this[s](a);
        },
        NA_craft:function(a){
            var ext=[];
            for (var j in a.paid){
                var p= a.paid[j];
                if (p.id==null){
                    p.forEach(function(e,i){ ext.push({id:i,count:e})})
                }else{
                    ext.push(p);
                }
            }
            a.paid=ext;
        }
    });
};

function Main(){
    $.extend(this,{

    });
    this.GameData=new GameDataNormalizer(GameData).normalize();
}