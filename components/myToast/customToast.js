// components/myToast/customToast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hideToast:{
      type:Boolean,
      value:true,
      observer:"_visibleChance"
    },
    toastContent:{
      type:String,
      value:''
    },
    backgroundColor:{
      type:String,
      value:"#000"
    },
    opacity:{
      type:String,
      value:"0.5"//1:完全不透明，0：完全透明
    },
    showTime:{
      type:Number,
      value:1500
    },
    textSize:{
      type:String,
      value:"30rpx"
    },
    textColor:{
      type:String,
      value:"#fff"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    hideToast:true,
    showTime:1500,
    toastContent:"怎么显示不出来"
  },

  /**
   * 组件的方法列表
   */
  methods: {

    clickMask:function(){
      console.log("点击了蒙层")
    },
    _visibleChance:function(){
      // console.log("toast状态发生改变!"+this.data.toastContent)
      var that = this;
    
      if(!this.data.hideToast){
        //如果当前正在显示，将倒计时
        setTimeout(function(){
          that.hideCurrentToast()
        },that.data.showTime) 
      }
    },
    hideCurrentToast(){
      this.setData({
        hideToast:true
      })
    }
  }
})
