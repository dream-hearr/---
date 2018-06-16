/*
Name:index.js
Function:首页
Author:
Date:
*/
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    classQuery: '课表查询',
    gradeQuery: '成绩查询',
    testArrage: '考试安排',
    emptyClassroomQuery: '空闲教室',
    studentQuery: '学生信息',
    cardQuery: '校卡查询',
    electricityFeeQuery: '电费查询',
    schoolNotice: '学校通知',
    newsValue: '',
  },
    date: '',

  //跳转到课表查询界面
  jumptoClassQuery: function(e){
    this.loadingShow();
    wx.navigateTo({
      url: '../queryList/classQuery/classQuery',
    });
  },

  //跳转到成绩查询界面
  jumptoGradeQuery: function(e){
    this.loadingShow();
    wx.navigateTo({
      url: '../queryList/gradeQuery/gradeQuery',
    });
  },

  //跳转到考试安排界面
  jumptoTestArrage: function(e){
    this.loadingShow();
    wx.navigateTo({
      url: '../queryList/testArrage/testArrage',
    });
  },

  //跳转到空闲教室查询界面
  jumptoEmptyClassroomQuery: function(e){
    this.loadingShow();
    wx.navigateTo({
      url: '../queryList/emptyClassroom/emptyClassroom',
    });
  },

  //跳转到学生信息查询界面
  jumptoStudentQuery:function(e){
    this.loadingShow();
    wx.navigateTo({
      url: '../queryList/studentQuery/studentQuery',
    });
  },

  //跳转到校园卡查询界面
  jumptoCardQuery: function(e){
    this.loadingShow();
    wx.navigateTo({
      url: '../queryList/cardQuery/cardQuery',
    });
  },

  //跳转到电费查询界面  
  jumptoElectricityFeeQuery: function(e){
    this.loadingShow();
    wx.navigateTo({
      url: '../queryList/electricityFeeQuery/electricityFeeQuery',
    });
  },

  //跳转到学校信息通知界面
  jumptoSchoolNotice: function(e){
    this.loadingShow();
    wx.navigateTo({
      url: '../queryList/schoolNotice/schoolNotice',
    });
  },

  //showLoading
  loadingShow: function(e){
    wx.showLoading({
      title: '正在前往目的地',
      icon: 'loading',
      duration: 1500,
      mask: true,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '用户主页',
    });
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var datetime = year + '/' + month + '/' +day;  //获取当日日期
    /*
    #微信小程序使用wx.request发起网络请求，返回最新信息内容。
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
    本程序模拟发起请求，Data/recentNews.js为请求发回的文件。
    */
    var recentNews = require('../../Data/recentNews.js');
    this.setData({
      date: datetime,
      newsValue: recentNews,
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