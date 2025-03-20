const { envList } = require("../../envList");
const { FeedData } = require("./constants");

Page({
  data: {
    feedList: FeedData,
    travelTabList: ['最近热门', '城市攻略', '主题旅行'],
    travelTabClass: 0,
  },

  copyCode(e) {
    const code = e.target?.dataset?.code || '';
    wx.setClipboardData({
      data: code,
      success: () => {
        wx.showToast({
          title: '已复制',
        })
      },
      fail: (err) => {
        console.error('复制失败-----', err);
      }
    })
  },

  discoverCloud() {
    wx.switchTab({
      url: '/pages/examples/index',
    })
  },

  gotoTravelPage() {
    wx.navigateTo({
      url: '/pages/business/index',
    })
  },

  gotoCustomPage() {
    wx.navigateTo({
      url: '/pages/travelCustomization/index',
    })
  },

  gotoAiPage() {
    wx.navigateTo({
      url: '/pages/aiAssistant/index',
    })
  },

  onTabClick(event) {
    const index = event.currentTarget.dataset.index;
    this.setData({
      travelTabClass: index
    })
  },
});
