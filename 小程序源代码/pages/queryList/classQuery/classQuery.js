/*
Name:classQuery.js
Function:课程表查询功能
Author:
Date:
*/
var app = getApp()
Page({
  data: {
    stuName: '',
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
    ]
  },
  onLoad: function () {
    /*
    #微信小程序使用wx.request发起网络请求，根据学生姓名和学号返回该学生本周的课程表。
    wx.request({
      url: 'test.php', //服务器接口地址
      data: {
        x: '' ,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        #请求返回的信息
        console.log(res.data)
      }
    })
    本程序模拟发起请求，Data/courseinfo.js为请求发回的文件。
    */
    var stuName;
    var stuNumber = wx.getStorageSync('stuNumber');  //读取本地缓存，获取学号
    var stuinfo = require('../../../Data/stuinfo.js');
    var courseinfo = require('../../../Data/courseinfo.js');
    for (var i = 0; i < stuinfo.length; i++) { //根据学号获取姓名
      if (stuNumber == stuinfo[i].stuNumber) {
        stuName = stuinfo[i].stuName;
        break;
      }
    }
    this.setData({
      stuName: stuName,
      wlist: courseinfo,
    });
    wx.setNavigationBarTitle({
      title: '课程表查询（仅显示本周）',
    });
  }
})
