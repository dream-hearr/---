/*
Name:studentQuery.js
Function:学生信息查询功能
Author:
Date:
*/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuNumber: '',
    stuName: '',
    sex: '',
    major: '',
    visibile: 'hidden',
  },


  stuQuery: function (e) {
     /*
    #微信小程序使用wx.request发起网络请求，根据用户输入的学号和姓名发起请求，根据请求返回查询学生信息。
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
    本程序模拟发起请求，Data/stuinfo.js为模拟的数据库文件。
    */
    var stuinfo = require('../../../Data/stuinfo.js');  //获取模拟数据库文件
    var flag = 0;
    var stuNumber = e.detail.value.stuNumber;  //获取输入的学号
    var stuName = e.detail.value.stuName;  //获取输入的姓名
    //console.log(stuNumber + stuName);
    if (stuNumber.length == 0 || stuName.length == 0) { //判断输入是否为空
      wx.showToast({
        title: '输入不能为空',
        image: '../../../images/login/tip.png',
        duration: 1500,
      });
    }
    else {
      for (var i = 0; i < stuinfo.length; i++) {  //循环遍历模拟数据库
        if (stuNumber == stuinfo[i].stuNumber && stuName == stuinfo[i].stuName) {
          flag = 1;
          var sex = stuinfo[i].stuSex;  //获取查询学生性别
          var major = stuinfo[i].stuMajor;  //获取查询学生专业
          this.setData({
            stuNumber: stuNumber,
            stuName: stuName,
            sex: sex,
            major: major,
            visibile: 'visible',  //设置查询界面可视
          });
        }
      }
      if (flag != 1) {
        wx.showToast({
          title: '学号或姓名错误',
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
      title: '学生信息查询',
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
      stuName: '',
      sex: '',
      major: '',
      visibile: 'hidden',
    });
    wx.setNavigationBarTitle({
      title: '学生信息查询',
    });
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