//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607855500153&di=1677b048da83434f3480e0cd2bebee2e&imgtype=0&src=http%3A%2F%2Fimg.liexue.cn%2Fuploadfile%2Fattachment%2Feditor%2F201801%2F1516860735393546.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607855500154&di=758b449491904d8b5ce938ae68cbf1cd&imgtype=0&src=http%3A%2F%2Fwww.gaozhaocn.com%2Fd%2Ffile%2Fp%2F2019%2F07-12%2Feedecb042cbc0a87e69e4253d6d12c8c.jpg',
      
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '4000019651',
    })
  },
  getLocation: function () {
    wx.openLocation({
      latitude: 39.968237,
      longitude: 116.367655,
      name: "北京邮电大学",
      address: "北京邮电大学",
      scale: 28
    })
  }
})