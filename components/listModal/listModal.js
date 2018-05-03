// components/listModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hidelistModal:{
      type:Boolean,
      value:true
    },
    bankcardlist:{
      type:Array,
      value:[],
      
    },
    listTitle:{
      type:String,
      value:''
    },
    listText:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 默认数据
    hidelistModal:true,
    listTitle:"列表标题",
    listText:"列表底部文字",
    bankcardlist:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击蒙层
    _modal_mask_click:function(){
      this.setData({
        hidelistModal:true
      })
    },
    // 点击item
    _itemClick:function(e){
      this.setData({
        hidelistModal: true
      })
      console.log("事件对象id = " + e.currentTarget.id)
      var data = e.currentTarget
      this.triggerEvent("itemClickEvent",data);
    },
    // 点击底部文字
    _clickBottomText:function(){
      this.triggerEvent("bottemEvent")
    }
  }
})
