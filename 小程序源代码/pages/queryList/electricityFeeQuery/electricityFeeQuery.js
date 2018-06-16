/*
Name:electricityFeeQuery.js
Function:宿舍电量查询功能
Author:
Date:
*/
Page({

  /**
   * 页面的初始数据
   */
  data: {
  ApartmentArray: ['润杰公寓', '阳光公寓', '校内公寓', '能源公寓'],
  objectApartmentArray: [
      {
        id: 0,
        name: '润杰公寓'
      },
      {
        id: 1,
        name: '阳关公寓'
      },
      {
        id: 2,
        name: '校内公寓'
      },
      {
        id: 3,
        name: '能源公寓'
      }
    ],
    index: 0,

  FloorArray: ['1号楼', '2号楼', '3号楼', '4号楼', '5号楼', '6号楼'],
  objectFloorArray: [
    {
      id: 0,
      name: '1号楼'
    },
    {
      id: 1,
      name: '2号楼'
    },
    {
      id: 2,
      name: '3号楼'
    },
    {
      id: 3,
      name: '4号楼'
    },
    {
      id: 4,
      name: '5号楼'
    },
    {
      id: 5,
      name: '6号楼'
    }
  ],
  Floorindex: 0,
  address: '',
  lastElectricity: '',
  visibile: 'hidden',
  },

  bindApartmentChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    });
  },
  bindFloorChange: function(e){
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
    Floorindex: e.detail.value
    });
  },
  electricityFeeQuery: function(e){
    /*
    #微信小程序使用wx.request发起网络请求，根据用户输入的公寓、宿舍楼和宿舍号发起请求，根据请求返回宿舍剩余电量。
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
    本程序模拟发起请求，Data/electricityFee.js为模拟的数据库文件。
    */
    var electricinfo = require('../../../Data/electricityFee.js');  //模拟的数据库文件
    var flag = 0;
    var apartment = this.data.ApartmentArray[this.data.index];  //获取公寓名称
    var floor = this.data.FloorArray[this.data.Floorindex];  //获取宿舍楼号
    var roomNumber = e.detail.value.roomNumber;  //获取宿舍号
    if (roomNumber.length == 0) {  //判断是否输入宿舍号
      wx.showToast({
        title: '请输入宿舍号',
        image: '../../../images/login/tip.png',
        duration: 1500,
      });
    }
    else {
      for (var i = 0; i < electricinfo.length; i++) {  //循环遍历模拟数据库
        if (apartment == electricinfo[i].apartment && floor == electricinfo[i].floor
          && roomNumber == electricinfo[i].room) {
          flag = 1;
          var address = apartment + floor + roomNumber;
          var lastEle = electricinfo[i].lastElectricity + '度';  //查询得到宿舍电量
          this.setData({
            address: address,
            lastElectricity: lastEle,
            visibile: 'visible',  //设置查询结果界面可视
          }
          );
        }
      }
      if (flag != 1) {  //查询失败
        wx.showToast({
          title: '没有该宿舍信息',
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
      title: '宿舍电费查询',
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
      address: '',
      lastElectricity: '',
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