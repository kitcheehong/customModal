// components/roundModal.js
Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {

    hiddenModal: {
      type: Boolean,
      value: false
    },
    modalTitle: {
      type: String,
      value: ' '
    },
    modalContent: {
      type: String,
      value: ' '
    },
    leftText: {
      type: String,
      value: ' '
    },
    rightText: {
      type: String,
      value: ' '
    },
    // 添加更多的控制属性
    hideTitle: {
      type: Boolean,
      value: false
    },
    hideContent: {
      type: Boolean,
      value: false
    },
    hideLeftBtn: {
      type: Boolean,
      value: false
    },
    hideRightBtn: {
      type: Boolean,
      value: false
    },
    hideDivider: {
      type: Boolean,
      value: false
    },
    // 控制字体样式：比如大小，颜色
    titleSize: {
      type: String,
      value: "36rpx"
    },
    titleColor: {
      type: String,
      value: "#323232"
    },
    contentSize:{
      type:String,
      value:"30rpx"
    },
    contentColor:{
      type:String,
      value:"#808080"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

    hiddenModal: true,
    hideTitle: false,
    hideContent: false,
    hideLeftBtn: false,
    hideRightBtn: false,
    hideDivider: false,

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 内部方法用下划线用于区分
    // 点击左边按钮
    _clickLeftBtn: function () {
      //触发取消回调
      this.triggerEvent("cancelEvent")
    },
    _clickRightBtn: function () {
      console.log("点击右边按钮")
      //触发成功回调
      this.triggerEvent("confirmEvent");
    },
    _modal_mask_click: function () {
      // this.setData({
      //   hiddenModal:true
      // })
      this.triggerEvent("maskEvent")
    }
  }
})
