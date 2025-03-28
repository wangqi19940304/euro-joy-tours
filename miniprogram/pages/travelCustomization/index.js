// pages/travelCustomization/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    randomPhone: '',
    hotDestination: ['英国', '法国', '意大利', '爱尔兰'],
  },

  generateRandomNumber() {
    const num = Math.floor(Math.random() * 9000) + 1000;
    return num.toString().padStart(4, '0');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      randomPhone: this.generateRandomNumber()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})