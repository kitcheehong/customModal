//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 自定义Toast
    hideToast: true,
    toastContent: '',
    showTime: 1500,
    backgroundColor:"#000",
    opacity:"0.5",

    //自定义圆角Modal弹框：如果需要自定义设置字体颜色，大小，你只需要在自定义组件那边添加相关属性，并在wxml中引用即可，方式跟下面这些属性基本一致
    hiddenModal: true,
    modalTitle: "提示",
    modalContent: "为提高账户安全性，现需进行\r\n实名认证",
    leftText: "取消",
    rightText: "立即认证",
    hideRightBtn:false,
    // isShowCustomView: true,

    // 自定义ListModal
    hidelistModal: true,
    listTitle: "选择银行",
    listText: "取消",
    bankcardlist: [
      {
        id: 1,
        cardname: "中国银行",
        cardmember: "(3213)"
      },
      {
        id: 2,
        cardname: "华夏银行",
        cardmember: "(3213)"
      },
      {
        id: 3,
        cardname: "工商银行",
        cardmember: "(3213)"
      },
      {
        id: 4,
        cardname: "添加银行卡",
        cardmember: ""
      },
    ],

  // 弹出inputModal
    hideInputModal:true

  },
  /**
   * 弹出Toast
   */
  showMyToast:function(){
    this.setData({
      hideToast:false,
      toastContent:"这是你想Toast出来的话",
      showTime:2000,
      backgroundColor:"#0000ff",//自定义toast的背景颜色
      opacity:"0.5"// 透明度
    })
  },
  /**
   * 弹出圆角modal
   */
  showRoundModal:function(){
    this.setData({
      hiddenModal:false
    })
  },
  /**
   * 弹出listModal
   */
  showListModal:function(){
    this.setData({
      hidelistModal:false
    })
  },
/**
 * 弹出input MOdal
 */
  showinPuntModal:function(){
    this.setData({
      hideInputModal:false
    })
  },
  /**
   * 自定义swiper
   */
  showCustomSwiper:function(){
    wx.navigateTo({
      url: '../customSwiper/customSwiper',
    })
  },

  
  // 下面是model回调过来的方法
  _clickLeftBtn() {
    this.setData({
      hiddenModal: true
    })
  },
  _clickRightBtn() {
    this.setData({
      hiddenModal: true
    })
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  _modal_mask_click() {
    console.log("点击了蒙层")
  },

// 下面listModal回调过来的方法
  _itemClick:function(e){
      console.log("id = "+ e.detail.id)
  },
  _clickBottomText(){
    this.setData({
      hidelistModal:true
    })
  }
  
})
