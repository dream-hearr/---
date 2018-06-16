/*
Name:login.js
Function:检测用户登录
Author:
Date:
*/
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputPassword: false,
    isLoading: false,
    login: '登录',
    copyright: 'Copyright 中国石油大学（北京）科创团队',
    Rights: 'All Rights Reserved',
    contanct: '联系方式：2567933223@qq.com',
  },

  checkuser: function(e){
    var username = e.detail.value.username; //获取输入的学号
    var passwd = e.detail.value.passwd;  //获取输入的密码
    /*
    #微信小程序使用wx.request发起网络请求，根据用户输入的学号和密码发起请求，根据请求返回信息判断是否登陆成功。
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
    本程序模拟发起请求，Data/userinfo.js为模拟的数据库文件。
    */
    var userinfo = require('../../Data/userinfo.js');  //获取模拟数据库信息
    var flag = 0; 
    if (username.length == 0 || passwd.length == 0){  //输入信息不全，提醒用户输入
      wx.showToast({
        title: '输入不能为空',
        image: '../../images/login/tip.png',
        duration: 1500,
      });
    }
    else {
      for (var i=0;i<userinfo.length;i++){ //循环遍历模拟数据库
        if (username == userinfo[i].stuNumber && passwd == userinfo[i].stuPasswd){
          flag = 1;
          wx.setStorageSync('stuNumber', username);  //设置本地缓存，stuNumber
          this.successJump();
        }
      }
        if (flag != 1){  //未找到用户
        wx.showToast({
          title: '学号或密码错误',
          image: '../../images/login/wrong.png',
          duration: 1500,
        });
      }
    }
    /*wx.request({
      url: 'the api url',
    });
    */

  },
  successJump: function (e) {
    wx.showToast({
      title: '登录成功',
      image: '../../images/login/right.png',    
      duration: 1500,
    });
    wx.navigateTo({
      url: '../index/index',
    });

  },
  pwdFocus() {
    this.setData({
      inputPassword: true
    })
  },
  pwdBlur() {
    this.setData({
      inputPassword: false
    })
  },
  bindIdentity() {
    this.setData({
      isLoading: true
    })

    setTimeout(() => {
      this.setData({
        isLoading: false
      })
    }, 1000)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '登录界面',
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