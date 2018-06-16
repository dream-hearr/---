/*
Name:cardQuery.js
Function:校园卡查询功能
Author:
Date:
*/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuNumber: '',
    lastMoney: '',
    visibile: 'hidden',
  },

  
  cardQuery: function (e) {
     /*
    #微信小程序使用wx.request发起网络请求，根据用户输入的学号和密码发起请求，根据请求返回一卡通余额。
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
    本程序模拟发起请求，Data/card.js为模拟的数据库文件。
    */
    var cardinfo = require('../../../Data/card.js');  //模拟的数据库文件
    var flag =  0;
    var stuNumber = e.detail.value.stuNumber;  //获取输入的学号
    var passwd = e.detail.value.cardPasswd;   //获取输入的密码
    //console.log(stuNumber + passwd);
    if (stuNumber.length == 0 || passwd.length == 0) { //判断输入是否有空
      wx.showToast({
        title: '输入不能为空',
        image: '../../../images/login/tip.png',
        duration: 1500,
      });
    }
    else {
      for (var i = 0; i < cardinfo.length; i++) { //循环遍历数据库文件
        if (stuNumber == cardinfo[i].stuNumber && passwd == cardinfo[i].cardPasswd) {
          flag = 1;
          var lastMoney = cardinfo[i].lastMoney  + '元';
          this.setData({
            stuNumber: stuNumber,
            lastMoney: lastMoney,
            visibile: 'visible',     //输出信息变为可视
          }
          );
        }
      }
      if (flag != 1) {  //查询失败
        wx.showToast({
          title: '学号或密码错误',
          image: '../../../images/login/wrong.png',
          duration: 1500,
        });
      }
    }
    


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '校园卡查询',
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
    this.setData({
      stuNumber: '',
      lastMoney: '',
      visibile: 'hidden',
    }
    );
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