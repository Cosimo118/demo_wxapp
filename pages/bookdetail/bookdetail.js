const app = getApp()

Page({
  data: {
    targetbook: {}
  },

  onLoad: function(){
    var bookid = 1000;
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Booklist', 
      method: "GET",
      header: {
      'content-type': 'application/json' // 默认值
      },
      success(res){
        for (let item of res.data){
          if(bookid==item.id){
            that.setData({
              targetbook: item
            })
          }
        }
        console.log(that.data.targetbook)
      }
    })
  },

  //这里也有点问题，总会回到初始页面
  onUnload: function(){
    wx.navigateBack({
      delta: 1
    })
  },


})