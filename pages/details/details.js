// pages/detail/details.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    _title: '微信demo程序',
    _menu_1: 0,
    _menu_3: 0,
    _menu_4: 0
  },
  /**
   * 滑动选择
   */
  menu: function(event) {
    let menu_id = event.currentTarget.id;
    if (menu_id == 'menu_1') {
      this.setData({
        _menu_1: 1,
        _menu_3: 0,
        _menu_4: 0
      })
    } else if (menu_id == 'menu_2') {
      this.setData({
        _menu_1: 0,
        _menu_3: 0,
        _menu_4: 0
      })
    } else if (menu_id == 'menu_3') {
      this.setData({
        _menu_1: 0,
        _menu_3: 1,
        _menu_4: 0
      })
    } else if (menu_id == 'menu_4') {
      this.setData({
        _menu_1: 0,
        _menu_3: 0,
        _menu_4: 1
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      _menu_1: 1,
      _menu_3: 0,
      _menu_4: 0
    })
    wx.setNavigationBarTitle({
      title: this.data._title //页面标题为路由参数
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  btnsearch: function(e) {
    var val = e.detail.value.searchTag;
    if (val == "") {
      wx.showToast({
        title:'搜索商品为空',
        icon:'loading',
        duration:2000
      });
    } else {
      wx.showToast({
        title: '正在搜索..',
        icon: 'loading',
        duration: 2000,
        success:function()
        {
          console.log("搜搜成功");
        }
      });
    }
  }

})