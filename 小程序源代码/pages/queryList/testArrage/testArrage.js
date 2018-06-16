/*
Name:testArrage.js
Function:考试安排查询功能
Author:
Date:
*/
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuNumber: '',
    stuName: '',
    multiArray: [
    ['','','','',''], 
    ['', '', '', '', ''], 
    ['', '', '', '', ''],
    ['', '', '', '', '']
    ],
    PrefaceContentShow: false,
    ScopeContentShow: false,
    RefStandardContentShow: false,
    DefinitionContentShow: false,
    GeneralPrincipleContentShow: false,
    CuttingPieceContentShow: false,
  },
  togglePrefaceShowStatus: function () {
    let temp = !this.data.PrefaceContentShow
    this.setData({
      PrefaceContentShow: temp
    })
  },
  toggleScopeShowStatus: function () {
    this.setData({
      ScopeContentShow: !this.data.ScopeContentShow
    })
  },
  toggleRefStandardShowStatus: function () {
    this.setData({
      RefStandardContentShow: !this.data.RefStandardContentShow
    })
  },
  toggleDefinitionShowStatus: function () {
    this.setData({
      DefinitionContentShow: !this.data.DefinitionContentShow
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    #微信小程序使用wx.request发起网络请求，返回学生本学期的考试安排。
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
    本程序模拟发起请求，Data/testArrage.js为请求发回的文件。
    */
      var stuName;
      var stuNumber = wx.getStorageSync('stuNumber');  //读取本地缓存，得到学生学号
      var stuinfo = require('../../../Data/stuinfo.js');
      var testinfo = require('../../../Data/testArrage.js'); //模拟请求发回的文件
      for (var i = 0; i < stuinfo.length; i++) {  //循环遍历模拟学生信息数据库
        if (stuNumber == stuinfo[i].stuNumber) {
          stuName = stuinfo[i].stuName;  //获取学生姓名
          break;
        }
      }
          this.setData({
            multiArray: testinfo,  //设置学生考试安排信息
            stuName: stuName,
          });
  

  
      wx.setNavigationBarTitle({
        title: '考试安排查询',
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})