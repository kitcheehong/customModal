// components/loginPswModal/loginPswModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hideInputModal: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hideInputModal: true,
    inputPassword: '',
    isVisible: false,
    visibleImg: "/image/icon_password_visible.png",
    invisibleImg: "/image/icon_password_invisible.png",
    disable:true // 按钮是否禁用 默认是
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击蒙层
    _modal_mask_click: function () {
      this.setData({
        hideInputModal: true
      })
    },
    // 点击关闭按钮
    _listenRecommendPhone: function (e) {
      this.setData({
        inputRecommendPhone: e.detail.value
      })
    },
    _listenNewPsw: function (e) {
      this.setData({
        inputPassword: e.detail.value
      })
      if(this.data.inputPassword.length > 5){
        if (this.data.disable) {
          this.setData({
            disable: false
          })
        }
      } else {
        if (!this.data.disable) {
          this.setData({
            disable: true
          })
        }
      }
    },
    switchVisibleStatus: function () {
      var that = this;
      this.setData({
        isVisible: !that.data.isVisible,
        inputPassword: that.data.inputPassword
      })
    },
    _forgetPassword:function(){
      // 触发忘记密码回调
      this.triggerEvent("forgetpswEvent", {})
    },
    _submitRegister: function () {
      // 关闭modal
      var that = this;
      this.setData({
        hideInputModal: true
      });
      // 先判断是否填写正确密码
      if (this.data.inputPassword.length <= 0) {
        wx.showModal({
          title: '提示',
          content: '请输入6-16位的数字或字母的密码',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              console.log("点击确定")
              that.setData({
                hideInputModal: false
              })
            }
          }
        });
        return;
      }
      //触发回调
      var recommendPhone = this.data.inputRecommendPhone;
      var newPassword = this.data.inputPassword;
      this.triggerEvent("submitEvent", { recommendPhone, newPassword })
    },

    _closeModel: function () {
      // 关闭modal
      this.setData({
        hideInputModal: true
      });
      // 触发回调

    }
  }
})
