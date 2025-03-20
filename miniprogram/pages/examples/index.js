// index.js
const { DiscoveryData } = require("./constants");

Page({
  data: {
    discoveryList: DiscoveryData
  },
  onCusClick() {
    wx.navigateTo({
      url: '/pages/travelCustomization/index',
    })
  }
});
