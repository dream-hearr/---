/*
Name:emptyClassroom.js
Function:空闲教室查询功能
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
    date: '',
    place: '',
    period: '',

    multiArray: [
      ['' , ''],
      ['' , ''],
      ['' , ''],
      ['', '']
    ],
    PrefaceContentShow: false,
    ScopeContentShow: false,
    RefStandardContentShow: false,
    DefinitionContentShow: false,
    GeneralPrincipleContentShow: false,
    CuttingPieceContentShow: false,
    PlaceArray: ['第三教学楼', '逸夫楼', '新综'],
    objectPlaceArray: [
      {
        id: 0,
        name: '第三教学楼'
      },
      {
        id: 1,
        name: '逸夫楼'
      },
      {
        id: 2,
        name: '新综'
      }
    ],
    index: 0,

    TimeArray: ['8:00-10:00', '10:00-12:00', '13:30-15:30', '15:30-17:30', '18:30-20:30', '20:30-关门'],
    objectTimeArray: [
      {
        id: 0,
        name: '8:00-10:00'
      },
      {
        id: 1,
        name: '10:00-12:00'
      },
      {
        id: 2,
        name: '13:30-15:30'
      },
      {
        id: 3,
        name: '15:30-17:30'
      },
      {
        id: 4,
        name: '18:30-20:30'
      },
      {
        id: 5,
        name: '20:30-关门'
      }
    ],
    Timeindex: 0,
    address: '',
    visibile: 'hidden',
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
  bindPlaceChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    });
  },
  bindTimeChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Timeindex: e.detail.value
    });
  },
  emptyClassroomQuery: function (e) {
    var place = this.data.PlaceArray[this.data.index];
    var time = this.data.TimeArray[this.data.Timeindex];
    this.setData({
      place: place,
      period :time,
      visibile: 'visible',
    }
    );
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     /*
    #微信小程序使用wx.request发起网络请求，根据用户输入的教学楼名称和时间段发起请求，根据请求返回空闲教室信息。
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
    本程序模拟发起请求，Data/emptyRoom.js为请求返回的空闲教室信息。
    */
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var datetime = year + '/' + month + '/' + day;  //获取当日日期
    var emptyroom = require('../../../Data/emptyRoom.js'); //返回空闲教室信息
    this.setData({
      multiArray: emptyroom,
      date: datetime,
    });
    wx.setNavigationBarTitle({
      title: '空闲教室查询（仅限今日）',
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
    this.setData({  //data数据初始化
    place: '',
    period: '',
    date: '',
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